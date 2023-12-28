import { swagger } from '@elysiajs/swagger';
import { Elysia } from 'elysia';
import { apiRoutes } from './api';
import { pageRoutes } from './pages';

const app = new Elysia()
  .use(swagger())
  )
  .use(apiRoutes)
  .use(pageRoutes)
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
