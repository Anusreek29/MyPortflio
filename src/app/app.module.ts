import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { SampleComponent } from './sample/sample.component';
import { ContactComponent } from './contact/contact.component';
import { LandComponent } from './land/land.component';
import { ServiceComponent } from './service/service.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TestimonyComponent } from './testimony/testimony.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    SampleComponent,
    ContactComponent,
    LandComponent,
    ServiceComponent,
    HeaderComponent,
    FooterComponent,
    TestimonyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
