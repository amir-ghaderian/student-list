import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clothes',
  templateUrl: './clothes.component.html',
  styleUrls: ['./clothes.component.scss']
})
export class ClothesComponent implements OnInit {
  clothes = [
    { title: 1110, img: "assets/pic/1.jpg" },
    { title: 1111, img: "assets/pic/2.jpg" },
    { title: 1112, img: "assets/pic/3.jpg" },
    { title: 1113, img: "assets/pic/4.jpg" },
    { title: 1114, img: "assets/pic/5.jpg" },
    { title: 1115, img: "assets/pic/6.jpg" },
    { title: 1116, img: "assets/pic/7.jpg" },
    { title: 1117, img: "assets/pic/8.jpg" },
    { title: 1118, img: "assets/pic/9.jpg" },
    { title: 1119, img: "assets/pic/10.jpg" },
    { title: 1121, img: "assets/pic/11.jpg" },
    { title: 1122, img: "assets/pic/12.jpg" },
    { title: 1123, img: "assets/pic/13.jpg" }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
