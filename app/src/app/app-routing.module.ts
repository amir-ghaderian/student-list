import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalComponent } from './components/animal/animal.component';
import { CarsComponent } from './components/cars/cars.component';
import { ClothesComponent } from './components/clothes/clothes.component';


const routes: Routes = [
{path:"animal",component:AnimalComponent},
{path:'cars',component:CarsComponent},
{path:"clothes",component:ClothesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[AnimalComponent,CarsComponent,ClothesComponent]
