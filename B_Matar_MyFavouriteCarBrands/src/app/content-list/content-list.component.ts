import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { CommonModule } from '@angular/common';
import { ContentCardComponent } from '../content-card/content-card.component';
import { TypeFilterPipe } from '../type-filter.pipe';
import { FormsModule } from '@angular/forms';
import { CreateContentComponent } from '../create-content/create-content.component';


@Component({
  selector: 'app-content-list',
  standalone: true,
  
  imports: [CommonModule, ContentCardComponent, TypeFilterPipe,FormsModule, CreateContentComponent ],
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
    },
    {
    id:7,
    title: 'Chevrolet',
    description: 'Chevrolet, colloquially referred to as Chevy and formally the Chevrolet Division of General Motors Company, is an American automobile division of the American manufacturer General Motors.',
    creator: 'Bashar Matar',
    imgURL: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Chevrolet_simple_logo.png',
    type: 'Car',
    tags: ['Chevrolet', 'American', 'Car']
    },
    {
      id: 8,
      title: 'Ferrari',
      description: 'Ferrari S.p.A. is an Italian luxury sports car manufacturer based in Maranello, Italy.',
      creator: 'Bashar Matar',
      imgURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/DSC00458_%287614921264%29.jpg/640px-DSC00458_%287614921264%29.jpg',
      type: 'Car',
      tags: ['Ferrari', 'Italian', 'Luxury', 'Car']
    },
    {
      id: 9,
      title: 'Apple',
      description: 'Apple Inc. is an American multinational technology company that specializes in consumer electronics, computer software, and online services.',
      creator: 'Bashar Matar',
      imgURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Apple-icon.svg/640px-Apple-icon.svg.png',
      type: 'Tech',
      tags: ['Apple', 'American', 'Tech']
    },
    {
      id: 10,
      title: 'Samsung',
      description: 'Samsung is a South Korean multinational conglomerate headquartered in Samsung Town, Seoul.',
      creator: 'Bashar Matar',
      imgURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Png-transparent-samsung-logo-samsung-galaxy-a8-2018-logo-samsung-electronics-arrow-sketch-company-text-label.png/640px-Png-transparent-samsung-logo-samsung-galaxy-a8-2018-logo-samsung-electronics-arrow-sketch-company-text-label.png',
      type: 'Tech',
      tags: ['Samsung', 'South Korean', 'Tech']
    }

  ];
  searchTitle: string = '';
  searchResult: string = '';
  searchResultColor: string = '';

  searchContent() {
    const found = this.contentList.some(content => content.title === this.searchTitle);
    this.searchResult = found ? 'Content item exists' : 'Content item does not exist';
    this.searchResultColor = found ? 'green' : 'red';
  }
  errorMessage: string = '';

  constructor() {}

  insertContentEvent(item: Content) {
    this.contentList.push(item);
    console.log(`Content added: ${item.title}`);
  }
}
