// src/app/helper-files/message.service.ts
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messages = new Subject<string>();

  constructor() { }

  add(message: string) {
    this.messages.next(message);
  }

  clear() {
    this.messages.next('');
  }

  getMessages(): Observable<string> {
    return this.messages.asObservable();
  }
}
