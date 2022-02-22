import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Project } from '../entities/project';


@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
 private ProjectsUrl= 'http://localhost:57678/api/Projects';
 private StatusUrl= 'http://localhost:57678/api/Status';
 private CustomerUrl= 'http://localhost:57678/api/Customer';


  constructor(private http: HttpClient) { }
  get(endPoint: string): Observable<any> {
    return this.http.get(`${environment.apiurl}${endPoint}`);
  }

  delete(endPoint: string, id: number): Observable<any> {
    return this.http.delete(`${environment.apiurl}${endPoint}/${id}`);
  }

  create(endPoint: string, data: any): Observable<any> {
    return this.http.post(`${environment.apiurl}${endPoint}`, data);
  }

  update(endPoint: string, id: number, data: any): Observable<any> {
    return this.http.patch(
      `${environment.apiurl}${endPoint}/${id}`,
      data
    );
  }

  findById(endPoint: string, id: number): Observable<any> {

    return this.http.get(
      `${environment.apiurl}${endPoint}/${id}`
    );
}

}
