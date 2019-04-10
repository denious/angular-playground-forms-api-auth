/* tslint:disable */
import { AttributeType } from './attribute-type';
import { UnitOfMeasure } from './unit-of-measure';
import { PartAttributeValue } from './part-attribute-value';
import { AttributeValue } from './attribute-value';
export interface Attribute {
  attributeID?: number;
  name: string;
  isAX: boolean;
  typeKey: number;
  attributeType?: AttributeType;
  multiselect?: boolean;
  uomKey?: number;
  unitOfMeasure?: UnitOfMeasure;
  partAttributeValues?: Array<PartAttributeValue>;
  attributeValues?: Array<AttributeValue>;
}
