import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { products } from './Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient) { }
  getProducts(): Observable<products[]>{

    const apiurl=environment.apibaseurl ;
    const headers={'content-type':'application/json'};
    
    return this.http.get<products[]>(apiurl,{'headers':headers}).pipe(
      tap(data=>{console.log(data)}),
      catchError(error=>{
        return throwError(error)
      })
    );
  }
    getProductsbyid(id:number): Observable<products>{
      const apiurl = environment.apibaseurl+"/"+id;
      const headers={'content-type':'application/json'};

      return this.http.get<products>(apiurl,{'headers':headers}).pipe(
        tap(data=>{console.log(data)}),
        catchError(error=>{
          return throwError(error)
        })
      );
    }
    createProducts(item:products): Observable<products>{
      const apiurl = environment.apibaseurl;
      const headers={'content-type':'application/json','accept':'application/json'};
      Object.defineProperty(item,'id',{'enumerable':false});
      const itemtodoadd = JSON.stringify(item);

      return this.http.post<products>(apiurl,itemtodoadd,{'headers':headers}).pipe(
        tap(data=>{console.log(data)}),
        catchError(error=>{
          return throwError(error)
        })
      );
    }

    putProducts(item:products):Observable<products>{
      const apiurl = environment.apibaseurl +"/" +item.id;
      const headers={'content-type':'application/json'};

      return this.http.put<products>(apiurl,item,{'headers':headers}).pipe(
        catchError(error=>{
          return throwError(error)
        })
      );
    }
  
    deleteProducts(id:number): Observable<products[]>{
      const apiurl = environment.apibaseurl +"/" +id;
      const headers={'content-type':'application/json'};

      return this.http.delete<products[]>(apiurl,{'headers':headers}).pipe(
        catchError(error=>{
          return throwError(error)
        })
      );
    }

  private handleError(error:any){
  console.error(error);
  return throwError(error);
  }
  
}


