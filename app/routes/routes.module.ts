import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {AutorizationComponent} from '../autorization/autorization.component';
import { ContentComponent } from '../content/content.component';
import {SignUpComponent} from '../sign-up/sign-up.component';

const routes = [
  {path : '', component : AutorizationComponent},
  {path : 'content', component : ContentComponent},
  {path : 'signUp', component : SignUpComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class RoutesModule { }
