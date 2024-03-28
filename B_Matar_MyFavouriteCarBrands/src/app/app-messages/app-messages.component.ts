// app-messages.component.ts
import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../messages.service';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app-messages.component.html',
  styleUrls: ['./app-messages.component.scss']
})
export class AppMessagesComponent implements OnInit {
  message: string = '';

  constructor(private messagesService: MessagesService) { }

  ngOnInit(): void {
    this.messagesService.currentMessage.subscribe(message => this.message = message);
  }
}
