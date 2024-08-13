import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  windowSize : number = screen.width;
  isLarge: boolean = true;

  checkSize(e: any) {
    if(e.target.innerWidth < 800) {
      this.isLarge = false;
    }else{
      this.isLarge = true;
    }
  }

}
