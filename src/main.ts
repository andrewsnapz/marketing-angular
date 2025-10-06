import { isDevMode, enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

if (!isDevMode()) {
  enableProdMode();
}

if (isDevMode()) {
  import('./mocks/browser').then(({ worker }) => {
    worker.start().then(() => {
      bootstrapApplication(App, appConfig).catch((err) => console.error(err));
    });
  });
} else {
  bootstrapApplication(App, appConfig).catch((err) => console.error(err));
}
