import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map'

@Injectable()
export class FirstFormService {

  constructor(
    private _http: HttpClient,
    private http: Http
  ) { }

  pegarCanais() {

    // return this._http.get(`http://www.mocky.io/v2/5a291f9d2e0000b01ba09a50`)
    return this.http.get(`https://www.mocky.io/v2/5a291f9d2e0000b01ba09a50`)
    .map(res => res.json())
  }

  pegarFilas() {

    // return this._http.get(`http://www.mocky.io/v2/5a2917352e00002e17a09a18`)
    return this.http.get(`https://www.mocky.io/v2/5a2917352e00002e17a09a18`)
      .map(res => res.json())
  }

  pegarDados() {

    // return this._http.get(`http://www.mocky.io/v2/5a2920912e0000021ca09a54`)
    return this.http.get(`https://www.mocky.io/v2/5a2920912e0000021ca09a54`)
      .map(res => res.json())
    // if (numero.length <= 8)
    //   return this._http.get(`http://localhost:3000/pessoas/?pernumper=${numero}`)
    
    // if (numero.length == 11)
    //   return this._http.get(`http://localhost:3000/pessoas/?cpf=${numero}`)

    // if (numero.length == 16)
    //   return this._http.get(`http://localhost:3000/pessoas/?cnpj=${numero}`)
    
  }

}
