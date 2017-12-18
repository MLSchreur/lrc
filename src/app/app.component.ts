import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  powerSupply: number;
  ledPowerDrop: number;
  ledCurrent: number;
  numberOfLeds: number;
  message: string;
  show: boolean;
  circuit: string;
  calcValue: number;
  resistorValues: number[];
  resistor: number;
  colourString: string;
  colourArray: string[];
  colour1: string;
  colour2: string;
  colour3: string;

  constructor() {
    this.resistorValues = [0, 0.5, 1, 1.2, 1.5, 1.8, 2.2, 2.7, 3.3, 3.9, 4.7, 6.8, 8.2, 10, 10.2, 10.5, 10.7, 11, 11.3, 11.5,
      11.8, 12, 12.1, 12.4, 12.7, 13, 13.3, 13.7, 14, 14.3, 14.7, 15, 15, 15.4, 15.8, 16.2, 16.5, 16.9,
      17.4, 17.8, 18, 18.2, 18.7, 19.1, 19.6, 20, 20.5, 21, 21.5, 22, 22.1, 22.6, 23.2, 23.7, 24.3, 24.9,
      25.5, 26.1, 26.7, 27, 27.4, 28, 28.7, 29.4, 30.1, 30.9, 31.6, 32.4, 33, 33.2, 34, 34.8, 35.7, 36.5,
      37.4, 38.3, 39, 39.2, 40.2, 41.2, 42.2, 43.2, 44.2, 45.3, 46.4, 47, 47.5, 48.7, 49.9, 51.1, 52.3,
      53.6, 54.9, 56, 56.2, 57.6, 59, 60.4, 61.9, 63.4, 64.9, 66.5, 68, 68.1, 69.8, 71.5, 73.2, 75, 76.8,
      78.7, 80.6, 82, 82.5, 84.5, 86.6, 88.7, 90.9, 93.1, 95.3, 97.6, 100, 120, 150, 181, 220, 270, 330,
      390, 470, 560, 680, 820, 1000, 1200, 1800, 2200, 2700, 3300, 3900, 4700, 5600, 6800, 8200, 10000,
      12000, 15000, 18000, 22000, 27000, 33000, 39000, 47000, 56000, 68000, 82000, 1000000, 1500000,
      1800000, 2200000, 2700000, 3300000, 3900000, 4700000];
    this.colourArray = ["Black", "Brown", "Red", "Orange", "Yellow", "Green", "Blue", "Purple", "Gray", "White"]
  }

  valueCheck() {
    if (this.powerSupply < 3 || this.powerSupply > 24 || isNaN(this.powerSupply) ||
        this.ledPowerDrop < 1.6 || this.ledPowerDrop > 4 || isNaN(this.ledPowerDrop) ||
        this.ledCurrent < 2 || this.ledCurrent > 70 || isNaN(this.ledCurrent) ||
        this.numberOfLeds < 1 || this.numberOfLeds > 99 || isNaN(this.numberOfLeds)) {
          this.message = "Please correct your input values";
          this.clearInput()
        } else this.calculate();
  }


  calculate() {
    if (this.circuit == "serie") {
      this.calcValue = (this.powerSupply - (this.ledPowerDrop * this.numberOfLeds)) / (this.ledCurrent / 1000);
    }
    if (this.circuit == "parallel") {
      this.calcValue = (this.powerSupply - this.ledPowerDrop) / (this.ledCurrent * this.numberOfLeds / 1000);
    }
    this.neededResistor();
  }

  neededResistor() {
    for (let i = 1; i < this.resistorValues.length; i++) {
      if (this.calcValue <= this.resistorValues[i] && this.calcValue > this.resistorValues[i - 1]) {
        this.resistor = this.resistorValues[i];
      }
    }
    this.colourCode();
  }

  colourCode() {
    this.colourString = this.resistor.toString();
    for (let i = 0; i < 2; i++) {
      this.colour1 = this.colourArray[this.colourString[0]];
      this.colour2 = this.colourArray[this.colourString[1]];
    }
    for (let i = 2; i < this.colourString.length; i++) {
      this.colour3 = this.colourArray[(this.colourString.length - 2)];
    }
  }

  clearInput() {
    this.powerSupply = null;
    this.ledPowerDrop = null;
    this.ledCurrent = null;
    this.numberOfLeds = null;
    this.circuit = '';
    this.calcValue = null;
    this.resistor = null;
    this.colour1 = "";
    this.colour2 = "";
    this.colour3 = "";
  }
}