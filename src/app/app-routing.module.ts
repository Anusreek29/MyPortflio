import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SampleComponent } from './sample/sample.component';


const routes: Routes = [{path:'About',component:AboutComponent},
{path:"Sample",component:SampleComponent},
{path:'Contact',component:ContactComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
