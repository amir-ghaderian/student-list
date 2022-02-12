import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';


  detailFirst = "amaroooo"


  showingStudent = { firstName : '',
                    lastName : '',
                  };

  student1 = { firstName : 'ali',
                lastName : 'alavi',
             };

  student2 = { firstName : 'amir',
             lastName : 'hasani',
          }


  showSecond() {
    this.showingStudent = this.student2;
  }


  showFirst() {
    this.showingStudent = this.student1;
  }
}
