import { Elysia } from 'elysia';
import { db } from '../db/mock';
import { BaseLayout } from '../layout/Base';

export const homeHandler = (app: Elysia) => {
  return app.get(
    '/',
    () => (
      <BaseLayout>
        <h1>Home</h1>
      </BaseLayout>
    ),
    {
      detail: {
        tags: ['pages'],
      },
    },
  );
};
