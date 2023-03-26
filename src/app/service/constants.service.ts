import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';
import { Observable, from, pipe, throwError, catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {
  public url: any = "baseUrl"; //need to add base Url
  constructor(    public http: HttpClient, 
    private httpx: HTTP,) { }


api(method: String, url: String, params:any, auth?:any){
 if (method === 'post') {
        console.log(`calling native api`);
        if (typeof params !== 'object') {
          this.httpx.setDataSerializer('utf8');
        } else {
          this.httpx.setDataSerializer('json');
        }
        return from(
          this.httpx.post(
            `${this.url.trim()}${url.trim()}`,
            params,
            auth
          )
        ).pipe(
          map((response: any) => {
            console.log('Response ->', response);
            try {
              return JSON.parse(response['data']);
            } catch (err) {
              return JSON.parse(response['data']);
            }
          }),
          catchError((err) => {
            return throwError(err);
          })
        );

    } else if (method === 'delete') {
        return from(
          this.httpx.delete(
            `${this.url.trim()}${url.trim()}`,
            {},
            auth
          )
        ).pipe(
          map((response) => {
            console.log('Response ->', JSON.parse(response['data']));
            try {
              return JSON.parse(response['data']);
            } catch (err) {
              return JSON.parse(response['data']);
            }
          }),
          catchError((err) => {
            return throwError(err);
          })
        );

    } else if (method === 'get') {
        console.log('url', url, `calling native api`, auth, params);
        return from(
          this.httpx.get(
            `${this.url.trim()}${url.trim()}`,
            {},
            auth
          )
        ).pipe(
          map(
            (response) => {
              console.log('Response ->', JSON.parse(response['data']));
              try {
                return JSON.parse(response['data']);
              } catch (err) {
                return JSON.parse(response['data']);
              }
            },
            catchError((err) => {
              return throwError(err);
            })
          )
        );

    }
}


  
}
