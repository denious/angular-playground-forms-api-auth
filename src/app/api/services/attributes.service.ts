/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ODataValueIEnumerableAttribute } from '../models/odata-value-ienumerable-attribute';
import { ODataValueAttribute } from '../models/odata-value-attribute';
import { Attribute } from '../models/attribute';
import { ODataValueIEnumerableAttributeValue } from '../models/odata-value-ienumerable-attribute-value';
import { ODataValueAttributeValue } from '../models/odata-value-attribute-value';
@Injectable({
  providedIn: 'root',
})
class AttributesService extends __BaseService {
  static readonly GetPath = '/v1.4/Attributes';
  static readonly PostPath = '/v1.4/Attributes';
  static readonly DeletePath = '/v1.4/Attributes';
  static readonly PatchPath = '/v1.4/Attributes';
  static readonly Get_1Path = '/v1.4/Attributes({key})';
  static readonly GetAttributeValuesPath = '/v1.4/Attributes({key})/AttributeValues';
  static readonly UploadImagePath = '/v1.4/Attributes({key})/UploadImage';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param params The `AttributesService.GetParams` containing the following parameters:
   *
   * - `$top`:
   *
   * - `$skip`:
   *
   * - `$filter`:
   *
   * - `$expand`:
   *
   * @return The attributes were successfully retrieved.
   */
  GetResponse(params: AttributesService.GetParams): __Observable<__StrictHttpResponse<ODataValueIEnumerableAttribute>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Top != null) __params = __params.set('$top', params.Top.toString());
    if (params.Skip != null) __params = __params.set('$skip', params.Skip.toString());
    if (params.Filter != null) __params = __params.set('$filter', params.Filter.toString());
    if (params.Expand != null) __params = __params.set('$expand', params.Expand.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v1.4/Attributes`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ODataValueIEnumerableAttribute>;
      })
    );
  }
  /**
   * @param params The `AttributesService.GetParams` containing the following parameters:
   *
   * - `$top`:
   *
   * - `$skip`:
   *
   * - `$filter`:
   *
   * - `$expand`:
   *
   * @return The attributes were successfully retrieved.
   */
  Get(params: AttributesService.GetParams): __Observable<ODataValueIEnumerableAttribute> {
    return this.GetResponse(params).pipe(
      __map(_r => _r.body as ODataValueIEnumerableAttribute)
    );
  }

  /**
   * @param attribute The attribute to create.
   * @return The attribute was successfully created.
   */
  PostResponse(attribute?: Attribute): __Observable<__StrictHttpResponse<ODataValueAttribute>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = attribute;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v1.4/Attributes`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ODataValueAttribute>;
      })
    );
  }
  /**
   * @param attribute The attribute to create.
   * @return The attribute was successfully created.
   */
  Post(attribute?: Attribute): __Observable<ODataValueAttribute> {
    return this.PostResponse(attribute).pipe(
      __map(_r => _r.body as ODataValueAttribute)
    );
  }

  /**
   * @param params The `AttributesService.DeleteParams` containing the following parameters:
   *
   * - `key`: The requested attribute identifier.
   *
   * - `force`: Force a delete of an attribute in use.
   */
  DeleteResponse(params: AttributesService.DeleteParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.key != null) __params = __params.set('key', params.key.toString());
    if (params.force != null) __params = __params.set('force', params.force.toString());
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/v1.4/Attributes`,
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
   * @param params The `AttributesService.DeleteParams` containing the following parameters:
   *
   * - `key`: The requested attribute identifier.
   *
   * - `force`: Force a delete of an attribute in use.
   */
  Delete(params: AttributesService.DeleteParams): __Observable<null> {
    return this.DeleteResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `AttributesService.PatchParams` containing the following parameters:
   *
   * - `key`: The requested attribute identifier.
   *
   * - `force`: Force an update of an attribute in use.
   *
   * - `attribute`: The attribute to update.
   *
   * @return The attribute was successfully updated.
   */
  PatchResponse(params: AttributesService.PatchParams): __Observable<__StrictHttpResponse<ODataValueAttribute>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.key != null) __params = __params.set('key', params.key.toString());
    if (params.force != null) __params = __params.set('force', params.force.toString());
    __body = params.attribute;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/v1.4/Attributes`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ODataValueAttribute>;
      })
    );
  }
  /**
   * @param params The `AttributesService.PatchParams` containing the following parameters:
   *
   * - `key`: The requested attribute identifier.
   *
   * - `force`: Force an update of an attribute in use.
   *
   * - `attribute`: The attribute to update.
   *
   * @return The attribute was successfully updated.
   */
  Patch(params: AttributesService.PatchParams): __Observable<ODataValueAttribute> {
    return this.PatchResponse(params).pipe(
      __map(_r => _r.body as ODataValueAttribute)
    );
  }

  /**
   * @param params The `AttributesService.Get_1Params` containing the following parameters:
   *
   * - `key`: The requested attribute identifier.
   *
   * - `$expand`:
   *
   * @return The attribute was successfully retrieved.
   */
  Get_1Response(params: AttributesService.Get_1Params): __Observable<__StrictHttpResponse<ODataValueAttribute>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.key != null) __params = __params.set('key', params.key.toString());
    if (params.Expand != null) __params = __params.set('$expand', params.Expand.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v1.4/Attributes(${params.key})`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ODataValueAttribute>;
      })
    );
  }
  /**
   * @param params The `AttributesService.Get_1Params` containing the following parameters:
   *
   * - `key`: The requested attribute identifier.
   *
   * - `$expand`:
   *
   * @return The attribute was successfully retrieved.
   */
  Get_1(params: AttributesService.Get_1Params): __Observable<ODataValueAttribute> {
    return this.Get_1Response(params).pipe(
      __map(_r => _r.body as ODataValueAttribute)
    );
  }

  /**
   * @param params The `AttributesService.GetAttributeValuesParams` containing the following parameters:
   *
   * - `key`: The requested attribute identifier.
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
  GetAttributeValuesResponse(params: AttributesService.GetAttributeValuesParams): __Observable<__StrictHttpResponse<ODataValueIEnumerableAttributeValue>> {
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
      this.rootUrl + `/v1.4/Attributes(${params.key})/AttributeValues`,
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
   * @param params The `AttributesService.GetAttributeValuesParams` containing the following parameters:
   *
   * - `key`: The requested attribute identifier.
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
  GetAttributeValues(params: AttributesService.GetAttributeValuesParams): __Observable<ODataValueIEnumerableAttributeValue> {
    return this.GetAttributeValuesResponse(params).pipe(
      __map(_r => _r.body as ODataValueIEnumerableAttributeValue)
    );
  }

  /**
   * @param params The `AttributesService.UploadImageParams` containing the following parameters:
   *
   * - `key`: The requested attribute identifier.
   *
   * - `attributeValueId`: The requested attribute value identifier.
   *
   * - `$expand`:
   *
   * @return The attribute value was successfully created/updated.
   */
  UploadImageResponse(params: AttributesService.UploadImageParams): __Observable<__StrictHttpResponse<ODataValueAttributeValue>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __headers.append('Content-Type', 'multipart/form-data');
    let __formData = new FormData();
    __body = __formData;
    if (params.key != null) __params = __params.set('key', params.key.toString());
   if(params.attributeValueId !== null && typeof params.attributeValueId !== "undefined") { __formData.append('attributeValueId', JSON.stringify(params.attributeValueId));}
    if (params.Expand != null) __params = __params.set('$expand', params.Expand.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v1.4/Attributes(${params.key})/UploadImage`,
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
   * @param params The `AttributesService.UploadImageParams` containing the following parameters:
   *
   * - `key`: The requested attribute identifier.
   *
   * - `attributeValueId`: The requested attribute value identifier.
   *
   * - `$expand`:
   *
   * @return The attribute value was successfully created/updated.
   */
  UploadImage(params: AttributesService.UploadImageParams): __Observable<ODataValueAttributeValue> {
    return this.UploadImageResponse(params).pipe(
      __map(_r => _r.body as ODataValueAttributeValue)
    );
  }
}

module AttributesService {

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
     * The requested attribute identifier.
     */
    key?: number;

    /**
     * Force a delete of an attribute in use.
     */
    force?: boolean;
  }

  /**
   * Parameters for Patch
   */
  export interface PatchParams {

    /**
     * The requested attribute identifier.
     */
    key?: number;

    /**
     * Force an update of an attribute in use.
     */
    force?: boolean;

    /**
     * The attribute to update.
     */
    attribute?: Attribute;
  }

  /**
   * Parameters for Get_1
   */
  export interface Get_1Params {

    /**
     * The requested attribute identifier.
     */
    key?: number;
    Expand?: string;
  }

  /**
   * Parameters for GetAttributeValues
   */
  export interface GetAttributeValuesParams {

    /**
     * The requested attribute identifier.
     */
    key?: number;
    Top?: number;
    Skip?: number;
    Filter?: string;
    Expand?: string;
  }

  /**
   * Parameters for UploadImage
   */
  export interface UploadImageParams {

    /**
     * The requested attribute identifier.
     */
    key?: number;

    /**
     * The requested attribute value identifier.
     */
    attributeValueId?: number;
    Expand?: string;
  }
}

export { AttributesService }
