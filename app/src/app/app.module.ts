import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ModalModule } from './components/_modal';
import { AppRoutingModule ,routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DetailStudentComponent } from './detail-student/detail-student.component';
import { FormsModule } from '@angular/forms';
import { DetailFormComponent } from './components/detail-form/detail-form.component';
import { LessonsComponent } from './components/lessons/lessons.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DetailStudentComponent,
    DetailFormComponent,
    LessonsComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    ModalModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
