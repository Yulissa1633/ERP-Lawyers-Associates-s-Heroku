import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';

const endpoint = 'https://localhost:7012/api/';
const httpOptions = {
  headers: new HttpHeaders({
      'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  session = {userName: '', userId: ''};

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {

    return this.http.get(endpoint+'Users',httpOptions)

  }

  getUser(id:any): Observable<any> {
    return this.http.get(endpoint+'Users/'+id,httpOptions)
  }

  setSession(name:any, id:any){
    this.session.userName=name;
    this.session.userId=id;
  }

  getSession(): any{
    return this.session;
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };

  
  }

}
