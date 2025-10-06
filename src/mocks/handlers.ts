import { http, HttpResponse } from 'msw';

type ConfigurationOptions = {
  error: boolean;
  response?: any; // JSON
};

/* 
  HttpResponse.error() is generic error response, if yo need something customizable,
  put it in the HttpResponse.json body 

  https://mswjs.io/docs/api/http-response/

  since no backend is currently set up, using fake api link to be intercepted.
*/

export const handlers = [];
