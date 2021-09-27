import { Component/*, OnInit*/ } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  //  styleUrls: ['./listado.component.css']
})
export class ListadoComponent /*implements OnInit*/ {

  /* constructor() { 
 
     console.log('constructor');//siempre se dispara primero el constructor
   }
 
   ngOnInit(): void {
   console.log('ngOnInit'); // este se dispara despues
   }
 
   */

  heroes: string[] = ['Spiderman', 'Hulk', 'Thor', 'Capitan america'];

  bandera = false;
  auxHeroeBorrado: string = '';

  borrarHeroe() {
    console.log('Borrando heroe');
    const heroeBorrado = this.heroes.pop();
    this.auxHeroeBorrado = heroeBorrado || '';
    console.log('Heroe Borrado ' + heroeBorrado);

    this.bandera = true;
   // this.auxHeroe='';
  }

}
