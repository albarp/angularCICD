import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import environment from './environments/environment.json';

(async () => {

  // console.time()
  const response = await fetch('./environments/environment.json');
  const json = await response.json();
  Object.entries(json).forEach(([key, value]) => {
    environment[key] = value;
  });
  // console.timeEnd()

  platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));

  if (environment.production) {
    enableProdMode();
  }

})();
