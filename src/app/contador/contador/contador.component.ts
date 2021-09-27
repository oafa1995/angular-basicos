import { Component } from '@angular/core';

@Component({
    selector: 'app-contador', ///este es el que se manda a llmar como etiqueta HTML (instancia)
    template: `
 <h1>{{ titulo }}</h1>

<button (click)="acumular(base)" >+{{base}}</button>

<span>{{numero}}</span>

<button (click)="acumular (-base)">-{{base}}</button>
 
 `
})
export class ContadorComponent {
    titulo = 'Contador app';
    numero: number = 10;
    base: number = 5;

    //sumar(){
    // this.numero +=1;
    //}

    //restar(){
    //  this.numero -=1;
    //}

    acumular(valor: number) {
        this.numero += valor;
    }
}