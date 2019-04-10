/* tslint:disable */
import { Part } from './part';
import { AttributeValue } from './attribute-value';
import { Attribute } from './attribute';
export interface PartAttributeValue {
  partAttributeValueID?: number;
  partID?: number;
  part?: Part;
  attributeID?: number;
  attributeValueID?: number;
  attributeValue?: AttributeValue;
  attribute?: Attribute;
}
