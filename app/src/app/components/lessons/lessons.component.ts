import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.scss']
})
export class LessonsComponent implements OnInit {

  constructor() { }
  @Input() lesson: any = { lessonName : '',
                              teacher : '',
                               id:0
                            };
  ngOnInit(): void {
  }

}
