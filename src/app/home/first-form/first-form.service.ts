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

    return this.http.get(`https://www.mocky.io/v2/5a2920912e0000021ca09a54`)
      .map(res => res.json())    
  }

  pegarRespostas() {
    
    return this.http.get(`https://www.mocky.io/v2/5a295c7e2e0000012aa09beb`)
      .map(res => res.json())    
  }

  pegarModalidades() {
    
    return this.http.get(`https://www.mocky.io/v2/5a29554f2e00009f25a09bb6`)
      .map(res => res.json())    
  }
}
