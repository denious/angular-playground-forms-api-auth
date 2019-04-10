/* tslint:disable */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationInterface } from './api-configuration';

import { AttributesService } from './services/attributes.service';
import { AttributeValuesService } from './services/attribute-values.service';
import { PartAttributeValuesService } from './services/part-attribute-values.service';
import { PartsService } from './services/parts.service';
import { ProfilesService } from './services/profiles.service';
import { UnitsOfMeasureService } from './services/units-of-measure.service';

/**
 * Provider for all Api services, plus ApiConfiguration
 */
@NgModule({
  imports: [
    HttpClientModule
  ],
  exports: [
    HttpClientModule
  ],
  declarations: [],
  providers: [
    ApiConfiguration,
    AttributesService,
    AttributeValuesService,
    PartAttributeValuesService,
    PartsService,
    ProfilesService,
    UnitsOfMeasureService
  ],
})
export class ApiModule {
  static forRoot(customParams: ApiConfigurationInterface): ModuleWithProviders {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: {rootUrl: customParams.rootUrl}
        }
      ]
    }
  }
}
