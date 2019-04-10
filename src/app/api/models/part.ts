/* tslint:disable */
import { PartAttributeValue } from './part-attribute-value';
export interface Part {
  subClass2Code?: string;
  partID?: number;
  name?: string;
  description?: string;
  technique?: string;
  techniqueCode?: string;
  class?: string;
  classID?: string;
  brand?: string;
  brandCode?: string;
  phase?: string;
  phaseName?: string;
  subClass1?: string;
  subClass1Code?: string;
  subClass2?: string;
  partNumber?: string;
  filmThickness?: number;
  particleSize?: string;
  productType?: string;
  uom?: string;
  diameter?: number;
  sorbentMass?: string;
  length?: number;
  priceLevel?: string;
  rating?: string;
  isStockItem?: boolean;
  inventXStock?: number;
  createdBy?: string;
  createdOn?: string;
  modifiedOn?: string;
  partAttributeValues?: Array<PartAttributeValue>;
}
