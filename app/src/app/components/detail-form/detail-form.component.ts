import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-form',
  templateUrl: './detail-form.component.html',
  styleUrls: ['./detail-form.component.scss']
})
export class DetailFormComponent implements OnInit {

  constructor() { }

  @Input() student: any = {
    firstName: '',
    lastName: '',
  };
  newStudent = [];


  ngOnInit(): void {
  }
  addStudent() {
    console.log(this.student.firstName)
    ///how to push json object into array in typescript?
  }
}
