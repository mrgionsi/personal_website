import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-workexperience-timeline',
  templateUrl: './workexperience-timeline.component.html',
  styleUrls: ['./workexperience-timeline.component.scss']
})
export class WorkexperienceTimelineComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }


 
}
