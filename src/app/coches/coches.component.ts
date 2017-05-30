import { Component } from '@angular/core';
import { Coche } from './coche';
import { PeticionesService } from '../services/peticiones.service';


@Component({
	selector: 'coches',
	templateUrl: './coches.component.html',
	providers: [ PeticionesService]
})
export class CochesComponent{
	public coche: Coche;
	public lista_coches: Array<Coche>;
	public articulos;

	constructor(
		private _peticionesService: PeticionesService
	){
		this.coche = new Coche("","","");
		this.lista_coches = [
			new Coche("Seat Panda", "120", "Blanco"),
			new Coche("Renault Clio", "110", "Azul"),
		];
	}

	ngOnInit(){
		console.log(this._peticionesService.getPrueba());
		this._peticionesService.getArticulos().subscribe(
			result => {
				this.articulos = result;
				if(!this.articulos){
					console.log("Error en el servidor");
				}
			},
			error => {
				var e = <any>error;
				console.log(e);
			}
		)
	}

	onSubmit(){
		this.lista_coches.push(this.coche);
		this.coche = new Coche("","","");
	}

}