import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import LocaleEsCol from '@angular/common/locales/es-CO'
import { routes } from './app.routes';
import { registerLocaleData } from '@angular/common';

//Se registra y añade la nueva config regional
registerLocaleData(LocaleEsCol)

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
};
