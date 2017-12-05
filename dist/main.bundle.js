webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_first_form_first_form_component__ = __webpack_require__("../../../../../src/app/home/first-form/first-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_resposta_resposta_component__ = __webpack_require__("../../../../../src/app/home/resposta/resposta.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__guards_home_prosseguir_guard__ = __webpack_require__("../../../../../src/app/guards/home-prosseguir.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */],
        children: [
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_3__home_first_form_first_form_component__["a" /* FirstFormComponent */],
                data: {
                    animation: 'home'
                }
            },
            {
                path: 'response',
                component: __WEBPACK_IMPORTED_MODULE_4__home_resposta_resposta_component__["a" /* RespostaComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_5__guards_home_prosseguir_guard__["a" /* HomeProsseguirGuard */]],
                data: {
                    animation: 'response'
                }
            }
        ]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'wff';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'wff-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material_toolbar__ = __webpack_require__("../../../material/esm5/toolbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material_icon__ = __webpack_require__("../../../material/esm5/icon.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_form_field__ = __webpack_require__("../../../material/esm5/form-field.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material_input__ = __webpack_require__("../../../material/esm5/input.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_select__ = __webpack_require__("../../../material/esm5/select.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material_button__ = __webpack_require__("../../../material/esm5/button.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material_progress_bar__ = __webpack_require__("../../../material/esm5/progress-bar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_material_progress_spinner__ = __webpack_require__("../../../material/esm5/progress-spinner.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_material_tooltip__ = __webpack_require__("../../../material/esm5/tooltip.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_material_expansion__ = __webpack_require__("../../../material/esm5/expansion.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_material_list__ = __webpack_require__("../../../material/esm5/list.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__home_toolbar_toolbar_component__ = __webpack_require__("../../../../../src/app/home/toolbar/toolbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__home_first_form_first_form_component__ = __webpack_require__("../../../../../src/app/home/first-form/first-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__home_footer_footer_component__ = __webpack_require__("../../../../../src/app/home/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__home_first_form_grid_list_grid_list_component__ = __webpack_require__("../../../../../src/app/home/first-form/grid-list/grid-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__home_resposta_resposta_component__ = __webpack_require__("../../../../../src/app/home/resposta/resposta.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__home_first_form_first_form_datas_service__ = __webpack_require__("../../../../../src/app/home/first-form/first-form-datas.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__guards_home_prosseguir_guard__ = __webpack_require__("../../../../../src/app/guards/home-prosseguir.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_17__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_18__home_toolbar_toolbar_component__["a" /* ToolbarComponent */],
            __WEBPACK_IMPORTED_MODULE_19__home_first_form_first_form_component__["a" /* FirstFormComponent */],
            __WEBPACK_IMPORTED_MODULE_20__home_footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_21__home_first_form_grid_list_grid_list_component__["a" /* GridListComponent */],
            __WEBPACK_IMPORTED_MODULE_22__home_resposta_resposta_component__["a" /* RespostaComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_16__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material_toolbar__["a" /* MatToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material_icon__["a" /* MatIconModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material_form_field__["c" /* MatFormFieldModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material_input__["a" /* MatInputModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material_select__["a" /* MatSelectModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material_button__["a" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_material_progress_bar__["a" /* MatProgressBarModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_material_progress_spinner__["a" /* MatProgressSpinnerModule */],
            __WEBPACK_IMPORTED_MODULE_12__angular_material_tooltip__["a" /* MatTooltipModule */],
            __WEBPACK_IMPORTED_MODULE_13__angular_material_expansion__["a" /* MatExpansionModule */],
            __WEBPACK_IMPORTED_MODULE_14__angular_material_list__["a" /* MatListModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_23__home_first_form_first_form_datas_service__["a" /* FirstFormDatasService */],
            __WEBPACK_IMPORTED_MODULE_24__guards_home_prosseguir_guard__["a" /* HomeProsseguirGuard */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/guards/home-prosseguir.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeProsseguirGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_first_form_first_form_datas_service__ = __webpack_require__("../../../../../src/app/home/first-form/first-form-datas.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeProsseguirGuard = (function () {
    function HomeProsseguirGuard(router) {
        this.router = router;
    }
    HomeProsseguirGuard.prototype.canActivate = function () {
        var dados = __WEBPACK_IMPORTED_MODULE_2__home_first_form_first_form_datas_service__["a" /* FirstFormDatasService */].getDadosPessoais();
        if (dados != undefined) {
            return true;
        }
        this.router.navigate(['/']);
        return false;
    };
    return HomeProsseguirGuard;
}());
HomeProsseguirGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], HomeProsseguirGuard);

var _a;
//# sourceMappingURL=home-prosseguir.guard.js.map

/***/ }),

/***/ "../../../../../src/app/home/first-form/first-form-datas.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirstFormDatasService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FirstFormDatasService = (function () {
    function FirstFormDatasService() {
    }
    FirstFormDatasService.getDadosPessoais = function () {
        return this.dadosPessoais;
    };
    FirstFormDatasService.setDadosPessoais = function (dados) {
        this.dadosPessoais = dados;
    };
    return FirstFormDatasService;
}());
FirstFormDatasService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], FirstFormDatasService);

//# sourceMappingURL=first-form-datas.service.js.map

/***/ }),

/***/ "../../../../../src/app/home/first-form/first-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"forms\">\n  <div class=\"inputs\">\n    <form class=\"example-form\" [formGroup]=\"canalForm\">\n      <div class=\"title\">\n        <h4>Canal</h4>\n        <mat-form-field class=\"example-full-width\">\n          <mat-select formControlName=\"canal\" [(ngModel)]=\"canalSelected\">\n            <mat-option>--</mat-option>\n            <mat-option *ngFor=\"let canal of canais\" [value]=\"canal\">\n              {{canal}}\n            </mat-option>\n          </mat-select>\n          <!-- <mat-icon matSuffix>keyboard_arrow_down</mat-icon> -->\n        </mat-form-field>\n      </div>\n      <div class=\"title\">\n        <h4>Modalidade</h4>\n        <mat-form-field class=\"example-full-width\">\n          <mat-select placeholder=\"Selecione a modalidade\" formControlName=\"modalidade\">\n            <mat-option>--</mat-option>\n            <mat-option *ngFor=\"let canal of canais\" [value]=\"canal\">\n              {{canal}}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n      </div>\n    </form>\n  </div>\n  <div class=\"inputs fila\" [class.disabled]=\"filaIsDisabled\">\n    <form class=\"example-form\" [formGroup]=\"filaForm\">\n      <div class=\"title\">\n        <h4>Fila</h4>\n        <mat-form-field class=\"example-full-width\">\n          <mat-select placeholder=\"Selecione a fila\" formControlName=\"fila\">\n            <mat-option>--</mat-option>\n            <mat-option *ngFor=\"let canal of canais\" [value]=\"canal\">\n              {{canal}}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n      </div>\n      <div class=\"title\">\n        <h4 *ngIf=\"flow2\">Resumo da fila</h4>\n        <p *ngIf=\"flow2\">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>\n      </div>\n    </form>\n  </div>\n  <div class=\"inputs\" [class.disabled]=\"cpfIsDisabled\" #localizar>\n    <form class=\"example-form\" [formGroup]=\"cpfForm\">\n      <div class=\"title\">\n        <h4>cpf ou cnpj</h4>\n        <mat-form-field class=\"example-full-width\">\n          <input matInput formControlName=\"cpf\" placeholder=\"Ex.: 123.123.123-10\">\n        </mat-form-field>\n      </div>\n      <div class=\"localizar\">\n        <button mat-raised-button color=\"primary\" matTooltip=\"Localizar o usuário\" class=\"btnLocalizar\"\n          *ngIf=\"!localizando\" [disabled]=\"!podeLocalizar\" (click)=\"localizarUser()\">\n          Localizar\n        </button>\n        <mat-spinner class=\"spinner\" color=\"primary\" *ngIf=\"localizando\" diameter=\"30\" strokeWidth=\"5\"></mat-spinner>\n      </div>\n    </form>\n  </div>\n</div>\n\n<div class=\"flows\" [class.isresult]=\"isResult\">\n  <div class=\"flow\" *ngIf=\"!isResult\">\n    <div class=\"passos\">\n      <div class=\"passo\" [style.color]=\"filaIsDisabled ? '#33CCCC' : '#191919'\">\n        <p>Comece selecionando o canal e modalidades adequados</p>\n      </div>\n      <div class=\"passo passoFila\" [style.color]=\"cpfIsDisabled ? '#33CCCC' : '#191919'\" *ngIf=\"!filaIsDisabled\">\n        <p>Selecione a fila adequada</p>\n      </div>\n      <div class=\"passo passoCpf\" [style.color]=\"podeLocalizar ? '#33CCCC' : '#191919'\" *ngIf=\"!cpfIsDisabled\">\n        <p>Digite o cpf ou cnpj</p>\n      </div>\n    </div>\n    <section class=\"example-section\">\n      <mat-progress-bar\n          class=\"example-margin\"\n          [color]=\"color\"\n          [mode]=\"mode\"\n          [value]=\"value\"\n          [bufferValue]=\"bufferValue\">\n      </mat-progress-bar>\n    </section>\n  </div>\n\n  <div class=\"result\" *ngIf=\"isResult\">\n    <div class=\"result-title\">\n      <h3>Resultado</h3>\n    </div>\n    <div class=\"result-body\">\n      <wff-grid-list [dados]='dadosPessoais' class=\"result-body-list\"></wff-grid-list>\n    </div>\n    <div class=\"result-processar\">\n        <button mat-raised-button color=\"primary\" matTooltip=\"Prosseguir\"\n        (click)=\"prosseguir()\">\n        Prosseguir\n      </button>\n      <!-- <mat-spinner class=\"spinner\" color=\"warn\" *ngIf=\"localizando\" diameter=\"30\" strokeWidth=\"5\"></mat-spinner> -->\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/first-form/first-form.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* FORMS */\n.forms {\n  margin: 0 auto;\n  min-width: 90vw;\n  max-width: 90vw;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  border: 1px solid #d8d8d8; }\n  .forms .inputs {\n    margin: auto;\n    min-width: 30vw;\n    max-width: 30vw;\n    /* min-height: 34vh; */\n    min-height: 216px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n  .forms .fila {\n    border-left: 1px solid #d8d8d8;\n    border-right: 1px solid #d8d8d8; }\n  .forms .inputs .example-form {\n    min-height: 25vh;\n    max-height: 25vh;\n    min-width: 80%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: column;\n            flex-flow: column;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start; }\n    .forms .inputs .example-form .title {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-flow: column;\n              flex-flow: column;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      min-height: 50%; }\n      .forms .inputs .example-form .title h4 {\n        margin: 0;\n        height: 15px;\n        font-family: \"Open Sans\";\n        font-weight: bold;\n        font-size: 11px;\n        text-align: left;\n        color: #191919;\n        text-transform: uppercase; }\n      .forms .inputs .example-form .title p {\n        width: 25vw;\n        font-family: LucidaGrande;\n        font-size: 11px;\n        line-height: 1.45;\n        text-align: left;\n        color: #191919;\n        word-wrap: break-word;\n        margin: 0;\n        margin-top: 1vh; }\n    .forms .inputs .example-form .localizar {\n      width: 100%;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center; }\n      .forms .inputs .example-form .localizar .btnLocalizar {\n        width: 100%;\n        border-radius: 21px;\n        background-color: #424455;\n        font-family: OpenSans;\n        font-size: 14px;\n        text-align: center;\n        color: #ffffff;\n        text-transform: uppercase;\n        height: 40px;\n        margin-top: 2vh; }\n      .forms .inputs .example-form .localizar .spinner {\n        margin-top: 6vh; }\n    .forms .inputs .example-form .example-full-width {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-flow: column;\n              flex-flow: column;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      min-width: 100%;\n      padding: 0; }\n      .forms .inputs .example-form .example-full-width input {\n        padding: 0; }\n\n/* FLOWS */\n.flows {\n  margin: 0 auto;\n  min-width: 90vw;\n  max-width: 90vw;\n  /* min-height: 50vh; */\n  min-height: 431px;\n  max-height: 431px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  border-left: 1px solid #d8d8d8;\n  border-right: 1px solid #d8d8d8;\n  border-bottom: 1px solid #d8d8d8;\n  border-radius: 4px;\n  background-color: #ffffff;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.15); }\n  .flows .flow {\n    margin-top: 150px;\n    min-width: 80vw;\n    max-width: 80vw;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: column;\n            flex-flow: column;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n\n.disabled {\n  cursor: not-allowed;\n  background-color: rgba(0, 0, 0, 0.1);\n  color: #FAFAFA;\n  z-index: 10; }\n\n.flows .flow .passos {\n  min-width: 95%;\n  max-width: 95%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .flows .flow .passos .passo {\n    text-align: center;\n    max-width: 22%;\n    word-wrap: break-word;\n    font-family: OpenSans;\n    font-size: 0.8rem;\n    font-weight: bold;\n    text-transform: uppercase; }\n  .flows .flow .passos .passoFila {\n    margin-left: 19%; }\n  .flows .flow .passos .passoCpf {\n    margin-left: 21%; }\n\n.example-section {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 2vh;\n  min-width: 75%; }\n\n.flows .flow .example-margin {\n  margin: 0 10px;\n  min-width: 75%;\n  height: 2px; }\n\n/* RESULTS */\n.isresult {\n  background-color: #2a4751; }\n\n.flows .result {\n  min-width: 98%;\n  /* min-height: 45vh;\r\n    max-height: 45vh; */\n  max-height: 340px;\n  min-height: 340px;\n  margin: 0 auto;\n  margin-top: 30.5px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column;\n          flex-flow: column;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n  .flows .result .result-title {\n    color: #fff;\n    font-family: OpenSans;\n    font-size: 20px;\n    font-weight: 300;\n    line-height: 1.2;\n    text-align: left;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n    .flows .result .result-title h3 {\n      margin: 0; }\n  .flows .result .result-body {\n    min-width: 100%;\n    border-radius: 4px;\n    /* min-height: 23vh; */\n    min-height: 217px;\n    background-color: #ffffff;\n    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.09);\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between; }\n  .flows .result .result-body-list {\n    min-width: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between; }\n  .flows .result .result-processar {\n    min-width: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n    .flows .result .result-processar button {\n      width: 25%;\n      border-radius: 21px;\n      background-color: #fff;\n      font-family: OpenSans;\n      font-size: 14px;\n      text-align: center;\n      color: #424455;\n      text-transform: uppercase;\n      height: 40px;\n      margin-top: -15px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/first-form/first-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirstFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__first_form_datas_service__ = __webpack_require__("../../../../../src/app/home/first-form/first-form-datas.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FirstFormComponent = (function () {
    function FirstFormComponent(fb, router) {
        this.fb = fb;
        this.router = router;
        this.color = 'primary';
        this.mode = 'determinate';
        this.value = 0;
        this.bufferValue = 100;
        this.filaIsDisabled = true;
        this.cpfIsDisabled = true;
        this.podeLocalizar = true;
        this.localizando = false;
        this.isResult = false;
        this.canais = ['Dog', 'Cat', 'Cow', 'Fox'];
        this.canalSelected = this.canais[0];
        this.dadosPessoais = {
            nome: 'Lavinia Cardoso Ferreira',
            cpf: '416.570.459-86',
            agencia: '0183',
            conta: '010034362',
            pernumper: '392123861',
            segmento: 'Van Gogh',
            telefones: ['11 1234-5678', '11 98765-4321'],
            emails: ['laviniacardoso@test.com', 'laviniaferreira@test.com'],
            prosseguir: false
        };
        // criar o FORMULARIO
        this.canalForm = fb.group({
            'canal': [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]],
            'modalidade': [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]]
        });
        this.filaForm = fb.group({
            'fila': [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]]
        });
        this.cpfForm = fb.group({
            'cpf': ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]]
        });
    }
    FirstFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.canalForm.valueChanges.subscribe(function (form) {
            if (form.canal != null && form.modalidade != null) {
                _this.value = 50;
                _this.filaIsDisabled = false;
                return;
            }
            _this.value = 0;
            _this.filaIsDisabled = true;
        });
        this.filaForm.valueChanges.subscribe(function (form) {
            if (form.fila != null) {
                _this.value = 100;
                _this.cpfIsDisabled = false;
                return;
            }
            _this.value = 50;
            _this.cpfIsDisabled = true;
        });
        this.cpfForm.valueChanges.subscribe(function (form) {
            if (form.cpf != '') {
                _this.podeLocalizar = false;
                return;
            }
            _this.podeLocalizar = true;
        });
    };
    FirstFormComponent.prototype.localizarUser = function () {
        this.localizando = true;
        this.isResult = true;
    };
    FirstFormComponent.prototype.prosseguir = function () {
        this.dadosPessoais.prosseguir = true;
        __WEBPACK_IMPORTED_MODULE_3__first_form_datas_service__["a" /* FirstFormDatasService */].setDadosPessoais(this.dadosPessoais);
        this.router.navigate(['/home/response']);
    };
    return FirstFormComponent;
}());
FirstFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'wff-first-form',
        template: __webpack_require__("../../../../../src/app/home/first-form/first-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/first-form/first-form.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], FirstFormComponent);

var _a, _b;
//# sourceMappingURL=first-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/first-form/grid-list/grid-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"dado dados1\">\n  <ul class=\"tile\">\n    <li class=\"grid\">\n      <h4>Nome</h4>\n      <p>{{dados.nome}}</p>\n    </li>\n    <li class=\"grid\">\n      <h4>Agência</h4>\n      <p>{{dados.agencia}}</p>\n    </li>\n    <li class=\"grid\">\n      <h4>Cpf</h4>\n      <p>{{dados.cpf}}</p>\n    </li>\n    <li class=\"grid\">\n      <h4>Conta</h4>\n      <p>{{dados.conta}}</p>\n    </li>\n    <li class=\"grid\">\n      <h4>Pernumper</h4>\n      <p>{{dados.pernumper}}</p>\n    </li>\n    <li class=\"grid\">\n      <h4>Segmento</h4>\n      <p>{{dados.segmento}}</p>\n    </li>\n  </ul>\n</div>\n<div class=\"dado dados2\">\n  <div class=\"dados-right\">\n    <ul class=\"tile\">\n      <li class=\"grid\">\n        <h4>Telefones</h4>\n        <p *ngFor=\"let tel of dados.telefones\">{{tel}}</p>\n      </li>\n      <li class=\"grid\">\n        <h4>Emails</h4>\n        <p *ngFor=\"let email of dados.emails\">{{email}}</p>\n      </li>\n    </ul>\n  </div>\n  <div class=\"dados-right\">\n    <form class=\"example-form\" [formGroup]=\"contaForm\" *ngIf=\"!buttonCorrigirDados\">\n      <div class=\"title\">\n        <h4>Canal</h4>\n        <mat-form-field class=\"example-full-width\">\n          <mat-select placeholder=\"Selecione o canal\" class=\"select\" formControlName=\"conta\">\n            <mat-option>--</mat-option>\n            <mat-option *ngFor=\"let canal of canais\" [value]=\"canal\">\n              {{canal}}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n      </div>\n    </form>\n    <ul class=\"tile\" *ngIf=\"buttonCorrigirDados\">\n      <li class=\"grid corrigir\">\n        <h4>Conta selecionada</h4>\n        <p>Corrente 1231</p>\n      </li>\n      <li class=\"grid corrigir\">\n        <button mat-raised-button color=\"primary\" matTooltip=\"Corrigir os Dados\"\n          (click)=\"corrigirDados()\">\n          <mat-icon matSuffix class=\"icon\">mode_edit</mat-icon>\n          Atualizar dados\n        </button>\n      </li>\n    </ul>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/first-form/grid-list/grid-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dado {\n  min-width: 50%;\n  max-width: 50%;\n  max-height: 180px;\n  min-height: 180px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start; }\n  .dado .tile {\n    padding: 0;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    list-style: none;\n    min-width: 90%; }\n    .dado .tile .grid {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-flow: column;\n              flex-flow: column;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: start;\n          -ms-flex-align: start;\n              align-items: flex-start;\n      width: 45%;\n      margin-top: 20px; }\n      .dado .tile .grid h4 {\n        margin: 0;\n        font-family: OpenSans;\n        text-align: left;\n        font-size: 11px;\n        text-transform: uppercase;\n        font-weight: bold;\n        color: #191919; }\n      .dado .tile .grid p {\n        margin: 0;\n        font-family: OpenSans;\n        text-align: left;\n        font-size: 11px;\n        line-height: 1.45;\n        color: #787878; }\n\n.dados2 {\n  min-width: 50%;\n  max-width: 50%;\n  /* max-height: 60%; */\n  max-height: 180px;\n  min-height: 180px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column;\n          flex-flow: column;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n  .dados2 .dados-right {\n    min-width: 100%;\n    max-width: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start; }\n    .dados2 .dados-right .tile .corrigir {\n      margin-top: 5px; }\n      .dados2 .dados-right .tile .corrigir button {\n        width: 216px;\n        height: 32px;\n        border-radius: 21px;\n        background-color: #424455;\n        line-height: 32px;\n        text-align: center;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -ms-flex-pack: distribute;\n            justify-content: space-around;\n        text-transform: uppercase; }\n        .dados2 .dados-right .tile .corrigir button .icon {\n          font-size: 20px; }\n    .dados2 .dados-right .example-form .title .example-full-width {\n      min-width: 90%;\n      padding: 0; }\n      .dados2 .dados-right .example-form .title .example-full-width .select {\n        padding: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/first-form/grid-list/grid-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GridListComponent = (function () {
    function GridListComponent(fb) {
        this.fb = fb;
        this.canais = ['Dog', 'Cat', 'Cow', 'Fox'];
        this.buttonCorrigirDados = false;
        this.contaForm = fb.group({
            'conta': [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]]
        });
    }
    GridListComponent.prototype.ngOnInit = function () {
        if (this.dados.prosseguir) {
            this.buttonCorrigirDados = true;
            return;
        }
    };
    GridListComponent.prototype.corrigirDados = function () {
    };
    return GridListComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('dados'),
    __metadata("design:type", Object)
], GridListComponent.prototype, "dados", void 0);
GridListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'wff-grid-list',
        template: __webpack_require__("../../../../../src/app/home/first-form/grid-list/grid-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/first-form/grid-list/grid-list.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object])
], GridListComponent);

var _a;
//# sourceMappingURL=grid-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">\n  <div class=\"footer1\">\n    <div class=\"footer2\">\n      <div class=\"name\">\n        <div class=\"circle\">\n          <p>LK</p>\n        </div>\n      </div>\n      <div class=\"data\">\n        <p>02/03/2017. 10:00</p>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/footer/footer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* FOOTER */\n.footer {\n  position: absolute;\n  min-width: 100%;\n  max-width: 100%;\n  margin: 0 auto;\n  /* margin-top: 15px; */\n  bottom: 0;\n  /* min-height: 6vh; */\n  min-height: 40px;\n  max-height: 40px;\n  background-color: #ffffff;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.15);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  border-top: 1px solid #d8d8d8; }\n  .footer .footer1 {\n    width: 90%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n    .footer .footer1 .footer2 {\n      width: 11.5%;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      /* max-height: 100%; */\n      max-height: 32px; }\n      .footer .footer1 .footer2 .name {\n        /* min-height: 6vh; */\n        min-height: 32px;\n        max-height: 32px;\n        border-left: 1px solid #dddddd;\n        border-right: 1px solid #dddddd;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        padding: 0 10px; }\n        .footer .footer1 .footer2 .name .circle {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-pack: center;\n              -ms-flex-pack: center;\n                  justify-content: center;\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center;\n          border-radius: 50%;\n          height: 24px;\n          width: 24px;\n          background-color: #ffffff;\n          box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.5);\n          border: 2px solid #50ccfb; }\n          .footer .footer1 .footer2 .name .circle p {\n            padding: 0;\n            font-family: OpenSans;\n            font-size: 11px;\n            font-weight: bold;\n            text-align: center;\n            color: #50ccfb; }\n      .footer .footer1 .footer2 .data p {\n        font-family: OpenSans;\n        font-size: 11px;\n        line-height: 1.45;\n        text-align: left;\n        color: #787878; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'wff-footer',
        template: __webpack_require__("../../../../../src/app/home/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/footer/footer.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<wff-toolbar></wff-toolbar>\n\n<div [@routerAnimation]=\"getRouteAnimation(route)\">\n    <router-outlet #route=\"outlet\"></router-outlet>\n</div>\n<!-- <wff-first-form></wff-first-form> -->\n\n<wff-footer></wff-footer>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    // change the animation state
    HomeComponent.prototype.getRouteAnimation = function (outlet) {
        return outlet.activatedRouteData.animation;
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.scss")],
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* trigger */])('routerAnimation', [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* transition */])('* <=> *', [
                    // Initial state of new route
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* query */])(':enter', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({
                        position: 'fixed',
                        width: '100%',
                        transform: 'translateX(-100%)'
                    }), { optional: true }),
                    // move page off screen right on leave
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* query */])(':leave', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('300ms ease', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({
                        position: 'fixed',
                        width: '100%',
                        transform: 'translateX(100%)'
                    })), { optional: true }),
                    // move page in screen from left to right
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* query */])(':enter', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('300ms ease', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({
                        opacity: 1,
                        transform: 'translateX(0%)'
                    })), { optional: true }),
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/resposta/resposta.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"forms\">\n  <div class=\"result\">\n    <div class=\"result-body\">\n      <wff-grid-list [dados]='dadosPessoais' class=\"result-body-list\"></wff-grid-list>\n    </div>\n  </div>\n</div>\n<div class=\"accordions\">\n  <div class=\"respostas\">\n    <mat-expansion-panel class=\"panel\" \n      [expanded]=\"step === 0\" (opened)=\"setStep(0)\">\n      <mat-expansion-panel-header>\n        <mat-panel-title class=\"title\" [class.panelTitle]=\"mostrarTransacoes\">\n          <h3>1 - Parecer</h3>\n          <div class=\"divIcon\" *ngIf=\"mostrarTransacoes\">\n            <mat-icon matSuffix class=\"iconDone\">done</mat-icon>\n          </div>\n        </mat-panel-title>\n      </mat-expansion-panel-header>\n      \n      <div class=\"accordion-body accordionParecer\">\n        <div class=\"forms-resp\">\n          <div class=\"form-left\">\n            <form [formGroup]=\"respForm\">\n              <div class=\"title\">\n                <h4>Modalidade</h4>\n                <mat-form-field class=\"example-full-width\">\n                  <mat-select placeholder=\"Selecione a modalidade\" formControlName=\"resposta\">\n                    <mat-option>--</mat-option>\n                    <mat-option *ngFor=\"let canal of canais\" [value]=\"canal\">\n                      {{canal}}\n                    </mat-option>\n                  </mat-select>\n                </mat-form-field>\n              </div>\n              \n              <div class=\"title\">\n                <h4>Modalidade</h4>\n                <mat-form-field class=\"example-full-width\">\n                  <mat-select placeholder=\"Selecione a modalidade\" formControlName=\"modalidade\">\n                    <mat-option>--</mat-option>\n                    <mat-option *ngFor=\"let canal of canais\" [value]=\"canal\">\n                      {{canal}}\n                    </mat-option>\n                  </mat-select>\n                </mat-form-field>\n              </div>\n            </form>\n          </div>\n          <div class=\"form-right\">\n            <form [formGroup]=\"respForm\">\n              <div class=\"title\">\n                <h4>Comentário do analista</h4>\n                <mat-form-field class=\"example-full-width\">\n                  <textarea matInput matTextareaAutosize matAutosizeMinRows=\"6\"\n                      matAutosizeMaxRows=\"6\" class=\"textarea\"></textarea>\n                </mat-form-field>\n              </div>\n            </form>\n          </div>\n        </div>\n\n        <div class=\"prosseguir\">\n          <button mat-raised-button matTooltip=\"Corrigir os Dados\" (click)=\"nextStep('mostrarTransacoes')\">\n            Prosseguir\n          </button>\n        </div>\n      </div>\n    </mat-expansion-panel>\n  </div>\n  <div class=\"respostas\">\n    <mat-expansion-panel class=\"panel\" *ngIf=\"mostrarTransacoes\"\n    [expanded]=\"step === 1\" (opened)=\"setStep(1)\">\n      <mat-expansion-panel-header>\n        <mat-panel-title class=\"title\" [class.panelTitle]=\"mostrarContatos\">\n          <h3>2 - Transações</h3>\n          <div class=\"divIcon\" *ngIf=\"mostrarContatos\">\n            <mat-icon matSuffix class=\"iconDone\">done</mat-icon>\n          </div>\n        </mat-panel-title>\n      </mat-expansion-panel-header>\n      \n      <div class=\"accordion-body accordionTransacao\">\n        <div class=\"forms-resp\">\n          <form [formGroup]=\"formTransacao\" class=\"formTransacao\">\n            <div class=\"title\">\n              <h4>Selecione as transações afetadas</h4>\n              <h6>Selecionar todas transações</h6>\n              <div class=\"listTransacao\">\n                <div class=\"listHeader\">\n                  <ul>\n                    <li class=\"data\">Data</li>\n                    <li class=\"dataAbertura\">Data de abertura</li>\n                    <li class=\"front\">Front</li>\n                    <li class=\"score\">Score</li>\n                    <li class=\"redes\">Redes</li>\n                    <li class=\"reglas\">Reglas</li>\n                    <li class=\"solicitado\">Solicitado</li>\n                    <li class=\"transacao\">Transação</li>\n                    <li class=\"conta\">Conta</li>\n                  </ul>\n                </div>\n                <mat-selection-list>\n                  <mat-list-option *ngFor=\"let t of transacoes\">\n                    <ul class=\"listTransacaoBody\">\n                      <li class=\"data\">{{t.data1}}</li>\n                      <li class=\"dataAbertura\">{{t.dataAbertura1}}</li>\n                      <li class=\"front\">{{t.front}}</li>\n                      <li class=\"score score1\"\n                      [ngClass]=\"getColor(t.score)\">{{t.score}}</li>\n                      <li class=\"redes redes1\"\n                      [ngClass]=\"getColor(t.redes)\">{{t.redes}}</li>\n                      <li class=\"reglas reglas1\"\n                      [ngClass]=\"getColor(t.reglas)\">{{t.reglas}}</li>\n                      <li class=\"solicitado\">{{t.solicitado}}</li>\n                      <li class=\"transacao\">{{t.transacao}}</li>\n                      <li class=\"conta\">{{t.conta}}</li>\n                    </ul>\n                  </mat-list-option>\n                </mat-selection-list>\n              </div>\n            </div>\n          </form>\n        </div>\n\n        <div class=\"prosseguir\">\n          <button mat-raised-button matTooltip=\"Corrigir os Dados\" (click)=\"nextStep('mostrarContatos')\">\n            Prosseguir\n          </button>\n        </div>\n      </div>\n    </mat-expansion-panel>\n  </div>\n  <div class=\"respostas\">\n    <mat-expansion-panel class=\"panel\" *ngIf=\"mostrarContatos\"\n    [expanded]=\"step === 2\" (opened)=\"setStep(2)\">\n      <mat-expansion-panel-header>\n        <mat-panel-title class=\"title\" [class.panelTitle]=\"mostrarChecklists\">\n          <h3>3 - Contato com o cliente</h3>\n          <div class=\"divIcon\" *ngIf=\"mostrarChecklists\">\n            <mat-icon matSuffix class=\"iconDone\">done</mat-icon>\n          </div>\n        </mat-panel-title>\n      </mat-expansion-panel-header>\n      \n      <div class=\"accordion-body accordionContato\">\n        <div class=\"title\">\n          <h4>Seleciona a forma de contato com o cliente</h4>\n        </div>\n        <div class=\"forms-resp\">\n          <div class=\"form-left\">\n            <div class=\"title\">\n              <h4>Números no cadastro</h4>\n              <ul class=\"listNumbers\">\n                <li *ngFor=\"let n of numerosRegistrados\">\n                  <div class=\"divAddIcon\">\n                    <mat-icon matSuffix class=\"addIcon\">add</mat-icon>\n                  </div>\n                  <p>{{ n }}</p>\n                </li>\n              </ul>\n            </div>\n          </div>\n          <div class=\"form-right\">\n            <form [formGroup]=\"respForm\">\n              <div class=\"title\">\n                <h4>Comentário do analista</h4>\n                <mat-form-field class=\"example-full-width\">\n                  <textarea matInput matTextareaAutosize matAutosizeMinRows=\"6\"\n                      matAutosizeMaxRows=\"6\" class=\"textarea\"></textarea>\n                </mat-form-field>\n              </div>\n            </form>\n          </div>\n        </div>\n\n        <div class=\"prosseguir\">\n          <button mat-raised-button matTooltip=\"Corrigir os Dados\" (click)=\"nextStep('mostrarChecklists')\">\n            Prosseguir\n          </button>\n        </div>\n      </div>\n    </mat-expansion-panel>\n  </div>\n  <div class=\"respostas\">\n    <mat-expansion-panel class=\"panel\" *ngIf=\"mostrarChecklists\"\n    [expanded]=\"step === 3\" (opened)=\"setStep(3)\">\n      <mat-expansion-panel-header>\n        <mat-panel-title class=\"title\" [class.panelTitle]=\"mostrarEmails\">\n          <h3>4 - Checklist</h3>\n          <div class=\"divIcon\" *ngIf=\"mostrarEmails\">\n            <mat-icon matSuffix class=\"iconDone\">done</mat-icon>\n          </div>\n        </mat-panel-title>\n      </mat-expansion-panel-header>\n      \n      <div class=\"accordion-body accordionParecer\">\n        <div class=\"forms-resp\">\n          <div class=\"form-left\">\n            <form [formGroup]=\"respForm\">\n              <div class=\"title\">\n                <h4>Modalidade</h4>\n                <mat-form-field class=\"example-full-width\">\n                  <mat-select placeholder=\"Selecione a modalidade\" formControlName=\"resposta\">\n                    <mat-option>--</mat-option>\n                    <mat-option *ngFor=\"let canal of canais\" [value]=\"canal\">\n                      {{canal}}\n                    </mat-option>\n                  </mat-select>\n                </mat-form-field>\n              </div>\n              \n              <div class=\"title\">\n                <h4>Modalidade</h4>\n                <mat-form-field class=\"example-full-width\">\n                  <mat-select placeholder=\"Selecione a modalidade\" formControlName=\"modalidade\">\n                    <mat-option>--</mat-option>\n                    <mat-option *ngFor=\"let canal of canais\" [value]=\"canal\">\n                      {{canal}}\n                    </mat-option>\n                  </mat-select>\n                </mat-form-field>\n              </div>\n            </form>\n          </div>\n          <div class=\"form-right\">\n            <form [formGroup]=\"respForm\">\n              <div class=\"title\">\n                <h4>Comentário do analista</h4>\n                <mat-form-field class=\"example-full-width\">\n                  <textarea matInput matTextareaAutosize matAutosizeMinRows=\"6\"\n                      matAutosizeMaxRows=\"6\" class=\"textarea\"></textarea>\n                </mat-form-field>\n              </div>\n            </form>\n          </div>\n        </div>\n\n        <div class=\"prosseguir\">\n          <button mat-raised-button matTooltip=\"Corrigir os Dados\" (click)=\"nextStep('mostrarEmails')\">\n            Prosseguir\n          </button>\n        </div>\n      </div>\n    </mat-expansion-panel>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/resposta/resposta.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".forms {\n  margin: 0 auto;\n  margin-top: 10.9px;\n  min-width: 90vw;\n  max-width: 90vw;\n  min-height: 191px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  border: 1px solid #d8d8d8; }\n  .forms .result {\n    min-width: 100%;\n    /* min-height: 45vh;\r\n    max-height: 45vh; */\n    max-height: 190px;\n    min-height: 190px;\n    margin-top: 1px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n    .forms .result .result-body {\n      min-width: 100%;\n      border-radius: 4px;\n      /* min-height: 23vh; */\n      max-height: 190px;\n      min-height: 190px;\n      background-color: #ffffff;\n      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.09);\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between; }\n      .forms .result .result-body .result-body-list {\n        min-width: 100%;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: justify;\n            -ms-flex-pack: justify;\n                justify-content: space-between; }\n\n/* ACCORDIONS */\n.accordions {\n  margin: 0 auto;\n  margin-top: 10px;\n  min-width: 90vw;\n  max-width: 90vw;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column;\n          flex-flow: column;\n  position: relative;\n  border: 1px solid #d8d8d8; }\n  .accordions .panel {\n    min-width: 100%;\n    background-color: #ffffff;\n    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.09);\n    border: 1px solid #d8d8d8; }\n  .accordions .respostas {\n    min-width: 100%; }\n  .accordions .panel .title h3 {\n    font-family: OpenSans;\n    font-size: 16px;\n    font-weight: bold;\n    text-align: left;\n    color: #424455; }\n  .accordions .respostas .panel .panelTitle {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n    .accordions .respostas .panel .panelTitle .divIcon {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      margin-left: 10px;\n      width: 18px;\n      height: 18px;\n      border-radius: 50%;\n      border: 2px solid #99cc00; }\n      .accordions .respostas .panel .panelTitle .divIcon .iconDone {\n        font-size: 16px;\n        color: #99cc00;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center; }\n    .accordions .respostas .panel .panelTitle h3 {\n      font-family: OpenSans;\n      font-size: 16px;\n      font-weight: bold;\n      text-align: left;\n      color: #99cc00; }\n  .accordions .respostas .panel .accordionParecer .forms-resp {\n    max-width: 100%;\n    min-width: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between; }\n    .accordions .respostas .panel .accordionParecer .forms-resp .form-left .title h4 {\n      font-family: OpenSans;\n      font-size: 11px;\n      font-weight: bold;\n      text-align: left;\n      color: #191919;\n      text-transform: uppercase; }\n  .accordions .respostas .accordion-body {\n    min-width: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: column;\n            flex-flow: column;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between; }\n  .accordions .respostas .panel .accordionParecer .forms-resp .form-left {\n    min-width: 50%;\n    max-width: 50%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: column;\n            flex-flow: column; }\n    .accordions .respostas .panel .accordionParecer .forms-resp .form-left .title {\n      margin-top: 1.5px; }\n  .accordions .respostas .panel .accordionParecer .forms-resp .form-right {\n    min-width: 50%;\n    max-width: 50%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start; }\n  .accordions .respostas .panel .accordionParecer .forms-resp .form-left .title h4, .accordions .respostas .panel .accordionParecer .forms-resp .form-right .title h4 {\n    padding: 0;\n    margin: 0;\n    font-family: OpenSans;\n    font-size: 11px;\n    font-weight: bold;\n    text-align: left;\n    color: #191919; }\n  .accordions .respostas .panel .accordionParecer .forms-resp .form-left .title .example-full-width {\n    min-width: 95%; }\n  .accordions .respostas .panel .accordionParecer .forms-resp .form-right .title .example-full-width {\n    min-width: 95%; }\n  .accordions .respostas .panel .accordionParecer .forms-resp .form-right form {\n    min-width: 100%; }\n    .accordions .respostas .panel .accordionParecer .forms-resp .form-right form .title {\n      min-width: 100%; }\n  .accordions .respostas .panel .accordionParecer .forms-resp .form-right .title .example-full-width textarea {\n    max-height: 115px;\n    border-radius: 4px; }\n  .accordions .respostas .panel .accordionParecer .prosseguir {\n    width: 95%;\n    margin: 0 auto;\n    margin-top: 10px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end; }\n  .accordions .respostas .panel .accordionTransacao .prosseguir, .accordions .respostas .panel .accordionContato .prosseguir {\n    width: 95%;\n    margin: 0 auto;\n    margin-top: 10px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end; }\n  .accordions .respostas .panel .accordionParecer .prosseguir button, .accordions .respostas .panel .accordionTransacao .prosseguir button, .accordions .respostas .panel .accordionContato .prosseguir button {\n    width: 216px;\n    height: 40px;\n    border-radius: 21px;\n    background-color: #424455;\n    line-height: 40px;\n    text-align: center;\n    text-transform: uppercase;\n    font-family: OpenSans;\n    font-size: 14px;\n    color: #ffffff; }\n  .accordions .respostas .panel .accordionTransacao .forms-resp .formTransacao {\n    min-width: 100%;\n    max-width: 100%; }\n    .accordions .respostas .panel .accordionTransacao .forms-resp .formTransacao .title {\n      min-width: 100%; }\n      .accordions .respostas .panel .accordionTransacao .forms-resp .formTransacao .title h4 {\n        font-family: OpenSans;\n        font-size: 20px;\n        font-weight: 300;\n        line-height: 1.2;\n        text-align: left;\n        color: #444444; }\n      .accordions .respostas .panel .accordionTransacao .forms-resp .formTransacao .title h6 {\n        font-family: OpenSans;\n        font-size: 11px;\n        line-height: 1.45;\n        text-align: left;\n        color: #33cccc; }\n      .accordions .respostas .panel .accordionTransacao .forms-resp .formTransacao .title .listTransacao {\n        min-width: 100%; }\n        .accordions .respostas .panel .accordionTransacao .forms-resp .formTransacao .title .listTransacao .listHeader {\n          min-width: 100%; }\n          .accordions .respostas .panel .accordionTransacao .forms-resp .formTransacao .title .listTransacao .listHeader ul {\n            list-style: none;\n            min-width: 100%;\n            max-width: 100%;\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-pack: justify;\n                -ms-flex-pack: justify;\n                    justify-content: space-between;\n            -webkit-box-align: center;\n                -ms-flex-align: center;\n                    align-items: center;\n            padding: 0; }\n        .accordions .respostas .panel .accordionTransacao .forms-resp .formTransacao .title .listTransacao .listTransacaoBody {\n          list-style: none;\n          min-width: 100%;\n          max-width: 100%;\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-pack: justify;\n              -ms-flex-pack: justify;\n                  justify-content: space-between;\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center;\n          padding: 0; }\n          .accordions .respostas .panel .accordionTransacao .forms-resp .formTransacao .title .listTransacao .listTransacaoBody li {\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-align: center;\n                -ms-flex-align: center;\n                    align-items: center;\n            -webkit-box-pack: center;\n                -ms-flex-pack: center;\n                    justify-content: center; }\n        .accordions .respostas .panel .accordionTransacao .forms-resp .formTransacao .title .listTransacao .listHeader ul {\n          min-width: 95%;\n          max-width: 95%;\n          margin: 0 auto; }\n        .accordions .respostas .panel .accordionTransacao .forms-resp .formTransacao .title .listTransacao .data, .accordions .respostas .panel .accordionTransacao .forms-resp .formTransacao .title .listTransacao .conta {\n          width: 15%; }\n        .accordions .respostas .panel .accordionTransacao .forms-resp .formTransacao .title .listTransacao .dataAbertura, .accordions .respostas .panel .accordionTransacao .forms-resp .formTransacao .title .listTransacao .front, .accordions .respostas .panel .accordionTransacao .forms-resp .formTransacao .title .listTransacao .score, .accordions .respostas .panel .accordionTransacao .forms-resp .formTransacao .title .listTransacao .redes, .accordions .respostas .panel .accordionTransacao .forms-resp .formTransacao .title .listTransacao .reglas, .accordions .respostas .panel .accordionTransacao .forms-resp .formTransacao .title .listTransacao .solicitado, .accordions .respostas .panel .accordionTransacao .forms-resp .formTransacao .title .listTransacao .transacao {\n          width: 10%; }\n        .accordions .respostas .panel .accordionTransacao .forms-resp .formTransacao .title .listTransacao .listTransacaoBody .score1, .accordions .respostas .panel .accordionTransacao .forms-resp .formTransacao .title .listTransacao .listTransacaoBody .redes1, .accordions .respostas .panel .accordionTransacao .forms-resp .formTransacao .title .listTransacao .listTransacaoBody .reglas1 {\n          width: 44px;\n          height: 24px;\n          border-radius: 4px; }\n        .accordions .respostas .panel .accordionTransacao .forms-resp .formTransacao .title .listTransacao .listTransacaoBody .colorBlue {\n          background-color: #33cccc; }\n        .accordions .respostas .panel .accordionTransacao .forms-resp .formTransacao .title .listTransacao .listTransacaoBody .colorOrange {\n          background-color: #ff9933; }\n        .accordions .respostas .panel .accordionTransacao .forms-resp .formTransacao .title .listTransacao .listTransacaoBody .colorRed {\n          background-color: #ce0000; }\n  .accordions .respostas .panel .accordionContato .title h4 {\n    font-family: OpenSans;\n    font-size: 20px;\n    font-weight: 300;\n    line-height: 1.2;\n    text-align: left;\n    color: #444444;\n    margin-bottom: 0; }\n  .accordions .respostas .panel .accordionContato .forms-resp {\n    margin-top: 32px;\n    min-width: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between; }\n    .accordions .respostas .panel .accordionContato .forms-resp .form-left {\n      min-width: 20%;\n      max-width: 20%;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      border-radius: 12px;\n      background-color: #f9f9f9; }\n      .accordions .respostas .panel .accordionContato .forms-resp .form-left .title {\n        min-width: 70%;\n        max-width: 70%;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-flow: column;\n                flex-flow: column;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center; }\n        .accordions .respostas .panel .accordionContato .forms-resp .form-left .title h4 {\n          margin-top: 10px; }\n        .accordions .respostas .panel .accordionContato .forms-resp .form-left .title .listNumbers {\n          padding: 0;\n          list-style: none;\n          min-width: 100%;\n          margin: 22px 15px;\n          margin-top: 15px; }\n          .accordions .respostas .panel .accordionContato .forms-resp .form-left .title .listNumbers li {\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -ms-flex-pack: distribute;\n                justify-content: space-around;\n            -webkit-box-align: center;\n                -ms-flex-align: center;\n                    align-items: center;\n            min-width: 95%;\n            margin-top: 12px;\n            max-width: 95%;\n            height: 32px;\n            border-radius: 21px;\n            background-color: #ffffff;\n            border: 2px solid #424455; }\n            .accordions .respostas .panel .accordionContato .forms-resp .form-left .title .listNumbers li p {\n              font-size: 14px;\n              text-align: center;\n              color: #424455;\n              vertical-align: middle; }\n    .accordions .respostas .panel .accordionContato .forms-resp .form-right {\n      min-width: 80%;\n      max-width: 80%; }\n\n/* ACCORDION TRANSACAO */\n/* ACCORDION  CONTATO */\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/resposta/resposta.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RespostaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__first_form_first_form_datas_service__ = __webpack_require__("../../../../../src/app/home/first-form/first-form-datas.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RespostaComponent = (function () {
    function RespostaComponent(fb) {
        this.fb = fb;
        this.mostrarTransacoes = false;
        this.mostrarContatos = false;
        this.mostrarChecklists = false;
        this.mostrarEmails = false;
        this.transacoes = [
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
        ];
        this.numerosRegistrados = ['11 1111-1111', '22 2222-2222', '33 3333-3333'];
        this.step = 0;
        // criar o FORMULARIO
        this.respForm = fb.group({
            'resposta': [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]],
            'modalidade': [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]],
        });
        // criar o FORMULARIO
        this.formTransacao = fb.group({});
    }
    RespostaComponent.prototype.ngOnInit = function () {
        this.dadosPessoais = __WEBPACK_IMPORTED_MODULE_2__first_form_first_form_datas_service__["a" /* FirstFormDatasService */].getDadosPessoais();
    };
    RespostaComponent.prototype.setStep = function (index) {
        this.step = index;
    };
    RespostaComponent.prototype.nextStep = function (accordion) {
        if (accordion == 'mostrarTransacoes') {
            this.step++;
            this.mostrarTransacoes = true;
            return;
        }
        if (accordion == 'mostrarContatos') {
            this.step++;
            this.mostrarContatos = true;
            return;
        }
        if (accordion == 'mostrarChecklists') {
            this.step++;
            this.mostrarChecklists = true;
            return;
        }
        this.step++;
        this.mostrarEmails = true;
    };
    RespostaComponent.prototype.getColor = function (number) {
        if (number <= 50) {
            return 'colorBlue';
        }
        if (number > 50 && number <= 85) {
            return 'colorOrange';
        }
        return 'colorRed';
    };
    return RespostaComponent;
}());
RespostaComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'wff-resposta',
        template: __webpack_require__("../../../../../src/app/home/resposta/resposta.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/resposta/resposta.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object])
], RespostaComponent);

var _a;
//# sourceMappingURL=resposta.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/toolbar/toolbar.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" class=\"toolbar\">\n  <div class=\"header\">\n    <div class=\"workflow\">\n      <div class=\"image-logo\">\n        <img src=\"assets/img/banco-santander-logo.png\" alt=\"Banco Santander\">\n      </div>\n      <div class=\"line-2-copy\"></div>\n      <div class=\"name\">\n        <h1>Workflow de Fraude</h1>\n      </div>\n    </div>\n    <div class=\"user\">\n      <h2>Produtividade</h2>\n      <div class=\"line-2-copy\"></div>\n      <h2>Relatórios</h2>\n      <div class=\"line-2-copy\"></div>\n      <div class=\"image-user\">\n        <!-- <img src=\"assets/img/user-icon.png\" alt=\"Usuário\"> -->\n        <p>LK</p>\n      </div>\n    </div>\n  </div>\n</mat-toolbar>"

/***/ }),

/***/ "../../../../../src/app/home/toolbar/toolbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".toolbar {\n  background-color: #2a4751;\n  min-height: 63.1px;\n  max-height: 63.1px; }\n  .toolbar .header {\n    width: 90vw;\n    margin: 0 auto;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n    .toolbar .header .workflow {\n      width: 22%;\n      min-height: 63.1px;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      color: #c2c2c2; }\n      .toolbar .header .workflow .image-logo {\n        width: 48px;\n        height: 48px;\n        border-radius: 50%;\n        background-color: #fff;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center; }\n        .toolbar .header .workflow .image-logo img {\n          width: 35.8px;\n          height: 32px; }\n      .toolbar .header .workflow .line-2-copy {\n        width: 1px;\n        min-height: 58px;\n        max-height: 58px;\n        background-color: #35505a;\n        border: 2px solid #35505a; }\n    .toolbar .header .user .line-2-copy {\n      width: 1px;\n      min-height: 58px;\n      max-height: 58px;\n      background-color: #35505a;\n      border: 2px solid #35505a; }\n    .toolbar .header .workflow .name {\n      min-height: 63.1px;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      font-family: OpenSans;\n      font-size: 18px;\n      text-align: right;\n      color: #c2c2c2; }\n    .toolbar .header .user {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      font-family: OpenSans;\n      font-size: 16px;\n      text-align: left;\n      color: #ffffff; }\n      .toolbar .header .user h2 {\n        font-family: OpenSans;\n        font-size: 16px;\n        text-align: left;\n        color: #ffffff; }\n      .toolbar .header .user .line-2-copy {\n        margin: 0 19px; }\n      .toolbar .header .user .image-user {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        width: 42px;\n        height: 42px;\n        background-color: #afcad2;\n        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);\n        border: 3px solid #50ccfb;\n        border-radius: 50%; }\n        .toolbar .header .user .image-user img {\n          border-radius: 50%;\n          padding: 0;\n          width: 29.3px;\n          height: 36.5px;\n          background-color: #dbf6fe; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/toolbar/toolbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToolbarComponent = (function () {
    function ToolbarComponent() {
    }
    ToolbarComponent.prototype.ngOnInit = function () {
    };
    return ToolbarComponent;
}());
ToolbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'wff-toolbar',
        template: __webpack_require__("../../../../../src/app/home/toolbar/toolbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/toolbar/toolbar.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ToolbarComponent);

//# sourceMappingURL=toolbar.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map