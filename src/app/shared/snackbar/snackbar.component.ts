import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations'

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/switchMap'

import { SnackbarService } from './snackbar.service';

@Component({
  selector: 'wff-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css'],
  animations: [
    trigger('snack-visibility', [
      state('hidden', style({
        opacity: 0,
        bottom: '0px',
      })),
      state('visible', style({
        opacity: 1,
        bottom: '20px',
      })),
      transition('hidden => visible', animate('500ms 0s ease-in')),
      transition('visible => hidden', animate('500ms 0s ease-out')),
    ])
  ]
})
export class SnackbarComponent implements OnInit {

  message: string = 'Hello there!'

  snackVisibility: string = 'hidden'

  constructor(
    private snackbarService: SnackbarService
  ) { }

  ngOnInit() {

    this.snackbarService.notifier
      .do(message => {
 
        this.message = message
        this.snackVisibility = 'visible'
      }).switchMap(message => Observable.timer(3000))
        .subscribe(timer => this.snackVisibility = 'hidden')
  }
}