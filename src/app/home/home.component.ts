import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  color = 'primary';
  mode = 'determinate';
  value = 0;
  bufferValue = 100;
  filaIsDisabled = true
  cpfIsDisabled = true
  localizando: boolean = false

  canais = ['Dog', 'Cat', 'Cow', 'Fox']

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

    setTimeout(() => this.localizando = false, 3000)
  }
}