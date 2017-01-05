import { platformBrowser } from '@angular/platform-browser';
import { enableProdMode } from '@angular/core';

//noinspection TypeScriptCheckImport
import { AppModuleNgFactory } from './app.module.ngfactory';
import { COMPILER_PROVIDERS } from '@angular/compiler'; // import this


enableProdMode();
platformBrowser([COMPILER_PROVIDERS ])
  .bootstrapModuleFactory(AppModuleNgFactory);
