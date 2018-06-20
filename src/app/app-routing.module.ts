import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { EducationComponent } from './components/education/education.component';
import { ProjectComponent } from './components/project/project.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes  = [
{path:'' , component: HomeComponent},
{path:'about' , component: AboutComponent},
{path:'education' , component: EducationComponent},
{path:'projects' , component: ProjectComponent},
{path:'experience' , component: ExperienceComponent},
{path:'contact' , component: ContactComponent},
]

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
