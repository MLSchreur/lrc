import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  powerSupply         : number;
  ledPowerDrop        : number;
  ledCurrent          : number;
  numberOfLeds        : number;
  powerSupplyMessage  : string;
  ledPowerDropMessage : string;
  ledCurrentMessage   : string;
  numberOfLedsMessage : string;
  show                : boolean;


  valueCheck(){
    if(this.powerSupply < 3 || this.powerSupply > 24){
      console.log("Power Supply wrong value")
      this.show = true;
      this.powerSupplyMessage = "Power Supply wrong value";
    }
    if(this.ledPowerDrop < 1.6 || this.ledPowerDrop > 4){
      console.log("Led power drop wrong value")
      this.show = true;
      this.ledPowerDropMessage = "Led power drop wrong value";
    }
    if(this.ledCurrent < 2 || this.ledCurrent > 70){
      console.log("Led current wrong value")
      this.show = true;
      this.ledCurrentMessage = "Led current wrong value";
    }
    if(this.numberOfLeds < 1 || this.numberOfLeds > 99){
      console.log("Number of LED's wrong value")
      this.show = true;
      this.numberOfLedsMessage = "Number of LED's wrong value";
    }
  }
  
  
  calculate(){
    console.log(this.powerSupply);
    console.log(this.ledPowerDrop);
    console.log(this.ledCurrent);
    console.log(this.numberOfLeds);
    this.valueCheck();
  }

}
