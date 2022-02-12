import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-form',
  templateUrl: './detail-form.component.html',
  styleUrls: ['./detail-form.component.scss']
})
export class DetailFormComponent implements OnInit {

  constructor() { }

  @Input() student: any = { firstName : '',
                              lastName : '',
                            };

  // firstName = 'javad'

  ngOnInit(): void {
  }

}
