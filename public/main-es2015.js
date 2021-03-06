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
/* harmony default export */ __webpack_exports__["default"] = ("<nav-bar></nav-bar>\r\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/entries-page/entries-page.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/entries-page/entries-page.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"showLoading\" class=\"container-fluid\">\n    <loading-screen loadingContent=\"Please wait while your games load...\" ></loading-screen>\n</div>\n\n<div *ngIf=\"!showLoading\">\n    <h3 *ngIf=\"isLive\" class=\"d-flex justify-content-center mat-display-1\" style=\"margin: 15px 0 5px;\">EVENT IS LIVE</h3>\n    <h3 *ngIf=\"!isLive\" class=\"d-flex justify-content-center\" style=\"margin: 15px 0 5px;\">Betting open for</h3>\n    <h2 class=\"d-flex justify-content-center mat-display-2\" style=\"margin: 5px 0 55px;\">{{event?.name}}</h2>\n    <p class=\"d-flex justify-content-center\">Select a group to see all of the submitted entries</p>\n    <form class=\"form-horizontal d-flex justify-content-center\" [formGroup]=\"form\">\n        <mat-form-field style=\"background-color: #a79faa !important;\">\n            <mat-label>Group</mat-label>\n            <mat-select style=\"text-align: center;\" [(ngModel)]=\"selectedValue\" name=\"game\" id=\"game\" #game formControlName=\"game\" (selectionChange)=\"selected($event)\"> \n                <mat-option *ngFor=\"let game of games\" [value]=\"game\">\n                {{game.name}}\n                </mat-option>\n            </mat-select>\n        </mat-form-field>\n    </form>\n\n    <div class=\"d-flex justify-content-center\" style=\"margin-top: 30px;\">\n        <p>{{this.numBets}}</p>\n    </div>\n    \n    <hr *ngIf=\"players.length == 0\">\n\n    <div *ngIf=\"players.length == 0\" class=\"d-flex justify-content-center\">\n        No group selected with any players\n    </div>\n\n    <div *ngIf=\"players.length != 0\" class=\"d-flex justify-content-center\">\n        <table mat-table [dataSource]=\"players\" mat-table class=\"mat-table cdk-table col-xl-9 col-lg-9 col-md-10 col-sm-11 col-xs-12\" style=\"text-align: center; width: 100%;\">\n          \n            <ng-container matColumnDef=\"name\">\n              <th mat-header-cell *matHeaderCellDef style=\"text-align: center;\"> Player </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"record\">\n                <th mat-header-cell *matHeaderCellDef style=\"text-align: center;\"> Score </th>\n                <td mat-cell *matCellDef=\"let element\"> {{element.record}} </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"details\">\n                <th mat-header-cell *matHeaderCellDef style=\"text-align: center;\"> Details </th>\n                <td mat-cell *matCellDef=\"let element\"> \n                    <button mat-raised-button color=\"primary\" (click)=\"goTo(element)\">Show picks</button> \n                </td>\n            </ng-container>\n          \n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n        </table>\n    </div>\n\n    <mat-dialog-actions *ngIf=\"!isLive\" class=\"d-flex justify-content-center\" style=\"margin-top: 50px;\">\n        <button mat-raised-button color=\"secondary\" (click)=\"new()\">Make a new bet</button>\n    </mat-dialog-actions>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/form-page/form-page.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/form-page/form-page.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"showLoading\" class=\"container-fluid\">\n    <loading-screen loadingContent=\"Please wait while betting sheet loads...\" ></loading-screen>\n</div>\n\n<div *ngIf=\"!showLoading\" class=\"container-fluid\">\n    <h1 class=\"d-flex justify-content-center mat-display-2\" style=\"margin: 25px 0 5px;\">{{eventName}}</h1>\n    <h3 class=\"d-flex justify-content-center mat-display-1\" style=\"margin: 0px 0 25px;\">Prop Bets</h3>\n    <h4 class=\"d-flex justify-content-center\">Betting closes at: {{eventDate  | date :'short'}}</h4>\n    <div *ngIf=\"newBet\" class=\"navbar-header d-flex justify-content-center\">\n        <p>Group: {{gameName}}</p>\n        <div style=\"width: 100px;\"></div>\n        <p>Name: {{playerName}}</p>\n    </div>\n  \n    <hr class=\"header-line\">\n\n    <div class=\"row m-xl-5 m-lg-4 m-md-3 m-sm-0 m-xs-0 d-flex justify-content-md-center justify-content-lg-center justify-content-xl-center\">\n        <ng-container *ngFor=\"let section of sections\">\n\n            <div class=\"col-12 mb-md-3 mb-lg-3 mb-xl-3 d-flex justify-content-md-center justify-content-lg-center justify-content-xl-center section-header\">{{ section.name }}</div>\n\n            <ng-container *ngFor=\"let bet of section.bets; let col = index\">\n                    <div *ngIf=\"isSpecialBet(bet)\" [ngClass]=\"col % 2 == 0 ? 'col-xl-5 col-lg-5 col-md-5 col-sm-7 col-6 even-row' : 'col-xl-5 col-lg-5 col-md-5 col-sm-7 col-6 odd-row'\">\n                        {{ bet.q }}\n                    </div>\n                    <div *ngIf=\"isSpecialBet(bet)\" [ngClass]=\"col % 2 == 0 ? 'col-xl-3 col-lg-3 col-md-3 col-sm-5 col-6 even-row' : 'col-xl-3 col-lg-3 col-md-3 col-sm-5 col-6 odd-row'\">\n                        <mat-radio-group name=\"{{ bet.id }}\" (change)=\"radioChange($event)\">\n                            <mat-radio-button style=\"float: left;\" value=\"{{ bet.a1 }}\">{{ bet.a1 }}</mat-radio-button>\n                            <mat-radio-button style=\"float: right;\" value=\"{{ bet.a2 }}\">{{ bet.a2 }}</mat-radio-button>\n                        </mat-radio-group>\n                    </div>\n                    <!-- <div *ngIf=\"!isSpecialBet(bet)\" class=\"even-row\" style=\"width: 100%;\">\n                        \n                            <mat-form-field *ngIf=\"bet.id == 'gatorade'\" style=\"width: 100%;\">\n                                <input id=\"gatorade\" matInput placeholder=\"Color\" autocomplete=\"off\">\n                            </mat-form-field>\n                        \n                            <div  *ngIf=\"bet.id == 'finalscore'\" class=\"d-flex\">\n                                <mat-form-field *ngIf=\"bet.id == 'finalscore'\" style=\"width: 40%;\">\n                                    <input id=\"rams\" matInput placeholder=\"Rams\" autocomplete=\"off\">\n                                </mat-form-field>\n                                <div style=\"width: 100px;\"></div>\n                                <mat-form-field *ngIf=\"bet.id == 'finalscore'\" style=\"width: 40%;\">\n                                    <input id=\"bengals\" matInput placeholder=\"Bengals\" autocomplete=\"off\">\n                                </mat-form-field>\n                            </div>\n                    \n                            <mat-form-field *ngIf=\"bet.id == 'mvp'\" style=\"width: 100%;\">\n                                <input id=\"mvp\" matInput placeholder=\"Name\" autocomplete=\"off\">\n                            </mat-form-field>\n                        \n                    </div> -->\n            </ng-container>\n\n        </ng-container>\n        \n    </div>\n\n    <mat-dialog-actions class=\"mt-4 d-flex justify-content-center\">\n        <button *ngIf=\"newBet\" mat-raised-button color=\"primary\" (click)=\"submit()\" [disabled]=\"isDisabled\">Submit</button>\n        <button *ngIf=\"!newBet\" mat-raised-button color=\"primary\" (click)=\"makeBet()\">Make Bets</button>\n        <button mat-raised-button color=\"secondary\" (click)=\"seeEntries()\">See Entries</button>\n    </mat-dialog-actions>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/form-page/info-dialog/info-dialog.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/form-page/info-dialog/info-dialog.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<mat-dialog-content>\n    <h1 mat-dialog-title class=\"d-flex justify-content-center\">Create Entry</h1>\n    \n    <form class=\"form-horizontal\" [formGroup]=\"form\" (submit)=\"submit()\">\n        <h2 mat-dialog-title style=\"padding-top: 25px;\">Event</h2>\n        <p>Pick the event you want to place bets on.</p>\n        <mat-form-field style=\"margin-right: 20px;\">\n            <mat-label>Event</mat-label>\n            <mat-select [(ngModel)]=\"selectedEvent\" name=\"event\" id=\"event\" #event formControlName=\"event\" [ngClass]=\"displayFieldCss('event')\" (selectionChange)=\"selecteEvent($event)\"> \n                <mat-option *ngFor=\"let event of events\" [value]=\"event\">\n                    {{event.name}}\n                </mat-option>\n            </mat-select>\n        </mat-form-field>\n\n        <h2 mat-dialog-title style=\"padding-top: 25px;\">Group</h2>\n        <p>Select the group of people you are playing with or create a new one.</p>\n        <mat-form-field style=\"margin-right: 20px;\">\n            <mat-label>Group</mat-label>\n            <mat-select [(ngModel)]=\"selectedGame\" name=\"game\" id=\"game\" #game formControlName=\"game\" [ngClass]=\"displayFieldCss('game')\" (selectionChange)=\"selecteGame($event)\"> \n                <mat-option *ngFor=\"let game of games\" [value]=\"game\">\n                    {{game.name}}\n                </mat-option>\n                <mat-option value=\"new\">\n                    Create New Group\n                </mat-option>\n            </mat-select>\n        </mat-form-field>\n        \n        <mat-form-field *ngIf=\"gameText == 'Create New Group'\">\n            <input matInput placeholder=\"Group Name\" formControlName=\"group\" formControlName=\"group\" [ngClass]=\"displayFieldCss('game')\" autocomplete=\"off\">\n        </mat-form-field>\n\n        <h2 mat-dialog-title style=\"padding-top: 25px;\">Name</h2>\n        <p>Enter your name for the entry.</p>\n        <mat-form-field>\n            <input matInput placeholder=\"Name\" formControlName=\"name\" formControlName=\"name\" [ngClass]=\"displayFieldCss('name')\" autocomplete=\"off\">\n        </mat-form-field>\n\n        <mat-dialog-actions class=\"d-flex justify-content-center\">\n            <button type=\"submit\" mat-raised-button color=\"primary\">Enter</button>\n            <button mat-raised-button color=\"secondary\" (click)=\"close()\">Close</button>\n        </mat-dialog-actions>\n    </form>\n</mat-dialog-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/loading-screen/loading-screen.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/loading-screen/loading-screen.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n    <div class=\"row\">\n        <h3 style=\"width: 100%; color: #7b1fa2; text-align: center; position: absolute;\n        padding-top: 40%;\">{{loadingContent}}</h3>\n    </div>\n</div>\n<div class=\"loading-overlay\">\n    <div class=\"row\">\n        <mat-spinner></mat-spinner>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-bar/nav-bar.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nav-bar/nav-bar.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav>\n    <mat-toolbar color=\"primary\" style=\"height: auto; padding-top: 10px;\">\n        <ul class=\"nav navbar-nav navbar-right\" style=\"flex-direction:row; width: 100%;\">\n            <!-- <li *ngIf=\"!isLoggedIn\" style=\"width: 100%; text-align: right;\"><a (click)=\"login()\">Register Now</a></li> -->\n            <li *ngIf=\"isLoggedIn\" style=\"width: 70%; text-align: left;\"><p>{{ userName }}</p></li>\n            <li *ngIf=\"isLoggedIn\" style=\"width: 30%; text-align: right; cursor: pointer;\"><a (click)=\"logout()\">Logout</a></li>\n        </ul>\n    </mat-toolbar>\n</nav>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/register-page/register.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register-page/register.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n  <h1\r\n    class=\"d-flex justify-content-center mat-display-3\"\r\n    style=\"margin: 40px 0 40px\"\r\n  >\r\n    Prop Bets\r\n  </h1>\r\n  <h3 class=\"d-flex justify-content-center\" style=\"margin-bottom: -2px\">\r\n    Current Event:\r\n  </h3>\r\n  <h3 class=\"d-flex justify-content-center mat-display-2\" style=\"margin-bottom: 10px;\">Superbowl LVI</h3>\r\n  <form class=\"form-horizontal\" [formGroup]=\"form\" (submit)=\"register()\">\r\n    <div\r\n      class=\"justify-content-center\"\r\n      style=\"padding: 20px; text-align: center\"\r\n    >\r\n      <h2 mat-dialog-title style=\"padding-top: 25px\">Enter your Email:</h2>\r\n      <mat-form-field style=\"background-color: #a79faa;\">\r\n        <input\r\n          matInput\r\n          placeholder=\"Email\"\r\n          formControlName=\"email\"\r\n          formControlName=\"email\"\r\n          autocomplete=\"off\"\r\n          type=\"email\"\r\n        />\r\n      </mat-form-field>\r\n\r\n      <h2 mat-dialog-title style=\"padding-top: 25px\">Enter your Name:</h2>\r\n      <mat-form-field style=\"background-color: #a79faa;\">\r\n        <input\r\n          matInput\r\n          placeholder=\"Name\"\r\n          formControlName=\"name\"\r\n          formControlName=\"name\"\r\n          autocomplete=\"off\"\r\n        />\r\n      </mat-form-field>\r\n      <mat-dialog-actions class=\"d-flex justify-content-center\" style=\"margin-top: 20px;margin-bottom: 50px;\">\r\n        <button type=\"submit\" mat-raised-button color=\"primary\">\r\n          Register\r\n        </button>\r\n      </mat-dialog-actions>\r\n    <p mat-display-1=\"\">\r\n      Or click the button below to login or create an account using a valid Google\r\n      email.\r\n    </p>\r\n      <button\r\n      class=\"btn btn-default mat-raised-button mat-button-base mat-primary\"\r\n      color=\"primary\"\r\n      mat-raised-button=\"\"\r\n      ng-reflect-color=\"primary\"\r\n      (click)=\"googleRegister()\"\r\n    >\r\n      <span class=\"mat-button-wrapper\">Register with Google</span>\r\n      <div\r\n        class=\"mat-button-ripple mat-ripple\"\r\n        matripple=\"\"\r\n        ng-reflect-centered=\"false\"\r\n        ng-reflect-disabled=\"false\"\r\n        ng-reflect-trigger=\"[object HTMLButtonElement]\"\r\n      ></div>\r\n      <div class=\"mat-button-focus-overlay\"></div>\r\n    </button>\r\n    </div>\r\n  </form>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/review-page/review-page.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/review-page/review-page.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"showLoading\" class=\"container-fluid\">\n  <loading-screen loadingContent=\"Please wait while bets load...\" ></loading-screen>\n</div>\n\n<div *ngIf=\"!showLoading\" class=\"container-fluid\">\n    <h2 class=\"d-flex justify-content-center mat-display-1\" style=\"margin: 25px 0 25px;\">{{event?.name}}</h2>\n    <div class=\"navbar-header d-flex justify-content-center\">\n        <p>Group: {{groupName}}</p>\n        <div style=\"width: 100px;\"></div>\n        <p>Name: {{playerName}}</p>\n    </div>\n\n    <div class=\"row\">\n\n        <table mat-table [dataSource]=\"bets\" class=\"col-12\" style=\"text-align: center;\">\n          \n            <!-- question Column -->\n            <ng-container matColumnDef=\"question\">\n              <th mat-header-cell *matHeaderCellDef style=\"text-align: center; width: 50%;\"> Bet </th>\n              <td mat-cell *matCellDef=\"let element\" style=\"text-align: left;\"> {{element.questionText}} </td>\n              <td mat-footer-cell *matFooterCellDef></td>\n            </ng-container>\n\n            <!-- guess Column -->\n            <ng-container matColumnDef=\"guess\">\n              <th mat-header-cell *matHeaderCellDef style=\"text-align: center;\"> Guess </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.guess}} </td>\n              <td mat-footer-cell *matFooterCellDef> Totals:</td>\n            </ng-container>\n\n            <!-- answer Column -->\n            <ng-container matColumnDef=\"answer\">\n              <th mat-header-cell *matHeaderCellDef style=\"text-align: right;\"> Answer</th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.answer}} </td>\n              <td mat-footer-cell *matFooterCellDef> {{results}} </td>\n            </ng-container>\n\n            <!-- answer check -->\n            <ng-container matColumnDef=\"check\">\n              <th mat-header-cell *matHeaderCellDef></th>\n              <td mat-cell *matCellDef=\"let element\">\n                <span *ngIf=\"element.answer == element.guess\" class=\"material-icons\">\n                    done_outline\n                </span>\n                <span *ngIf=\"element.answer != '' && element.answer != element.guess\" class=\"material-icons\">\n                    clear\n                </span>\n              </td>\n              <td mat-footer-cell *matFooterCellDef></td>\n            </ng-container>\n\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n            <tr mat-footer-row *matFooterRowDef=\"displayedColumns\"></tr>\n        </table>\n        \n    </div>\n\n    <mat-dialog-actions class=\"mt-4 d-flex justify-content-center\">\n        <button mat-raised-button color=\"primary\" (click)=\"refresh()\">Refresh</button>\n        <button mat-raised-button color=\"secondary\" (click)=\"back()\">Back</button>\n    </mat-dialog-actions>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/pagination/pagination.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/pagination/pagination.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav [hidden]=\"!isVisible\">\r\n  <ul class=\"pagination\">\r\n    <li [class.disabled]=\"!previousEnabled\" (click)=\"previousNext(-1, $event)\">\r\n      <a aria-label=\"Previous\">\r\n        <span aria-hidden=\"true\">&laquo;</span>\r\n      </a>\r\n    </li>\r\n    <li *ngFor=\"let page of pages\" (click)=\"changePage(page, $event)\" [class.active]=\"currentPage === page\">\r\n      <a>{{ page }}</a>\r\n    </li>\r\n    <li [class.disabled]=\"!nextEnabled\" (click)=\"previousNext(1, $event)\">\r\n      <a aria-label=\"Next\">\r\n        <span aria-hidden=\"true\">&raquo;</span>\r\n      </a>\r\n    </li>\r\n  </ul>\r\n</nav>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
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
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
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

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
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
/* harmony import */ var _form_page_form_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-page/form-page.component */ "./src/app/form-page/form-page.component.ts");
/* harmony import */ var _entries_page_entries_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./entries-page/entries-page.component */ "./src/app/entries-page/entries-page.component.ts");
/* harmony import */ var _review_page_review_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./review-page/review-page.component */ "./src/app/review-page/review-page.component.ts");
/* harmony import */ var _register_page_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register-page/register.component */ "./src/app/register-page/register.component.ts");







const routes = [
    {
        path: '',
        children: [
            {
                path: 'form',
                component: _form_page_form_page_component__WEBPACK_IMPORTED_MODULE_3__["FormPageComponent"]
            },
            {
                path: 'entries',
                component: _entries_page_entries_page_component__WEBPACK_IMPORTED_MODULE_4__["EntriesPageComponent"]
            },
            {
                path: 'register',
                component: _register_page_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"]
            },
            {
                path: 'review',
                component: _review_page_review_page_component__WEBPACK_IMPORTED_MODULE_5__["ReviewPageComponent"],
                children: [
                    { path: ':id/:groupName/:playerName', component: _review_page_review_page_component__WEBPACK_IMPORTED_MODULE_5__["ReviewPageComponent"] }
                ]
            },
            {
                path: '', redirectTo: '/entries', pathMatch: 'full'
            }
        ]
    }
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
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _form_page_form_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-page/form-page.component */ "./src/app/form-page/form-page.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _form_page_info_dialog_info_dialog_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./form-page/info-dialog/info-dialog.component */ "./src/app/form-page/info-dialog/info-dialog.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _entries_page_entries_page_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./entries-page/entries-page.component */ "./src/app/entries-page/entries-page.component.ts");
/* harmony import */ var _review_page_review_page_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./review-page/review-page.component */ "./src/app/review-page/review-page.component.ts");
/* harmony import */ var _loading_screen_loading_screen_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./loading-screen/loading-screen.component */ "./src/app/loading-screen/loading-screen.component.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @auth0/auth0-angular */ "./node_modules/@auth0/auth0-angular/fesm2015/auth0-auth0-angular.js");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var _register_page_register_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./register-page/register.component */ "./src/app/register-page/register.component.ts");
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./auth-guard.service */ "./src/app/auth-guard.service.ts");
























//import { SigninRedirectCallbackComponent } from './redirects/signin-redirect-callback.component'
//import { SignoutRedirectCallbackComponent } from './redirects/signout-redirect-callback.component'




let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__["MatRadioModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatTableModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__["MatProgressSpinnerModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__["MatToolbarModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientXsrfModule"].withOptions({
                cookieName: 'XSRF-TOKEN',
                headerName: 'X-CSRF-TOKEN'
            }),
            _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_24__["AuthModule"].forRoot({
                domain: 'dev-njexuf7k.us.auth0.com',
                clientId: 'U3p1DYzxxirb5rGFxRDNKK4MVBZiOVtT'
            }),
            _core_core_module__WEBPACK_IMPORTED_MODULE_22__["CoreModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_23__["SharedModule"]
        ],
        entryComponents: [_form_page_info_dialog_info_dialog_component__WEBPACK_IMPORTED_MODULE_17__["InfoDialogComponent"]],
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _form_page_form_page_component__WEBPACK_IMPORTED_MODULE_5__["FormPageComponent"],
            _form_page_info_dialog_info_dialog_component__WEBPACK_IMPORTED_MODULE_17__["InfoDialogComponent"],
            _entries_page_entries_page_component__WEBPACK_IMPORTED_MODULE_19__["EntriesPageComponent"],
            _review_page_review_page_component__WEBPACK_IMPORTED_MODULE_20__["ReviewPageComponent"],
            _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_25__["NavBarComponent"],
            _register_page_register_component__WEBPACK_IMPORTED_MODULE_26__["RegisterComponent"],
            _loading_screen_loading_screen_component__WEBPACK_IMPORTED_MODULE_21__["LoadingScreenComponent"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
        providers: [
            _auth_guard_service__WEBPACK_IMPORTED_MODULE_27__["AuthGuardService"]
        ]
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth-guard.service.ts":
/*!***************************************!*\
  !*** ./src/app/auth-guard.service.ts ***!
  \***************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



//import { AuthenticationService } from './authentication.service';
let AuthGuardService = class AuthGuardService {
    constructor(router) {
        this.router = router;
    }
};
AuthGuardService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthGuardService);



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data.service */ "./src/app/core/data.service.ts");
/* harmony import */ var _data_filter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data-filter.service */ "./src/app/core/data-filter.service.ts");
/* harmony import */ var _sorter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sorter */ "./src/app/core/sorter.ts");
/* harmony import */ var _trackby_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./trackby.service */ "./src/app/core/trackby.service.ts");
/* harmony import */ var _shared_ensureModuleLoadedOnceGuard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/ensureModuleLoadedOnceGuard */ "./src/app/shared/ensureModuleLoadedOnceGuard.ts");


//Using the new HttpClientModule now. If you're still on < Angular 4.3 see the 
//core.module.ts.httpmodule file instead (simply rename it to the name 
//of this file to use it instead)






let CoreModule = class CoreModule extends _shared_ensureModuleLoadedOnceGuard__WEBPACK_IMPORTED_MODULE_7__["EnsureModuleLoadedOnceGuard"] {
    //Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
    constructor(parentModule) {
        super(parentModule);
    }
};
CoreModule.ctorParameters = () => [
    { type: CoreModule, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"] }] }
];
CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            //Can use with Angular 4.3+ to 
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        ],
        providers: [_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"], _data_filter_service__WEBPACK_IMPORTED_MODULE_4__["DataFilterService"], _sorter__WEBPACK_IMPORTED_MODULE_5__["Sorter"], _trackby_service__WEBPACK_IMPORTED_MODULE_6__["TrackByService"]]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"])())
], CoreModule);

//Example of a custom XSRF class
//export class MyCookieXSRFStrategy implements XSRFStrategy {
//    constructor(
//        private _cookieName: string = 'XSRF-TOKEN', private _headerName: string = 'X-XSRF-TOKEN') { }
//    private getCookie(name: string) {
//        let ca: Array<string> = document.cookie.split(';');
//        let caLen: number = ca.length;
//        let cookieName = name + "=";
//        let c: string;
//        for (let i: number = 0; i < caLen; i += 1) {
//            c = ca[i].replace(/^\s\+/g, "");
//            if (c.indexOf(cookieName) == 0) {
//                return c.substring(cookieName.length, c.length);
//            }
//        }
//        return "";
//    }
//    configureRequest(req: Request) {
//        let xsrfToken = this.getCookie(this._cookieName);
//        alert(xsrfToken);
//        if (xsrfToken) {
//            req.headers.set(this._headerName, xsrfToken);
//        }
//    }
//}


/***/ }),

/***/ "./src/app/core/data-filter.service.ts":
/*!*********************************************!*\
  !*** ./src/app/core/data-filter.service.ts ***!
  \*********************************************/
/*! exports provided: DataFilterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataFilterService", function() { return DataFilterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_property_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/property-resolver */ "./src/app/shared/property-resolver.ts");



let DataFilterService = class DataFilterService {
    filter(datasource, filterProperties, filterData) {
        if (datasource && filterProperties && filterData) {
            filterData = filterData.toUpperCase();
            const filtered = datasource.filter(item => {
                let match = false;
                for (const prop of filterProperties) {
                    let propVal = '';
                    //Account for nested properties like 'state.name'
                    if (prop.indexOf('.') > -1) {
                        propVal = _shared_property_resolver__WEBPACK_IMPORTED_MODULE_2__["propertyResolver"].resolve(prop, item);
                        if (propVal) {
                            propVal = propVal.toString().toUpperCase();
                        }
                    }
                    else {
                        if (item[prop]) {
                            propVal = item[prop].toString().toUpperCase();
                        }
                    }
                    if (propVal.indexOf(filterData) > -1) {
                        match = true;
                        break;
                    }
                }
                ;
                return match;
            });
            return filtered;
        }
        else {
            return datasource;
        }
    }
};
DataFilterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], DataFilterService);



/***/ }),

/***/ "./src/app/core/data.service.ts":
/*!**************************************!*\
  !*** ./src/app/core/data.service.ts ***!
  \**************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");


//Using the new HttpClientModule now. If you're still on < Angular 4.3 see the 
//data.service.ts file instead (simplify rename it to the name 
//of this file to use it instead)



let DataService = class DataService {
    constructor(http) {
        this.http = http;
        this.betUrl = '/api/bets';
        this.eventUrl = '/api/events';
        this.gameUrl = '/api/games';
        this.playerUrl = '/api/players';
        this.registerUrl = '/api/register';
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        this.headers = this.headers.set('Access-Control-Allow-Origin', '*').set('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT');
    }
    getRegisteration(code) {
        //   const { data } = axios({
        //     url: `https://oauth2.googleapis.com/token`,
        //     method: 'post',
        var data = {
            client_id: '1011221667530-6e7kha8c8mrbtjetti1jr7fkghrcaarc.apps.googleusercontent.com',
            client_secret: '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',
            redirect_uri: 'https://vast-badlands-87144.herokuapp.com/entries',
            grant_type: 'authorization_code',
            code: code
        };
        //   });
        return this.http.post(`https://oauth2.googleapis.com/token`, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((token) => {
            //this.calculateBetsOrderTotal(bets);
            return token;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    getUserInfo(token) {
        // const { data } = await axios({
        //     url: 'https://www.googleapis.com/oauth2/v2/userinfo',
        //     method: 'get',
        //     headers: {
        //       Authorization: `Bearer ${access_token}`,
        //     },
        //   });
        return this.http.get(`https://www.googleapis.com/oauth2/v2/userinfo`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((info) => {
            //this.calculateBetsOrderTotal(bets);
            return info;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    getBets() {
        return this.http.get(this.betUrl, {
            headers: this.headers
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((bets) => {
            //this.calculateBetsOrderTotal(bets);
            return bets;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    getBetsPage(page, pageSize) {
        return this.http.get(`${this.betUrl}/page/${page}/${pageSize}`, {
            headers: this.headers,
            observe: 'response'
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => {
            //Need to observe response in order to get to this header (see {observe: 'response'} above)
            const totalRecords = +res.headers.get('x-inlinecount');
            let bets = res.body;
            return {
                results: bets,
                totalRecords: totalRecords
            };
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    getBet(id) {
        return this.http.get(this.betUrl + '/' + id, {
            headers: this.headers
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    insertBet(bet) {
        return this.http.post(this.betUrl, bet, {
            headers: this.headers
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            console.log('insert bet status: ' + data.status);
            return data.bet;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    updateBet(bets) {
        return this.http.put(this.betUrl + '/update', bets, {
            headers: this.headers
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            console.log('update bet status: ' + data.status);
            return data.bet;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    deleteBet(id) {
        return this.http.delete(this.betUrl + '/' + id, {
            headers: this.headers
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    getEvents() {
        return this.http.get(this.eventUrl, {
            headers: this.headers
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((events) => {
            //this.calculateBetsOrderTotal(events);
            return events;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    getEventsPage(page, pageSize) {
        return this.http.get(`${this.eventUrl}/page/${page}/${pageSize}`, {
            headers: this.headers,
            observe: 'response'
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => {
            //Need to observe response in order to get to this header (see {observe: 'response'} above)
            const totalRecords = +res.headers.get('x-inlinecount');
            let events = res.body;
            return {
                results: events,
                totalRecords: totalRecords
            };
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    getEvent(id) {
        return this.http.get(this.eventUrl + '/' + id, {
            headers: this.headers
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    insertEvent(event) {
        return this.http.post(this.eventUrl, event, {
            headers: this.headers
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            console.log('insert event status: ' + data.status);
            return data.event;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    updateEvent(event) {
        return this.http.put(this.eventUrl + '/' + event._id, event, {
            headers: this.headers
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            console.log('update event status: ' + data.status);
            return data.event;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    deleteEvent(id) {
        return this.http.delete(this.eventUrl + '/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    getGames() {
        return this.http.get(this.gameUrl, {
            headers: this.headers
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((games) => {
            //this.calculateBetsOrderTotal(games);
            return games;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    getGamesPage(page, pageSize) {
        return this.http.get(`${this.gameUrl}/page/${page}/${pageSize}`, {
            headers: this.headers,
            observe: 'response'
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => {
            //Need to observe response in order to get to this header (see {observe: 'response'} above)
            const totalRecords = +res.headers.get('x-inlinecount');
            let games = res.body;
            return {
                results: games,
                totalRecords: totalRecords
            };
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    getGame(id) {
        return this.http.get(this.gameUrl + '/' + id, {
            headers: this.headers
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    insertGame(game) {
        return this.http.post(this.gameUrl, game, { withCredentials: true })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            console.log('insert game status: ' + data.status);
            return data.game;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    updateGame(game) {
        return this.http.put(this.gameUrl + '/' + game._id, game, {
            headers: this.headers
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            console.log('update game status: ' + data.status);
            return data.game;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    deleteGame(id) {
        return this.http.delete(this.gameUrl + '/' + id, {
            headers: this.headers
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    getPlayers() {
        return this.http.get(this.playerUrl, {
            headers: this.headers
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((players) => {
            //this.calculateBetsOrderTotal(players);
            return players;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    getPlayersPage(page, pageSize) {
        return this.http.get(`${this.playerUrl}/page/${page}/${pageSize}`, {
            headers: this.headers,
            observe: 'response'
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => {
            //Need to observe response in order to get to this header (see {observe: 'response'} above)
            const totalRecords = +res.headers.get('x-inlinecount');
            let players = res.body;
            return {
                results: players,
                totalRecords: totalRecords
            };
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    getPlayer(id) {
        return this.http.get(this.playerUrl + '/' + id, {
            headers: this.headers
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    insertPlayer(player) {
        return this.http.post(this.playerUrl, player, {
            headers: this.headers
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            console.log('insert player status: ' + data.status);
            return data.player;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    updatePlayer(player) {
        return this.http.put(this.playerUrl + '/' + player._id, player, {
            headers: this.headers
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            console.log('update player status: ' + data.status);
            return data.player;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    deletePlayer(id) {
        return this.http.delete(this.playerUrl + '/' + id, {
            headers: this.headers
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    // calculateBetsOrderTotal(bets: IBet[]) {
    //     for (let bet of bets) {
    //         if (bet && bet.orders) {
    //             let total = 0;
    //             for (let order of bet.orders) {
    //                 total += (order.price * order.quantity);
    //             }
    //             bet.orderTotal = total;
    //         }
    //     }
    // }
    handleError(error) {
        console.error('server error:', error);
        if (error.error instanceof Error) {
            let errMessage = error.error.message;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(errMessage);
            // Use the following instead if using lite-server
            //return Observable.throw(err.text() || 'backend server error');
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error || 'Node.js server error');
    }
};
DataService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], DataService);



/***/ }),

/***/ "./src/app/core/sorter.ts":
/*!********************************!*\
  !*** ./src/app/core/sorter.ts ***!
  \********************************/
/*! exports provided: Sorter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sorter", function() { return Sorter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_property_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/property-resolver */ "./src/app/shared/property-resolver.ts");



let Sorter = class Sorter {
    constructor() {
        this.property = null;
        this.direction = 1;
    }
    sort(collection, prop) {
        this.property = prop;
        this.direction = (this.property === prop) ? this.direction * -1 : 1;
        collection.sort((a, b) => {
            let aVal;
            let bVal;
            //Handle resolving complex properties such as 'state.name' for prop value
            if (prop && prop.indexOf('.') > -1) {
                aVal = _shared_property_resolver__WEBPACK_IMPORTED_MODULE_2__["propertyResolver"].resolve(prop, a);
                bVal = _shared_property_resolver__WEBPACK_IMPORTED_MODULE_2__["propertyResolver"].resolve(prop, b);
            }
            else {
                aVal = a[prop];
                bVal = b[prop];
            }
            //Fix issues that spaces before/after string value can cause such as ' San Francisco'
            if (this.isString(aVal))
                aVal = aVal.trim().toUpperCase();
            if (this.isString(bVal))
                bVal = bVal.trim().toUpperCase();
            if (aVal === bVal) {
                return 0;
            }
            else if (aVal > bVal) {
                return this.direction * -1;
            }
            else {
                return this.direction * 1;
            }
        });
    }
    isString(val) {
        return (val && (typeof val === 'string' || val instanceof String));
    }
};
Sorter = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], Sorter);



/***/ }),

/***/ "./src/app/core/trackby.service.ts":
/*!*****************************************!*\
  !*** ./src/app/core/trackby.service.ts ***!
  \*****************************************/
/*! exports provided: TrackByService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackByService", function() { return TrackByService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TrackByService = class TrackByService {
    bet(index, bet) {
        return bet._id;
    }
    event(index, event) {
        return event._id;
    }
    game(index, game) {
        return game._id;
    }
    player(index, player) {
        return player._id;
    }
};
TrackByService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], TrackByService);



/***/ }),

/***/ "./src/app/entries-page/entries-page.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/entries-page/entries-page.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#game {\n  background-color: #a79faa !important;\n}\n\n::ng-deep .mat-form-field-wrapper {\n  padding-bottom: 1.1em !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW50cmllcy1wYWdlL0M6XFxQcm9qZWN0c1xcYW5ndWxhciBub2RlanMgbW9uZ29kYlxcTUVBTi1Qcm9wLUJldHMvc3JjXFxhcHBcXGVudHJpZXMtcGFnZVxcZW50cmllcy1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9lbnRyaWVzLXBhZ2UvZW50cmllcy1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0NBQUE7QUNDRjs7QURFQTtFQUNFLGdDQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9lbnRyaWVzLXBhZ2UvZW50cmllcy1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2dhbWUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNhNzlmYWEgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcclxuICBwYWRkaW5nLWJvdHRvbTogMS4xZW0gIWltcG9ydGFudDtcclxufVxyXG4iLCIjZ2FtZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhNzlmYWEgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcbiAgcGFkZGluZy1ib3R0b206IDEuMWVtICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/entries-page/entries-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/entries-page/entries-page.component.ts ***!
  \********************************************************/
/*! exports provided: EntriesPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntriesPageComponent", function() { return EntriesPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _core_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/data.service */ "./src/app/core/data.service.ts");





let EntriesPageComponent = class EntriesPageComponent {
    constructor(formBuilder, dataService, router) {
        this.formBuilder = formBuilder;
        this.dataService = dataService;
        this.router = router;
        this.games = [];
        this.players = [];
        this.allPlayers = [];
        this.tablePlayers = [];
        this.displayedColumns = ["name", "record", "details"];
        this.isLive = false;
        this.showLoading = true;
    }
    ngAfterViewInit() {
        let um = window.localStorage.getItem("um");
        let un = window.localStorage.getItem("un");
        if (um && un) {
            this.userInfo = {
                email: um,
                name: un
            };
        }
        // const urlParams = queryString.parse(window.location.search);
        // if (urlParams.error) {
        //   console.log(`An error occurred: ${urlParams.error}`);
        // } else {
        //     let um = window.localStorage.getItem("um");
        //     let un = window.localStorage.getItem("un");
        //     if (um && un) {
        //       this.userInfo = {
        //         email: um,
        //         name: un
        //       }
        //       setTimeout(()=>{
        //         this.showLoading = false
        //       },1000)
        //     } else if (urlParams.code) {
        //         this.dataService
        //           .getRegisteration(urlParams.code)
        //           .subscribe((token) => {
        //             this.dataService.getUserInfo(token.access_token).subscribe((info) => {
        //               this.userInfo = info;
        //               window.localStorage.setItem("um", this.userInfo.email);
        //               window.localStorage.setItem("un", this.userInfo.name);
        //               setTimeout(()=>{
        //                 this.showLoading = false
        //               },1000)
        //             });
        //           });
        //       }
        //     else {
        //       this.router.navigate(['register'])
        //     }
        // }
        this.dataService.getEvents().subscribe((events) => {
            if (events !== null && events.length > 1) {
                let sortedEvents = events.sort((a, b) => {
                    return new Date(a.start) - new Date(b.start);
                });
                this.event = sortedEvents[0];
                var today = new Date();
                if (today > new Date(this.event.start)) {
                    this.isLive = true;
                }
            }
            else if (events.length == 1) {
                this.event = events[0];
            }
            this.dataService.getGames().subscribe((games) => {
                this.games = games;
                setTimeout(() => {
                    this.showLoading = false;
                }, 100);
            });
        });
        this.form = this.formBuilder.group({
            game: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    }
    selected($event) {
        this.numBets = "";
        this.gameId = this.selectedValue._id;
        this.gameText = this.selectedValue.name;
        if (this.allPlayers.length == 0) {
            this.dataService.getPlayers().subscribe((players) => {
                this.allPlayers = players;
                this.updateTable();
            });
        }
        else
            this.updateTable();
    }
    updateTable() {
        this.players = this.allPlayers.filter((item) => item.gameId == this.gameId);
        this.tablePlayers = [];
        this.players.forEach((player) => {
            this.dataService.getBets().subscribe((bets) => {
                bets = bets.filter((b) => {
                    b.playerId == player._id && b.groupId == this.gameId;
                });
                if (bets != null && bets.length > 0) {
                    let done = bets.filter((bet) => bet.answer != null && bet.answer != "");
                    this.numBets = this.setRemainingBetsText(done, bets);
                    let right = done.filter((bet) => bet.answer == bet.guess);
                    player.record = right.length + "/" + done.length;
                    this.tablePlayers.push(player);
                }
            });
        });
    }
    setRemainingBetsText(done, bets) {
        let numLeft = bets.length - done.length;
        if (numLeft == 0)
            return "Game is finished!";
        else if (numLeft == bets.length)
            return "Game hasn't started";
        else
            return numLeft + " Remaining Bets out of " + bets.length;
    }
    goTo(player) {
        this.router.navigate(["/review"], {
            queryParams: {
                id: player._id,
                playerName: player.name,
                groupId: this.gameId,
                groupName: this.gameText,
            },
        });
    }
    new() {
        this.router.navigate(["form"]);
    }
};
EntriesPageComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _core_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
EntriesPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-entries-page",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./entries-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/entries-page/entries-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./entries-page.component.scss */ "./src/app/entries-page/entries-page.component.scss")).default]
    })
], EntriesPageComponent);



/***/ }),

/***/ "./src/app/form-page/bets.copy.json":
/*!******************************************!*\
  !*** ./src/app/form-page/bets.copy.json ***!
  \******************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":\"anthem\",\"section\":\"Time\",\"q\":\"1:35.50 min:sec.ms National Anthem length Mickey Guyton\",\"a1\":\"Over\",\"a2\":\"Under\"},{\"id\":\"int\",\"section\":\"Game Stats\",\"q\":\"Interceptions: 1.5\",\"a1\":\"Over\",\"a2\":\"Under\"},{\"id\":\"fum\",\"section\":\"Game Stats\",\"q\":\"Fumbles lost: 1.5\",\"a1\":\"Over\",\"a2\":\"Under\"},{\"id\":\"kuppreceptions\",\"section\":\"Player Stats\",\"q\":\"Cooper Kupp receptions: 8.5\",\"a1\":\"Over\",\"a2\":\"Under\"},{\"id\":\"lalead\",\"section\":\"Yes or No\",\"q\":\"Will Los Angeles have the lead at halftime\",\"a1\":\"Yes\",\"a2\":\"No\"},{\"id\":\"cheetos\",\"section\":\"Commercials\",\"q\":\"Cheetos commercial before Pringles commercial\",\"a1\":\"Yes\",\"a2\":\"No\"},{\"id\":\"capmor\",\"section\":\"Commercials\",\"q\":\"Captain Morgan commercial before BMW commercial\",\"a1\":\"Yes\",\"a2\":\"No\"},{\"id\":\"gatorade\",\"section\":\"Gatorade\",\"q\":\"Color of Gatorade dumped on winning coach\",\"a1\":\"\",\"a2\":\"\"},{\"id\":\"mvp\",\"section\":\"MVP\",\"q\":\"Who is the Superbowl MVP\",\"a1\":\"\",\"a2\":\"\"},{\"id\":\"finalscore\",\"section\":\"Final Score\",\"q\":\"What is the final score of the game\",\"a1\":\"\",\"a2\":\"\"}]");

/***/ }),

/***/ "./src/app/form-page/form-page.component.scss":
/*!****************************************************!*\
  !*** ./src/app/form-page/form-page.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header-line {\n  border: none;\n  height: 1px;\n  color: #333;\n  background-color: #333;\n}\n\n.line {\n  display: block;\n  position: relative;\n  padding: 0;\n  margin: 8px auto;\n  height: 0;\n  width: 100%;\n  max-height: 0;\n  font-size: 1px;\n  line-height: 0;\n  clear: both;\n  border: none;\n  border-top: 1px solid #aaaaaa;\n  border-bottom: 1px solid #ffffff;\n}\n\n.even-row {\n  background-color: #e6e6e6;\n  padding-top: 5px;\n  padding-bottom: 1px;\n  border-style: solid;\n  border-width: 1px;\n  border-color: black;\n}\n\n.odd-row {\n  padding-top: 5px;\n  padding-bottom: 1px;\n  border-style: solid;\n  border-width: 1px;\n  border-color: black;\n}\n\nbutton {\n  margin: 5px;\n}\n\nmat-radio-button {\n  margin: 3px;\n}\n\n.backdropBackground {\n  background-color: #bbbbbbf2;\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n}\n\n.section-header {\n  background-color: #7b1fa2 !important;\n  color: white;\n  height: 50px;\n  font-size: x-large;\n  line-height: 50px;\n}\n\n::ng-deep .mat-radio-outer-circle {\n  border-color: #424242 !important;\n}\n\n::ng-deep .mat-radio-button.mat-accent .mat-radio-inner-circle {\n  background-color: #7b1fa2 !important;\n}\n\n::ng-deep .cdk-overlay-container {\n  -webkit-backdrop-filter: blur(2px) !important;\n          backdrop-filter: blur(2px) !important;\n}\n\n#gatorade {\n  background-color: #a79faa !important;\n}\n\n#bengals {\n  background-color: #a79faa !important;\n}\n\n#rams {\n  background-color: #a79faa !important;\n}\n\n#mvp {\n  background-color: #a79faa !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybS1wYWdlL0M6XFxQcm9qZWN0c1xcYW5ndWxhciBub2RlanMgbW9uZ29kYlxcTUVBTi1Qcm9wLUJldHMvc3JjXFxhcHBcXGZvcm0tcGFnZVxcZm9ybS1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mb3JtLXBhZ2UvZm9ybS1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUNDRjs7QURDQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0FDRUY7O0FEQ0E7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNFRjs7QURDQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNFRjs7QURDQTtFQUNFLFdBQUE7QUNFRjs7QURDQTtFQUNFLFdBQUE7QUNFRjs7QURDQTtFQUNFLDJCQUFBO0VBQ0Esa0NBQUE7VUFBQSwwQkFBQTtBQ0VGOztBRENBO0VBQ0Usb0NBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNFRjs7QURDQTtFQUNFLGdDQUFBO0FDRUY7O0FEQ0E7RUFDRSxvQ0FBQTtBQ0VGOztBRENBO0VBQ0UsNkNBQUE7VUFBQSxxQ0FBQTtBQ0VGOztBRENBO0VBQ0Usb0NBQUE7QUNFRjs7QURDQTtFQUNFLG9DQUFBO0FDRUY7O0FEQ0E7RUFDRSxvQ0FBQTtBQ0VGOztBRENBO0VBQ0Usb0NBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL2Zvcm0tcGFnZS9mb3JtLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLWxpbmUge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBoZWlnaHQ6IDFweDtcclxuICBjb2xvcjogIzMzMztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xyXG59XHJcbi5saW5lIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDhweCBhdXRvO1xyXG4gIGhlaWdodDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtaGVpZ2h0OiAwO1xyXG4gIGZvbnQtc2l6ZTogMXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAwO1xyXG4gIGNsZWFyOiBib3RoO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2FhYWFhYTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZmZmZjtcclxufVxyXG5cclxuLmV2ZW4tcm93IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xyXG4gIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDFweDtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci13aWR0aDogMXB4O1xyXG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5vZGQtcm93IHtcclxuICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxcHg7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItd2lkdGg6IDFweDtcclxuICBib3JkZXItY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIG1hcmdpbjogNXB4O1xyXG59XHJcblxyXG5tYXQtcmFkaW8tYnV0dG9uIHtcclxuICBtYXJnaW46IDNweDtcclxufVxyXG5cclxuLmJhY2tkcm9wQmFja2dyb3VuZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JiYmJiYmYyO1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xyXG59XHJcblxyXG4uc2VjdGlvbi1oZWFkZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM3YjFmYTIgIWltcG9ydGFudDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxuICBsaW5lLWhlaWdodDogNTBweDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xlIHtcclxuICBib3JkZXItY29sb3I6ICM0MjQyNDIgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtcmFkaW8tYnV0dG9uLm1hdC1hY2NlbnQgLm1hdC1yYWRpby1pbm5lci1jaXJjbGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM3YjFmYTIgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5jZGstb3ZlcmxheS1jb250YWluZXIge1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycHgpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiNnYXRvcmFkZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E3OWZhYSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4jYmVuZ2FscyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E3OWZhYSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4jcmFtcyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E3OWZhYSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4jbXZwIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTc5ZmFhICFpbXBvcnRhbnQ7XHJcbn1cclxuIiwiLmhlYWRlci1saW5lIHtcbiAgYm9yZGVyOiBub25lO1xuICBoZWlnaHQ6IDFweDtcbiAgY29sb3I6ICMzMzM7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG59XG5cbi5saW5lIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiA4cHggYXV0bztcbiAgaGVpZ2h0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogMDtcbiAgZm9udC1zaXplOiAxcHg7XG4gIGxpbmUtaGVpZ2h0OiAwO1xuICBjbGVhcjogYm90aDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2FhYWFhYTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmZmZmY7XG59XG5cbi5ldmVuLXJvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIHBhZGRpbmctYm90dG9tOiAxcHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItY29sb3I6IGJsYWNrO1xufVxuXG4ub2RkLXJvdyB7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIHBhZGRpbmctYm90dG9tOiAxcHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItY29sb3I6IGJsYWNrO1xufVxuXG5idXR0b24ge1xuICBtYXJnaW46IDVweDtcbn1cblxubWF0LXJhZGlvLWJ1dHRvbiB7XG4gIG1hcmdpbjogM3B4O1xufVxuXG4uYmFja2Ryb3BCYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JiYmJiYmYyO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcbn1cblxuLnNlY3Rpb24taGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdiMWZhMiAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGU7XG4gIGhlaWdodDogNTBweDtcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xuICBsaW5lLWhlaWdodDogNTBweDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xlIHtcbiAgYm9yZGVyLWNvbG9yOiAjNDI0MjQyICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAubWF0LXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50IC5tYXQtcmFkaW8taW5uZXItY2lyY2xlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdiMWZhMiAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLmNkay1vdmVybGF5LWNvbnRhaW5lciB7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycHgpICFpbXBvcnRhbnQ7XG59XG5cbiNnYXRvcmFkZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhNzlmYWEgIWltcG9ydGFudDtcbn1cblxuI2JlbmdhbHMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTc5ZmFhICFpbXBvcnRhbnQ7XG59XG5cbiNyYW1zIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E3OWZhYSAhaW1wb3J0YW50O1xufVxuXG4jbXZwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E3OWZhYSAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/form-page/form-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/form-page/form-page.component.ts ***!
  \**************************************************/
/*! exports provided: FormPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormPageComponent", function() { return FormPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _info_dialog_info_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./info-dialog/info-dialog.component */ "./src/app/form-page/info-dialog/info-dialog.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/data.service */ "./src/app/core/data.service.ts");
/* harmony import */ var _bets_copy_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bets.copy.json */ "./src/app/form-page/bets.copy.json");
var _bets_copy_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./bets.copy.json */ "./src/app/form-page/bets.copy.json", 1);







let FormPageComponent = class FormPageComponent {
    constructor(dialog, dataService, router) {
        this.dialog = dialog;
        this.dataService = dataService;
        this.router = router;
        this.sections = [];
        this.info = _bets_copy_json__WEBPACK_IMPORTED_MODULE_6__;
        this.isDisabled = true;
        this.isAdmin = false;
        this.newBet = false;
        this.showLoading = true;
        this.showLoadingTest = true;
        this.playersGames = [];
        this.playerAlreadyBet = false;
        this.guesses = [];
        this.selectedPlayers = {
            _id: null,
            email: null,
            name: null,
            gameId: null,
        };
    }
    ngAfterViewInit() {
        this.dataService.getPlayers().subscribe((players) => {
            this.players = players;
            let um = window.localStorage.getItem("um");
            let un = window.localStorage.getItem("un");
            if (um && un) {
                this.playersGames = this.players.filter((p) => p.email == um);
                this.userInfo = {
                    email: um,
                    name: un,
                };
                this.makeBet();
            }
            else {
                this.router.navigate(["register"]);
            }
        });
        var games = new Set(this.info.map((item) => item.section));
        games.forEach((g) => this.sections.push({
            name: g,
            bets: this.info.filter((i) => i.section === g),
        }));
    }
    isSpecialBet(bet) {
        if (bet.id == "finalscore" || bet.id == "mvp" || bet.id == "gatorade")
            return false;
        else
            return true;
    }
    makeBet() {
        setTimeout(() => {
            this.showLoading = false;
            this.openDialog();
            this.newBet = true;
        }, 1000);
    }
    seeEntries() {
        this.router.navigate(["entries"]);
    }
    radioChange(event) {
        var guess = event.value;
        var question = event.source.name;
        var found = false;
        for (var i = 0; i < this.guesses.length; i++) {
            if (this.guesses[i].question == question) {
                this.guesses[i].guess = guess;
                found = true;
                break;
            }
        }
        if (!found) {
            let questionText = this.info.filter((i) => i.id === question)[0].q;
            let newBet = {
                _id: "0",
                question: question,
                questionText: questionText,
                guess: guess,
                answer: "",
                playerId: this.playerId,
                groupId: this.groupId,
                eventId: this.eventId,
            };
            this.guesses.push(newBet);
        }
        this.isDisabled = false;
        if (this.info.length == this.guesses.length || this.isAdmin) {
            this.isDisabled = false;
        }
    }
    submit() {
        this.showLoading = true;
        if (this.isAdmin) {
            this.guesses.forEach((guess) => {
                guess.answer = guess.guess;
            });
            this.dataService.updateBet(this.guesses).subscribe((data) => {
                this.dataService.getBets().subscribe((bets) => {
                    this.dataService.getPlayers().subscribe((players) => {
                        players.forEach(player => {
                            let playerbets = bets.filter(bet => bet.playerId === player._id);
                            let rightPicks = playerbets.filter(item => item.guess == item.answer);
                            let finishedPicks = playerbets.filter(item => item.answer);
                            player.record = rightPicks.length + "/" + finishedPicks.length;
                            this.dataService.updatePlayer(player).subscribe((player) => {
                            });
                        });
                        this.router.navigate(["entries"]);
                    });
                });
            });
        }
        else {
            if (this.playerAlreadyBet) {
                this.dataService.deleteBet(this.playerId + ',' + this.groupId + ',' + this.eventId).subscribe((data) => {
                    this.guesses.forEach((guess) => {
                        guess.playerId = this.playerId;
                        guess.groupId = this.groupId;
                        guess._id = null;
                    });
                    //this.addSpecial()
                    this.dataService.insertBet(this.guesses).subscribe((data) => {
                        this.router.navigate(["/review"], {
                            queryParams: {
                                id: this.playerId,
                                playerName: this.playerName,
                                groupId: this.groupId,
                                groupName: this.gameName,
                            },
                        });
                    });
                });
            }
            else {
                //this.addSpecial()
                this.guesses.forEach((guess) => {
                    guess.playerId = this.playerId;
                    guess.groupId = this.groupId;
                    guess._id = null;
                });
                this.dataService.insertBet(this.guesses).subscribe((data) => {
                    this.router.navigate(["/review"], {
                        queryParams: {
                            id: this.playerId,
                            playerName: this.playerName,
                            groupId: this.groupId,
                            groupName: this.gameName,
                        },
                    });
                });
            }
        }
    }
    addSpecial() {
        this.guesses.push({
            playerId: this.playerId,
            groupId: this.groupId,
            _id: null,
            question: 'finalscore',
            questionText: 'What is the final score of the game',
            answer: '',
            eventId: this.eventId,
            guess: document.getElementById("rams").value + '-' + document.getElementById("bengals").value
        });
        this.guesses.push({
            playerId: this.playerId,
            groupId: this.groupId,
            _id: null,
            question: 'mvp',
            questionText: 'MVP',
            answer: '',
            eventId: this.eventId,
            guess: document.getElementById("mvp").value
        });
        this.guesses.push({
            playerId: this.playerId,
            groupId: this.groupId,
            _id: null,
            question: 'gatorade',
            questionText: 'Color of Gatorade dumped on winning coach',
            answer: '',
            eventId: this.eventId,
            guess: document.getElementById("gatorade").value
        });
    }
    openDialog() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.backdropClass = "backdropBackground";
        this.dialogRef = this.dialog.open(_info_dialog_info_dialog_component__WEBPACK_IMPORTED_MODULE_3__["InfoDialogComponent"], dialogConfig);
        this.dialogRef.componentInstance.userName = this.userInfo.name;
        this.dialogRef.componentInstance.userEmail = this.userInfo.email;
        this.dialogRef.componentInstance.playersGames = this.playersGames;
        this.dialogRef.afterClosed().subscribe((data) => {
            if (data.gameName != null) {
                this.gameName = data.gameName;
                this.playerName = data.playerName;
                this.groupId = data.gameId;
                this.playerId = data.playerId;
                this.eventName = data.eventName;
                this.eventId = data.eventId;
                this.eventDate = data.eventDate;
                this.playerAlreadyBet = data.playerAlreadyBet;
                if (this.gameName == "Submit Picks") {
                    this.isAdmin = true;
                    this.isDisabled = false;
                }
            }
            else {
                this.newBet = false;
            }
        });
    }
};
FormPageComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _core_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
FormPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "form-page",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./form-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/form-page/form-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./form-page.component.scss */ "./src/app/form-page/form-page.component.scss")).default]
    })
], FormPageComponent);



/***/ }),

/***/ "./src/app/form-page/info-dialog/info-dialog.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/form-page/info-dialog/info-dialog.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm0tcGFnZS9pbmZvLWRpYWxvZy9pbmZvLWRpYWxvZy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/form-page/info-dialog/info-dialog.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/form-page/info-dialog/info-dialog.component.ts ***!
  \****************************************************************/
/*! exports provided: InfoDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoDialogComponent", function() { return InfoDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _core_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/data.service */ "./src/app/core/data.service.ts");





let InfoDialogComponent = class InfoDialogComponent {
    constructor(dialogRef, formBuilder, dataService) {
        this.dialogRef = dialogRef;
        this.formBuilder = formBuilder;
        this.dataService = dataService;
        this.playersGames = [];
        this.existingPlayerId = "";
    }
    ngOnInit() {
        this.form = this.formBuilder.group({
            event: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            game: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            group: [null],
        });
        this.dataService.getEvents().subscribe((events) => {
            this.events = events;
            var today = new Date();
            this.events = this.events.filter(e => today < new Date(e.start));
            if (this.events !== null && this.events.length > 1) {
                this.firstEvent = this.events.sort((a, b) => {
                    return new Date(a.start).getTime() - new Date(b.start).getTime();
                })[0];
                this.form.get("event").setValue(this.events[0]);
                this.event = this.events[0];
            }
            else if (this.events !== null && this.events.length == 1) {
                this.form.get("event").setValue(this.events[0]);
                this.event = this.events[0];
            }
            this.dataService.getGames().subscribe((games) => {
                this.games = games;
            });
            this.form.get("name").setValue(this.userName);
        });
    }
    selecteEvent($event) {
        this.event = this.events.filter((i) => i._id === this.selectedEvent._id)[0];
    }
    selecteGame($event) {
        if (this.selectedGame.toString() == "new") {
            this.gameText = "Create New Group";
        }
        else {
            let game = this.games.filter((i) => i._id === this.selectedGame._id)[0];
            this.gameId = game._id;
            this.gameText = game.name;
        }
    }
    close() {
        this.dialogRef.close({});
    }
    submit() {
        Object.keys(this.form.controls).forEach((field) => {
            const control = this.form.get(field);
            control.markAsTouched({ onlySelf: true });
        });
        let existingPlayerGame = this.playersGames.find(p => p.email == this.userEmail && p.gameId == this.gameId);
        if (this.form.valid) {
            if (this.gameText == "Create New Group" &&
                this.form.value.group == "Submit Picks") {
                let data = {
                    playerId: 0,
                    gameId: 0,
                    playerName: "",
                    gameName: "Submit Picks",
                };
                this.dialogRef.close(data);
            }
            else if (this.gameText == "Create New Group") {
                let game = {
                    _id: "",
                    name: this.form.value.group,
                    eventId: this.event._id,
                };
                this.dataService.insertGame(game).subscribe((game) => {
                    console.log("Game created, ", game);
                    this.gameId = game._id;
                    this.gameText = game.name;
                    let player = {
                        _id: this.existingPlayerId,
                        email: this.userEmail,
                        name: this.form.value.name,
                        gameId: this.gameId,
                        record: '0/0'
                    };
                    this.dataService.insertPlayer(player).subscribe((player) => {
                        console.log("Player created, ", player);
                        let data = {
                            playerId: player._id,
                            playerName: player.name,
                            gameId: player.gameId,
                            gameName: this.gameText,
                            eventId: this.event._id,
                            eventName: this.event.name,
                            eventDate: this.event.start,
                        };
                        this.dialogRef.close(data);
                    });
                });
            }
            else {
                if (!existingPlayerGame) {
                    let player = {
                        _id: this.existingPlayerId,
                        email: this.userEmail,
                        name: this.form.value.name,
                        gameId: this.gameId,
                    };
                    this.dataService.insertPlayer(player).subscribe((player) => {
                        let data = {
                            playerId: player._id,
                            playerName: player.name,
                            gameId: player.gameId,
                            gameName: this.gameText,
                            eventId: this.event._id,
                            eventName: this.event.name,
                            eventDate: this.event.start,
                        };
                        this.dialogRef.close(data);
                    });
                }
                else {
                    let player = {
                        _id: existingPlayerGame._id,
                        email: this.userEmail,
                        name: this.form.value.name,
                        gameId: this.gameId,
                    };
                    this.dataService.updatePlayer(player).subscribe((player) => {
                        let data = {
                            playerId: existingPlayerGame._id,
                            playerName: player.name,
                            gameId: this.gameId,
                            gameName: this.gameText,
                            eventId: this.event._id,
                            eventName: this.event.name,
                            eventDate: this.event.start,
                            playerAlreadyBet: true
                        };
                        this.dialogRef.close(data);
                    });
                }
            }
        }
    }
    isFieldValid(field) {
        return !this.form.get(field).valid && this.form.get(field).touched;
    }
    displayFieldCss(field) {
        return {
            "has-error": this.isFieldValid(field),
            "has-feedback": this.isFieldValid(field),
        };
    }
};
InfoDialogComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _core_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] }
];
InfoDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-info-dialog",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./info-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/form-page/info-dialog/info-dialog.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./info-dialog.component.scss */ "./src/app/form-page/info-dialog/info-dialog.component.scss")).default]
    })
], InfoDialogComponent);



/***/ }),

/***/ "./src/app/loading-screen/loading-screen.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/loading-screen/loading-screen.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".loading-overlay {\n  left: 0 !important;\n  top: 0 !important;\n  z-index: 10000 !important;\n  width: 100% !important;\n  height: 100% !important;\n  position: fixed !important;\n  cursor: pointer !important;\n  visibility: visible !important;\n  transition: visibility 0s, opacity 0.4s linear !important;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: wait !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9hZGluZy1zY3JlZW4vQzpcXFByb2plY3RzXFxhbmd1bGFyIG5vZGVqcyBtb25nb2RiXFxNRUFOLVByb3AtQmV0cy9zcmNcXGFwcFxcbG9hZGluZy1zY3JlZW5cXGxvYWRpbmctc2NyZWVuLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sb2FkaW5nLXNjcmVlbi9sb2FkaW5nLXNjcmVlbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtFQUNBLDBCQUFBO0VBQ0EsOEJBQUE7RUFDQSx5REFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2xvYWRpbmctc2NyZWVuL2xvYWRpbmctc2NyZWVuLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvYWRpbmctb3ZlcmxheSB7XHJcbiAgbGVmdDogMCAhaW1wb3J0YW50O1xyXG4gIHRvcDogMCAhaW1wb3J0YW50O1xyXG4gIHotaW5kZXg6IDEwMDAwICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxuICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcclxuICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlICFpbXBvcnRhbnQ7XHJcbiAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwcywgb3BhY2l0eSAwLjRzIGxpbmVhciAhaW1wb3J0YW50O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBjdXJzb3I6IHdhaXQgIWltcG9ydGFudDtcclxufVxyXG4iLCIubG9hZGluZy1vdmVybGF5IHtcbiAgbGVmdDogMCAhaW1wb3J0YW50O1xuICB0b3A6IDAgIWltcG9ydGFudDtcbiAgei1pbmRleDogMTAwMDAgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xuICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZSAhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDBzLCBvcGFjaXR5IDAuNHMgbGluZWFyICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjdXJzb3I6IHdhaXQgIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/loading-screen/loading-screen.component.ts":
/*!************************************************************!*\
  !*** ./src/app/loading-screen/loading-screen.component.ts ***!
  \************************************************************/
/*! exports provided: LoadingScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingScreenComponent", function() { return LoadingScreenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LoadingScreenComponent = class LoadingScreenComponent {
    constructor() {
        this.loadingContent = "";
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], LoadingScreenComponent.prototype, "loadingContent", void 0);
LoadingScreenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'loading-screen',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./loading-screen.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/loading-screen/loading-screen.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./loading-screen.component.scss */ "./src/app/loading-screen/loading-screen.component.scss")).default]
    })
], LoadingScreenComponent);



/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.scss":
/*!************************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdi1iYXIvbmF2LWJhci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.ts ***!
  \**********************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/data.service */ "./src/app/core/data.service.ts");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_4__);





let NavBarComponent = class NavBarComponent {
    constructor(router, dataService) {
        this.router = router;
        this.dataService = dataService;
        this.isLoggedIn = false;
        this.userEmail = "";
        this.userName = "";
    }
    ngOnInit() {
        this.userEmail = window.localStorage.getItem("um");
        this.userName = window.localStorage.getItem("un");
        if (this.userEmail && this.userName)
            this.isLoggedIn = true;
        else {
            const urlParams = query_string__WEBPACK_IMPORTED_MODULE_4__["parse"](window.location.search);
            if (urlParams.code) {
                this.dataService.getRegisteration(urlParams.code).subscribe((token) => {
                    this.dataService.getUserInfo(token.access_token).subscribe((info) => {
                        window.localStorage.setItem("um", info.email);
                        window.localStorage.setItem("un", info.name);
                        this.userName = info.name;
                        this.isLoggedIn = true;
                    });
                });
            }
            else {
                this.router.navigate(["register"]);
            }
        }
    }
    login() {
        this.router.navigate(["register"]);
    }
    logout() {
        this.isLoggedIn = false;
        window.localStorage.removeItem("um");
        window.localStorage.removeItem("un");
        this.router.navigate(["register"]);
    }
};
NavBarComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _core_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }
];
NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "nav-bar",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nav-bar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-bar/nav-bar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nav-bar.component.scss */ "./src/app/nav-bar/nav-bar.component.scss")).default]
    })
], NavBarComponent);



/***/ }),

/***/ "./src/app/register-page/register.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/register-page/register.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .mat-form-field-placeholder {\n  color: black;\n}\n\n::ng-deep .mat-focused .mat-form-field-placeholder {\n  color: black;\n}\n\n::ng-deep .mat-form-field-underline .mat-form-field-ripple {\n  background-color: black;\n}\n\n::ng-deep .mat-form-field-underline {\n  background-color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXItcGFnZS9DOlxcUHJvamVjdHNcXGFuZ3VsYXIgbm9kZWpzIG1vbmdvZGJcXE1FQU4tUHJvcC1CZXRzL3NyY1xcYXBwXFxyZWdpc3Rlci1wYWdlXFxyZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcmVnaXN0ZXItcGFnZS9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSx1QkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0ZXItcGFnZS9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtcGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtcGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxufVxyXG4iLCI6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG46Om5nLWRlZXAgLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/register-page/register.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/register-page/register.component.ts ***!
  \*****************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_4__);





let RegisterComponent = class RegisterComponent {
    constructor(formBuilder, router) {
        this.formBuilder = formBuilder;
        this.router = router;
    }
    ngOnInit() {
        this.form = this.formBuilder.group({
            email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    }
    register() {
        window.localStorage.setItem("un", this.form.value.name);
        window.localStorage.setItem("um", this.form.value.email);
        this.router.navigate(['entries']);
    }
    googleRegister() {
        const stringifiedParams = query_string__WEBPACK_IMPORTED_MODULE_4__["stringify"]({
            client_id: '1011221667530-6e7kha8c8mrbtjetti1jr7fkghrcaarc.apps.googleusercontent.com',
            redirect_uri: 'https://vast-badlands-87144.herokuapp.com/entries',
            scope: [
                'https://www.googleapis.com/auth/userinfo.email',
                'https://www.googleapis.com/auth/userinfo.profile',
            ].join(' '),
            response_type: 'code',
            access_type: 'offline',
            prompt: 'consent',
            disallow_webview: true
        });
        this.googleLoginUrl = `https://accounts.google.com/o/oauth2/v2/auth?${stringifiedParams}`;
        window.location.href = this.googleLoginUrl;
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/register-page/register.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.component.scss */ "./src/app/register-page/register.component.scss")).default]
    })
], RegisterComponent);



/***/ }),

/***/ "./src/app/review-page/review-page.component.scss":
/*!********************************************************!*\
  !*** ./src/app/review-page/review-page.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("button {\n  margin: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmV2aWV3LXBhZ2UvQzpcXFByb2plY3RzXFxhbmd1bGFyIG5vZGVqcyBtb25nb2RiXFxNRUFOLVByb3AtQmV0cy9zcmNcXGFwcFxccmV2aWV3LXBhZ2VcXHJldmlldy1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9yZXZpZXctcGFnZS9yZXZpZXctcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3Jldmlldy1wYWdlL3Jldmlldy1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uIHtcclxuICAgIG1hcmdpbjogNXB4O1xyXG59IiwiYnV0dG9uIHtcbiAgbWFyZ2luOiA1cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/review-page/review-page.component.ts":
/*!******************************************************!*\
  !*** ./src/app/review-page/review-page.component.ts ***!
  \******************************************************/
/*! exports provided: ReviewPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewPageComponent", function() { return ReviewPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/data.service */ "./src/app/core/data.service.ts");




let ReviewPageComponent = class ReviewPageComponent {
    constructor(router, dataService, route) {
        this.router = router;
        this.dataService = dataService;
        this.route = route;
        this.isDisabled = true;
        this.guesses = [];
        this.displayedColumns = ['question', 'guess', 'answer', 'check'];
        this.showLoading = true;
    }
    ngAfterViewInit() {
        this.dataService.getEvents().subscribe((events) => {
            if (events !== null) {
                let sortedEvents = events.sort((a, b) => {
                    return new Date(a.start) - new Date(b.start);
                });
                this.event = sortedEvents[0];
            }
        });
        this.route
            .queryParams
            .subscribe(params => {
            this.playerId = params['id'];
            this.playerName = params['playerName'];
            this.groupId = params['groupId'];
            this.groupName = params['groupName'];
        });
        this.dataService.getBets().subscribe(bets => {
            this.bets = bets.filter(bet => bet.playerId === this.playerId);
            let rightPicks = this.bets.filter(item => item.guess == item.answer);
            let finishedPicks = this.bets.filter(item => item.answer);
            this.results = rightPicks.length + "/" + finishedPicks.length;
            setTimeout(() => {
                this.showLoading = false;
            }, 1000);
        });
    }
    refresh() {
        location.reload();
    }
    back() {
        this.router.navigate(['entries']);
    }
};
ReviewPageComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _core_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
ReviewPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-review-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./review-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/review-page/review-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./review-page.component.scss */ "./src/app/review-page/review-page.component.scss")).default]
    })
], ReviewPageComponent);



/***/ }),

/***/ "./src/app/shared/ensureModuleLoadedOnceGuard.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/ensureModuleLoadedOnceGuard.ts ***!
  \*******************************************************/
/*! exports provided: EnsureModuleLoadedOnceGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnsureModuleLoadedOnceGuard", function() { return EnsureModuleLoadedOnceGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class EnsureModuleLoadedOnceGuard {
    constructor(targetModule) {
        if (targetModule) {
            throw new Error(`${targetModule.constructor.name} has already been loaded. Import this module in the AppModule only.`);
        }
    }
}


/***/ }),

/***/ "./src/app/shared/filter-textbox/filter-textbox.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/filter-textbox/filter-textbox.component.ts ***!
  \*******************************************************************/
/*! exports provided: FilterTextboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterTextboxComponent", function() { return FilterTextboxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FilterTextboxComponent = class FilterTextboxComponent {
    constructor() {
        this.model = { filter: null };
        this.changed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    filterChanged(event) {
        event.preventDefault();
        this.changed.emit(this.model.filter); //Raise changed event
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], FilterTextboxComponent.prototype, "changed", void 0);
FilterTextboxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-filter-textbox',
        template: `
    <form>
         Filter:
         <input type="text" name="filter"
                [(ngModel)]="model.filter" 
                (keyup)="filterChanged($event)"  />
    </form>
  `
    })
], FilterTextboxComponent);



/***/ }),

/***/ "./src/app/shared/pagination/pagination.component.css":
/*!************************************************************!*\
  !*** ./src/app/shared/pagination/pagination.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".pagination>.active>a, .pagination>.active>a:focus, .pagination>.active>a:hover, .pagination>.active>span, .pagination>.active>span:focus, .pagination>.active>span:hover {\r\n  background-color: #027FF4;\r\n  border-color: #027FF4;\r\n}\r\n\r\n.pagination a {\r\n    cursor: pointer;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvcGFnaW5hdGlvbi9wYWdpbmF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnaW5hdGlvbj4uYWN0aXZlPmEsIC5wYWdpbmF0aW9uPi5hY3RpdmU+YTpmb2N1cywgLnBhZ2luYXRpb24+LmFjdGl2ZT5hOmhvdmVyLCAucGFnaW5hdGlvbj4uYWN0aXZlPnNwYW4sIC5wYWdpbmF0aW9uPi5hY3RpdmU+c3Bhbjpmb2N1cywgLnBhZ2luYXRpb24+LmFjdGl2ZT5zcGFuOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDI3RkY0O1xyXG4gIGJvcmRlci1jb2xvcjogIzAyN0ZGNDtcclxufVxyXG5cclxuLnBhZ2luYXRpb24gYSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/shared/pagination/pagination.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/pagination/pagination.component.ts ***!
  \***********************************************************/
/*! exports provided: PaginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return PaginationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PaginationComponent = class PaginationComponent {
    constructor() {
        this.pages = [];
        this.currentPage = 1;
        this.isVisible = false;
        this.previousEnabled = false;
        this.nextEnabled = true;
        this.pageChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    get pageSize() {
        return this.pagerPageSize;
    }
    set pageSize(size) {
        this.pagerPageSize = size;
        this.update();
    }
    get totalItems() {
        return this.pagerTotalItems;
    }
    set totalItems(itemCount) {
        this.pagerTotalItems = itemCount;
        this.update();
    }
    ngOnInit() {
    }
    update() {
        if (this.pagerTotalItems && this.pagerPageSize) {
            this.totalPages = Math.ceil(this.pagerTotalItems / this.pageSize);
            this.isVisible = true;
            if (this.totalItems >= this.pageSize) {
                for (let i = 1; i < this.totalPages + 1; i++) {
                    this.pages.push(i);
                }
            }
            return;
        }
        this.isVisible = false;
    }
    previousNext(direction, event) {
        let page = this.currentPage;
        if (direction == -1) {
            if (page > 1)
                page--;
        }
        else {
            if (page < this.totalPages)
                page++;
        }
        this.changePage(page, event);
    }
    changePage(page, event) {
        if (event) {
            event.preventDefault();
        }
        if (this.currentPage === page)
            return;
        this.currentPage = page;
        this.previousEnabled = this.currentPage > 1;
        this.nextEnabled = this.currentPage < this.totalPages;
        this.pageChanged.emit(page);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PaginationComponent.prototype, "pageSize", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PaginationComponent.prototype, "totalItems", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], PaginationComponent.prototype, "pageChanged", void 0);
PaginationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pagination',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pagination.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/pagination/pagination.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./pagination.component.css */ "./src/app/shared/pagination/pagination.component.css")).default]
    })
], PaginationComponent);



/***/ }),

/***/ "./src/app/shared/pipes/capitalize.pipe.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/pipes/capitalize.pipe.ts ***!
  \*************************************************/
/*! exports provided: CapitalizePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapitalizePipe", function() { return CapitalizePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CapitalizePipe = class CapitalizePipe {
    transform(value) {
        if (value) {
            return value.charAt(0).toUpperCase() + value.slice(1);
        }
        return value;
    }
};
CapitalizePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'capitalize' })
], CapitalizePipe);



/***/ }),

/***/ "./src/app/shared/pipes/trim.pipe.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/pipes/trim.pipe.ts ***!
  \*******************************************/
/*! exports provided: TrimPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrimPipe", function() { return TrimPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TrimPipe = class TrimPipe {
    transform(value) {
        if (!value) {
            return '';
        }
        return value.trim();
    }
};
TrimPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'trim' })
], TrimPipe);



/***/ }),

/***/ "./src/app/shared/property-resolver.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/property-resolver.ts ***!
  \*********************************************/
/*! exports provided: propertyResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "propertyResolver", function() { return propertyResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class propertyResolver {
    static resolve(path, obj) {
        return path.split('.').reduce((prev, curr) => {
            return (prev ? prev[curr] : undefined);
        }, obj || self);
    }
}


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pagination/pagination.component */ "./src/app/shared/pagination/pagination.component.ts");
/* harmony import */ var _pipes_capitalize_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pipes/capitalize.pipe */ "./src/app/shared/pipes/capitalize.pipe.ts");
/* harmony import */ var _pipes_trim_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pipes/trim.pipe */ "./src/app/shared/pipes/trim.pipe.ts");
/* harmony import */ var _filter_textbox_filter_textbox_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./filter-textbox/filter-textbox.component */ "./src/app/shared/filter-textbox/filter-textbox.component.ts");








let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
        declarations: [_pipes_capitalize_pipe__WEBPACK_IMPORTED_MODULE_5__["CapitalizePipe"], _pipes_trim_pipe__WEBPACK_IMPORTED_MODULE_6__["TrimPipe"], _filter_textbox_filter_textbox_component__WEBPACK_IMPORTED_MODULE_7__["FilterTextboxComponent"], _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_4__["PaginationComponent"]],
        exports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _pipes_capitalize_pipe__WEBPACK_IMPORTED_MODULE_5__["CapitalizePipe"], _pipes_trim_pipe__WEBPACK_IMPORTED_MODULE_6__["TrimPipe"], _filter_textbox_filter_textbox_component__WEBPACK_IMPORTED_MODULE_7__["FilterTextboxComponent"], _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_4__["PaginationComponent"]]
    })
], SharedModule);



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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

const environment = {
    production: false
};


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Projects\angular nodejs mongodb\MEAN-Prop-Bets\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map