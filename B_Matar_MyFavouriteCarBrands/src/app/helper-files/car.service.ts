// helper-files/car.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Content } from './content-interface'; // Adjust the path as necessary
import { CONTENT } from './contentDb'; // Adjust the path as necessary
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private contentsUrl = 'api/contents'; // URL to web api

  constructor(private http: HttpClient) { }

  getContent(): Observable<Content[]> {
    // Now get the content from the simulated server
    return this.http.get<Content[]>(this.contentsUrl);
  }

  // Add a new Content to the server
  addContent(newContent: Content): Observable<Content> {
    return this.http.post<Content>(this.contentsUrl, newContent, this.httpOptions);
  }

  getContentById(id: number): Observable<Content | undefined> {
    const content = CONTENT.find(c => c.id === id);
    return of(content);
  }
}
