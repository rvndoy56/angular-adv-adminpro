import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';

const routes:Routes = [
    { //Si queremos crear url en cadena colocamos en el path
      //El nombre de la ruta
        path:'dashboard',
        component:PagesComponent,
        children:[
          {path:'',component:DashboardComponent},
          {path:'progress',component:ProgressComponent},
          {path:'grafica1',component:Grafica1Component},
          {path:'',redirectTo:'/dashboard',pathMatch:'full'}
        ]
      },
]

@NgModule({
    declarations: [],
    imports: [
      RouterModule.forChild(routes)
    ],
    exports:[RouterModule]
  })
  export class PagesRoutingModule { }