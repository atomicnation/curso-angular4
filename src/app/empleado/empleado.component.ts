import { Component } from '@angular/core';
import { Empleado } from './empleado';

@Component ({
	selector: 'empleado-tag',
	templateUrl: './empleado.component.html'
})

export class EmpleadoComponent {
	public titulo = 'Componente Empleados:';
	public empleado:Empleado;
	public trabajadores:Array<Empleado>;
	public color: string;
	public color_seleccionado: string;

	constructor() {

		this.empleado = new Empleado('David López', 45, 'Cocinero', true);
		this.trabajadores = [
			new Empleado('Manolo Matínez', 35, 'Administrativo', true),
			new Empleado('Ana López', 25, 'Cocinera', true),
			new Empleado('Víctor Robles', 66, 'Programador', false)
		];
		this.color = 'green';
		this.color_seleccionado = '#ccc';
	}

	private logColorSeleccionado(){
		console.log(this.color_seleccionado);
	}

	ngOnInit(){
		console.log(this.empleado);
		console.log(this.trabajadores);
	}
}