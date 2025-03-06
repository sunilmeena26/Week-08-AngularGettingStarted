import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'BridgeLabz Angular App';
  imgUrl = '../assets/BL_logo_square_jpg.jpg';
  url = 'https://www.bridgelabz.com';
  //Create a variable userName to user name
  userName: string = "";
  //Create a variable nameError to user name error
  nameError: string="";

  ngOnInit(): void {
    this.title = 'Hello From BridgeLabz';
  }

  onClick($event: any) {
    //print massage on console
    console.log('Save button is clicked!', $event);
    window.open(this.url, '_blank');
  }

  onInput($event: any){
    //print massage on console
    console.log("Change Event Occurred!", $event.data);
    const nameRegax=RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
    if(nameRegax.test(this.userName)){
      this.nameError="";
      return;
    }
    this.nameError="Name is Incroorect!";
  }
}
