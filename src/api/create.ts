import { Elysia, t } from 'elysia';
import { nanoid } from 'nanoid';
import { db } from '../db/mock';

const createUniqueShortUrl = (): string => {
  const short = nanoid(12);

  if (db.urls.find((url) => url.shortUrl === short)) {
    return createUniqueShortUrl();
  }

  return short;
};

export const createHandler = (app: Elysia) => {
  return app.post(
    '/',
    ({ body }) => {
      const url = { originalUrl: body.url, shortUrl: createUniqueShortUrl() };
      db.urls.push(url);

      return { message: 'Created', success: true, url };
    },
    {
      body: t.Object({
        url: t.String(),
      }),
      detail: {
        tags: ['api'],
      },
    },
  );
};
