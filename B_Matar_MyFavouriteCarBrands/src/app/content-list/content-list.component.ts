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
      imgURL: 'https://www.bmw.com/content/dam/bmw/common/all-models/1-series/5-door/2019/navigation/bmw-1-series-modelfinder.jpg',
      type: 'Car',
      tags: ['BMW', 'German', 'Luxury', 'Car']
    },
    {
      id: 2,
      title: 'Mercedes-Benz',
      description: 'Mercedes-Benz is a German global automobile marque and a division of Daimler AG. The brand is known for luxury vehicles, buses, coaches, and trucks.',
      creator: 'Bashar Matar',
      imgURL: 'https://www.mercedes-benz.com/en/vehicles/passenger-cars/a-class/saloon/_jcr_content/root/slider/sliderchilditems/slideritem/image.MQ6.12.20190725112648.jpeg',
      type: 'Car',
      tags: ['Mercedes-Benz', 'German', 'Luxury', 'Car']
    },
    {
      id: 3,
      title: 'Audi',
      description: 'Audi AG is a German automobile manufacturer that designs, engineers, produces, markets and distributes luxury vehicles.',
      creator: 'Bashar Matar',
      imgURL: 'https://www.audi.com/content/dam/gbp2/experience-audi/models-and-technology/production-models/2020/audi-a3-sportback/my20-a3-sportback-1080x1080.jpg',
      type: 'Car',
      tags: ['Audi', 'German', 'Luxury', 'Car']
    },
    {
      id: 4,
      title: 'Toyota',
      description: 'Toyota Motor Corporation is a Japanese multinational automotive manufacturer headquartered in Toyota, Aichi, Japan.',
      creator: 'Bashar Matar',
      imgURL: 'https://www.toyota.com/imgix/responsive/images/mlp/colorizer/2021/camry/1J9/1.png?bg=fff&fm=webp&w=930',
      type: 'Car',
      tags: ['Toyota', 'Japanese', 'Car']
    },
    {
      id: 5,
      title: 'Honda',
      description: 'Honda Motor Co., Ltd. is a Japanese public multinational conglomerate corporation known as a manufacturer of automobiles, motorcycles, and power equipment.',
      creator: 'Bashar Matar',
      imgURL: 'https://www.honda.com/content/dam/honda-cars/2021/civic-sedan/overview/2021-civic-sedan-overview.jpg',
      type: 'Car',
      tags: ['Honda', 'Japanese', 'Car']
    },
    {
      id: 6,
      title: 'Ford',
      description: 'The Ford Motor Company, commonly known as Ford, is an American multinational automaker that has its main headquarters in Dearborn, Michigan, a suburb of Detroit.',
      creator: 'Bashar Matar',
      imgURL: 'https://www.ford.com/cmslibs/content/dam/brand_ford/en_us/brand/suvs-crossovers/bronco-sport/2021/bronco-sport/gallery/bronco-sport-gallery-1.jpg',
      type: 'Car',
      tags: ['Ford', 'American', 'Car']
    }
  ];
}
