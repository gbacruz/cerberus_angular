(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/auth/login/login.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/auth/login/login.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n    <h2>Login</h2>\n    <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n        <div class=\"form-group\">\n            <label for=\"username\">Username</label>\n            <input type=\"text\" formControlName=\"username\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\n            <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.username.errors.required\">Username is required</div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"password\">Password</label>\n            <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n            <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.password.errors.required\">Password is required</div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <button [disabled]=\"loading\" class=\"btn btn-primary\">Login</button>\n            <img *ngIf=\"loading\" class=\"pl-2\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n        </div>\n        <div *ngIf=\"error\" class=\"alert alert-danger\">{{error}}</div>\n    </form>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/doctor/doctorhome/doctorhome.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/doctor/doctorhome/doctorhome.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-mainmenu></app-mainmenu>\n\n<h2>Consultas</h2>\n\n<div *ngIf=\"consultas\" class=\"row\">\n    <div *ngFor=\"let consulta of consultas\" class=\"col-4 col-sm-12 col-md-4 col-lg-4 col-xl-2\">\n        \n        <div class=\"card\">\n            <div class=\"card-body\">\n                <p>Name: {{consulta.paciente.name}}</p>\n                <p>Age: {{consulta.paciente.age}}</p>\n                <p>Gender: {{consulta.paciente.gender}}</p>\n                <ul>\n                    <li  *ngFor=\"let sintom of consulta.sintomlist\">\n                        <p>{{sintom.sintoma}} {{sintom.intensidad}} {{sintom.zona}}  </p>\n                        <p>{{sintom.causa}} </p>\n                    </li>\n                </ul>\n                \n                <p>{{consulta.pk}} {{consulta.date_start}}</p>\n                <button class=\"btn btn-success\" (click)=\"setAttend(consulta)\">ATTEND</button>\n            </div>\n          </div>\n\n    </div>\n</div>\n ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/doctor/misconsultas/misconsultas.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/doctor/misconsultas/misconsultas.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-mainmenu></app-mainmenu>\n<p>misconsultas works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/forms/symptom-form/symptom-form.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/forms/symptom-form/symptom-form.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>symptom-form works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-mainmenu></app-mainmenu>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/mainmenu/mainmenu.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/mainmenu/mainmenu.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<mat-toolbar>\n\n  <button mat-button *ngFor=\"let m of menu\">\n    <a [routerLink]=\"['/',m.link]\" \n    class=\"nav-link\" \n    id=\"navbarDropdown{{m.id}}\" \n    role=\"button\" >\n     {{m.name}}\n   </a>\n\n  </button>\n\n\n\n</mat-toolbar>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/nuevaconsulta/nuevaconsulta.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/nuevaconsulta/nuevaconsulta.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-mainmenu></app-mainmenu>\n\n<style>\n  .rg{\n    text-align: left !important;\n  }\n\n\n</style>\n\n<div class=\"container\">\n  <section id=\"doctors\">\n    <mat-list>\n      <h3 mat-subheader>Folders</h3>\n      <mat-list-item *ngFor=\"let dc of doctors\">\n        <mat-icon mat-list-icon>folder</mat-icon>\n        <h4 mat-line>{{dc.name}}</h4>\n        <p mat-line> {{dc.title}} </p>\n      </mat-list-item>\n      <mat-divider></mat-divider>\n    </mat-list>\n  </section>\n\n\n<mat-vertical-stepper [linear]=\"isLinear\" #stepper>\n  <mat-step [stepControl]=\"firstFormGroup\">\n    <ng-template matStepLabel>Info de Paciente</ng-template>\n    <section id=\"patient\" style=\"padding: 20px;\">\n          <mat-form-field appearance=\"fill\" style=\"width:90%;margin:auto;\">\n            <mat-label>Paciente</mat-label>\n            <input matInput value=\"{{consulta.patient.name}}\" class=\"form-control\">\n          </mat-form-field>\n          <mat-form-field appearance=\"fill\" style=\"width:90%;margin:auto;\">\n            <mat-label>Edad</mat-label>\n            <input matInput value=\"{{consulta.patient.age}}\" class=\"form-control\">\n          </mat-form-field>\n      \n          <mat-form-field appearance=\"fill\" style=\"width:90%;margin:auto;\">\n            <mat-label>Gender</mat-label>\n            <select matNativeControl>\n              <option value=\"Masculino\">Masculino</option>\n              <option value=\"Femenino\">Femenino</option>\n            </select>\n          </mat-form-field>\n    </section>\n    \n  </mat-step>\n  <mat-step [stepControl]=\"secondFormGroup\">\n    <ng-template matStepLabel>Agregar Sintoma</ng-template>\n    <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"myForm\">\n      <div class=\"row\" >\n      <div class=\"col-lg-4 col-sm-12 col-md-4\">\n        <mat-form-field>\n        <mat-label>Sintoma</mat-label>\n          <input matInput formControlName='symptom'  class=\"form-control\">\n        </mat-form-field>\n      </div>\n      <div class=\"col-lg-4 col-sm-12 col-md-4\">\n        <mat-form-field>\n        <mat-label>Intencidad</mat-label>\n          <input matInput formControlName='intencity'  class=\"form-control\">\n        </mat-form-field>\n      </div>\n      <div class=\"col-lg-3 col-sm-12 col-md-3\">\n        <mat-form-field>\n        <mat-label>zona</mat-label>\n          <input matInput formControlName='zone'  class=\"form-control\">\n        </mat-form-field>\n      </div>\n      <div class=\"col-lg-1 col-sm-12 col-md-1\">\n        <button class=\"align-middle\" mat-mini-fab color=\"primary\" (click)=\"setSymptom();\"> + </button>\n      </div>\n    </div>\n    </form>  \n  </mat-step>\n  <mat-step>\n    <ng-template matStepLabel>Agregar Signal</ng-template>\n    <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"SignalForm\">\n      <div class=\"row\" >\n      <div class=\"col-lg-4 col-sm-12 col-md-4\">\n        <mat-form-field>\n          <mat-label>Nombre</mat-label>\n          <input matInput formControlName='name'  class=\"form-control\">\n        </mat-form-field>\n      </div>\n      <div class=\"col-lg-4 col-sm-12 col-md-4\">\n        <mat-form-field>\n          <mat-label>Medida</mat-label>\n          <input matInput formControlName='measure'  class=\"form-control\">\n        </mat-form-field>\n      </div>\n      <div class=\"col-lg-3 col-sm-12 col-md-3\">\n        <mat-form-field>\n          <mat-label>Unidad</mat-label>\n          <input matInput formControlName='units'  class=\"form-control\">\n        </mat-form-field>\n      </div>\n      <div class=\"col-lg-1 col-sm-12 col-md-1\">\n        <button mat-mini-fab color=\"primary\" (click)=\"setSignal();\"> + </button>\n      </div>\n    </div>\n    </form>  \n\n  </mat-step>\n</mat-vertical-stepper>\n\n\n\n<section id=\"symptoms_box\" style=\"padding:0% 10%;margin:auto;\">\n    <h4>Sintomas</h4>\n    <div *ngFor=\"let sym of consulta.symptoms\">\n      {{sym.symptom}} /  {{sym.intencity}} /  {{sym.zone}} / \n      <button mat-mini-fab color=\"primary\" (click)=\"rmSym(sym)\"> x </button>\n    </div>\n</section>\n  \n<section id=\"symptoms_box\" style=\"padding:0% 10%;margin:auto;\">\n  <h4>Signals</h4>\n\n  <ul style=\"list-style: none;margin:20px 0px;\">\n    <li *ngFor=\"let sig of consulta.signals\">\n        <p>{{sig.name}} /  {{sig.measure}} / {{sig.units}}</p>\n    </li>\n  </ul>\n\n</section>\n\n\n\n\n  \n\n\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/patient/formconsulta/formconsulta.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/patient/formconsulta/formconsulta.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\" *ngIf=\"consulta.pk\">\n  <div class=\"col-12\">\n    <h4>{{curpatient.name}}</h4>\n    <h4>{{curpatient.age}} | {{curpatient.gender}}</h4>\n  </div>\n</div>\n<div class=\"row\" *ngIf=\"!consulta.pk\">\n  <div class=\"col-12\">\n      <h4>Pacientes</h4>\n  </div>\n  <div class=\"col-sm-12 col-md-4 col-lg-4 col-xl-4\" *ngFor=\"let patient of mypatients \">\n\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">{{patient.name}}</h5>\n        <h6 class=\"card-subtitle mb-2 text-muted\">Age: {{patient.age}}</h6>\n        <p class=\"card-text\"></p>\n        <button type=\"button\" (click)=\"setConsulta(patient)\">Iniciar consulta</button>\n\n      </div>\n    </div>\n\n  </div>\n  <div class=\"col-sm-12 col-md-4 col-lg-4 col-xl-4\" >\n\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">Paciente Nuevo</h5>\n        <h6 class=\"card-subtitle mb-2 text-muted\"></h6>\n        <form [formGroup]=\"patientForm\" (submit)=\"newPatient()\">\n          <div class=\"form-group\">\n              <label for=\"username\">Nombre:</label>\n              <input type=\"text\" formControlName=\"name\"  class=\"form-control\"  />\n          </div>\n          <div class=\"form-group\">\n              <label for=\"username\">Edad:</label>\n              <input type=\"text\" formControlName=\"age\" class=\"form-control\"  />\n          </div>\n          <div class=\"form-group\">\n            <label for=\"username\">M</label>&nbsp;\n            <input type=\"radio\" formControlName=\"gender\" value=\"m\"   />\n            &nbsp;&nbsp;&nbsp;\n            <label for=\"username\">F</label>&nbsp;\n            <input type=\"radio\" formControlName=\"gender\" value=\"f\"   />\n          </div>\n          <button type=\"SUBMIT\">Iniciar consulta</button>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/patient/myappointments/myappointments.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/patient/myappointments/myappointments.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-mainmenu></app-mainmenu>\n\n<ul class=\"list-group list-group-flush\">\n    <li class=\"list-group-item\" *ngFor=\"let consulta of consultas\">\n\n        <mat-grid-list cols=\"4\" rowHeight=\"100px\">\n            <mat-grid-tile [colspan]=\"3\" [rowspan]=\"1\" [style.background]=\"lightblue\">\n                {{consulta.patient.name}}\n            </mat-grid-tile>\n            <mat-grid-tile [colspan]=\"1\" [rowspan]=\"2\" [style.background]=\"lightblue\">\n                {{consulta.info.location}}\n            </mat-grid-tile>\n            <mat-grid-tile [colspan]=\"1\" [rowspan]=\"2\" [style.background]=\"lightblue\">\n                Attend\n            </mat-grid-tile>\n            <mat-grid-tile [colspan]=\"1\" [rowspan]=\"1\" [style.background]=\"lightblue\">\n                {{consulta.patient.age}} yo\n            </mat-grid-tile>\n            <mat-grid-tile [colspan]=\"2\" [rowspan]=\"1\" [style.background]=\"lightblue\">\n                {{consulta.patient.gender}}\n            </mat-grid-tile>\n\n        </mat-grid-list>\n\n \n        <div>\n            <mat-accordion>\n                <mat-expansion-panel>\n                  <mat-expansion-panel-header>\n                    <mat-panel-title>\n                      \n                    </mat-panel-title>\n                    <mat-panel-description>\n                        Sintomas\n                    </mat-panel-description>\n                  </mat-expansion-panel-header>\n                  <ul style=\"list-style: none;\">\n                      <li *ngFor=\"let sym of consulta.symptoms\">\n                          <p>{{sym.name}} /  {{sym.zone}} / {{sym.intensity}}</p>\n                          </li>\n                  </ul>\n                </mat-expansion-panel>\n\n                <mat-expansion-panel (opened)=\"panelOpenState = true\"\n                                     (closed)=\"panelOpenState = false\" *ngIf=\"consulta.signals.length>0\">\n                  <mat-expansion-panel-header>\n                    <mat-panel-title>\n                      \n                    </mat-panel-title>\n                    <mat-panel-description>\n                      Signals\n                    </mat-panel-description>\n                  </mat-expansion-panel-header>\n\n                  <ul style=\"list-style: none;\">\n                    <li *ngFor=\"let signal of consulta.signals\">\n                        <p>{{signal.name}} /  {{signal.metrica}} / {{signal.temporalidad}}</p>\n                        </li>\n                </ul>\n\n\n\n                </mat-expansion-panel>\n              </mat-accordion>\n              \n        </div>        \n    </li>\n  </ul>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/auth/login/login.component */ "./src/app/components/auth/login/login.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_nuevaconsulta_nuevaconsulta_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/nuevaconsulta/nuevaconsulta.component */ "./src/app/components/nuevaconsulta/nuevaconsulta.component.ts");
/* harmony import */ var _components_doctor_doctorhome_doctorhome_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/doctor/doctorhome/doctorhome.component */ "./src/app/components/doctor/doctorhome/doctorhome.component.ts");
/* harmony import */ var _components_doctor_misconsultas_misconsultas_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/doctor/misconsultas/misconsultas.component */ "./src/app/components/doctor/misconsultas/misconsultas.component.ts");
/* harmony import */ var _components_patient_myappointments_myappointments_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/patient/myappointments/myappointments.component */ "./src/app/components/patient/myappointments/myappointments.component.ts");









const routes = [
    { path: '', component: _components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'nuevaconsulta', component: _components_nuevaconsulta_nuevaconsulta_component__WEBPACK_IMPORTED_MODULE_5__["NuevaconsultaComponent"] },
    { path: 'doctor', component: _components_doctor_doctorhome_doctorhome_component__WEBPACK_IMPORTED_MODULE_6__["DoctorhomeComponent"] },
    { path: 'attended', component: _components_doctor_misconsultas_misconsultas_component__WEBPACK_IMPORTED_MODULE_7__["MisconsultasComponent"] },
    { path: 'myappointments', component: _components_patient_myappointments_myappointments_component__WEBPACK_IMPORTED_MODULE_8__["MyappointmentsComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'tesis';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: tokenGetter, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenGetter", function() { return tokenGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm2015/ngx-bootstrap-dropdown.js");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/tooltip/fesm2015/ngx-bootstrap-tooltip.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm2015/slider.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm2015/stepper.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/auth/login/login.component */ "./src/app/components/auth/login/login.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_mainmenu_mainmenu_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/mainmenu/mainmenu.component */ "./src/app/components/mainmenu/mainmenu.component.ts");
/* harmony import */ var _components_nuevaconsulta_nuevaconsulta_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/nuevaconsulta/nuevaconsulta.component */ "./src/app/components/nuevaconsulta/nuevaconsulta.component.ts");
/* harmony import */ var _components_doctor_doctorhome_doctorhome_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/doctor/doctorhome/doctorhome.component */ "./src/app/components/doctor/doctorhome/doctorhome.component.ts");
/* harmony import */ var _components_doctor_misconsultas_misconsultas_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/doctor/misconsultas/misconsultas.component */ "./src/app/components/doctor/misconsultas/misconsultas.component.ts");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/fesm2015/ngx-bootstrap-tabs.js");
/* harmony import */ var _components_patient_formconsulta_formconsulta_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/patient/formconsulta/formconsulta.component */ "./src/app/components/patient/formconsulta/formconsulta.component.ts");
/* harmony import */ var _components_patient_myappointments_myappointments_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/patient/myappointments/myappointments.component */ "./src/app/components/patient/myappointments/myappointments.component.ts");
/* harmony import */ var _components_forms_symptom_form_symptom_form_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/forms/symptom-form/symptom-form.component */ "./src/app/components/forms/symptom-form/symptom-form.component.ts");











// MATERIAL COSITAS----------------------------------------------------













// MATERIAL END----------------------------------------------------















function tokenGetter() {
    return localStorage.getItem('access_token');
}
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_24__["AppComponent"],
            _components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_25__["LoginComponent"],
            _components_home_home_component__WEBPACK_IMPORTED_MODULE_28__["HomeComponent"],
            _components_mainmenu_mainmenu_component__WEBPACK_IMPORTED_MODULE_29__["MainmenuComponent"],
            _components_nuevaconsulta_nuevaconsulta_component__WEBPACK_IMPORTED_MODULE_30__["NuevaconsultaComponent"],
            _components_doctor_doctorhome_doctorhome_component__WEBPACK_IMPORTED_MODULE_31__["DoctorhomeComponent"],
            _components_doctor_misconsultas_misconsultas_component__WEBPACK_IMPORTED_MODULE_32__["MisconsultasComponent"],
            _components_patient_formconsulta_formconsulta_component__WEBPACK_IMPORTED_MODULE_34__["FormconsultaComponent"],
            _components_patient_myappointments_myappointments_component__WEBPACK_IMPORTED_MODULE_35__["MyappointmentsComponent"],
            _components_forms_symptom_form_symptom_form_component__WEBPACK_IMPORTED_MODULE_36__["SymptomFormComponent"],
        ],
        imports: [
            _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["HttpClientModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbCollapseModule"],
            ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_6__["BsDropdownModule"].forRoot(),
            ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_7__["TooltipModule"].forRoot(),
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["ModalModule"].forRoot(),
            ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_33__["TabsModule"].forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            angular_font_awesome__WEBPACK_IMPORTED_MODULE_5__["AngularFontAwesomeModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_26__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_27__["AppRoutingModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_11__["MatSliderModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__["MatGridListModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_19__["MatToolbarModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_20__["MatStepperModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_21__["MatListModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__["MatIconModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"],
            _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_9__["JwtModule"].forRoot({
                config: {
                    tokenGetter: tokenGetter,
                    whitelistedDomains: [''],
                    blacklistedRoutes: ['']
                }
            })
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_24__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/auth/login/login.component.css":
/*!***********************************************************!*\
  !*** ./src/app/components/auth/login/login.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/auth/login/login.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/auth/login/login.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _services_auth_authorization_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/auth/authorization.service */ "./src/app/services/auth/authorization.service.ts");







let LoginComponent = class LoginComponent {
    constructor(formBuilder, route, location, router, auth) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.location = location;
        this.router = router;
        this.auth = auth;
        this.loading = false;
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.auth.logout();
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
    }
    get f() { return this.loginForm.controls; }
    onSubmit() {
        if (this.loginForm.invalid) {
            alert('Proporcione un usuario');
            return;
        }
        this.loading = true;
        this.auth.login(this.f.username.value, this.f.password.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()).subscribe(data => {
            this.loading = false;
            this.error = false;
            if (data.token === undefined) {
                alert('usuario no valido');
            }
            else {
                this.router.navigate([this.returnUrl]);
            }
        }, error => {
            this.error = error;
            this.loading = false;
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_auth_authorization_service__WEBPACK_IMPORTED_MODULE_6__["AuthorizationService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/auth/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/components/auth/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/components/doctor/doctorhome/doctorhome.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/components/doctor/doctorhome/doctorhome.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZG9jdG9yL2RvY3RvcmhvbWUvZG9jdG9yaG9tZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/doctor/doctorhome/doctorhome.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/doctor/doctorhome/doctorhome.component.ts ***!
  \**********************************************************************/
/*! exports provided: DoctorhomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorhomeComponent", function() { return DoctorhomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_authorization_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/auth/authorization.service */ "./src/app/services/auth/authorization.service.ts");
/* harmony import */ var _services_doctor_home_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/doctor-home.service */ "./src/app/services/doctor-home.service.ts");





let DoctorhomeComponent = class DoctorhomeComponent {
    constructor(auth, router, doctorhomeService) {
        this.auth = auth;
        this.router = router;
        this.doctorhomeService = doctorhomeService;
        this.consultas = [];
    }
    ngOnInit() {
        if (this.auth.loggedIn() == null) {
            this.router.navigate(['/']);
        }
        this.getConsultas();
        this.doctorhomeService.change.subscribe(consulta => {
            this.consultas = consulta;
        });
    }
    getConsultas() {
        this.doctorhomeService.getConsultas().subscribe(response => { this.consultas = response; });
    }
    setAttend(consulta) {
        const user = localStorage.getItem('profile');
        const userprofile = JSON.parse(user);
        const data = {
            attended: userprofile.upk,
            consulta_attended: consulta.pk,
            diagnostic: 'Revision'
        };
        this.doctorhomeService.setAttender(data).subscribe(response => {
            alert(response);
        });
    }
};
DoctorhomeComponent.ctorParameters = () => [
    { type: _services_auth_authorization_service__WEBPACK_IMPORTED_MODULE_3__["AuthorizationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_doctor_home_service__WEBPACK_IMPORTED_MODULE_4__["DoctorHomeService"] }
];
DoctorhomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-doctorhome',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./doctorhome.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/doctor/doctorhome/doctorhome.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./doctorhome.component.css */ "./src/app/components/doctor/doctorhome/doctorhome.component.css")).default]
    })
], DoctorhomeComponent);



/***/ }),

/***/ "./src/app/components/doctor/misconsultas/misconsultas.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/components/doctor/misconsultas/misconsultas.component.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZG9jdG9yL21pc2NvbnN1bHRhcy9taXNjb25zdWx0YXMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/doctor/misconsultas/misconsultas.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/doctor/misconsultas/misconsultas.component.ts ***!
  \**************************************************************************/
/*! exports provided: MisconsultasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MisconsultasComponent", function() { return MisconsultasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MisconsultasComponent = class MisconsultasComponent {
    constructor() { }
    ngOnInit() {
    }
};
MisconsultasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-misconsultas',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./misconsultas.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/doctor/misconsultas/misconsultas.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./misconsultas.component.css */ "./src/app/components/doctor/misconsultas/misconsultas.component.css")).default]
    })
], MisconsultasComponent);



/***/ }),

/***/ "./src/app/components/forms/symptom-form/symptom-form.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/forms/symptom-form/symptom-form.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9ybXMvc3ltcHRvbS1mb3JtL3N5bXB0b20tZm9ybS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/forms/symptom-form/symptom-form.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/forms/symptom-form/symptom-form.component.ts ***!
  \*************************************************************************/
/*! exports provided: SymptomFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SymptomFormComponent", function() { return SymptomFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SymptomFormComponent = class SymptomFormComponent {
    constructor() { }
    ngOnInit() {
    }
};
SymptomFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-symptom-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./symptom-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/forms/symptom-form/symptom-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./symptom-form.component.css */ "./src/app/components/forms/symptom-form/symptom-form.component.css")).default]
    })
], SymptomFormComponent);



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_authorization_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth/authorization.service */ "./src/app/services/auth/authorization.service.ts");




let HomeComponent = class HomeComponent {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    ngOnInit() {
        if (this.auth.loggedIn()) {
            return;
        }
        this.router.navigate(['/']);
    }
    goDoctor() {
        this.router.navigate(['doctor']);
    }
};
HomeComponent.ctorParameters = () => [
    { type: _services_auth_authorization_service__WEBPACK_IMPORTED_MODULE_3__["AuthorizationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/components/mainmenu/mainmenu.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/mainmenu/mainmenu.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbm1lbnUvbWFpbm1lbnUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/mainmenu/mainmenu.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/mainmenu/mainmenu.component.ts ***!
  \***********************************************************/
/*! exports provided: MainmenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainmenuComponent", function() { return MainmenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _models_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/menu */ "./src/app/models/menu.ts");





let MainmenuComponent = class MainmenuComponent {
    constructor() {
        this.menu = [];
        this.faPowerOff = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faPowerOff"];
        this.faAward = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faAward"];
        this.profile = '';
    }
    ngOnInit() {
        const user = localStorage.getItem('profile');
        const userprofile = JSON.parse(user);
        this.menu = _models_menu__WEBPACK_IMPORTED_MODULE_3__["MenuPage"][userprofile.profile];
        this.profile = userprofile.profile;
    }
    colapso() {
        alert('hell seak');
    }
};
MainmenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mainmenu',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mainmenu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/mainmenu/mainmenu.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./mainmenu.component.css */ "./src/app/components/mainmenu/mainmenu.component.css")).default]
    })
], MainmenuComponent);



/***/ }),

/***/ "./src/app/components/nuevaconsulta/nuevaconsulta.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/nuevaconsulta/nuevaconsulta.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbnVldmFjb25zdWx0YS9udWV2YWNvbnN1bHRhLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/nuevaconsulta/nuevaconsulta.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/nuevaconsulta/nuevaconsulta.component.ts ***!
  \*********************************************************************/
/*! exports provided: NuevaconsultaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuevaconsultaComponent", function() { return NuevaconsultaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_consulta_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/consulta.service */ "./src/app/services/consulta.service.ts");
/* harmony import */ var _services_getinteligence_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/getinteligence.service */ "./src/app/services/getinteligence.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _models_inteligence__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/inteligence */ "./src/app/models/inteligence.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_doctor_home_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/doctor-home.service */ "./src/app/services/doctor-home.service.ts");








let NuevaconsultaComponent = class NuevaconsultaComponent {
    constructor(consultaService, modalService, inteligence, doctorhomeService) {
        this.consultaService = consultaService;
        this.modalService = modalService;
        this.inteligence = inteligence;
        this.doctorhomeService = doctorhomeService;
        this.isCollapsed = false;
        this.consulta = [];
        this.sintoms = [];
        this.currConsulta = {};
        this.izonas = _models_inteligence__WEBPACK_IMPORTED_MODULE_5__["ZONAS"];
        this.bevelzonas = _models_inteligence__WEBPACK_IMPORTED_MODULE_5__["SUBZONAS"];
        this.subzonaview = null;
        this.sintomMeasures = [];
        this.doctors = [];
    }
    ngOnInit() {
        this.myForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            symptom: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            zone: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null),
            intencity: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required)
        });
        this.SignalForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            measure: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null),
            units: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required)
        });
        this.consulta = {
            patient: {
                name: 'Unnamed',
                age: '12',
                gender: 'M'
            },
            symptoms: [],
            signals: [],
            info: {},
        };
        this.doctors = [];
        this.addconsulta();
        this.getisintoms();
    }
    onSubmit() {
        return;
    }
    getDoctors() {
        this.consultaService.getDoctors().subscribe(response => { this.doctors = response; });
    }
    setSymptom() {
        const newsin = {
            symptom: this.myForm.controls['symptom'].value,
            zone: this.myForm.controls['zone'].value,
            intencity: this.myForm.controls['intencity'].value
        };
        this.consulta.symptoms.push(newsin);
        this.myForm.reset();
        if (this.consulta.symptoms.length > 1) {
            this.getDoctors();
        }
    }
    rmSym(thSym) {
        const inx = this.consulta.symptoms.indexOf(thSym);
        this.consulta.symptoms.splice(inx, 1);
        this.getDoctors();
    }
    setSignal() {
        const newsignal = {
            name: this.SignalForm.controls['name'].value,
            measure: this.SignalForm.controls['measure'].value,
            units: this.SignalForm.controls['units'].value
        };
        this.consulta.signals.push(newsignal);
        this.SignalForm.reset();
    }
    getConsulta(pk) {
        this.consultaService.getConsulta(pk).subscribe(response => { this.response = response; }, error => { this.response = error; });
    }
    addconsulta() {
        const consulta = {};
    }
    getisintoms() {
        this.inteligence.getIsintoms().subscribe(isintomas => {
            this.isintomas = isintomas;
        }, error => {
            alert(error);
        });
    }
    addsintom(content, isintom) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    getDismissReason(reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return `with: ${reason}`;
        }
    }
    seeSubzone(subzone) {
        this.subzonaview = _models_inteligence__WEBPACK_IMPORTED_MODULE_5__["SUBZONAS"][subzone];
    }
    closeSubzone() {
        this.subzonaview = null;
    }
};
NuevaconsultaComponent.ctorParameters = () => [
    { type: _services_consulta_service__WEBPACK_IMPORTED_MODULE_2__["ConsultaService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] },
    { type: _services_getinteligence_service__WEBPACK_IMPORTED_MODULE_3__["GetinteligenceService"] },
    { type: _services_doctor_home_service__WEBPACK_IMPORTED_MODULE_7__["DoctorHomeService"] }
];
NuevaconsultaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nuevaconsulta',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nuevaconsulta.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/nuevaconsulta/nuevaconsulta.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nuevaconsulta.component.css */ "./src/app/components/nuevaconsulta/nuevaconsulta.component.css")).default]
    })
], NuevaconsultaComponent);



/***/ }),

/***/ "./src/app/components/patient/formconsulta/formconsulta.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/patient/formconsulta/formconsulta.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGF0aWVudC9mb3JtY29uc3VsdGEvZm9ybWNvbnN1bHRhLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/patient/formconsulta/formconsulta.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/patient/formconsulta/formconsulta.component.ts ***!
  \***************************************************************************/
/*! exports provided: FormconsultaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormconsultaComponent", function() { return FormconsultaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_consulta_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/consulta.service */ "./src/app/services/consulta.service.ts");




let FormconsultaComponent = class FormconsultaComponent {
    constructor(formBuilder, consultaService) {
        this.formBuilder = formBuilder;
        this.consultaService = consultaService;
        this.mypatients = [];
        this.consulta = {};
        this.user = localStorage.getItem('profile');
        this.userprofile = JSON.parse(this.user);
        this.curpatient = {};
    }
    ngOnInit() {
        this.sintomForm = this.formBuilder.group({
            sintoma: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            zona: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            causa: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.patientForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            age: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            gender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.consultaService.getPatients().subscribe(response => {
            this.mypatients = response;
        });
    }
    setConsulta(patient) {
        this.curpatient = patient;
        this.consultaService.setConsulta(patient.pk).subscribe(response => {
            this.consulta = response;
        });
    }
    newPatient() {
        const data = {
            name: this.patientForm.controls.name.value,
            age: this.patientForm.controls.age.value,
            gender: this.patientForm.controls.gender.value,
            userpk: this.userprofile.upk
        };
        this.curpatient = data;
        this.consultaService.newPatient(data).subscribe(response => {
            this.consulta = response;
        });
    }
};
FormconsultaComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_consulta_service__WEBPACK_IMPORTED_MODULE_3__["ConsultaService"] }
];
FormconsultaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-formconsulta',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./formconsulta.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/patient/formconsulta/formconsulta.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./formconsulta.component.css */ "./src/app/components/patient/formconsulta/formconsulta.component.css")).default]
    })
], FormconsultaComponent);



/***/ }),

/***/ "./src/app/components/patient/myappointments/myappointments.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/components/patient/myappointments/myappointments.component.css ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGF0aWVudC9teWFwcG9pbnRtZW50cy9teWFwcG9pbnRtZW50cy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/patient/myappointments/myappointments.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/patient/myappointments/myappointments.component.ts ***!
  \*******************************************************************************/
/*! exports provided: MyappointmentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyappointmentsComponent", function() { return MyappointmentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_patient_myappointments_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/patient/myappointments.service */ "./src/app/services/patient/myappointments.service.ts");




let MyappointmentsComponent = class MyappointmentsComponent {
    constructor(router, myappointmentsService) {
        this.router = router;
        this.myappointmentsService = myappointmentsService;
        this.consultas = [];
        this.panelOpenState = false;
    }
    ngOnInit() {
        this.getConsultas();
        this.myappointmentsService.change.subscribe(consulta => {
            this.consultas = consulta;
        });
    }
    getConsultas() {
        this.myappointmentsService.getConsultas().subscribe(response => { this.consultas = response; });
    }
};
MyappointmentsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_patient_myappointments_service__WEBPACK_IMPORTED_MODULE_3__["MyappointmentsService"] }
];
MyappointmentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-myappointments',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./myappointments.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/patient/myappointments/myappointments.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./myappointments.component.css */ "./src/app/components/patient/myappointments/myappointments.component.css")).default]
    })
], MyappointmentsComponent);



/***/ }),

/***/ "./src/app/models/inteligence.ts":
/*!***************************************!*\
  !*** ./src/app/models/inteligence.ts ***!
  \***************************************/
/*! exports provided: Isintom, Izona, ZONAS, SUBZONAS, SINTOMS, PATIENT, CONSULT, DIAGNOSTIC, MEDICATION, CUESTIONARY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Isintom", function() { return Isintom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Izona", function() { return Izona; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZONAS", function() { return ZONAS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUBZONAS", function() { return SUBZONAS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SINTOMS", function() { return SINTOMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PATIENT", function() { return PATIENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONSULT", function() { return CONSULT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIAGNOSTIC", function() { return DIAGNOSTIC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MEDICATION", function() { return MEDICATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CUESTIONARY", function() { return CUESTIONARY; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Isintom {
}
class Izona {
}
const ZONAS = [
    {
        id: 1,
        part: 'superior',
        icon: null,
        childs: [{ cols: 4, name: 'head', icon: 'head' }]
    },
    {
        id: 2,
        part: 'neck',
        icon: null,
        childs: [{ cols: 2, name: 'neck', icon: 'neck' }]
    },
    {
        id: 3,
        part: 'motrisUp',
        icon: null,
        childs: [
            { cols: 1, name: 'hand', icon: 'hr' },
            { cols: 1, name: 'arm', icon: 'right_arm' },
            { cols: 1, name: 'shoulder', icon: 'rigth_uparm' },
            { cols: 1, name: 'chest', icon: 'shoulder' },
            { cols: 1, name: 'shoulder', icon: 'chest' },
            { cols: 1, name: 'arm', icon: 'shoulder' },
            { cols: 1, name: 'hand', icon: 'left_uparm' },
            { cols: 1, name: 'brace', icon: 'left_arm' },
            { cols: 1, name: 'brace', icon: 'left_hand' }
        ]
    },
    {
        id: 4,
        part: 'tronco',
        icon: null,
        childs: [
            { cols: 2, name: 'tronco', icon: 'tronco' }
        ]
    },
    {
        id: 5,
        part: 'pelvico',
        icon: null,
        childs: [
            { cols: 2, name: 'cadera', icon: 'cadera' },
            { cols: 2, name: 'pelvis', icon: 'pelvis' },
            { cols: 2, name: 'lcadera', icon: 'lcadera' }
        ]
    },
    {
        id: 6,
        part: 'trendown',
        icon: null,
        childs: [
            { cols: 4, name: 'Lleg', icon: 'rleg' },
            { cols: 4, name: 'Rleg', icon: 'lleg' }
        ]
    }
];
const SUBZONAS = {
    trendown: [
        {
            pk: 1,
            name: 'pierna'
        },
        {
            pk: 2,
            name: 'rodilla'
        },
        {
            pk: 3,
            name: 'tobillo'
        },
        {
            pk: 4,
            name: 'pierna'
        }
    ],
    superior: [
        {
            pk: 11,
            name: 'ojos',
        },
        {
            pk: 12,
            name: 'boca'
        },
        {
            pk: 13,
            name: 'nariz'
        },
        {
            pk: 14,
            name: 'frontal'
        },
        {
            pk: 15,
            name: 'lateral'
        },
        {
            pk: 16,
            name: 'trasera'
        }
    ]
};
const SINTOMS = [
    { id: 1,
        name: 'dolor',
        levels: [],
        type: []
    },
];
const PATIENT = {
    pk: 1,
    name: 'unamed',
    age: 0,
    gender: 'female'
};
const CONSULT = {
    pk: 11,
    patientpk: 1,
    datestart: 'dd/mm/yyyy',
    dateend: null,
    status: 0,
    general_conditions: ['pain head lateral few hours', 'temperature 37 cold sweat'],
    sintoms: [
        {
            sintom: 'pain',
            level: 'intence',
            condition: '',
            zone: ['head lateral'],
            alteration: 'feel heat',
            time: 'few hours',
        },
        {
            sintom: 'temperature',
            level: '37',
            condition: '',
            alteration: 'cold sweat',
            time: 'few hours',
        }
    ],
    keywords: ['bad nutrition', 'dizzy', 'hard breathing'],
    questionary: [
        {
            question: 1,
            answear: 'answear '
        }
    ]
};
const DIAGNOSTIC = {
    pk: 111,
    consultantpk: 11,
    patientpk: 1,
    diagnosis: ' Flu and throat\'s infection ',
    recomendations: ''
};
const MEDICATION = {
    pk: 1,
    consultantpk: 11,
    patientpk: 1,
    list: [
        {
            medicine: 'ampiciline pills 500 mg',
            periodicity: 'each 8 hours',
            temporarity: '1 week',
            dosis: 'one pill'
        },
        {
            medicine: 'paracetamol caps 250 mg',
            periodicity: 'each 6 hours',
            temporarity: '2 weeks',
            dosis: 'two caps'
        },
    ]
};
const CUESTIONARY = [
    {
        pk: 1,
        kwords: ['pain', 'head', 'lateral frontal occipital', 'pediatric general'],
        question: '¿Ha sentido sudoración fría?',
        level: 2
    },
    {
        pk: 2,
        kwords: ['pain', 'head', 'lateral frontal occipital', 'pediatric general'],
        question: '¿Alteraciones en su temperatura?',
        level: 1
    },
    {
        pk: 3,
        kwords: ['pain', 'head', 'lateral frontal occipital', 'pediatric general'],
        question: '¿Cómo ha sido su alimentación en las últimas 8 horas?',
        level: 1
    },
    {
        pk: 4,
        kwords: ['pain', 'head', 'lateral frontal occipital', 'pediatric general'],
        question: '¿Presenta molestias en alguna otra parte de la cabeza (ojos, nariz)?',
        level: 1
    },
    {
        pk: 5,
        kwords: ['pain', 'head', 'lateral frontal occipital', 'general'],
        question: '¿Padece de ipertención?',
        level: 0
    },
    {
        pk: 6,
        kwords: ['pain', 'head', 'lateral frontal occipital', 'general'],
        question: '¿Se a tomado alguna muestra de glucosa, recuerda el resultado?',
        level: 0
    },
];


/***/ }),

/***/ "./src/app/models/menu.ts":
/*!********************************!*\
  !*** ./src/app/models/menu.ts ***!
  \********************************/
/*! exports provided: Menu, MenuPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return Menu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPage", function() { return MenuPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Menu {
}
const MenuPage = {
    patient: [
        {
            id: 1,
            link: 'nuevaconsulta',
            name: 'Nueva Consulta',
            order: 1
        },
        {
            id: 2,
            link: 'myappointments',
            name: 'Mis Consultas',
            order: 1
        }
    ],
    doctor: [
        {
            id: 1,
            link: 'doctor',
            name: 'Consultas Abiertas',
            order: 1
        },
        {
            id: 2,
            link: 'attended',
            name: 'Mis Consultas',
            order: 2
        }
    ],
};


/***/ }),

/***/ "./src/app/services/auth/authorization.service.ts":
/*!********************************************************!*\
  !*** ./src/app/services/auth/authorization.service.ts ***!
  \********************************************************/
/*! exports provided: AuthorizationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorizationService", function() { return AuthorizationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");






let AuthorizationService = class AuthorizationService {
    constructor(http) {
        this.http = http;
        this.currUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currUserSubject.asObservable();
    }
    login(username, password) {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].baseUrl + 'webapp/manual_auth/';
        return this.http.post(url, { username, password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(res => {
            if (res.token) {
                localStorage.setItem('access_token', res.token);
                localStorage.setItem('profile', JSON.stringify(res));
            }
        }));
    }
    logout() {
        localStorage.removeItem('access_token');
        localStorage.removeItem('profile');
        this.currUserSubject.next(null);
    }
    loggedIn() {
        return localStorage.getItem('access_token') !== null;
    }
};
AuthorizationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AuthorizationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthorizationService);



/***/ }),

/***/ "./src/app/services/consulta.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/consulta.service.ts ***!
  \**********************************************/
/*! exports provided: ConsultaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultaService", function() { return ConsultaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");





let ConsultaService = class ConsultaService {
    constructor(http) {
        this.http = http;
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.userinfo = localStorage.getItem('access_token');
    }
    getConsulta(pk) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                Authorization: 'JWT ' + this.userinfo
            })
        };
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + 'webapp/get_user/' + pk + '/';
        return this.http.post(url, {}, httpOptions).pipe();
    }
    getPatients() {
        const user = localStorage.getItem('profile');
        const userprofile = JSON.parse(user);
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + 'webapp/getpatients/' + userprofile.upk + '/';
        return this.http.get(url).pipe();
    }
    getDoctors() {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + 'webapp/patient/doctors/';
        return this.http.get(url).pipe();
    }
    addConsulta() {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + 'webapp/setconsulta/';
        return this.http.post(url, {}).pipe();
    }
    setConsulta(patientpk) {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + 'webapp/setconsulta/';
        const data = {
            paciente: patientpk,
            status: 0
        };
        return this.http.post(url, data).pipe();
    }
    addSintom(sintom) {
        this.consulta.sintoms.push(sintom);
        return sintom;
    }
    newPatient(data) {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + 'webapp/newpatient/';
        return this.http.post(url, data).pipe();
    }
};
ConsultaService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ConsultaService.prototype, "change", void 0);
ConsultaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ConsultaService);



/***/ }),

/***/ "./src/app/services/doctor-home.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/doctor-home.service.ts ***!
  \*************************************************/
/*! exports provided: DoctorHomeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorHomeService", function() { return DoctorHomeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




let DoctorHomeService = class DoctorHomeService {
    constructor(http) {
        this.http = http;
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.userinfo = localStorage.getItem('access_token');
    }
    getConsultas() {
        const user = localStorage.getItem('profile');
        const userprofile = JSON.parse(user);
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + 'webapp/consultas/?upk=' + userprofile.upk;
        const response = this.http.get(url).pipe();
        return response;
    }
    setAttender(data) {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + 'webapp/attend/';
        const response = this.http.post(url, data).pipe();
        return response;
    }
};
DoctorHomeService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], DoctorHomeService.prototype, "change", void 0);
DoctorHomeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DoctorHomeService);



/***/ }),

/***/ "./src/app/services/getinteligence.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/getinteligence.service.ts ***!
  \****************************************************/
/*! exports provided: GetinteligenceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetinteligenceService", function() { return GetinteligenceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");





let GetinteligenceService = class GetinteligenceService {
    constructor(http) {
        this.http = http;
        this.itchange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.userinfo = localStorage.getItem('access_token');
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                Authorization: 'JWT ' + this.userinfo
            })
        };
    }
    getIsintoms() {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + 'it/isintom/';
        return this.http.get(url, {}).pipe();
    }
};
GetinteligenceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], GetinteligenceService.prototype, "itchange", void 0);
GetinteligenceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], GetinteligenceService);



/***/ }),

/***/ "./src/app/services/patient/myappointments.service.ts":
/*!************************************************************!*\
  !*** ./src/app/services/patient/myappointments.service.ts ***!
  \************************************************************/
/*! exports provided: MyappointmentsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyappointmentsService", function() { return MyappointmentsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




let MyappointmentsService = class MyappointmentsService {
    constructor(http) {
        this.http = http;
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.userinfo = localStorage.getItem('access_token');
    }
    getConsultas() {
        const user = localStorage.getItem('profile');
        const userprofile = JSON.parse(user);
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + 'webapp/patient/myappointments/?upk=' + userprofile.upk;
        const response = this.http.get(url).pipe();
        return response;
    }
};
MyappointmentsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], MyappointmentsService.prototype, "change", void 0);
MyappointmentsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MyappointmentsService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    baseUrl: 'http://localhost:8004/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/alberto.rios/angular-tutorial/frontTesis/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map