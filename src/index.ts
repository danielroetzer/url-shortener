import { swagger } from '@elysiajs/swagger';
import { Elysia, t } from 'elysia';
import { nanoid } from 'nanoid';

// Database mock
const shortenedUrls = [
  {
    origin: 'github.com/danielroetzer',
    short: 'abcd',
  },
];

const getShortUUID = () => nanoid(12);

const app = new Elysia()
  .use(swagger())
  .get('/', () => JSON.stringify(shortenedUrls))
  .get(
    '/:shortUrl',
    ({ params, set }) => {
      const redirectTo = shortenedUrls.find(
        (url) => url.short === params.shortUrl,
      )?.origin;

      if (!redirectTo) {
        set.status = 404;

        return 'URL not found';
      }

      return Response.redirect(`http://www.${redirectTo}`, 301);
    },
    {
      params: t.Object({
        shortUrl: t.String(),
      }),
    },
  )
  .get('/url/:shortUrl', ({ params }) =>
    shortenedUrls.find((url) => url.short === params.shortUrl),
  )
  .post(
    '/create',
    ({ body }) =>
      shortenedUrls.push({ origin: body.url, short: getShortUUID() }),
    {
      body: t.Object({
        url: t.String(),
      }),
    },
  )
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
