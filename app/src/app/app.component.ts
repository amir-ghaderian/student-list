import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  showingStudent = {
    firstName: '',
    lastName: '',
  };

  selectedId = 0;
  selectedLessonId=0;
  show = true;

  showigLesson = {
    lessonName: '',
    teacher: '',
   
  };

  @Input('class')
  klass: string | undefined;
  students: Array<any> = [
    { firstName: "ali", lastName: "ghaderian", age: 34, dateBirth: "1987", code: "0032244455", job: "designer", lesson: [1, 24], id: 11, picProfile: "ASDF.JPG" },
    { firstName: "amir", lastName: "ghaderian", age: 35, dateBirth: "1986", code: "0081125674", job: "front", lesson: [5, 24, 1, 3, 66], id: 4, picProfile: "1.jpeg" },
    { firstName: "aida", lastName: "amiri", age: 20, dateBirth: "2001", code: "0032244455", job: "Airline employee", lesson: [1, 5, 66], id: 31, picProfile: "2.jpeg" },
    { firstName: "houman", lastName: "ghaderian", age: 42, dateBirth: "1977", code: "0032244455", job: "CEO", lesson: [5, 46, 3], id: 5, picProfile: "ASD.PNG" },
    { firstName: "hani", lastName: "ghaderian", age: 47, dateBirth: "1977", code: "32488488493", job: "teacher", lesson: [5], id: 22, picProfile: "3.jpeg" }];

  classes: Array<any> = [
    { title: 'HTML5', id: 1, teacher: " mr behnam khani", capacity: 3, numberOfStudents: 0 },
    { title: 'CSS', id: 24, teacher: "mr behnam khani", capacity: 2, numberOfStudents: 0 },
    { title: 'GIT', id: 3, teacher: "mr houman ", capacity: 5, numberOfStudents: 0 },
    { title: 'ANGULAR', id: 46, teacher: "mr mosh hamedani", capacity: 40, numberOfStudents: 0 },
    { title: 'ENGLISH', id: 5, teacher: "mr hormoz fassih", capacity: 5, numberOfStudents: 0 },
    { title: 'JavaScript', id: 66, teacher: "mr amin rad", capacity: 3, numberOfStudents: 0 },
  ];



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
        this.selectedLessonId=this.classes[i].id;

      }
    }
  }
}
