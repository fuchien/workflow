import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { trigger, state, style, transition, animate } from '@angular/animations';

import { FirstFormDatasService } from './first-form-datas.service';
import { FirstFormService } from './first-form.service';
import { SnackbarService } from '../../shared/snackbar/snackbar.service';

@Component({
  selector: 'wff-first-form',
  templateUrl: './first-form.component.html',
  styleUrls: ['./first-form.component.scss'],
  animations: [
    trigger('btnAppeared', [
      state('ready', style({opacity: 1})),
      transition('void => ready', [
        style({opacity: 0, transform: 'scale(0)'}),
        animate('600ms 0s ease-in-out')
      ])
    ]),
    trigger('resultAppeared', [
      state('ready', style({opacity: 1})),
      transition('void => ready', [
        style({opacity: 0, transform: 'translateX(100%)'}),
        animate('300ms 0s ease-in-out')
      ])
    ])
  ]
})
export class FirstFormComponent implements OnInit {

  btnState = 'ready'
  resultState = 'ready'

  color = 'primary';
  mode = 'determinate';
  value = 0;
  bufferValue = 100;

  filaIsDisabled = true
  cpfIsDisabled = true
  podeLocalizar = true

  localizando: boolean = false
  isResult: boolean = false
  
  // canais = ['Dog', 'Cat', 'Cow', 'Fox']
  canais: Observable<any>
  filas: any
  pessoas: any
  filasSelecionadas: any
  filaId: number
  // canalSelected = this.canais[0]

  dadosPessoais: Dados

  private myForm: FormGroup
  private dadosCartoes = []

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private snackbarService: SnackbarService,
    private firstFormService: FirstFormService
  ) {

    // criar o FORMULARIO
    this.myForm = fb.group({
      'canal': [null, [Validators.required]],
      'filaForm': fb.group({
        'fila': [null, [Validators.required]]
      }),
      'cpfForm': fb.group({
        'cpf': ['', [Validators.required]]
      })
    })
  }

  ngOnInit() {

    this.myForm.get('filaForm.fila').disable()
    this.myForm.get('cpfForm.cpf').disable()

    this.canais = this.firstFormService.pegarCanais()
    this.firstFormService.pegarFilas()
      .subscribe(filas => this.filas = filas)

    this.firstFormService.pegarDados()
      .subscribe(dados => this.pessoas = dados)

    this.myForm.get('canal').valueChanges.subscribe(form => {
      
      if (form != null) {

        this.filasSelecionadas = this.filas.filter(fila => fila.canal_id == form.ID)
        this.value += 50
        this.myForm.get('filaForm.fila').enable()
        this.filaIsDisabled = false

        return
      }

      this.value = 0
      this.myForm.get('filaForm.fila').disable()
      this.filaIsDisabled = true
    })

    this.myForm.get('filaForm').valueChanges.subscribe(form => {
      
      if (form.fila != null) {

        this.filaId = form.fila.ID

        this.value += 50
        this.myForm.get('cpfForm.cpf').enable()
        this.cpfIsDisabled = false
        return
      }

      this.value = 50
      this.myForm.get('cpfForm.cpf').disable()
      this.cpfIsDisabled = true
    })

    this.myForm.get('cpfForm').valueChanges.subscribe(form => {

      if (form.cpf != '') {

        this.podeLocalizar = false
        return
      }
      this.podeLocalizar = true
    })
  }

  localizarUser(value, valid) {

    if (!valid) return

    let dados
    if (value.cpfForm.cpf.length <= 8) {

      dados = this.pessoas.find(pessoa => pessoa.pernumper == value.cpfForm.cpf)
    }

    if (value.cpfForm.cpf.length == 11) {
      
      dados = this.pessoas.find(pessoa => pessoa.cpf == value.cpfForm.cpf)
    }

    if (value.cpfForm.cpf.length == 16) {
      
      dados = this.pessoas.find(pessoa => pessoa.cnpj == value.cpfForm.cpf)
    }

    this.dadosPessoais = dados
    this.localizando = true
    this.isResult = true
    this.snackbarService.notify(`CPF/CNPJ inválida!`)
  }

  prosseguir() {

    if (!this.dadosPessoais.cartaoSelecionada) return

    FirstFormDatasService.setDadosPessoais(this.dadosPessoais)
    this.router.navigate(['/home/response'])
  }

  checarContas(contas) {

    this.dadosPessoais.cartaoSelecionada = contas
  }

}

export interface Dados {
  nome: string
  cpf: string
  cnpj: string
  pernumper: string
  segmento: string
  telefones: string
  emails: string
  cartao: string
  cartoes: Cartoes[]
  cartaoSelecionada: Cartoes
}

export interface Cartoes {
  agencia: string
  conta: string
}