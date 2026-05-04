import { ActionError, defineAction } from 'astro:actions';
import { DispersiaClient } from 'dispersia';

const client = new DispersiaClient(import.meta.env.DISPERSIA_API_KEY);

export const server = {
  send: defineAction({
    accept: 'json',
    handler: async () => {
      const { data, error } = await client.messages.send({
        templateId: 'tg_XXXXXXXXX',
        data: {
          name: 'Jane Doe',
        },
      });

      if (error) throw new ActionError(error);

      return data;
    },
  }),
};
