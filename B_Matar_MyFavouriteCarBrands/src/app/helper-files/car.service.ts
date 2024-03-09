// helper-files/car.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Content } from './content-interface'; // Adjust the path as necessary
import { CONTENT } from './contentDb'; // Adjust the path as necessary

@Injectable({
  providedIn: 'root'
})
export class CarService {
  constructor() { }

  getContent(): Observable<Content[]> {
    const content = of(CONTENT);
    return content;
  }

  getContentById(id: number): Observable<Content | undefined> {
    const content = CONTENT.find(c => c.id === id);
    return of(content);
  }
}
