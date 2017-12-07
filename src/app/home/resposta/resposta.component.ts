import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';

import { FirstFormDatasService } from './../first-form/first-form-datas.service';

@Component({
  selector: 'wff-resposta',
  templateUrl: './resposta.component.html',
  styleUrls: ['./resposta.component.scss']
})

export class RespostaComponent implements OnInit {

  dadosPessoais
  respostas
  modalidades
  mostrarTransacoes: boolean = false
  mostrarContatos: boolean = false
  mostrarChecklists: boolean = false
  mostrarEmails: boolean = false

  numberPattern = /^[0-9]*$/

  transacoes = [
    {
      data1: '01/04/2017',
      data2: '12:30:40',
      dataAbertura1: '5923,5',
      dataAbertura2: '12:35:40',
      front: 'CC',
      score: '50',
      redes: '47',
      reglas: '50',
      solicitado: 'R$ 4500,00',
      transacao: 'AD41',
      conta: '012345678912345',
    },
    {
      data1: '01/04/2017',
      data2: '12:30:40',
      dataAbertura1: '5923,5',
      dataAbertura2: '12:35:40',
      front: 'CC',
      score: '85',
      redes: '97',
      reglas: '50',
      solicitado: 'R$ 4500,00',
      transacao: 'AD41',
      conta: '012345678912345',
    },
    {
      data1: '01/04/2017',
      data2: '12:30:40',
      dataAbertura1: '5923,5',
      dataAbertura2: '12:35:40',
      front: 'CC',
      score: '60',
      redes: '90',
      reglas: '50',
      solicitado: 'R$ 4500,00',
      transacao: 'AD41',
      conta: '012345678912345',
    },
    {
      data1: '01/04/2017',
      data2: '12:30:40',
      dataAbertura1: '5923,5',
      dataAbertura2: '12:35:40',
      front: 'CC',
      score: '70',
      redes: '47',
      reglas: '80',
      solicitado: 'R$ 4500,00',
      transacao: 'AD41',
      conta: '012345678912345',
    },
    {
      data1: '01/04/2017',
      data2: '12:30:40',
      dataAbertura1: '5923,5',
      dataAbertura2: '12:35:40',
      front: 'CC',
      score: '90',
      redes: '77',
      reglas: '100',
      solicitado: 'R$ 4500,00',
      transacao: 'AD41',
      conta: '012345678912345',
    }
  ]

  tiposOcorrencia = [
    'Alteração recente de telefone',
    'Caixa-Postal',
    'Chama e não atende',
    'Com sucesso',
    'Desconhecido no local',
    'Enviar SMS',
    'Fora de área',
    'Inexistente',
    'Não pôde atender',
    'Ocupado',
    'Recado',
    'Sem tom de discagem',
    'Telefone Fraudulento'
  ]

  tiposTelefone = [
    'Fixo',
    'Celular',
    'Telefone Comercial'
  ]

  step = 0;

  private respForm: FormGroup

  constructor(
    private fb: FormBuilder,
  ) {

    // criar o FORMULARIO
    this.respForm = fb.group({
      'parecerForm': fb.group({
        'resposta': [null, [Validators.required]],
        'modalidade': [null, [Validators.required]],
        'comentario': [null, [Validators.required]]
      }),
      'contatoForm': fb.group({
        'telefone': [null, [Validators.required]],
        'tipoOcorrencia': [null, [Validators.required]],
        'numero': [null, [Validators.required, Validators.pattern(this.numberPattern)]],
        'ocorrencia': [null, [Validators.required]]
      })
    })
  }

  ngOnInit() {

    this.dadosPessoais = FirstFormDatasService.getDadosPessoais()
    this.respostas = FirstFormDatasService.getRespostas()

    this.respForm.get('parecerForm.resposta').valueChanges.subscribe(respostas => {

      if (respostas.ID == 2 || respostas.ID == 8 || respostas.ID == 14) {

        this.modalidades = []
        return
      }

      this.modalidades = this.dadosPessoais.modalidades
    })
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep(accordion) {

    if (accordion == 'mostrarTransacoes') {

      this.step++;
      this.mostrarTransacoes = true
      return
    }

    if (accordion == 'mostrarContatos') {
   
      this.step++;
      this.mostrarContatos = true
      return
    }

    if (accordion == 'mostrarChecklists') {
      
      this.step++;
      this.mostrarChecklists = true
      return
    }

    this.step++;
    this.mostrarEmails = true
  }

  getColor(number) {  

    if (number <= 50) {

      return 'colorBlue'
    }

    if (number > 50 && number <= 85) {

      return 'colorOrange'
    }

    return 'colorRed'
  }
}
