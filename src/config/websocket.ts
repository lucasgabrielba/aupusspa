// eslint-disable-next-line
//@ts-nocheck

import Echo from 'laravel-echo';
import Pusher from 'pusher-js';

import { api } from './api';

import { env } from './env';

Pusher.logToConsole = false;

export const EchoClient = new Echo({
  broadcaster: 'pusher',
  key: env.VITE_PUSHER_APP_KEY,
  cluster: env.VITE_PUSHER_APP_CLUSTER,
  wsHost: env.VITE_PUSHER_HOST,
  wsPort: env.VITE_PUSHER_PORT,
  wssPort: env.VITE_PUSHER_PORT,
  forceTLS: true,
  disableStats: true,
  enabledTransports: ['ws', 'wss'],
  authEndpoint: '/broadcasting/auth',

  authorizer: (channel, options) => {
    options;
    return {
      authorize: (socketId, callback) => {
        api
          .post('broadcasting/auth', {
            socket_id: socketId,
            channel_name: channel.name,
          })
          .then((response) => {
            callback(false, response.data);
          })
          .catch((error) => {
            callback(true, error);
          });
      },
    };
  },
});
