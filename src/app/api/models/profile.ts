/* tslint:disable */
import { ProfileExportFileType } from './profile-export-file-type';
import { ProfileAttribute } from './profile-attribute';
import { ProfilePartField } from './profile-part-field';
import { PriceList } from './price-list';
import { ProfileExportFormat } from './profile-export-format';
export interface Profile {
  profileID?: number;
  profileNameValue?: string;
  priceListKey: number;
  fileTypeKey: number;
  profileExportFileType?: ProfileExportFileType;
  exportFormatKey: number;
  profileAttributes?: Array<ProfileAttribute>;
  profilePartFields: Array<ProfilePartField>;
  priceList?: PriceList;
  profileExportFormat?: ProfileExportFormat;
}
