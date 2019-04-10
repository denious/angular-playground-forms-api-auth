/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ODataValueIEnumerableUnitOfMeasure } from '../models/odata-value-ienumerable-unit-of-measure';
import { ODataValueUnitOfMeasure } from '../models/odata-value-unit-of-measure';
import { UnitOfMeasure } from '../models/unit-of-measure';
@Injectable({
  providedIn: 'root',
})
class UnitsOfMeasureService extends __BaseService {
  static readonly GetPath = '/v1.4/UnitsOfMeasure';
  static readonly PutPath = '/v1.4/UnitsOfMeasure';
  static readonly PostPath = '/v1.4/UnitsOfMeasure';
  static readonly DeletePath = '/v1.4/UnitsOfMeasure';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param params The `UnitsOfMeasureService.GetParams` containing the following parameters:
   *
   * - `$top`:
   *
   * - `$skip`:
   *
   * - `$filter`:
   *
   * @return The UoMs were successfully retrieved.
   */
  GetResponse(params: UnitsOfMeasureService.GetParams): __Observable<__StrictHttpResponse<ODataValueIEnumerableUnitOfMeasure>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Top != null) __params = __params.set('$top', params.Top.toString());
    if (params.Skip != null) __params = __params.set('$skip', params.Skip.toString());
    if (params.Filter != null) __params = __params.set('$filter', params.Filter.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/v1.4/UnitsOfMeasure`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ODataValueIEnumerableUnitOfMeasure>;
      })
    );
  }
  /**
   * @param params The `UnitsOfMeasureService.GetParams` containing the following parameters:
   *
   * - `$top`:
   *
   * - `$skip`:
   *
   * - `$filter`:
   *
   * @return The UoMs were successfully retrieved.
   */
  Get(params: UnitsOfMeasureService.GetParams): __Observable<ODataValueIEnumerableUnitOfMeasure> {
    return this.GetResponse(params).pipe(
      __map(_r => _r.body as ODataValueIEnumerableUnitOfMeasure)
    );
  }

  /**
   * @param params The `UnitsOfMeasureService.PutParams` containing the following parameters:
   *
   * - `uom`: The UoM to update.
   *
   * - `key`: The requested UoM identifier.
   *
   * - `force`:
   *
   * @return The UoM was successfully updated.
   */
  PutResponse(params: UnitsOfMeasureService.PutParams): __Observable<__StrictHttpResponse<ODataValueUnitOfMeasure>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.uom;
    if (params.key != null) __params = __params.set('key', params.key.toString());
    if (params.force != null) __params = __params.set('force', params.force.toString());
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/v1.4/UnitsOfMeasure`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ODataValueUnitOfMeasure>;
      })
    );
  }
  /**
   * @param params The `UnitsOfMeasureService.PutParams` containing the following parameters:
   *
   * - `uom`: The UoM to update.
   *
   * - `key`: The requested UoM identifier.
   *
   * - `force`:
   *
   * @return The UoM was successfully updated.
   */
  Put(params: UnitsOfMeasureService.PutParams): __Observable<ODataValueUnitOfMeasure> {
    return this.PutResponse(params).pipe(
      __map(_r => _r.body as ODataValueUnitOfMeasure)
    );
  }

  /**
   * @param uom The UoM to create.
   * @return The UoM was successfully created.
   */
  PostResponse(uom?: UnitOfMeasure): __Observable<__StrictHttpResponse<ODataValueUnitOfMeasure>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = uom;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/v1.4/UnitsOfMeasure`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ODataValueUnitOfMeasure>;
      })
    );
  }
  /**
   * @param uom The UoM to create.
   * @return The UoM was successfully created.
   */
  Post(uom?: UnitOfMeasure): __Observable<ODataValueUnitOfMeasure> {
    return this.PostResponse(uom).pipe(
      __map(_r => _r.body as ODataValueUnitOfMeasure)
    );
  }

  /**
   * @param params The `UnitsOfMeasureService.DeleteParams` containing the following parameters:
   *
   * - `key`: The requested UoM identifier.
   *
   * - `force`: Force a delete of an UoM in use.
   */
  DeleteResponse(params: UnitsOfMeasureService.DeleteParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.key != null) __params = __params.set('key', params.key.toString());
    if (params.force != null) __params = __params.set('force', params.force.toString());
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/v1.4/UnitsOfMeasure`,
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
   * @param params The `UnitsOfMeasureService.DeleteParams` containing the following parameters:
   *
   * - `key`: The requested UoM identifier.
   *
   * - `force`: Force a delete of an UoM in use.
   */
  Delete(params: UnitsOfMeasureService.DeleteParams): __Observable<null> {
    return this.DeleteResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module UnitsOfMeasureService {

  /**
   * Parameters for Get
   */
  export interface GetParams {
    Top?: number;
    Skip?: number;
    Filter?: string;
  }

  /**
   * Parameters for Put
   */
  export interface PutParams {

    /**
     * The UoM to update.
     */
    uom?: UnitOfMeasure;

    /**
     * The requested UoM identifier.
     */
    key?: number;
    force?: boolean;
  }

  /**
   * Parameters for Delete
   */
  export interface DeleteParams {

    /**
     * The requested UoM identifier.
     */
    key?: number;

    /**
     * Force a delete of an UoM in use.
     */
    force?: boolean;
  }
}

export { UnitsOfMeasureService }
