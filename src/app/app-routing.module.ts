import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EducationComponent } from './navigation-component-for-material/education/education.component';
import { InEqualityComponent } from './navigation-component-for-material/in-equality/in-equality.component';
import { HealthComponent } from './navigation-component-for-material/health/health.component';
import { WomenEmpowermentComponent } from './navigation-component-for-material/women-empowerment/women-empowerment.component';
import { CurrentProblemsComponent } from './navigation-component-for-material/current-problems/current-problems.component';
import { MatDatepickerModule } from '@angular/material/datepicker';


const routes: Routes = [
  // {
  //   path: 'lazy',
  // //  loadChildren: './lazy/lazy.module#LazyModule', // use this syntax for non-ivy or Angular 7 and below
  //  loadChildren : () => import('./lazy/lazy.module').then(m => m.LazyModule), // new dynamic import method
  // }
{
  path:'',
  component:EducationComponent
},
  {
    path:'education',
    component:EducationComponent
  },
  {
    path:'health',
    component: HealthComponent
  },
  {
    path:'inequality',
    component: InEqualityComponent
  },
  {
    path:'women-empowerment',
    component:WomenEmpowermentComponent
  },
  {
    path:'current-problems',
    component:CurrentProblemsComponent
  }
  // {
  //   path:'Add-comment/:useid',
  //   component:AddComponent
  // },
  // {
  //   path:'delete-comment/:userid',
  //   component:DeleteComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }