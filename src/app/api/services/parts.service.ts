/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ODataValueIEnumerablePart } from '../models/odata-value-ienumerable-part';
import { ODataValuePart } from '../models/odata-value-part';
import { ODataValueIEnumerablePartAttributeValue } from '../models/odata-value-ienumerable-part-attribute-value';
import { ODataValueIEnumerableSelectedAttributeCount } from '../models/odata-value-ienumerable-selected-attribute-count';
import { ODataValueIEnumerableSearchFilterOperator } from '../models/odata-value-ienumerable-search-filter-operator';
import { ODataValueIEnumerablePartField } from '../models/odata-value-ienumerable-part-field';
import { AssociatePartsParameters } from '../models/associate-parts-parameters';
@Injectable({
  providedIn: 'root',
})
class PartsService extends __BaseService {
  static readonly GetPath = '/v1.4/Parts';
  static readonly Get_1Path = '/v1.4/Parts({key})';
  static readonly GetPartAttributeValuesPath = '/v1.4/Parts({key})/PartAttributeValues';
  static readonly GetSelectedAttributesCountPath = '/v1.4/Parts({key})/GetSelectedAttributesCount';
  static readonly GetSearchFilterOperatorsPath = '/v1.4/Parts/GetSearchFilterOperators(filter={filter})';
  static readonly GetFieldsPath = '/v1.4/Parts/GetFields';
  static readonly AssociatePartsPath = '/v1.4/Parts/AssociateParts';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param params The `PartsService.GetParams` containing the following parameters:
   *
   * - `$top`:
   *
   * - `$skip`:
   *
   * - `$filter`:
   *
   * - `$expand`:
   *
   * @return The parts were successfully retrieved.
   */
  GetResponse(params: PartsService.GetParams): __Observable<__StrictHttpResponse<ODataValueIEnumerablePart>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Top != null) __params = __params.set('$top', params.Top.toString());
    if (params.Skip != null) __params = __params.set('$skip', params.Skip.toString());
    if (params.Filter != null) __params = __params.set('$filter', params.Filter.toString());
    if (params.Expand != null) __params = __params.set('$expand', params.Expand.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v1.4/Parts`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ODataValueIEnumerablePart>;
      })
    );
  }
  /**
   * @param params The `PartsService.GetParams` containing the following parameters:
   *
   * - `$top`:
   *
   * - `$skip`:
   *
   * - `$filter`:
   *
   * - `$expand`:
   *
   * @return The parts were successfully retrieved.
   */
  Get(params: PartsService.GetParams): __Observable<ODataValueIEnumerablePart> {
    return this.GetResponse(params).pipe(
      __map(_r => _r.body as ODataValueIEnumerablePart)
    );
  }

  /**
   * @param params The `PartsService.Get_1Params` containing the following parameters:
   *
   * - `key`: The requested part identifier.
   *
   * - `$expand`:
   *
   * @return The part was successfully retrieved.
   */
  Get_1Response(params: PartsService.Get_1Params): __Observable<__StrictHttpResponse<ODataValuePart>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.key != null) __params = __params.set('key', params.key.toString());
    if (params.Expand != null) __params = __params.set('$expand', params.Expand.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v1.4/Parts(${params.key})`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ODataValuePart>;
      })
    );
  }
  /**
   * @param params The `PartsService.Get_1Params` containing the following parameters:
   *
   * - `key`: The requested part identifier.
   *
   * - `$expand`:
   *
   * @return The part was successfully retrieved.
   */
  Get_1(params: PartsService.Get_1Params): __Observable<ODataValuePart> {
    return this.Get_1Response(params).pipe(
      __map(_r => _r.body as ODataValuePart)
    );
  }

  /**
   * @param params The `PartsService.GetPartAttributeValuesParams` containing the following parameters:
   *
   * - `key`: The requested part identifier.
   *
   * - `$top`:
   *
   * - `$skip`:
   *
   * - `$filter`:
   *
   * - `$expand`:
   *
   * @return The part attribute values were successfully retrieved.
   */
  GetPartAttributeValuesResponse(params: PartsService.GetPartAttributeValuesParams): __Observable<__StrictHttpResponse<ODataValueIEnumerablePartAttributeValue>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.key != null) __params = __params.set('key', params.key.toString());
    if (params.Top != null) __params = __params.set('$top', params.Top.toString());
    if (params.Skip != null) __params = __params.set('$skip', params.Skip.toString());
    if (params.Filter != null) __params = __params.set('$filter', params.Filter.toString());
    if (params.Expand != null) __params = __params.set('$expand', params.Expand.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v1.4/Parts(${params.key})/PartAttributeValues`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ODataValueIEnumerablePartAttributeValue>;
      })
    );
  }
  /**
   * @param params The `PartsService.GetPartAttributeValuesParams` containing the following parameters:
   *
   * - `key`: The requested part identifier.
   *
   * - `$top`:
   *
   * - `$skip`:
   *
   * - `$filter`:
   *
   * - `$expand`:
   *
   * @return The part attribute values were successfully retrieved.
   */
  GetPartAttributeValues(params: PartsService.GetPartAttributeValuesParams): __Observable<ODataValueIEnumerablePartAttributeValue> {
    return this.GetPartAttributeValuesResponse(params).pipe(
      __map(_r => _r.body as ODataValueIEnumerablePartAttributeValue)
    );
  }

  /**
   * @param params The `PartsService.GetSelectedAttributesCountParams` containing the following parameters:
   *
   * - `key`: The requested part identifier.
   *
   * - `$top`:
   *
   * - `$skip`:
   *
   * - `$select`:
   *
   * - `$orderby`:
   *
   * - `$filter`:
   *
   * - `$expand`:
   *
   * - `$count`:
   *
   * @return The parts were successfully retrieved.
   */
  GetSelectedAttributesCountResponse(params: PartsService.GetSelectedAttributesCountParams): __Observable<__StrictHttpResponse<ODataValueIEnumerableSelectedAttributeCount>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.key != null) __params = __params.set('key', params.key.toString());
    if (params.Top != null) __params = __params.set('$top', params.Top.toString());
    if (params.Skip != null) __params = __params.set('$skip', params.Skip.toString());
    if (params.Select != null) __params = __params.set('$select', params.Select.toString());
    if (params.Orderby != null) __params = __params.set('$orderby', params.Orderby.toString());
    if (params.Filter != null) __params = __params.set('$filter', params.Filter.toString());
    if (params.Expand != null) __params = __params.set('$expand', params.Expand.toString());
    if (params.Count != null) __params = __params.set('$count', params.Count.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v1.4/Parts(${params.key})/GetSelectedAttributesCount`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ODataValueIEnumerableSelectedAttributeCount>;
      })
    );
  }
  /**
   * @param params The `PartsService.GetSelectedAttributesCountParams` containing the following parameters:
   *
   * - `key`: The requested part identifier.
   *
   * - `$top`:
   *
   * - `$skip`:
   *
   * - `$select`:
   *
   * - `$orderby`:
   *
   * - `$filter`:
   *
   * - `$expand`:
   *
   * - `$count`:
   *
   * @return The parts were successfully retrieved.
   */
  GetSelectedAttributesCount(params: PartsService.GetSelectedAttributesCountParams): __Observable<ODataValueIEnumerableSelectedAttributeCount> {
    return this.GetSelectedAttributesCountResponse(params).pipe(
      __map(_r => _r.body as ODataValueIEnumerableSelectedAttributeCount)
    );
  }

  /**
   * @param params The `PartsService.GetSearchFilterOperatorsParams` containing the following parameters:
   *
   * - `filter`: The search operator type filter.
   *
   * - `$select`:
   *
   * - `$orderby`:
   *
   * - `$filter`:
   *
   * - `$expand`:
   *
   * - `$count`:
   *
   * @return The search filter operators were successfully retrieved.
   */
  GetSearchFilterOperatorsResponse(params: PartsService.GetSearchFilterOperatorsParams): __Observable<__StrictHttpResponse<ODataValueIEnumerableSearchFilterOperator>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.filter != null) __params = __params.set('filter', params.filter.toString());
    if (params.Select != null) __params = __params.set('$select', params.Select.toString());
    if (params.Orderby != null) __params = __params.set('$orderby', params.Orderby.toString());
    if (params.Filter != null) __params = __params.set('$filter', params.Filter.toString());
    if (params.Expand != null) __params = __params.set('$expand', params.Expand.toString());
    if (params.Count != null) __params = __params.set('$count', params.Count.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v1.4/Parts/GetSearchFilterOperators(filter=${params.filter})`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ODataValueIEnumerableSearchFilterOperator>;
      })
    );
  }
  /**
   * @param params The `PartsService.GetSearchFilterOperatorsParams` containing the following parameters:
   *
   * - `filter`: The search operator type filter.
   *
   * - `$select`:
   *
   * - `$orderby`:
   *
   * - `$filter`:
   *
   * - `$expand`:
   *
   * - `$count`:
   *
   * @return The search filter operators were successfully retrieved.
   */
  GetSearchFilterOperators(params: PartsService.GetSearchFilterOperatorsParams): __Observable<ODataValueIEnumerableSearchFilterOperator> {
    return this.GetSearchFilterOperatorsResponse(params).pipe(
      __map(_r => _r.body as ODataValueIEnumerableSearchFilterOperator)
    );
  }

  /**
   * @param params The `PartsService.GetFieldsParams` containing the following parameters:
   *
   * - `$select`:
   *
   * - `$orderby`:
   *
   * - `$filter`:
   *
   * - `$expand`:
   *
   * - `$count`:
   *
   * @return The part fields were successfully retrieved.
   */
  GetFieldsResponse(params: PartsService.GetFieldsParams): __Observable<__StrictHttpResponse<ODataValueIEnumerablePartField>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Select != null) __params = __params.set('$select', params.Select.toString());
    if (params.Orderby != null) __params = __params.set('$orderby', params.Orderby.toString());
    if (params.Filter != null) __params = __params.set('$filter', params.Filter.toString());
    if (params.Expand != null) __params = __params.set('$expand', params.Expand.toString());
    if (params.Count != null) __params = __params.set('$count', params.Count.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v1.4/Parts/GetFields`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ODataValueIEnumerablePartField>;
      })
    );
  }
  /**
   * @param params The `PartsService.GetFieldsParams` containing the following parameters:
   *
   * - `$select`:
   *
   * - `$orderby`:
   *
   * - `$filter`:
   *
   * - `$expand`:
   *
   * - `$count`:
   *
   * @return The part fields were successfully retrieved.
   */
  GetFields(params: PartsService.GetFieldsParams): __Observable<ODataValueIEnumerablePartField> {
    return this.GetFieldsResponse(params).pipe(
      __map(_r => _r.body as ODataValueIEnumerablePartField)
    );
  }

  /**
   * @param params The `PartsService.AssociatePartsParams` containing the following parameters:
   *
   * - `parameters`: ODataActionParameters
   *
   * - `$select`:
   *
   * - `$expand`:
   */
  AssociatePartsResponse(params: PartsService.AssociatePartsParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.parameters;
    if (params.Select != null) __params = __params.set('$select', params.Select.toString());
    if (params.Expand != null) __params = __params.set('$expand', params.Expand.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v1.4/Parts/AssociateParts`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `PartsService.AssociatePartsParams` containing the following parameters:
   *
   * - `parameters`: ODataActionParameters
   *
   * - `$select`:
   *
   * - `$expand`:
   */
  AssociateParts(params: PartsService.AssociatePartsParams): __Observable<null> {
    return this.AssociatePartsResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module PartsService {

  /**
   * Parameters for Get
   */
  export interface GetParams {
    Top?: number;
    Skip?: number;
    Filter?: string;
    Expand?: string;
  }

  /**
   * Parameters for Get_1
   */
  export interface Get_1Params {

    /**
     * The requested part identifier.
     */
    key?: number;
    Expand?: string;
  }

  /**
   * Parameters for GetPartAttributeValues
   */
  export interface GetPartAttributeValuesParams {

    /**
     * The requested part identifier.
     */
    key?: number;
    Top?: number;
    Skip?: number;
    Filter?: string;
    Expand?: string;
  }

  /**
   * Parameters for GetSelectedAttributesCount
   */
  export interface GetSelectedAttributesCountParams {

    /**
     * The requested part identifier.
     */
    key?: number;
    Top?: number;
    Skip?: number;
    Select?: string;
    Orderby?: string;
    Filter?: string;
    Expand?: string;
    Count?: boolean;
  }

  /**
   * Parameters for GetSearchFilterOperators
   */
  export interface GetSearchFilterOperatorsParams {

    /**
     * The search operator type filter.
     */
    filter?: string;
    Select?: string;
    Orderby?: string;
    Filter?: string;
    Expand?: string;
    Count?: boolean;
  }

  /**
   * Parameters for GetFields
   */
  export interface GetFieldsParams {
    Select?: string;
    Orderby?: string;
    Filter?: string;
    Expand?: string;
    Count?: boolean;
  }

  /**
   * Parameters for AssociateParts
   */
  export interface AssociatePartsParams {

    /**
     * ODataActionParameters
     */
    parameters?: AssociatePartsParameters;
    Select?: string;
    Expand?: string;
  }
}

export { PartsService }
