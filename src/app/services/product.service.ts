import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
url:string = 'http://127.0.0.1:3000';

private httpOptions: any;

  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }


   listproduct() {
    const url = 'http://127.0.0.1:3000/products'; // replace with your own URL
    console.log(this.http.get(url));
    return this.http.get(url).pipe(
      catchError(error => {
        console.error(error);
        return throwError('An error occurred while fetching the data.');
      })
    );
  }

   addproduct(data:any){
    const url = 'http://127.0.0.1:3000';
   console.log(this.httpOptions);
    // console.log(this.http.post(url+'/products', data, this.httpOptions));
    return this.http.post(url+'/products', data, this.httpOptions);
   }

   findproduct(){


   }


    
}
