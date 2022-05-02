import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  carExhibition: any = [
    { company: "nissan", model: ["maxima", "skyline", "joke"] },
    { company: "benz", model: ["e200", "cls", "sls"] },
    { company: "bmw", model: ["i8", "320i", "X6"] },
    { company: "ford", model: ["taurus", "mustang", "Escort"] }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
