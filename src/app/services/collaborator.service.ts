import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';


// ng g service services/collaborator
const endpoint = 'https://localhost:7012/api/';
const httpOptions = {
  headers: new HttpHeaders({
      'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class CollaboratorService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {

    return this.http.get(endpoint+'Collaborators',httpOptions)

  }

  getUser(id:any): Observable<any> {
    return this.http.get(endpoint+'Collaborators/'+id,httpOptions)
  }

  delete(id: any): Observable<any> {
    return this.http.delete(endpoint+'Collaborators/'+id,httpOptions)
    .pipe(
      catchError(this.handleError('deleteCollaborator'))
    );
  }

  add(collaborator: any){
    return this.http.post(endpoint+'Collaborators/', collaborator, httpOptions)
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