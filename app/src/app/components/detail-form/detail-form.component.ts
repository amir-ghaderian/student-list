import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-form',
  templateUrl: './detail-form.component.html',
  styleUrls: ['./detail-form.component.scss']
})
export class DetailFormComponent implements OnInit {

  constructor() { }
  students: Array<any> = [
    { firstName: "ali", lastName: "ghaderian", age: 34, dateBirth: "1987", code: "0032244455", job: "designer", lesson: [1, 24], id: 11, picProfile: "ASDF.JPG" },
    { firstName: "amir", lastName: "ghaderian", age: 35, dateBirth: "1986", code: "0081125674", job: "front", lesson: [5, 24, 1, 3, 66], id: 4, picProfile: "1.jpeg" },
    { firstName: "aida", lastName: "amiri", age: 20, dateBirth: "2001", code: "0032244455", job: "Airline employee", lesson: [1, 5, 66], id: 31, picProfile: "2.jpeg" },
    { firstName: "houman", lastName: "ghaderian", age: 42, dateBirth: "1977", code: "0032244455", job: "CEO", lesson: [5, 46, 3], id: 5, picProfile: "ASD.PNG" },
    { firstName: "hani", lastName: "ghaderian", age: 47, dateBirth: "1977", code: "32488488493", job: "teacher", lesson: [5], id: 22, picProfile: "3.jpeg" }];

  @Input() student: any = { firstName : '',
                              lastName : '',
                            };

  // firstName = 'javad'

  ngOnInit(): void {
  }

}
