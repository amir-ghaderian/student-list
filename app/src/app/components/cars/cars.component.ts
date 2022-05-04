import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  carExhibition: any = [
    { company: "nissan", model: ["maxima", "skyline", "joke"], id: 1 },
    { company: "benz", model: ["e200", "cls", "sls"], id: 2 },
    { company: "bmw", model: ["i8", "320i", "X6"], id: 3 },
    { company: "ford", model: ["taurus", "mustang", "Escort"], id: 4 }
  ]
  selectedCar = 0;
  constructor() { }

  ngOnInit(): void {
  }


  showingCar(id: number) {
    console.log(id);
    for (var i = 0; i < this.carExhibition.length; i++) {
      if (this.carExhibition[i].id === id) {
        this.selectedCar = this.carExhibition[i].id; 
        console.log(this.carExhibition[i].company)
      }
    }
  }
}
