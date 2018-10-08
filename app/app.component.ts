import { Component } from '@angular/core';
import {SharingService} from './Services/sharing.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appView';
  autorized: boolean;
  constructor(
    public share: SharingService
  ) {
    this.share.channel.subscribe((data) => {
      console.log(data);
    });
  }

}
