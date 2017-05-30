import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PeticionesService {
	public url: string;
	constructor(
		private _http: Http
	){
		this.url = 'https://jsonplaceholder.typicode.com/posts';	
	}

	getPrueba(){
		return 'Hola Mundo desde el servicio!!!!!!!';
	}

	getArticulos(){
		let _aux = this._http.get(this.url)
			.map(res => res.json());
		return _aux;
	}
}