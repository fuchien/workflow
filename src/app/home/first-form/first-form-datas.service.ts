import { Injectable } from '@angular/core';

@Injectable()
export class FirstFormDatasService {

  private static dadosPessoais: any

  constructor() { }

  static getDadosPessoais() {

    return this.dadosPessoais
  }

  static setDadosPessoais(dados) {

    this.dadosPessoais = dados
  }

}
