import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clothes',
  templateUrl: './clothes.component.html',
  styleUrls: ['./clothes.component.scss']
})
export class ClothesComponent implements OnInit {
  clothes = [
    { title: 1110, images: ["assets/pic/1.jpg", "assets/pic/13.jpg"]  ,click:0},
    { title: 1111, images: ["assets/pic/2.jpg", "assets/pic/12.jpg"]  ,click:0},
    { title: 1112, images: ["assets/pic/3.jpg", "assets/pic/11.jpg"]  ,click:0},
    { title: 1113, images: ["assets/pic/4.jpg", "assets/pic/10.jpg"]  ,click:0},
    { title: 1114, images: ["assets/pic/5.jpg", "assets/pic/9.jpg", "assets/pic/5.jpg", "assets/pic/6.jpg"]  ,click:0},
    { title: 1115, images: ["assets/pic/6.jpg", "assets/pic/8.jpg"]  ,click:0},
    { title: 1116, images: ["assets/pic/7.jpg", "assets/pic/3.jpg"]  ,click:0},
    { title: 1117, images: ["assets/pic/8.jpg"]  ,click:0},
    { title: 1118, images: ["assets/pic/9.jpg", "assets/pic/5.jpg"]  ,click:0},
    { title: 1119, images: ["assets/pic/10.jpg", "assets/pic/4.jpg"]  ,click:0},
    { title: 1121, images: ["assets/pic/11.jpg", "assets/pic/3.jpg"]  ,click:0},
    { title: 1122, images: ["assets/pic/12.jpg", "assets/pic/2.jpg"]  ,click:0},
    { title: 1123, images: ["assets/pic/13.jpg", "assets/pic/1.jpg"]  ,click:0}
  ]
  currentImge: string[] = [];
  currentIndex: number[] = [];


  constructor() {
    for (var i = 0; i < this.clothes.length; i++) {
      this.currentImge.push(this.clothes[i].images[0]);
      this.currentIndex.push(0)
    }


  }

  ngOnInit(): void {
  }


  showingImage(id: number, clothesNum: number) {

    this.currentImge[clothesNum] = this.clothes[clothesNum].images[id];
    this.currentIndex[clothesNum] = id;

  }



  previousClothes(id: number, clothesNum: number) {
    this.clothes[clothesNum].click-=1;
    
     this.currentImge[clothesNum] = this.clothes[clothesNum].images[this.clothes[clothesNum].click];
     this.currentIndex[clothesNum] = this.clothes[clothesNum].click;
console.log(this.clothes[clothesNum].click)
    
  }


  nextClothes(id: number, clothesNum: number) {

  
    this.clothes[clothesNum].click+=1
    this.currentImge[clothesNum] = this.clothes[clothesNum].images[this.clothes[clothesNum].click];
    this.currentIndex[clothesNum] = this.clothes[clothesNum].click;
   

   
  }
}
