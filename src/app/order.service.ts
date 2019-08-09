import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Address, Payment, Order } from './class/model';
@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor(private httpClient: HttpClient) {
   }



  sendData(Data:Order): Observable<object> {
    let headers: HttpHeaders = new HttpHeaders();
    // tslint:disable-next-line: max-line-length
    const token = 'MTAwMTAwMTgzOjU3NDA0MWZkNzc1ODhjNTNiNDQ5ZGFiYjM5NWExODg1OWRjYjJiYzg5YzdiMDNhMWNhY2VlZWI0OTdjNzU5NTE1MzU2MzIwZWYwZTUzYzE2N2IyMmYyZDBiYzMyNTg4ODVhODAwNzQ4OGE3MDUwMWY5ZDgwYjc5NDQ1OWQwNzE1'
    headers = headers.append('Authorization', token);
    return this.httpClient.post('https://api.us-sandbox.afterpay.com/v1/', Data, {headers} );
}}
