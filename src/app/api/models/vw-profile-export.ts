/* tslint:disable */
import { PriceList } from './price-list';
export interface VwProfileExport {
  profileID?: number;
  name?: string;
  priceListKey: number;
  profileAttributeID?: number;
  attributeID?: number;
  priceList?: PriceList;
}
