import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  @Input('proj') proj: any;
  project : any;
  constructor() { }

  ngOnInit() {
    this.project = JSON.parse(this.proj);
    console.log(this.project);
  }

}
