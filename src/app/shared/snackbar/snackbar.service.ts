import { EventEmitter } from '@angular/core';

export class SnackbarService {

    notifier = new EventEmitter<string>()

    constructor() { }

    notify(message: string) {

        this.notifier.emit(message)
    }
}