import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from "../_modal"

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  isMasterSel: boolean = false;
  categorylist: any;
  checkedCategoryList: any;
  name="";
  classes: any = [
    { title: 'HTML5', id: 1, teacher: " mr behnam khani", capacity: 3, numberOfStudents: 0 },
    { title: 'CSS', id: 24, teacher: "mr behnam khani", capacity: 2, numberOfStudents: 0 },
    { title: 'GIT', id: 3, teacher: "mr houman ", capacity: 5, numberOfStudents: 0 },
    { title: 'ANGULAR', id: 46, teacher: "mr mosh hamedani", capacity: 40, numberOfStudents: 0 },
    { title: 'ENGLISH', id: 5, teacher: "mr hormoz fassih", capacity: 5, numberOfStudents: 0 },
    { title: 'JavaScript', id: 66, teacher: "mr amin rad", capacity: 3, numberOfStudents: 0 },
  ];


  
  @Input() newStudent: any = {
    firstName: '',
    lastName: '',
    job: '',
    dateBirth: '',
    code: '',

  };
  @Input() newLesson: any = {
    title: "",
    teacher: "",
    capacity: ""
  }
  
  showingStudent = {
    firstName: '',
    lastName: '',
    lesson:[]=[],
  };
  
  selectedId = 0;
  selectedLessonId = 0;
  show = true;

  showigLesson = {
    lessonName: '',
    teacher: '',
    capacity: 0,

  };
  

  handleClear() {
    this.newStudent.firstName = ' ';
    this.newStudent.lastName = ' ';
    this.newStudent.job = ' ';
    this.newStudent.dateBirth = ' ';
    this.newStudent.code = ' ';
    this.newLesson.title = "";
    this.newLesson.teacher = "";
    this.newLesson.capacity = "";
    this.checkUncheckAll();
    this.calculatingCapacity();

  }

  @Input('class')
  klass: string | undefined;
  students: Array<any> = [
    { firstName: "ali", lastName: "ghaderian", age: 34, dateBirth: "1987", code: "0032244455", job: "designer", lesson: [1, 24], id: 11, picProfile: "ASDF.JPG" },
    { firstName: "amir", lastName: "ghaderian", age: 35, dateBirth: "1986", code: "0081125674", job: "front", lesson: [5, 24, 1, 3, 66], id: 4, picProfile: "1.jpeg" },
    { firstName: "aida", lastName: "amiri ", age: 20, dateBirth: "2001", code: "0032244455", job: "Airline employee", lesson: [1, 5, 66], id: 31, picProfile: "2.jpeg" },
    { firstName: "houman", lastName: "ghaderian", age: 42, dateBirth: "1977", code: "0032244455", job: "CEO", lesson: [5, 46, 3], id: 5, picProfile: "ASD.PNG" },
    { firstName: "hani", lastName: "ghaderian", age: 47, dateBirth: "1977", code: "32488488493", job: "teacher", lesson: [5], id: 22, picProfile: "3.jpeg" }];

  


  showStudentById(id: number) {

    for (var i = 0; i < this.students.length; i++) {

      if (this.students[i].id === id) {
        this.showingStudent = this.students[i];
        this.selectedId = this.students[i].id;

     
      }

    }


  }
  showLessonById(id: number) {
    for (var i = 0; i < this.classes.length; i++) {
      if (this.classes[i].id === id) {
        this.showigLesson = this.classes[i];
        this.selectedLessonId = this.classes[i].id;

      }
    }
  }
  constructor(public modalService: ModalService) {

    this.getCheckedItemList();

    this.isMasterSel = false;

  }
    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }

  addStudent() {
    let customObj = this.newStudent;
    this.students.push({
      firstName: customObj.firstName, lastName: customObj.lastName, job: customObj.job, dateBirth: customObj.dateBirth, code: customObj.code, id: this.getUniqueId(),
      lesson: this.getCheckedItemList()
    })
    this.modalService.close("modal-1");

    this.handleClear();


  }
  addNewLesson() {
    let customObj = this.newLesson;
    this.classes.push({ title: customObj.title, teacher: customObj.teacher, capacity: customObj.capacity, id: this.getUniqueIdForClass(), numberOfStudent: 0 })
    this.modalService.close("modal-2");
    this.handleClear()
  }
  random() {
    let item = Math.floor(Math.random() * 101)
    return item;
  }
  isUnique(arr: string | any[], num: any) {
    let len = arr.length;
    let isUniq = true;
    let i: number;
    for (i = 0; i < len; i++) {
      if (arr[i] == num) {
        isUniq = false;
      }
    }
    return isUniq;
  }
  getUniqueId() {
    let existStudent = [];
    let j: number;
    for (j = 0; j < this.students.length; j++) {
      existStudent.push(this.students[j].id);
    }
    let num = this.random()
    while (!this.isUnique(existStudent, num)) {
      num = this.random()

    }

    return num;


  }
  getUniqueIdForClass() {
    let existClass = [];
    let k: number;
    for (k = 0; k < this.classes.length; k++) {
      existClass.push(this.classes[k].id);
    }
    let numId = this.random()
    while (!this.isUnique(existClass, numId)) {
      numId = this.random()
    }
    return numId;
  }
  calculatingCapacity(): void {
    for (let r = 0; r < this.students.length; r++) {
      for (let v = 0; v < this.students[r].lesson.length; v++) {
        for (let w = 0; w < this.classes.length; w++) {
          if (this.students[r].lesson[v] === this.classes[w].id) {
            this.classes[w].numberOfStudents++;

          }
        }
      }
    }
  }

  getCheckedItemList() {
    this.checkedCategoryList = [];
    for (var i = 0; i < this.classes.length; i++) {
      if (this.classes[i].isSelected)
        this.checkedCategoryList.push(this.classes[i].id);

    }

    console.log(this.checkedCategoryList)
    return this.checkedCategoryList;

  }
  checkUncheckAll() {
    for (var i = 0; i < this.classes.length; i++) {
      this.classes[i].isSelected = this.isMasterSel;
    }
    this.getCheckedItemList();
  }
}
