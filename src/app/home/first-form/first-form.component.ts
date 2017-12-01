import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'wff-first-form',
  templateUrl: './first-form.component.html',
  styleUrls: ['./first-form.component.css']
})
export class FirstFormComponent implements OnInit {

  color = 'primary';
  mode = 'determinate';
  value = 0;
  bufferValue = 100;
  filaIsDisabled = true
  cpfIsDisabled = true
  localizando: boolean = false
  isResult: boolean = false
  
  canais = ['Dog', 'Cat', 'Cow', 'Fox']
  canalSelected = this.canais[0]

  dadosPessoais = {
      nome: 'Lavinia Cardoso Ferreira',
      cpf: '416.570.459-86',
      agencia: '0183',
      conta: '010034362',
      pernumper: '392123861',
      segmento: 'Van Gogh',
      telefones: ['11 1234-5678', '11 98765-4321'],
      emails: ['laviniacardoso@test.com', 'laviniaferreira@test.com']
  }

  private canalForm: FormGroup
  private filaForm: FormGroup

  constructor(
    private fb: FormBuilder
  ) {

    // criar o FORMULARIO
    this.canalForm = fb.group({
      'canal': [null, [Validators.required]],
      'modalidade': [null, [Validators.required]]
    })

    this.filaForm = fb.group({
      'fila': [null, [Validators.required]]
    })
  }

  ngOnInit() {

    this.canalForm.valueChanges.subscribe(form => {
      
      if (form.canal != null && form.modalidade != null) {

        this.value = 50
        this.filaIsDisabled = false
        return
      }

      this.value = 0
      this.filaIsDisabled = true
    })

    this.filaForm.valueChanges.subscribe(form => {
      
      if (form.fila != null) {

        this.value = 100
        this.cpfIsDisabled = false
        return
      }

      this.value = 50
      this.cpfIsDisabled = true
    })
  }

  localizarUser() {
    
    this.localizando = true
    this.isResult = true
  }

}
