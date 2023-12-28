import { Elysia } from 'elysia';
import { db } from '../db/mock';

export const homeHandler = (app: Elysia) => {
  return app.get('/', () => JSON.stringify(db.urls), {
    detail: {
      tags: ['pages'],
    },
  });
};
