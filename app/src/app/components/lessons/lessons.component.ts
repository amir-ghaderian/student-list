import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from '../_modal/modal.service';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.scss']
})
export class LessonsComponent implements OnInit {

  
  @Input() lesson: any = { lessonName : '',
                              teacher : '',
                               id:0
                            };
  ngOnInit(): void {
  }
  constructor(public modalService: ModalService) { }
}
