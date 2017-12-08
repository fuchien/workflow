import { Component, OnInit, Input } from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'wff-grid-list',
  templateUrl: './grid-list.component.html',
  styleUrls: ['./grid-list.component.scss'],
  animations: [
    trigger('dadosAppeared', [
      state('ready', style({opacity: 1})),
      transition('void => ready', [
        style({opacity: 0, transform: 'scale(0)'}),
        animate('500ms 0s ease-in-out')
      ])
    ])
  ]
})
export class GridListComponent implements OnInit {

  dadosState = 'ready'
  isEdit: boolean = false

  @Input('dados') dados
  documento: Documento = new Documento()

  buttonCorrigirDados: boolean = false

  private contaForm: FormGroup

  constructor(
    private fb: FormBuilder
  ) {

    this.contaForm = fb.group({
      'conta': [null, [Validators.required]]
    })
  }

  ngOnInit() {

    if (this.dados.cpf) {

      this.documento.nome = 'CPF'
      this.documento.numero = this.dados.cpf
    }

    if (this.dados.cnpj) {
      
      this.documento.nome = 'CNPJ'
      this.documento.numero = this.dados.cnpj
    }

    if (this.dados.prosseguir) {

      this.buttonCorrigirDados = true
      return
    }
  }

  alterarDados() {

    this.isEdit = true
  }

  salvarDados() {

    this.isEdit = false
  }

}

export class Documento {
  nome: string
  numero: string
}