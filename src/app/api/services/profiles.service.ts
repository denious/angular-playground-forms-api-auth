/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ODataValueIEnumerableProfile } from '../models/odata-value-ienumerable-profile';
import { ODataValueProfile } from '../models/odata-value-profile';
import { Profile } from '../models/profile';
import { ExportPartsParameters } from '../models/export-parts-parameters';
import { ODataValueIEnumerablePriceList } from '../models/odata-value-ienumerable-price-list';
import { ODataValueIEnumerableProfileExportFormat } from '../models/odata-value-ienumerable-profile-export-format';
import { ODataValueIEnumerableProfileExportFileType } from '../models/odata-value-ienumerable-profile-export-file-type';
import { ODataValueIEnumerableProfileAttributeExports } from '../models/odata-value-ienumerable-profile-attribute-exports';
@Injectable({
  providedIn: 'root',
})
class ProfilesService extends __BaseService {
  static readonly GetPath = '/v1.4/Profiles';
  static readonly PutPath = '/v1.4/Profiles';
  static readonly PostPath = '/v1.4/Profiles';
  static readonly Get_1Path = '/v1.4/Profiles({key})';
  static readonly ExportPartsPath = '/v1.4/Profiles/ExportParts';
  static readonly GetPriceListsPath = '/v1.4/Profiles/GetPriceLists';
  static readonly GetExportFormatsPath = '/v1.4/Profiles/GetExportFormats';
  static readonly GetFileTypesPath = '/v1.4/Profiles/GetFileTypes';
  static readonly GetSelectedAttributesPath = '/v1.4/Profiles({key})/GetSelectedAttributes';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param params The `ProfilesService.GetParams` containing the following parameters:
   *
   * - `$top`:
   *
   * - `$skip`:
   *
   * - `$filter`:
   *
   * - `$expand`:
   *
   * @return The profiles were successfully retrieved.
   */
  GetResponse(params: ProfilesService.GetParams): __Observable<__StrictHttpResponse<ODataValueIEnumerableProfile>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Top != null) __params = __params.set('$top', params.Top.toString());
    if (params.Skip != null) __params = __params.set('$skip', params.Skip.toString());
    if (params.Filter != null) __params = __params.set('$filter', params.Filter.toString());
    if (params.Expand != null) __params = __params.set('$expand', params.Expand.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v1.4/Profiles`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ODataValueIEnumerableProfile>;
      })
    );
  }
  /**
   * @param params The `ProfilesService.GetParams` containing the following parameters:
   *
   * - `$top`:
   *
   * - `$skip`:
   *
   * - `$filter`:
   *
   * - `$expand`:
   *
   * @return The profiles were successfully retrieved.
   */
  Get(params: ProfilesService.GetParams): __Observable<ODataValueIEnumerableProfile> {
    return this.GetResponse(params).pipe(
      __map(_r => _r.body as ODataValueIEnumerableProfile)
    );
  }

  /**
   * @param params The `ProfilesService.PutParams` containing the following parameters:
   *
   * - `updatedProfile`: The profile to update.
   *
   * - `key`: The requested profile identifier.
   *
   * @return The profile was successfully updated.
   */
  PutResponse(params: ProfilesService.PutParams): __Observable<__StrictHttpResponse<ODataValueProfile>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.updatedProfile;
    if (params.key != null) __params = __params.set('key', params.key.toString());
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/v1.4/Profiles`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ODataValueProfile>;
      })
    );
  }
  /**
   * @param params The `ProfilesService.PutParams` containing the following parameters:
   *
   * - `updatedProfile`: The profile to update.
   *
   * - `key`: The requested profile identifier.
   *
   * @return The profile was successfully updated.
   */
  Put(params: ProfilesService.PutParams): __Observable<ODataValueProfile> {
    return this.PutResponse(params).pipe(
      __map(_r => _r.body as ODataValueProfile)
    );
  }

  /**
   * @param profile The profile to create.
   * @return The profile was successfully created.
   */
  PostResponse(profile?: Profile): __Observable<__StrictHttpResponse<ODataValueProfile>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = profile;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v1.4/Profiles`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ODataValueProfile>;
      })
    );
  }
  /**
   * @param profile The profile to create.
   * @return The profile was successfully created.
   */
  Post(profile?: Profile): __Observable<ODataValueProfile> {
    return this.PostResponse(profile).pipe(
      __map(_r => _r.body as ODataValueProfile)
    );
  }

  /**
   * @param params The `ProfilesService.Get_1Params` containing the following parameters:
   *
   * - `key`: The requested profile identifier.
   *
   * - `$expand`:
   *
   * @return The profile was successfully retrieved.
   */
  Get_1Response(params: ProfilesService.Get_1Params): __Observable<__StrictHttpResponse<ODataValueProfile>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.key != null) __params = __params.set('key', params.key.toString());
    if (params.Expand != null) __params = __params.set('$expand', params.Expand.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v1.4/Profiles(${params.key})`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ODataValueProfile>;
      })
    );
  }
  /**
   * @param params The `ProfilesService.Get_1Params` containing the following parameters:
   *
   * - `key`: The requested profile identifier.
   *
   * - `$expand`:
   *
   * @return The profile was successfully retrieved.
   */
  Get_1(params: ProfilesService.Get_1Params): __Observable<ODataValueProfile> {
    return this.Get_1Response(params).pipe(
      __map(_r => _r.body as ODataValueProfile)
    );
  }

  /**
   * @param params The `ProfilesService.ExportPartsParams` containing the following parameters:
   *
   * - `parameters`: ODataActionParameters
   *
   * - `$select`:
   *
   * - `$expand`:
   */
  ExportPartsResponse(params: ProfilesService.ExportPartsParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.parameters;
    if (params.Select != null) __params = __params.set('$select', params.Select.toString());
    if (params.Expand != null) __params = __params.set('$expand', params.Expand.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v1.4/Profiles/ExportParts`,
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
   * @param params The `ProfilesService.ExportPartsParams` containing the following parameters:
   *
   * - `parameters`: ODataActionParameters
   *
   * - `$select`:
   *
   * - `$expand`:
   */
  ExportParts(params: ProfilesService.ExportPartsParams): __Observable<null> {
    return this.ExportPartsResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `ProfilesService.GetPriceListsParams` containing the following parameters:
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
   * @return The profile price lists were successfully retrieved.
   */
  GetPriceListsResponse(params: ProfilesService.GetPriceListsParams): __Observable<__StrictHttpResponse<ODataValueIEnumerablePriceList>> {
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
      this.rootUrl + `/v1.4/Profiles/GetPriceLists`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ODataValueIEnumerablePriceList>;
      })
    );
  }
  /**
   * @param params The `ProfilesService.GetPriceListsParams` containing the following parameters:
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
   * @return The profile price lists were successfully retrieved.
   */
  GetPriceLists(params: ProfilesService.GetPriceListsParams): __Observable<ODataValueIEnumerablePriceList> {
    return this.GetPriceListsResponse(params).pipe(
      __map(_r => _r.body as ODataValueIEnumerablePriceList)
    );
  }

  /**
   * @param params The `ProfilesService.GetExportFormatsParams` containing the following parameters:
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
   * @return The profile export formats were successfully retrieved.
   */
  GetExportFormatsResponse(params: ProfilesService.GetExportFormatsParams): __Observable<__StrictHttpResponse<ODataValueIEnumerableProfileExportFormat>> {
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
      this.rootUrl + `/v1.4/Profiles/GetExportFormats`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ODataValueIEnumerableProfileExportFormat>;
      })
    );
  }
  /**
   * @param params The `ProfilesService.GetExportFormatsParams` containing the following parameters:
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
   * @return The profile export formats were successfully retrieved.
   */
  GetExportFormats(params: ProfilesService.GetExportFormatsParams): __Observable<ODataValueIEnumerableProfileExportFormat> {
    return this.GetExportFormatsResponse(params).pipe(
      __map(_r => _r.body as ODataValueIEnumerableProfileExportFormat)
    );
  }

  /**
   * @param params The `ProfilesService.GetFileTypesParams` containing the following parameters:
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
   * @return The export file types were successfully retrieved.
   */
  GetFileTypesResponse(params: ProfilesService.GetFileTypesParams): __Observable<__StrictHttpResponse<ODataValueIEnumerableProfileExportFileType>> {
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
      this.rootUrl + `/v1.4/Profiles/GetFileTypes`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ODataValueIEnumerableProfileExportFileType>;
      })
    );
  }
  /**
   * @param params The `ProfilesService.GetFileTypesParams` containing the following parameters:
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
   * @return The export file types were successfully retrieved.
   */
  GetFileTypes(params: ProfilesService.GetFileTypesParams): __Observable<ODataValueIEnumerableProfileExportFileType> {
    return this.GetFileTypesResponse(params).pipe(
      __map(_r => _r.body as ODataValueIEnumerableProfileExportFileType)
    );
  }

  /**
   * @param params The `ProfilesService.GetSelectedAttributesParams` containing the following parameters:
   *
   * - `key`: The requested profile identifier.
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
   * @return The selected attributes were successfully retrieved.
   */
  GetSelectedAttributesResponse(params: ProfilesService.GetSelectedAttributesParams): __Observable<__StrictHttpResponse<ODataValueIEnumerableProfileAttributeExports>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.key != null) __params = __params.set('key', params.key.toString());
    if (params.Select != null) __params = __params.set('$select', params.Select.toString());
    if (params.Orderby != null) __params = __params.set('$orderby', params.Orderby.toString());
    if (params.Filter != null) __params = __params.set('$filter', params.Filter.toString());
    if (params.Expand != null) __params = __params.set('$expand', params.Expand.toString());
    if (params.Count != null) __params = __params.set('$count', params.Count.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v1.4/Profiles(${params.key})/GetSelectedAttributes`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ODataValueIEnumerableProfileAttributeExports>;
      })
    );
  }
  /**
   * @param params The `ProfilesService.GetSelectedAttributesParams` containing the following parameters:
   *
   * - `key`: The requested profile identifier.
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
   * @return The selected attributes were successfully retrieved.
   */
  GetSelectedAttributes(params: ProfilesService.GetSelectedAttributesParams): __Observable<ODataValueIEnumerableProfileAttributeExports> {
    return this.GetSelectedAttributesResponse(params).pipe(
      __map(_r => _r.body as ODataValueIEnumerableProfileAttributeExports)
    );
  }
}

module ProfilesService {

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
   * Parameters for Put
   */
  export interface PutParams {

    /**
     * The profile to update.
     */
    updatedProfile?: Profile;

    /**
     * The requested profile identifier.
     */
    key?: number;
  }

  /**
   * Parameters for Get_1
   */
  export interface Get_1Params {

    /**
     * The requested profile identifier.
     */
    key?: number;
    Expand?: string;
  }

  /**
   * Parameters for ExportParts
   */
  export interface ExportPartsParams {

    /**
     * ODataActionParameters
     */
    parameters?: ExportPartsParameters;
    Select?: string;
    Expand?: string;
  }

  /**
   * Parameters for GetPriceLists
   */
  export interface GetPriceListsParams {
    Select?: string;
    Orderby?: string;
    Filter?: string;
    Expand?: string;
    Count?: boolean;
  }

  /**
   * Parameters for GetExportFormats
   */
  export interface GetExportFormatsParams {
    Select?: string;
    Orderby?: string;
    Filter?: string;
    Expand?: string;
    Count?: boolean;
  }

  /**
   * Parameters for GetFileTypes
   */
  export interface GetFileTypesParams {
    Select?: string;
    Orderby?: string;
    Filter?: string;
    Expand?: string;
    Count?: boolean;
  }

  /**
   * Parameters for GetSelectedAttributes
   */
  export interface GetSelectedAttributesParams {

    /**
     * The requested profile identifier.
     */
    key?: number;
    Select?: string;
    Orderby?: string;
    Filter?: string;
    Expand?: string;
    Count?: boolean;
  }
}

export { ProfilesService }
