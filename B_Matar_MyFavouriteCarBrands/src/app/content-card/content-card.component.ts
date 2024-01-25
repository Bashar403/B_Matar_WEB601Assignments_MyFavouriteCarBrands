import { Component } from '@angular/core';
import { ContentList } from '../helper-files/content-list';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss'
})
export class ContentCardComponent {
  contentList: ContentList = new ContentList();

  constructor() {
    this.contentList.addContent({
      id: 1,
      title: 'Mercedes-Benz',
      description: 'Mercedes-Benz is a German global automobile marque and a division of Daimler AG. Mercedes-Benz is known for luxury vehicles, vans, trucks, buses, coaches and ambulances. The headquarters is in Stuttgart, Baden-Württemberg. The name first appeared in 1926 under Daimler-Benz.',
      creator: 'Karl Benz',
      imgURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Mercedes-Benz_logo_%282018%29.svg/1200px-Mercedes-Benz_logo_%282018%29.svg.png',
      type: 'Automobile',
      tags: ['Mercedes-Benz', 'Mercedes', 'Benz', 'Daimler AG', 'Stuttgart', 'Baden-Württemberg', 'Karl Benz']
    });
    this.contentList.addContent({
      id: 2,
      title: 'BMW',
      description: 'Bayerische Motoren Werke AG, commonly referred to as BMW, is a German multinational company which produces luxury vehicles and motorcycles. The company was founded in 1916 as a manufacturer of aircraft engines, which it produced from 1917 until 1918 and again from 1933 to 1945.',
      creator: 'Karl Rapp',
      imgURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/1200px-BMW.svg.png',
      type: 'Automobile',
      tags: ['BMW', 'Bayerische Motoren Werke AG', 'Karl Rapp']
    });
    this.contentList.addContent({
      id: 3,
      title: 'Audi',
      description: 'Audi AG is a German automobile manufacturer that designs, engineers, produces, markets and distributes luxury vehicles. Audi is a member of the Volkswagen Group and has its roots at Ingolstadt, Bavaria, Germany. Audi-branded vehicles are produced in nine production facilities worldwide.',
      creator: 'August Horch',
      imgURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Audi_AG_logo.svg/1200px-Audi_AG_logo.svg.png',
      type: 'Automobile',
      tags: ['Audi', 'Audi AG', 'Ingolstadt', 'Bavaria', 'August Horch']

  });
  }
  ngOnInit(): void {}
}

