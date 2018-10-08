import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AutorizationComponent } from './autorization/autorization.component';
import { ContentComponent } from './content/content.component';
import {Form, FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {RoutesModule} from "./routes/routes.module";
import {HttpClientModule} from "@angular/common/http";
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProjectComponent } from './content/project/project.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NavigationOutComponent } from './navigation-out/navigation-out.component';

@NgModule({
  declarations: [
    AppComponent,
    AutorizationComponent,
    ContentComponent,
    SignUpComponent,
    ProjectComponent,
    NavigationComponent,
    NavigationOutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    RoutesModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
