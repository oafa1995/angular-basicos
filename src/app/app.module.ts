import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
//import { ContadorComponent } from './contador/contador/contador.component';
import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';


@NgModule({ //este es un decorador
  declarations: [
    AppComponent,
  //  ContadorComponent,//aqui se tiene que declar para poderlo llamar
 
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule // aqui se manda a llamar el modulo heroe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
