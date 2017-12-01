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
        component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

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
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__home_toolbar_toolbar_component__ = __webpack_require__("../../../../../src/app/home/toolbar/toolbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__home_first_form_first_form_component__ = __webpack_require__("../../../../../src/app/home/first-form/first-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__home_footer_footer_component__ = __webpack_require__("../../../../../src/app/home/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__home_first_form_grid_list_grid_list_component__ = __webpack_require__("../../../../../src/app/home/first-form/grid-list/grid-list.component.ts");
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
            __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_15__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_16__home_toolbar_toolbar_component__["a" /* ToolbarComponent */],
            __WEBPACK_IMPORTED_MODULE_17__home_first_form_first_form_component__["a" /* FirstFormComponent */],
            __WEBPACK_IMPORTED_MODULE_18__home_footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_19__home_first_form_grid_list_grid_list_component__["a" /* GridListComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_14__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material_toolbar__["a" /* MatToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material_icon__["a" /* MatIconModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material_form_field__["c" /* MatFormFieldModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material_input__["a" /* MatInputModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material_select__["a" /* MatSelectModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material_button__["a" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_material_progress_bar__["a" /* MatProgressBarModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_material_progress_spinner__["a" /* MatProgressSpinnerModule */],
            __WEBPACK_IMPORTED_MODULE_12__angular_material_tooltip__["a" /* MatTooltipModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/home/first-form/first-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* FORMS */\r\n.forms {\r\n    margin: 0 auto;\r\n    min-width: 90vw;\r\n    max-width: 90vw;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    position: relative;\r\n    border: 1px solid #d8d8d8;\r\n}\r\n\r\n.inputs {\r\n    margin: auto;\r\n    min-width: 30vw;\r\n    max-width: 30vw;\r\n    /* min-height: 34vh; */\r\n    min-height: 198px;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n\r\n.fila {\r\n    border-left: 1px solid #d8d8d8;\r\n    border-right: 1px solid #d8d8d8;\r\n}\r\n\r\n.example-form {\r\n    min-height: 25vh;\r\n    max-height: 25vh;\r\n    min-width: 80%;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-flow: column;\r\n            flex-flow: column;\r\n    -webkit-box-pack: start;\r\n        -ms-flex-pack: start;\r\n            justify-content: flex-start;\r\n}\r\n\r\n.example-form .title {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-flow: column;\r\n            flex-flow: column;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n    min-height: 50%;\r\n}\r\n\r\n.example-form .title h4 {\r\n    margin: 0;\r\n    height: 15px;\r\n    font-family: \"Open Sans\";\r\n    font-weight: bold;\r\n    font-size: 11px;\r\n    text-align: left;\r\n    color: #191919;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.example-form .title p {\r\n    width: 25vw;\r\n    font-family: LucidaGrande;\r\n    font-size: 11px;\r\n    line-height: 1.45;\r\n    text-align: left;\r\n    color: #191919;\r\n    word-wrap: break-word;\r\n    margin: 0;\r\n    margin-top: 1vh;\r\n}\r\n\r\n.example-form .localizar {\r\n    width: 100%;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n\r\n.example-form .localizar button {\r\n    width: 100%;\r\n    border-radius: 21px;\r\n    background-color: #424455;\r\n    font-family: OpenSans;\r\n    font-size: 14px;\r\n    text-align: center;\r\n    color: #ffffff;\r\n    text-transform: uppercase;\r\n    height: 40px;\r\n    margin-top: 2vh;\r\n}\r\n\r\n.example-form .localizar .spinner {\r\n    margin-top: 6vh;\r\n}\r\n\r\n.example-form .example-full-width {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-flow: column;\r\n            flex-flow: column;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n    min-width: 100%;\r\n    padding: 0;\r\n}\r\n\r\n.example-form .example-full-width input {\r\n    padding: 0;\r\n}\r\n\r\n.example-form .example-full-width input::-webkit-input-placeholder {\r\n    margin-left:  11px;\r\n    padding-left:  11px;\r\n}\r\n\r\n/* FLOWS */\r\n.flows {\r\n    margin: 0 auto;\r\n    min-width: 90vw;\r\n    max-width: 90vw;\r\n    min-height: 50vh;\r\n    /* min-height: 432px; */\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    border-left: 1px solid #d8d8d8;\r\n    border-right: 1px solid #d8d8d8;\r\n    border-bottom: 1px solid #d8d8d8;\r\n    border-radius: 4px;\r\n    background-color: #ffffff;\r\n    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.15);\r\n}\r\n\r\n.flow {\r\n    min-width: 80vw;\r\n    max-width: 80vw;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-flow: column;\r\n            flex-flow: column;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n\r\n.disabled {\r\n    cursor: not-allowed;\r\n    background-color: rgba(0,0,0,.1);\r\n    color: #FAFAFA;\r\n    z-index: 10;\r\n}\r\n\r\n.passos {\r\n    min-width: 95%;\r\n    max-width: 95%;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: start;\r\n        -ms-flex-pack: start;\r\n            justify-content: flex-start;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n\r\n.passo {\r\n    text-align: center;\r\n    max-width: 22%;\r\n    word-wrap: break-word;\r\n    font-family: OpenSans;\r\n    font-size: 0.8rem;\r\n    font-weight: bold;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.passoFila {\r\n    margin-left: 19%;\r\n}\r\n\r\n.passoCpf {\r\n    margin-left: 21%;\r\n}\r\n\r\n.example-section {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-line-pack: center;\r\n        align-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    height: 2vh;\r\n    min-width: 75%;\r\n}\r\n\r\n.example-margin {\r\n    margin: 0 10px;\r\n    min-width: 75%;\r\n    height: 2px;\r\n}\r\n\r\n/* RESULTS */\r\n.isresult {\r\n    background-color: #2a4751;\r\n}\r\n\r\n.result {\r\n    min-width: 98%;\r\n    min-height: 45vh;\r\n    max-height: 45vh;\r\n    margin: 0 auto;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-flow: column;\r\n            flex-flow: column;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n}\r\n\r\n.result .result-title {\r\n    color: #fff;\r\n    font-family: OpenSans;\r\n    font-size: 20px;\r\n    font-weight: 300;\r\n    line-height: 1.2;\r\n    text-align: left;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n\r\n.result .result-title h3 {\r\n    margin: 0;\r\n}\r\n\r\n.result .result-body {\r\n    min-width: 100%;\r\n    border-radius: 4px;\r\n    min-height: 23vh;\r\n    background-color: #ffffff;\r\n    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.09);\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n}\r\n\r\n.result .result-body-list {\r\n    min-width: 100%;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n}\r\n\r\n.result .result-processar {\r\n    min-width: 100%;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: end;\r\n        -ms-flex-pack: end;\r\n            justify-content: flex-end;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n\r\n.result .result-processar button {\r\n    width: 25%;\r\n    border-radius: 21px;\r\n    background-color: #fff;\r\n    font-family: OpenSans;\r\n    font-size: 14px;\r\n    text-align: center;\r\n    color: #424455;\r\n    text-transform: uppercase;\r\n    height: 40px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/first-form/first-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"forms\">\n  <div class=\"inputs\">\n    <form class=\"example-form\" [formGroup]=\"canalForm\">\n      <div class=\"title\">\n        <h4>Canal</h4>\n        <mat-form-field class=\"example-full-width\">\n          <mat-select formControlName=\"canal\" [(ngModel)]=\"canalSelected\">\n            <mat-option>--</mat-option>\n            <mat-option *ngFor=\"let canal of canais\" [value]=\"canal\">\n              {{canal}}\n            </mat-option>\n          </mat-select>\n          <!-- <mat-icon matSuffix>keyboard_arrow_down</mat-icon> -->\n        </mat-form-field>\n      </div>\n      <div class=\"title\">\n        <h4>Modalidade</h4>\n        <mat-form-field class=\"example-full-width\">\n          <mat-select placeholder=\"Selecione a modalidade\" formControlName=\"modalidade\">\n            <mat-option>--</mat-option>\n            <mat-option *ngFor=\"let canal of canais\" [value]=\"canal\">\n              {{canal}}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n      </div>\n    </form>\n  </div>\n  <div class=\"inputs fila\" [class.disabled]=\"filaIsDisabled\">\n    <form class=\"example-form\" [formGroup]=\"filaForm\">\n      <div class=\"title\">\n        <h4>Fila</h4>\n        <mat-form-field class=\"example-full-width\">\n          <mat-select placeholder=\"Selecione a fila\" formControlName=\"fila\">\n            <mat-option>--</mat-option>\n            <mat-option *ngFor=\"let canal of canais\" [value]=\"canal\">\n              {{canal}}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n      </div>\n      <div class=\"title\">\n        <h4 *ngIf=\"flow2\">Resumo da fila</h4>\n        <p *ngIf=\"flow2\">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>\n      </div>\n    </form>\n  </div>\n  <div class=\"inputs\" [class.disabled]=\"cpfIsDisabled\" #localizar>\n    <form class=\"example-form\">\n      <div class=\"title\">\n        <h4>cpf ou cnpj</h4>\n        <mat-form-field class=\"example-full-width\">\n          <input matInput placeholder=\"Ex.: 123.123.123-10\">\n        </mat-form-field>\n      </div>\n      <div class=\"localizar\">\n        <button mat-raised-button color=\"primary\" matTooltip=\"Localizar o usuário\"\n          *ngIf=\"!localizando\" [disabled]=\"cpfIsDisabled\" (click)=\"localizarUser()\">\n          Localizar\n        </button>\n        <mat-spinner class=\"spinner\" color=\"primary\" *ngIf=\"localizando\" diameter=\"30\" strokeWidth=\"5\"></mat-spinner>\n      </div>\n    </form>\n  </div>\n</div>\n\n<div class=\"flows\" [class.isresult]=\"isResult\">\n  <div class=\"flow\" *ngIf=\"!isResult\">\n    <div class=\"passos\">\n      <div class=\"passo\" [style.color]=\"filaIsDisabled ? '#33CCCC' : '#191919'\">\n        <p>Comece selecionando o canal e modalidades adequados</p>\n      </div>\n      <div class=\"passo passoFila\" [style.color]=\"cpfIsDisabled ? '#33CCCC' : '#191919'\" *ngIf=\"!filaIsDisabled\">\n        <p>Selecione a fila adequada</p>\n      </div>\n      <div class=\"passo passoCpf\" [style.color]=\"cpfIsDisabled ? '#191919' : '#33CCCC'\" *ngIf=\"!cpfIsDisabled\">\n        <p>Digite o cpf ou cnpj</p>\n      </div>\n    </div>\n    <section class=\"example-section\">\n      <mat-progress-bar\n          class=\"example-margin\"\n          [color]=\"color\"\n          [mode]=\"mode\"\n          [value]=\"value\"\n          [bufferValue]=\"bufferValue\">\n      </mat-progress-bar>\n    </section>\n  </div>\n\n  <div class=\"result\" *ngIf=\"isResult\">\n    <div class=\"result-title\">\n      <h3>Resultado</h3>\n    </div>\n    <div class=\"result-body\">\n      <wff-grid-list [dados]='dadosPessoais' class=\"result-body-list\"></wff-grid-list>\n    </div>\n    <div class=\"result-processar\">\n        <button mat-raised-button color=\"primary\" matTooltip=\"Prosseguir\"\n        (click)=\"localizarUser()\">\n        Prosseguir\n      </button>\n      <!-- <mat-spinner class=\"spinner\" color=\"warn\" *ngIf=\"localizando\" diameter=\"30\" strokeWidth=\"5\"></mat-spinner> -->\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/first-form/first-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirstFormComponent; });
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


var FirstFormComponent = (function () {
    function FirstFormComponent(fb) {
        this.fb = fb;
        this.color = 'primary';
        this.mode = 'determinate';
        this.value = 0;
        this.bufferValue = 100;
        this.filaIsDisabled = true;
        this.cpfIsDisabled = true;
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
            emails: ['laviniacardoso@test.com', 'laviniaferreira@test.com']
        };
        // criar o FORMULARIO
        this.canalForm = fb.group({
            'canal': [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]],
            'modalidade': [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]]
        });
        this.filaForm = fb.group({
            'fila': [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]]
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
    };
    FirstFormComponent.prototype.localizarUser = function () {
        this.localizando = true;
        this.isResult = true;
    };
    return FirstFormComponent;
}());
FirstFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'wff-first-form',
        template: __webpack_require__("../../../../../src/app/home/first-form/first-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/first-form/first-form.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object])
], FirstFormComponent);

var _a;
//# sourceMappingURL=first-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/first-form/grid-list/grid-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dado {\r\n    min-width: 50%;\r\n    max-width: 50%;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n\r\n.tile {\r\n    padding: 0;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-flow: row wrap;\r\n            flex-flow: row wrap;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    list-style: none;\r\n    min-width: 90%;\r\n}\r\n\r\n.grid {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-flow: column;\r\n            flex-flow: column;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: start;\r\n        -ms-flex-align: start;\r\n            align-items: flex-start;\r\n    width: 45%;\r\n    margin-top: 15px;\r\n}\r\n\r\nh4,\r\np {\r\n    margin: 0;\r\n    font-family: OpenSans;\r\n    text-align: left;\r\n    font-size: 11px;\r\n}\r\n\r\nh4 {\r\n    text-transform: uppercase;\r\n    font-weight: bold;\r\n    color: #191919;\r\n}\r\n\r\np {\r\n    line-height: 1.45;\r\n    color: #787878;\r\n}\r\n\r\n.dados2 {\r\n    min-width: 50%;\r\n    max-width: 50%;\r\n    max-height: 50%;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-flow: column;\r\n            flex-flow: column;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n}\r\n\r\n.dados-right {\r\n    min-width: 100%;\r\n    max-width: 100%;\r\n}\r\n\r\n.example-full-width {\r\n    min-width: 90%;\r\n    padding: 0;\r\n}\r\n\r\n.select {\r\n    padding: 0;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/first-form/grid-list/grid-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"dado dados1\">\n  <ul class=\"tile\">\n    <li class=\"grid\">\n      <h4>Nome</h4>\n      <p>{{dados.nome}}</p>\n    </li>\n    <li class=\"grid\">\n      <h4>Agência</h4>\n      <p>{{dados.agencia}}</p>\n    </li>\n    <li class=\"grid\">\n      <h4>Cpf</h4>\n      <p>{{dados.cpf}}</p>\n    </li>\n    <li class=\"grid\">\n      <h4>Conta</h4>\n      <p>{{dados.conta}}</p>\n    </li>\n    <li class=\"grid\">\n      <h4>Pernumper</h4>\n      <p>{{dados.pernumper}}</p>\n    </li>\n    <li class=\"grid\">\n      <h4>Segmento</h4>\n      <p>{{dados.segmento}}</p>\n    </li>\n    <li class=\"grid\">\n    </li>\n    <li class=\"grid\">\n    </li>\n  </ul>\n</div>\n<div class=\"dado dados2\">\n  <div class=\"dados-right\">\n    <ul class=\"tile\">\n      <li class=\"grid\">\n        <h4>Telefones</h4>\n        <p *ngFor=\"let tel of dados.telefones\">{{tel}}</p>\n      </li>\n      <li class=\"grid\">\n        <h4>Emails</h4>\n        <p *ngFor=\"let email of dados.emails\">{{email}}</p>\n      </li>\n    </ul>\n  </div>\n  <div class=\"dados-right\">\n    <form class=\"example-form\" [formGroup]=\"contaForm\">\n      <div class=\"title\">\n        <h4>Canal</h4>\n        <mat-form-field class=\"example-full-width\">\n          <mat-select placeholder=\"Selecione o canal\" class=\"select\" formControlName=\"conta\">\n            <mat-option>--</mat-option>\n            <mat-option *ngFor=\"let canal of canais\" [value]=\"canal\">\n              {{canal}}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n      </div>\n    </form>\n  </div>\n</div>"

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
        this.contaForm = fb.group({
            'conta': [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]]
        });
    }
    GridListComponent.prototype.ngOnInit = function () {
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
        styles: [__webpack_require__("../../../../../src/app/home/first-form/grid-list/grid-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object])
], GridListComponent);

var _a;
//# sourceMappingURL=grid-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* FOOTER */\r\n.footer {\r\n    position: absolute;\r\n    min-width: 100vw;\r\n    bottom: 0;\r\n    min-height: 6vh;\r\n    background-color: #ffffff;\r\n    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.15);\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    border-top: 1px solid #d8d8d8;\r\n}\r\n\r\n.footer1 {\r\n    width: 90%;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: end;\r\n        -ms-flex-pack: end;\r\n            justify-content: flex-end;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n\r\n.footer2 {\r\n    width: 11.5%;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    max-height: 100%;\r\n}\r\n\r\n.footer2 .name {\r\n    min-height: 6vh;\r\n    border-left: 1px solid #dddddd;\r\n    border-right: 1px solid #dddddd;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    padding: 0 10px;\r\n}\r\n\r\n.footer2 .name .circle {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    border-radius: 50%;\r\n    height: 24px;\r\n    width: 24px; \r\n    background-color: #ffffff;\r\n    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.5);\r\n    border: 2px solid #50ccfb;\r\n}\r\n\r\n.footer2 .name .circle p {\r\n    padding: 0;\r\n    font-family: OpenSans;\r\n    font-size: 11px;\r\n    font-weight: bold;\r\n    text-align: center;\r\n    color: #50ccfb;\r\n}\r\n\r\n.footer2 .data p {\r\n    font-family: OpenSans;\r\n    font-size: 11px;\r\n    line-height: 1.45;\r\n    text-align: left;\r\n    color: #787878;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">\n  <div class=\"footer1\">\n    <div class=\"footer2\">\n      <div class=\"name\">\n        <div class=\"circle\">\n          <p>LK</p>\n        </div>\n      </div>\n      <div class=\"data\">\n        <p>02/03/2017. 10:00</p>\n      </div>\n    </div>\n  </div>\n</div>"

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
        styles: [__webpack_require__("../../../../../src/app/home/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<wff-toolbar></wff-toolbar>\n\n<wff-first-form></wff-first-form>\n\n<wff-footer></wff-footer>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
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

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/toolbar/toolbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".toolbar {\r\n    background-color: #2a4751;\r\n    min-height: 63.1px;\r\n}\r\n\r\n.header  {\r\n    width: 90vw;\r\n    margin: 0 auto;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n\r\n.workflow {\r\n    width: 22%;\r\n    min-height: 63.1px;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    color: #c2c2c2;\r\n}\r\n\r\n.workflow .image-logo {\r\n    width: 48px;\r\n    height: 48px;\r\n    border-radius: 50%;\r\n    background-color: #fff;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n\r\n.workflow .image-logo img {\r\n    width: 35.8px;\r\n    height: 32px;\r\n}\r\n\r\n.workflow .line-2-copy, .user .line-2-copy {\r\n    width: 1px;\r\n    height: 60px;\r\n    background-color: #35505a;\r\n    border: 2px solid #35505a;\r\n}\r\n\r\n.workflow .name {\r\n    min-height: 63.1px;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    font-family: OpenSans;\r\n    font-size: 18px;\r\n    text-align: right;\r\n    color: #c2c2c2;\r\n}\r\n\r\n.user {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    font-family: OpenSans;\r\n    font-size: 16px;\r\n    text-align: left;\r\n    color: #ffffff;\r\n}\r\n\r\n.user h2 {\r\n    font-family: OpenSans;\r\n    font-size: 16px;\r\n    text-align: left;\r\n    color: #ffffff;\r\n}\r\n\r\n.user .line-2-copy {\r\n    margin: 0 19px;\r\n}\r\n\r\n.user .image-user {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    width: 42px;\r\n    height: 42px;\r\n    background-color: #afcad2;\r\n    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);\r\n    border: 3px solid #50ccfb;\r\n    border-radius: 50%;\r\n}\r\n\r\n.user .image-user img {\r\n    border-radius: 50%;\r\n    padding: 0;\r\n    width: 29.3px;\r\n    height: 36.5px;\r\n    background-color: #dbf6fe;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/toolbar/toolbar.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" class=\"toolbar\">\n  <div class=\"header\">\n    <div class=\"workflow\">\n      <div class=\"image-logo\">\n        <img src=\"assets/img/banco-santander-logo.png\" alt=\"Banco Santander\">\n      </div>\n      <div class=\"line-2-copy\"></div>\n      <div class=\"name\">\n        <h1>Workflow de Fraude</h1>\n      </div>\n    </div>\n    <div class=\"user\">\n      <h2>Produtividade</h2>\n      <div class=\"line-2-copy\"></div>\n      <h2>Relatórios</h2>\n      <div class=\"line-2-copy\"></div>\n      <div class=\"image-user\">\n        <!-- <img src=\"assets/img/user-icon.png\" alt=\"Usuário\"> -->\n        <p>LK</p>\n      </div>\n    </div>\n  </div>\n</mat-toolbar>"

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
        styles: [__webpack_require__("../../../../../src/app/home/toolbar/toolbar.component.css")]
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