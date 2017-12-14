import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  powerSupply   : number;
  ledPowerDrop  : number;
  ledCurrent    : number;
  numberOfLeds  : number;


  calculate(){
    console.log(this.powerSupply);
    console.log(this.ledPowerDrop);
    console.log(this.ledCurrent);
    console.log(this.numberOfLeds);
  }

}
