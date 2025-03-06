import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'BridgeLabzAngularApp';
  imgUrl = '/assets/BL_logo_square_jpg.jpg';
  url = 'https://www.bridgelabz.com';
  userName: string = '';

  ngOnInit(): void {
    this.title = 'Hello From BridgeLabz';
  }

  onClick($event: any) {
    console.log('Save button is clicked!', $event);
    window.open(this.url, '_blank');
  }
}
