import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { LUCIDE_ICONS, LucideIconProvider } from 'lucide-angular';
import { AppIcons } from './shared/icons';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    { provide: LUCIDE_ICONS, multi: true, useValue: new LucideIconProvider(AppIcons) }
  ]
};
