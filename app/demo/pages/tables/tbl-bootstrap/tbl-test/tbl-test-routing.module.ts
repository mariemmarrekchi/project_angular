import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TestenvirComponent } from './testenvir/testenvir.component';


const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'environment',
    component:TestenvirComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TblTestRoutingModule { }
