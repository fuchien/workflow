import { Component, OnInit, Input } from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'wff-grid-list',
  templateUrl: './grid-list.component.html',
  styleUrls: ['./grid-list.component.scss']
})
export class GridListComponent implements OnInit {

  @Input('dados') dados
  canais = ['Dog', 'Cat', 'Cow', 'Fox']

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

    if (this.dados.prosseguir) {

      this.buttonCorrigirDados = true
      return
    }
  }

  corrigirDados() {

    
  }

}