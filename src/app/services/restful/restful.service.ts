import { UtilityService } from './../utility/utility.service';
import { environment } from './../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestfulService {

  baseURL = environment.baseURI

  constructor(private http: HttpClient, private utilityService: UtilityService) { }

  public getHeaders(defaultHeaders?) {
    let headers = new HttpHeaders();
    if(defaultHeaders) {
      for(let i in defaultHeaders) {
        headers = headers.set(i, defaultHeaders[i])
      }
    }

    return { headers };
  }

  get(url, params?, setHeader?, headers?) {
    if(setHeader) 
    return this.http.get<any>(this.baseURL + url, this.getHeaders(headers));
  return this.http.get<any>(this.baseURL + url);
  }

  put(url, body, setHeader?, headers?) {
    if(setHeader) 
      return this.http.put<any>(this.baseURL + url, body,  this.getHeaders(headers));
    return this.http.put<any>(this.baseURL + url, body);
  }

  post(url, body, setHeader?, headers?) {
    if(setHeader) {
      return this.http.post<any>(this.baseURL + url, body, this.getHeaders(headers));
    }
    return this.http.post<any>(this.baseURL + url, body);
  }

  delete(url, body?) {
    return this.http.delete<any>(this.baseURL + url, body);
  }

  patch(url, body, setHeader?, headers?) {
    if(setHeader) 
      return this.http.patch<any>(this.baseURL + url, body,  this.getHeaders(headers));
    return this.http.patch<any>(this.baseURL + url, body)
  }
}
