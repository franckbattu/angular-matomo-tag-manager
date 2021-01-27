import { NgModule, ModuleWithProviders } from '@angular/core';
import { MatomoTagManagerConfig } from './matomo-tag-manager.config';
import { MatomoTagManagerService } from './matomo-tag-manager.service';
import { MatomoInjectorService } from './matomo-injector.service';

@NgModule()
export class MatomoTagManagerModule {

  constructor(private matomoInjector: MatomoInjectorService) { }

  public static forRoot(config: MatomoTagManagerConfig): ModuleWithProviders<MatomoTagManagerModule> {
    return {
      ngModule: MatomoTagManagerModule,
      providers: [
        { provide: 'matomoTagManagerConfig', useValue: config },
        MatomoTagManagerService
      ]
    };
  }

}
