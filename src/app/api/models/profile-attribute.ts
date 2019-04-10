/* tslint:disable */
import { Attribute } from './attribute';
import { Profile } from './profile';
export interface ProfileAttribute {
  profileAttributeID?: number;
  profileID?: number;
  attributeID: number;
  attribute?: Attribute;
  profile?: Profile;
}
