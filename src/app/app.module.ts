import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { DragulaModule } from 'ng2-dragula';
import { AppComponent } from './app.component';
import { TecnicaComponent } from './tecnica/tecnica.component';
import { TecnicaService } from './tecnica/tecnica.service';

@NgModule({
  declarations: [
    AppComponent,
    TecnicaComponent,
  ],
  imports: [
    BrowserModule,
    DragulaModule,
    HttpModule
  ],
  providers: [TecnicaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
