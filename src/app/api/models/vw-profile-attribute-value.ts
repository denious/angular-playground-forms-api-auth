/* tslint:disable */
import { PriceList } from './price-list';
import { Part } from './part';
import { AttributeValue } from './attribute-value';
export interface VwProfileAttributeValue {
  exportFormat?: string;
  vwProfileAttributeValueID?: number;
  name?: string;
  priceListKey?: number;
  imageTypeKey?: number;
  imageType?: string;
  exportFormatKey?: number;
  profileID?: number;
  attributeID?: number;
  partID?: number;
  attributeValueID?: number;
  priceList?: PriceList;
  part?: Part;
  attributeValue?: AttributeValue;
}
