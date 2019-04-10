/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ODataValueIEnumerablePartAttributeValue } from '../models/odata-value-ienumerable-part-attribute-value';
import { ODataValuePartAttributeValue } from '../models/odata-value-part-attribute-value';
@Injectable({
  providedIn: 'root',
})
class PartAttributeValuesService extends __BaseService {
  static readonly GetPath = '/v1.4/PartAttributeValues';
  static readonly Get_1Path = '/v1.4/PartAttributeValues({key})';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param params The `PartAttributeValuesService.GetParams` containing the following parameters:
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
  GetResponse(params: PartAttributeValuesService.GetParams): __Observable<__StrictHttpResponse<ODataValueIEnumerablePartAttributeValue>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Top != null) __params = __params.set('$top', params.Top.toString());
    if (params.Skip != null) __params = __params.set('$skip', params.Skip.toString());
    if (params.Filter != null) __params = __params.set('$filter', params.Filter.toString());
    if (params.Expand != null) __params = __params.set('$expand', params.Expand.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v1.4/PartAttributeValues`,
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
   * @param params The `PartAttributeValuesService.GetParams` containing the following parameters:
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
  Get(params: PartAttributeValuesService.GetParams): __Observable<ODataValueIEnumerablePartAttributeValue> {
    return this.GetResponse(params).pipe(
      __map(_r => _r.body as ODataValueIEnumerablePartAttributeValue)
    );
  }

  /**
   * @param params The `PartAttributeValuesService.Get_1Params` containing the following parameters:
   *
   * - `key`: The requested part attribute value identifier.
   *
   * - `$expand`:
   *
   * @return The part attribute value was successfully retrieved.
   */
  Get_1Response(params: PartAttributeValuesService.Get_1Params): __Observable<__StrictHttpResponse<ODataValuePartAttributeValue>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.key != null) __params = __params.set('key', params.key.toString());
    if (params.Expand != null) __params = __params.set('$expand', params.Expand.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v1.4/PartAttributeValues(${params.key})`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ODataValuePartAttributeValue>;
      })
    );
  }
  /**
   * @param params The `PartAttributeValuesService.Get_1Params` containing the following parameters:
   *
   * - `key`: The requested part attribute value identifier.
   *
   * - `$expand`:
   *
   * @return The part attribute value was successfully retrieved.
   */
  Get_1(params: PartAttributeValuesService.Get_1Params): __Observable<ODataValuePartAttributeValue> {
    return this.Get_1Response(params).pipe(
      __map(_r => _r.body as ODataValuePartAttributeValue)
    );
  }
}

module PartAttributeValuesService {

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
     * The requested part attribute value identifier.
     */
    key?: number;
    Expand?: string;
  }
}

export { PartAttributeValuesService }
