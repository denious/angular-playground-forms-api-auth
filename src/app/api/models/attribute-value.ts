/* tslint:disable */
import { VwProfileAttributeValue } from './vw-profile-attribute-value';
import { Attribute } from './attribute';
import { PartAttributeValue } from './part-attribute-value';
export interface AttributeValue {
  stringValue?: string;
  attributeValueID?: number;
  fileValue?: string;
  source?: string;
  extension?: string;
  numericValue?: number;
  discriminator?: 'AttributeValueString' | 'AttributeValueNumeric' | 'AttributeValueImage';
  stringDetail?: string;
  attributeID: number;
  vwProfileAttributeValues?: Array<VwProfileAttributeValue>;
  attribute?: Attribute;
  partAttributeValues?: Array<PartAttributeValue>;
}
