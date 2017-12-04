import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { FirstFormDatasService } from './../home/first-form/first-form-datas.service';

@Injectable()
export class HomeProsseguirGuard implements CanActivate {

  constructor(
    private router : Router
  ) {
  
  }

  canActivate() {

    let dados = FirstFormDatasService.getDadosPessoais()
    if (dados != undefined) {
        return true;
    }

    this.router.navigate(['/']);
    return false;    
  }
}

      
