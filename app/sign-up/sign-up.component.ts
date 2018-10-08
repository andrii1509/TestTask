import { Component, OnInit } from '@angular/core';
import {GetUserService} from '../Services/get-user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(
    private createUser: GetUserService,
    private rout: Router
  ) { }

  ngOnInit() {
  }
  sendForm(form) {
    this.createUser.sendSignUp(form.value).subscribe(message => {
      console.log(message);
      this.rout.navigate(['']);
    });
  }
}
