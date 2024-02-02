import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { CommonModule } from '@angular/common';
import { ContentCardComponent } from '../content-card/content-card.component';


@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [CommonModule, ContentCardComponent],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss'
})
export class ContentListComponent {
  contentList: Content[]= [
    {
      id: 1,
      title: 'BMW',
      description: 'Bayerische Motoren Werke AG, commonly referred to as BMW, is a German multinational corporation which produces luxury vehicles and motorcycles.',
      creator: 'Bashar Matar',
      imgURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/1200px-BMW.svg.png',
      type: 'Car',
      tags: ['BMW', 'German', 'Luxury', 'Car']
    },
    {
      id: 2,
      title: 'Mercedes-Benz',
      description: 'Mercedes-Benz is a German global automobile marque and a division of Daimler AG. The brand is known for luxury vehicles, buses, coaches, and trucks.',
      creator: 'Bashar Matar',
      imgURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Mercedes-Benz_Star_2022.svg/640px-Mercedes-Benz_Star_2022.svg.png',
      type: 'Car',
      tags: ['Mercedes-Benz', 'German', 'Luxury', 'Car']
    },
    {
      id: 3,
      title: 'Audi',
      description: 'Audi AG is a German automobile manufacturer that designs, engineers, produces, markets and distributes luxury vehicles.',
      creator: 'Bashar Matar',
      imgURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Audi-Logo_2016.svg/640px-Audi-Logo_2016.svg.png',
      type: 'Car',
      tags: ['Audi', 'German', 'Luxury', 'Car']
    },
    {
      id: 4,
      title: 'Toyota',
      description: 'Toyota Motor Corporation is a Japanese multinational automotive manufacturer headquartered in Toyota, Aichi, Japan.',
      creator: 'Bashar Matar',
      imgURL: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Toyota_EU.svg',
      type: 'Car',
      tags: ['Toyota', 'Japanese', 'Car']
    },
    {
      id: 5,
      title: 'Honda',
      description: 'Honda Motor Co., Ltd. is a Japanese public multinational conglomerate corporation known as a manufacturer of automobiles, motorcycles, and power equipment.',
      creator: 'Bashar Matar',
      imgURL: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Honda.svg',
      type: 'Car',
      tags: ['Honda', 'Japanese', 'Car']
    },
    {
      id: 6,
      title: 'Ford',
      description: 'The Ford Motor Company, commonly known as Ford, is an American multinational automaker that has its main headquarters in Dearborn, Michigan, a suburb of Detroit.',
      creator: 'Bashar Matar',
      imgURL: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Ford_Logo_1976_Print_ver_v2.svg',
      type: 'Car',
      tags: ['Ford', 'American', 'Car']
    }
  ];
}
