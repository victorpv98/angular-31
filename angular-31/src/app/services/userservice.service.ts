import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

interface Data {
  id: number
  title: string
  state: string
  url: string
  created_at: string
  updated_at: string
}

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http: HttpClient) { }

  apiUser = environment.apiURL


  getUsers(): Observable<Data[]> {
    return this.http.get<Data[]>(this.apiUser)
  }
}
