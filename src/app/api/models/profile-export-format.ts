/* tslint:disable */
import { Profile } from './profile';
import { VwProfileExport } from './vw-profile-export';
export interface ProfileExportFormat {
  key?: number;
  value?: string;
  profiles?: Array<Profile>;
  vwProfileExports?: Array<VwProfileExport>;
}
