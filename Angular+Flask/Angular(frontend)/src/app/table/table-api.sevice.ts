import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
//import {Observable} from 'rxjs';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import {API_URL} from '../env';
import {InvoiceHeaderClass} from './table.model';
import {InvoiceHeaderInterface} from './table.model';
import { catchError, map } from 'rxjs/operators';

import 'rxjs/add/operator/map'


@Injectable()
export class InvoiceHeaderApiService {

  constructor(private http: HttpClient) {
  }

  private static _handleError(err: HttpErrorResponse | any) {
    return Observable.throw(err.message || 'Error: Unable to complete request.');
  }

  // GET list of public, future events
/*  getInvoiceHeaderData(): Observable<any[]> {
    return this.http
      .get(`${API_URL}/get_invoices`)
      .catch(InvoiceHeaderApiService._handleError);
  }*/

// Using RxJS v5 / Angular 5+ (at the moment). I assume that you're using the HttpClientModule, as the HttpModule was deprecated in Angular v4.
//public getInvoiceHeaderData(): Observable<InvoiceHeaderClass[]> {
//  return this.http.get<InvoiceHeaderClass[]>(`${API_URL}/get_invoices`);
/*
public getInvoiceHeaderData(): Observable<any[]> {
  console.log(this.http.get(`${API_URL}/get_invoices`));
  return this.http.get<any[]>(`${API_URL}/get_invoices`);
*/
public getInvoiceHeaderData():Observable<any[]>{
  return this.http.get<any[]>(`${API_URL}/get_invoices`).map((result: any)=>result.data);
}

}