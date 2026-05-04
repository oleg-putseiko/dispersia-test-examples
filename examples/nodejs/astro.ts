import { ActionError, defineAction } from 'astro:actions';
import { Dispersia } from 'dispersia';

const dispersia = new Dispersia(import.meta.env.DISPERSIA_API_KEY);

export const server = {
  send: defineAction({
    accept: 'json',
    handler: async () => {
      const { data, error } = await dispersia.messages.send({
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
