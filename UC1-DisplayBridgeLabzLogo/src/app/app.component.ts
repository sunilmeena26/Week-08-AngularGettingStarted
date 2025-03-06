import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  //Create a variable title to store HelloWorld
  title = 'HelloWorld';
  imgUrl = 'assets/BL_logo_square_jpg.jpg';

  //Create a method ngOnInit
  ngOnInit(): void {
    //update the title value
    this.title = 'Hello From BridgeLabz';
  }
}
