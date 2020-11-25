import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const baseUrl = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http: HttpClient) { 
    console.log(environment.base_url);
  }

  getAll(): Observable<any> {
    return this.http.get(`${baseUrl}/events`);
  }

  getEvent(id): Observable<any> {
    return this.http.get(`${baseUrl}/event/${id}`);
  }

  createEvent(data): Observable<any> {
    return this.http.post(`${baseUrl}/events`, data);
  }

  editEvent(id, data): Observable<any> {
    return this.http.put(`${baseUrl}/event/${id}`, data);
  }

  delete(id): Observable<any> {
    return this.http.delete(`${baseUrl}/event/${id}`);
  }

  findByTitle(title): Observable<any> {
    return this.http.get(`${baseUrl}?title=${title}`);
  }
}
