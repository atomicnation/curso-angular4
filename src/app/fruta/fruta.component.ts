import { Component} from '@angular/core';
import { Fruta } from './fruta';

@Component ({
	selector: 'fruta',
	templateUrl: './fruta.component.html'
})

export class FrutaComponent {
	public titulo = 'Componente de fruta';

	public nombre: string;
	public color: string;
	public forma: string;
	public frutas: Array<any>;

	constructor(){
		this.nombre = 'Pera';
		this.color = 'Verde';
		this.forma = 'Raruna';
		this.frutas = ['Pera', 'Naranja', 'Manzana'];	
	}

	ngOnInit(){

	}
}
