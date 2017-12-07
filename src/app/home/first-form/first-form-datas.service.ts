import { Injectable } from '@angular/core';

@Injectable()
export class FirstFormDatasService {

  private static dadosPessoais: any
  private static respostas: any

  constructor() { }

  static getDadosPessoais() {

    return this.dadosPessoais
  }

  static setDadosPessoais(dados) {

    this.dadosPessoais = dados
  }

  static getRespostas() {
    
    return this.respostas
  }

  static setRespostas(respostas) {

    this.respostas = respostas
  }

}
