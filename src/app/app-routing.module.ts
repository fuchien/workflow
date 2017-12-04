import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { FirstFormComponent } from './home/first-form/first-form.component';
import { RespostaComponent } from './home/resposta/resposta.component';

import { HomeProsseguirGuard } from './guards/home-prosseguir.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: FirstFormComponent
      },
      {
        path: 'response',
        component: RespostaComponent,
        canActivate: [HomeProsseguirGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
