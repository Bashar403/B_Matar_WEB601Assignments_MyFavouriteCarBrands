import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Content } from './helper-files/content-interface'; // Adjust the path as necessary
@Injectable({
  providedIn: 'root'
})
export class MemoryDataService implements InMemoryDbService {
  createDb() {
    const content: Content[] = [
      // Your initial content objects here
    ];
    return { content };
  }

  genId(contents: Content[]): number {
    const maxId = contents.length > 0 ? Math.max(...contents.map(content => content.id)) : 0;
    return maxId !== null ? maxId + 1 : 11;
  }
}
