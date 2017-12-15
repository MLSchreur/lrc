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
  circuit             : string;
  calcValue           : number;
  resistorValues      : number[];
  resistor            : number;
  
  constructor(){
    this.resistorValues = [0,0.5,1,1.2,1.5,1.8,2.2,2.7,3.3,3.9,4.7,6.8,8.2,10,10.2,10.5,10.7,11,11.3,11.5,
                            11.8,12,12.1,12.4,12.7,13,13.3,13.7,14,14.3,14.7,15,15,15.4,15.8,16.2,16.5,16.9,
                            17.4,17.8,18,18.2,18.7,19.1,19.6,20,20.5,21,21.5,22,22.1,22.6,23.2,23.7,24.3,24.9,
                            25.5,26.1,26.7,27,27.4,28,28.7,29.4,30.1,30.9,31.6,32.4,33,33.2,34,34.8,35.7,36.5,
                            37.4,38.3,39,39.2,40.2,41.2,42.2,43.2,44.2,45.3,46.4,47,47.5,48.7,49.9,51.1,52.3,
                            53.6,54.9,56,56.2,57.6,59,60.4,61.9,63.4,64.9,66.5,68,68.1,69.8,71.5,73.2,75,76.8,
                            78.7,80.6,82,82.5,84.5,86.6,88.7,90.9,93.1,95.3,97.6,100,120,150,181,220,270,330,
                            390,470,560,680,820,1000,1200,1800,2200,2700,3300,3900,4700,5600,6800,8200,10000,
                            12000,15000,18000,22000,27000,33000,39000,47000,56000,68000,82000,1000000,1500000,
                            1800000,2200000,2700000,3300000,3900000,4700000];
  }

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
    console.log("Resistorvalue positie 15: " + this.resistorValues[15])
    console.log(this.powerSupply);
    console.log(this.ledPowerDrop);
    console.log(this.ledCurrent);
    console.log(this.numberOfLeds);
    this.valueCheck();
    if(this.circuit == "serie"){
      console.log("Schakeling serie / " + this.circuit);
      this.calcValue = (this.powerSupply - (this.ledPowerDrop * this.numberOfLeds)) / (this.ledCurrent / 1000);
      console.log("calcValue/serie = " + this.calcValue);
    }
    if(this.circuit == "parallel"){
      console.log("Schakeling parallel / " + this.circuit);
      this.calcValue = (this.powerSupply - this.ledPowerDrop) / (this.ledCurrent * this.numberOfLeds / 1000);
      console.log("calcValue/parallel = " + this.calcValue);
    }
    this.neededResistor();
  }

  neededResistor(){
    for(let i = 1; i < this.resistorValues.length; i++){
      if(this.calcValue <= this.resistorValues[i] && this.calcValue > this.resistorValues[i-1]) {
        this.resistor = this.resistorValues[i];
      }
      //console.log("element at position " + i + " is " + this.resistorValues[i])
    }
  }

  clearInput(){
    this.powerSupply = null;
    this.ledPowerDrop = null;
    this.ledCurrent = null;
    this.numberOfLeds = null;
  }
}
