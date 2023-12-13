import { handlerPath } from 'Libs/handler-resolver';

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: 'post',
        path: 'text-into-types'
      },
    },
  ],
};
