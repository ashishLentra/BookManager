import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient) { }

  baseURL = "http://localhost:8080/";

  getUserList(): Observable<any>{
    return this.http.get<any>(`http://localhost:8080/getUsers`);
  }

  addUser(user: User): Observable<any>{
    return this.http.post<any>(`http://localhost:8080/addUser`, user);
  }

  updateUser(id: number,user:User): Observable<any>{
    return this.http.put<User>(`http://localhost:8080/updateUsers/${id}`,user);
  }

  deleteUser(id: number): Observable<any>{
    return this.http.delete<any>('baseURL' + 'deleteUser/' + id );
  }


}
