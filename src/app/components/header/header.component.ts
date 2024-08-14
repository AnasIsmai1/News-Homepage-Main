import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  isHidden: boolean = true;

  openMenu() {
    this.isHidden = (this.isHidden)? false : true;
    console.log(this.isHidden);
    
  }

}
