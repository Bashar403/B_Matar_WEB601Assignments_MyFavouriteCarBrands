import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Content } from '../helper-files/content-interface';
import { CONTENT } from '../helper-files/contentDb';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const contents = CONTENT; // Use 'contents' to match the service request
    return { contents }; /// The key here is what you'll use in your HTTP requests
  }

  genId(contents: Content[]): number {
    return contents.length > 0 ? Math.max(...contents.map(content => content.id as number)) + 1 : 11;
  }
}
