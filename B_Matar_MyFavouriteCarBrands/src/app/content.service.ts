// content.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CONTENT } from './helper-files/contentDb';
import { Content } from './helper-files/content-interface';


@Injectable({
  providedIn: 'root'
})
export class ContentService {

  getContent(): Observable<Content[]> {
    return of(CONTENT);
  }

  getContentById(id: number): Observable<Content | undefined> {
    const contentItem = CONTENT.find(item => item.id === id);
    return of(contentItem);
  }
}
