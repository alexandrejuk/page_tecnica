import { AssociarService } from './associar/associar.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AssociarComponent } from './associar/associar.component';

@NgModule({
  declarations: [
    AppComponent,
    AssociarComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [AssociarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
