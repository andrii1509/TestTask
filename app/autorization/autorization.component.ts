import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import {GetUserService} from '../Services/get-user.service';
import {SharingService} from '../Services/sharing.service';

@Component({
  selector: 'app-autorization',
  templateUrl: './autorization.component.html',
  styleUrls: ['./autorization.component.css']
})
export class AutorizationComponent implements OnInit {

  authorized = false;

  constructor(
    private rout: Router,
    private getUser: GetUserService,
    private share: SharingService
  ) { }

  ngOnInit() {
  }

  sendForm(form: NgForm) {
    this.getUser.sendLogIn(form.value).subscribe((data) => {
      console.log(data);
      if (data.autorization === true) {
        this.rout.navigate(['content'], form.value)
          .then(() => {
            console.log('success');
            this.authorized = true;
            this.share.channel.next(this.authorized);
            this.getUser.getUser().subscribe(dat => {
            });
          });
      }
    });
  }
}
