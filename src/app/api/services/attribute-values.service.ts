/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ODataValueIEnumerableAttributeValue } from '../models/odata-value-ienumerable-attribute-value';
import { ODataValueAttributeValue } from '../models/odata-value-attribute-value';
import { AttributeValue } from '../models/attribute-value';
import { ODataValueIEnumerableAttributeType } from '../models/odata-value-ienumerable-attribute-type';
@Injectable({
  providedIn: 'root',
})
class AttributeValuesService extends __BaseService {
  static readonly GetPath = '/v1.4/AttributeValues';
  static readonly PostPath = '/v1.4/AttributeValues';
  static readonly DeletePath = '/v1.4/AttributeValues';
  static readonly PatchPath = '/v1.4/AttributeValues';
  static readonly Get_1Path = '/v1.4/AttributeValues({key})';
  static readonly GetTypesPath = '/v1.4/AttributeValues/GetTypes';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param params The `AttributeValuesService.GetParams` containing the following parameters:
   *
   * - `$top`:
   *
   * - `$skip`:
   *
   * - `$filter`:
   *
   * - `$expand`:
   *
   * @return The attribute values were successfully retrieved.
   */
  GetResponse(params: AttributeValuesService.GetParams): __Observable<__StrictHttpResponse<ODataValueIEnumerableAttributeValue>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Top != null) __params = __params.set('$top', params.Top.toString());
    if (params.Skip != null) __params = __params.set('$skip', params.Skip.toString());
    if (params.Filter != null) __params = __params.set('$filter', params.Filter.toString());
    if (params.Expand != null) __params = __params.set('$expand', params.Expand.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v1.4/AttributeValues`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ODataValueIEnumerableAttributeValue>;
      })
    );
  }
  /**
   * @param params The `AttributeValuesService.GetParams` containing the following parameters:
   *
   * - `$top`:
   *
   * - `$skip`:
   *
   * - `$filter`:
   *
   * - `$expand`:
   *
   * @return The attribute values were successfully retrieved.
   */
  Get(params: AttributeValuesService.GetParams): __Observable<ODataValueIEnumerableAttributeValue> {
    return this.GetResponse(params).pipe(
      __map(_r => _r.body as ODataValueIEnumerableAttributeValue)
    );
  }

  /**
   * @param attributeValue The attribute to create.
   * @return The attribute value was successfully created.
   */
  PostResponse(attributeValue?: AttributeValue): __Observable<__StrictHttpResponse<ODataValueAttributeValue>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = attributeValue;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v1.4/AttributeValues`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ODataValueAttributeValue>;
      })
    );
  }
  /**
   * @param attributeValue The attribute to create.
   * @return The attribute value was successfully created.
   */
  Post(attributeValue?: AttributeValue): __Observable<ODataValueAttributeValue> {
    return this.PostResponse(attributeValue).pipe(
      __map(_r => _r.body as ODataValueAttributeValue)
    );
  }

  /**
   * @param params The `AttributeValuesService.DeleteParams` containing the following parameters:
   *
   * - `key`: The requested attribute value identifier.
   *
   * - `force`: Force a delete of an attribute value in use.
   */
  DeleteResponse(params: AttributeValuesService.DeleteParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.key != null) __params = __params.set('key', params.key.toString());
    if (params.force != null) __params = __params.set('force', params.force.toString());
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/v1.4/AttributeValues`,
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
   * @param params The `AttributeValuesService.DeleteParams` containing the following parameters:
   *
   * - `key`: The requested attribute value identifier.
   *
   * - `force`: Force a delete of an attribute value in use.
   */
  Delete(params: AttributeValuesService.DeleteParams): __Observable<null> {
    return this.DeleteResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `AttributeValuesService.PatchParams` containing the following parameters:
   *
   * - `key`: The requested attribute value identifier.
   *
   * - `attributeValue`: The attribute value to update.
   *
   * @return The attribute value was successfully updated.
   */
  PatchResponse(params: AttributeValuesService.PatchParams): __Observable<__StrictHttpResponse<ODataValueAttributeValue>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.key != null) __params = __params.set('key', params.key.toString());
    __body = params.attributeValue;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/v1.4/AttributeValues`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ODataValueAttributeValue>;
      })
    );
  }
  /**
   * @param params The `AttributeValuesService.PatchParams` containing the following parameters:
   *
   * - `key`: The requested attribute value identifier.
   *
   * - `attributeValue`: The attribute value to update.
   *
   * @return The attribute value was successfully updated.
   */
  Patch(params: AttributeValuesService.PatchParams): __Observable<ODataValueAttributeValue> {
    return this.PatchResponse(params).pipe(
      __map(_r => _r.body as ODataValueAttributeValue)
    );
  }

  /**
   * @param params The `AttributeValuesService.Get_1Params` containing the following parameters:
   *
   * - `key`: The requested attribute value identifier.
   *
   * - `$expand`:
   *
   * @return The attribute value was successfully retrieved.
   */
  Get_1Response(params: AttributeValuesService.Get_1Params): __Observable<__StrictHttpResponse<ODataValueAttributeValue>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.key != null) __params = __params.set('key', params.key.toString());
    if (params.Expand != null) __params = __params.set('$expand', params.Expand.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v1.4/AttributeValues(${params.key})`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ODataValueAttributeValue>;
      })
    );
  }
  /**
   * @param params The `AttributeValuesService.Get_1Params` containing the following parameters:
   *
   * - `key`: The requested attribute value identifier.
   *
   * - `$expand`:
   *
   * @return The attribute value was successfully retrieved.
   */
  Get_1(params: AttributeValuesService.Get_1Params): __Observable<ODataValueAttributeValue> {
    return this.Get_1Response(params).pipe(
      __map(_r => _r.body as ODataValueAttributeValue)
    );
  }

  /**
   * @param params The `AttributeValuesService.GetTypesParams` containing the following parameters:
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
   * @return The attribute value types were successfully retrieved.
   */
  GetTypesResponse(params: AttributeValuesService.GetTypesParams): __Observable<__StrictHttpResponse<ODataValueIEnumerableAttributeType>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Top != null) __params = __params.set('$top', params.Top.toString());
    if (params.Skip != null) __params = __params.set('$skip', params.Skip.toString());
    if (params.Select != null) __params = __params.set('$select', params.Select.toString());
    if (params.Orderby != null) __params = __params.set('$orderby', params.Orderby.toString());
    if (params.Filter != null) __params = __params.set('$filter', params.Filter.toString());
    if (params.Expand != null) __params = __params.set('$expand', params.Expand.toString());
    if (params.Count != null) __params = __params.set('$count', params.Count.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v1.4/AttributeValues/GetTypes`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ODataValueIEnumerableAttributeType>;
      })
    );
  }
  /**
   * @param params The `AttributeValuesService.GetTypesParams` containing the following parameters:
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
   * @return The attribute value types were successfully retrieved.
   */
  GetTypes(params: AttributeValuesService.GetTypesParams): __Observable<ODataValueIEnumerableAttributeType> {
    return this.GetTypesResponse(params).pipe(
      __map(_r => _r.body as ODataValueIEnumerableAttributeType)
    );
  }
}

module AttributeValuesService {

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
   * Parameters for Delete
   */
  export interface DeleteParams {

    /**
     * The requested attribute value identifier.
     */
    key?: number;

    /**
     * Force a delete of an attribute value in use.
     */
    force?: boolean;
  }

  /**
   * Parameters for Patch
   */
  export interface PatchParams {

    /**
     * The requested attribute value identifier.
     */
    key?: number;

    /**
     * The attribute value to update.
     */
    attributeValue?: AttributeValue;
  }

  /**
   * Parameters for Get_1
   */
  export interface Get_1Params {

    /**
     * The requested attribute value identifier.
     */
    key?: number;
    Expand?: string;
  }

  /**
   * Parameters for GetTypes
   */
  export interface GetTypesParams {
    Top?: number;
    Skip?: number;
    Select?: string;
    Orderby?: string;
    Filter?: string;
    Expand?: string;
    Count?: boolean;
  }
}

export { AttributeValuesService }
