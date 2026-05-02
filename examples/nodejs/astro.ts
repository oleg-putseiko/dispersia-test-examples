import { ActionError, defineAction } from 'astro:actions';
import { DispersiaClient } from 'dispersia';

const client = new DispersiaClient(import.meta.env.DISPERSIA_API_KEY);

export const server = {
  send: defineAction({
    accept: 'json',
    handler: async () => {
      const { data, error } = await client.messages.send({
        key: 'tg_XXXXXXXXX',
        data: {
          product: 'T-Shirt',
          variant: 'Size XL',
          user: {
            name: 'Jane Doe',
          },
        },
        labels: ['commerce', 'cloth', 'purchase'],
      });

      if (error) {
        throw new ActionError({
          code: 'BAD_REQUEST',
          message: error.message,
        });
      }

      return data;
    },
  }),
};
