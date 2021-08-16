import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { SkillPageComponent } from './skill-page/skill-page.component';
import { EducationPageComponent } from './education-page/education-page.component';
import { ExperiencePageComponent } from './experience-page/experience-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftMenuComponent,
    AboutPageComponent,
    SkillPageComponent,
    EducationPageComponent,
    ExperiencePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
