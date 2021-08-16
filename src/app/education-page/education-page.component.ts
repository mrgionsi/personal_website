import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education-page',
  templateUrl: './education-page.component.html',
  styleUrls: ['./education-page.component.scss']
})
export class EducationPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  expandcollapse(collapseId: string, event: any) {
    var a = document.getElementById(collapseId)?.classList;

    if (a?.contains("show")) {
      a?.remove("show");
      (<HTMLElement>event.path[2]).style.background = 'none';

    } else {
      a?.add("show");
      (<HTMLElement>event.path[2]).style.background = '#2d98f0';

    }
 
  }

}
