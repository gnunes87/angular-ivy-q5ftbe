import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ClienteInserirComponent } from './clientes/cliente-inserir/cliente-inserir.component';
import { MatInputModule } from '@angular/material/input';
@NgModule({
  imports:      [ BrowserModule, FormsModule, MatInputModule ], 
  declarations: [ AppComponent, HelloComponent, ClienteInserirComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
