import { Component } from '@angular/core';

@Component({
  selector: 'app-news-box',
  templateUrl: './news-box.component.html',
  styleUrls: ['./news-box.component.scss']
})
export class NewsBoxComponent {

  info = [
    {
      img: '../../../assets/images/image-retro-pcs.jpg',
      num: '01',
      title: 'Reviving Retro PCs',
      descrip: 'What happens when old PCs are given updates modern updates?'
    },
    {
      img: '../../../assets/images/image-top-laptops.jpg',
      num: '02',
      title: 'Top 10 Laptops of 2022',
      descrip: 'Our best picks for various needs and budgets'
    },
    {
      img: '../../../assets/images/image-gaming-growth.jpg',
      num: '03',
      title: 'The Growth of Gaming',
      descrip: 'How the pandemic has sparked fresh oppertunities'
    }
  ]

}
