import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ContentService} from '../Services/content.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  projects: any[];

  constructor(
    private rout: Router,
    private getContent: ContentService
  ) { }
  ngOnInit() {
    this.getContent.getContent().subscribe((data) => {
      this.projects = data;
    });
  }

}
