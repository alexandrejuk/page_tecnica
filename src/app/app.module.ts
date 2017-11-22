import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TecnicaComponent } from './tecnica/tecnica.component';
import { TecnicaService } from './tecnica/tecnica.service';
import { DndModule } from 'ng2-dnd';

@NgModule({
  declarations: [
    AppComponent,
    TecnicaComponent,
  ],
  imports: [
    BrowserModule,
    DndModule.forRoot(),
    FormsModule,
    HttpModule
  ],
  providers: [TecnicaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
