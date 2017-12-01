import { Component, OnInit } from '@angular/core';

import { FirstFormDatasService } from './../first-form/first-form-datas.service';

@Component({
  selector: 'wff-resposta',
  templateUrl: './resposta.component.html',
  styleUrls: ['./resposta.component.css']
})
export class RespostaComponent implements OnInit {

  dadosPessoais

  constructor() { }

  ngOnInit() {

    this.dadosPessoais = FirstFormDatasService.getDadosPessoais()
  }

}
