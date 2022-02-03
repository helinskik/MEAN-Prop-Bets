var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/entries-page/entries-page.component.html": 
        /*!************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/entries-page/entries-page.component.html ***!
          \************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n    <h2 *ngIf=\"isLive\" class=\"d-flex justify-content-center mat-display-1\" style=\"margin: 25px 0 25px;\">EVENT IS LIVE</h2>\n    <h1 *ngIf=\"!isLive\" class=\"d-flex justify-content-center\" style=\"margin: 25px 0 25px;\">Betting open for</h1>\n    <h2 class=\"d-flex justify-content-center mat-display-2\" style=\"margin: 25px 0 25px;\">{{event?.name}}</h2>\n    <p class=\"d-flex justify-content-center\">Select a group to see all of the submitted entries</p>\n    <form class=\"form-horizontal d-flex justify-content-center\" [formGroup]=\"form\">\n        <mat-form-field style=\"background-color: #7b1fa2 !important;\">\n            <mat-label>Group</mat-label>\n            <mat-select style=\"text-align: center;\" [(ngModel)]=\"selectedValue\" name=\"game\" id=\"game\" #game formControlName=\"game\" (selectionChange)=\"selected($event)\"> \n                <mat-option *ngFor=\"let game of games\" [value]=\"game\">\n                {{game.name}}\n                </mat-option>\n            </mat-select>\n        </mat-form-field>\n    </form>\n\n    <div class=\"row d-flex justify-content-center\" style=\"margin-top: 30px;\">\n        <p>{{this.numBets}}</p>\n    </div>\n    \n    <hr *ngIf=\"players.length == 0\">\n\n    <div *ngIf=\"players.length == 0\" class=\"d-flex justify-content-center\">\n        No group selected with any players\n    </div>\n\n    <div *ngIf=\"players.length != 0\" class=\"d-flex justify-content-center\">\n        <table mat-table [dataSource]=\"players\" mat-table class=\"mat-table cdk-table col-xl-9 col-lg-9 col-md-10 col-sm-11 col-xs-12\" style=\"text-align: center;\">\n          \n            <ng-container matColumnDef=\"name\">\n              <th mat-header-cell *matHeaderCellDef style=\"text-align: center;\"> Player Name </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"record\">\n                <th mat-header-cell *matHeaderCellDef style=\"text-align: center;\"> Record </th>\n                <td mat-cell *matCellDef=\"let element\"> {{element.record}} </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"details\">\n                <th mat-header-cell *matHeaderCellDef style=\"text-align: center;\"> Details </th>\n                <td mat-cell *matCellDef=\"let element\"> \n                    <button mat-raised-button color=\"primary\" (click)=\"goTo(element)\">Show picks</button> \n                </td>\n            </ng-container>\n          \n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n        </table>\n    </div>\n\n    <div *ngIf=\"isLive\" class=\"mt-4\">\n        <mat-dialog-actions class=\"d-flex justify-content-center\">\n            <button mat-raised-button color=\"secondary\" (click)=\"new()\">Make a new bet</button>\n        </mat-dialog-actions>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/form-page/form-page.component.html": 
        /*!******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/form-page/form-page.component.html ***!
          \******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n    <h1 class=\"d-flex justify-content-center mat-display-2\" style=\"margin: 25px 0 5px;\">{{event?.name}}</h1>\n    <h3 class=\"d-flex justify-content-center mat-display-1\" style=\"margin: 0px 0 25px;\">Prop Bets</h3>\n    <h4 class=\"d-flex justify-content-center\">Betting closes at: {{eventDate  | date :'short'}}</h4>\n    <div *ngIf=\"newBet\" class=\"navbar-header d-flex justify-content-center\">\n        <p>Group: {{gameName}}</p>\n        <div style=\"width: 100px;\"></div>\n        <p>Name: {{playerName}}</p>\n    </div>\n  \n    <hr class=\"header-line\">\n\n    <div class=\"row m-xl-5 m-lg-4 m-md-3 m-sm-0 m-xs-0 d-flex justify-content-md-center justify-content-lg-center justify-content-xl-center\">\n        <ng-container *ngFor=\"let section of sections\">\n\n            <div class=\"col-12 m-3 mb-md-3 mb-lg-3 mb-xl-3 d-flex justify-content-md-center justify-content-lg-center justify-content-xl-center\">{{ section.name }}</div>\n\n            <ng-container *ngFor=\"let bet of section.bets; let col = index\">\n                    <div [ngClass]=\"col % 2 == 0 ? 'col-xl-5 col-lg-5 col-md-5 col-sm-7 col-6 even-row' : 'col-xl-5 col-lg-5 col-md-5 col-sm-7 col-6 odd-row'\">\n                        {{ bet.q }}\n                    </div>\n                    <div [ngClass]=\"col % 2 == 0 ? 'col-xl-3 col-lg-3 col-md-3 col-sm-5 col-6 even-row' : 'col-xl-3 col-lg-3 col-md-3 col-sm-5 col-6 odd-row'\">\n                        <mat-radio-group name=\"{{ bet.id }}\" (change)=\"radioChange($event)\">\n                            <mat-radio-button style=\"float: left;\" value=\"{{ bet.a1 }}\">{{ bet.a1 }}</mat-radio-button>\n                            <mat-radio-button style=\"float: right;\" value=\"{{ bet.a2 }}\">{{ bet.a2 }}</mat-radio-button>\n                        </mat-radio-group>\n                    </div>\n            </ng-container>\n\n        </ng-container>\n        \n    </div>\n\n    <mat-dialog-actions class=\"mt-4 d-flex justify-content-center\">\n        <button *ngIf=\"newBet\" mat-raised-button color=\"primary\" (click)=\"submit()\" [disabled]=\"isDisabled\">Submit</button>\n        <button *ngIf=\"!newBet\" mat-raised-button color=\"primary\" (click)=\"makeBet()\">Make Bets</button>\n        <button mat-raised-button color=\"secondary\" (click)=\"seeEntries()\">See Entries</button>\n    </mat-dialog-actions>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/form-page/info-dialog/info-dialog.component.html": 
        /*!********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/form-page/info-dialog/info-dialog.component.html ***!
          \********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n<mat-dialog-content>\n    <h1 mat-dialog-title class=\"d-flex justify-content-center\">Create Entry</h1>\n    \n    <form class=\"form-horizontal\" [formGroup]=\"form\" (submit)=\"submit()\">\n        <h2 mat-dialog-title style=\"padding-top: 25px;\">Event</h2>\n        <p>Pick the event you want to place bets on.</p>\n        <mat-form-field style=\"margin-right: 20px;\">\n            <mat-label>Event</mat-label>\n            <mat-select [(ngModel)]=\"selectedEvent\" name=\"event\" id=\"event\" #event formControlName=\"event\" [ngClass]=\"displayFieldCss('event')\" (selectionChange)=\"selecteEvent($event)\"> \n                <mat-option *ngFor=\"let event of events\" [value]=\"event\">\n                    {{event.name}}\n                </mat-option>\n            </mat-select>\n        </mat-form-field>\n\n        <h2 mat-dialog-title style=\"padding-top: 25px;\">Group</h2>\n        <p>Select the group of people you are playing with or create a new one.</p>\n        <mat-form-field style=\"margin-right: 20px;\">\n            <mat-label>Group</mat-label>\n            <mat-select [(ngModel)]=\"selectedGame\" name=\"game\" id=\"game\" #game formControlName=\"game\" [ngClass]=\"displayFieldCss('game')\" (selectionChange)=\"selecteGame($event)\"> \n                <mat-option *ngFor=\"let game of games\" [value]=\"game\">\n                    {{game.name}}\n                </mat-option>\n                <mat-option value=\"new\">\n                    Create New Group\n                </mat-option>\n            </mat-select>\n        </mat-form-field>\n        \n        <mat-form-field *ngIf=\"gameText == 'Create New Group'\">\n            <input matInput placeholder=\"Group Name\" formControlName=\"group\" formControlName=\"group\" [ngClass]=\"displayFieldCss('game')\">\n        </mat-form-field>\n\n        <h2 mat-dialog-title style=\"padding-top: 25px;\">Name</h2>\n        <p>Enter your name for the entry.</p>\n        <mat-form-field>\n            <input matInput placeholder=\"Name\" formControlName=\"name\" formControlName=\"name\" [ngClass]=\"displayFieldCss('name')\">\n        </mat-form-field>\n\n        <mat-dialog-actions class=\"d-flex justify-content-center\">\n            <button type=\"submit\" mat-raised-button color=\"primary\">Enter</button>\n            <button mat-raised-button color=\"secondary\" (click)=\"close()\">Close</button>\n        </mat-dialog-actions>\n    </form>\n</mat-dialog-content>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/review-page/review-page.component.html": 
        /*!**********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/review-page/review-page.component.html ***!
          \**********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n    <h2 class=\"d-flex justify-content-center mat-display-1\" style=\"margin: 25px 0 25px;\">{{event?.name}}</h2>\n    <div class=\"navbar-header d-flex justify-content-center\">\n        <p>Group: {{groupName}}</p>\n        <div style=\"width: 100px;\"></div>\n        <p>Name: {{playerName}}</p>\n    </div>\n\n    <div class=\"row\">\n\n        <table mat-table [dataSource]=\"bets\" class=\"col-12\" style=\"text-align: center;\">\n          \n            <!-- question Column -->\n            <ng-container matColumnDef=\"question\">\n              <th mat-header-cell *matHeaderCellDef style=\"text-align: center;\"> Bet </th>\n              <td mat-cell *matCellDef=\"let element\" style=\"text-align: left;\"> {{element.questionText}} </td>\n              <td mat-footer-cell *matFooterCellDef></td>\n            </ng-container>\n\n            <!-- guess Column -->\n            <ng-container matColumnDef=\"guess\">\n              <th mat-header-cell *matHeaderCellDef style=\"text-align: center;\"> Guess </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.guess}} </td>\n              <td mat-footer-cell *matFooterCellDef> Totals:</td>\n            </ng-container>\n\n            <!-- answer Column -->\n            <ng-container matColumnDef=\"answer\">\n              <th mat-header-cell *matHeaderCellDef style=\"text-align: right;\"> Answer</th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.answer}} </td>\n              <td mat-footer-cell *matFooterCellDef> {{results}} </td>\n            </ng-container>\n\n            <!-- answer check -->\n            <ng-container matColumnDef=\"check\">\n              <th mat-header-cell *matHeaderCellDef></th>\n              <td mat-cell *matCellDef=\"let element\">\n                <span *ngIf=\"element.answer == element.guess\" class=\"material-icons\">\n                    done_outline\n                </span>\n                <span *ngIf=\"element.answer != '' && element.answer != element.guess\" class=\"material-icons\">\n                    clear\n                </span>\n              </td>\n              <td mat-footer-cell *matFooterCellDef></td>\n            </ng-container>\n\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n            <tr mat-footer-row *matFooterRowDef=\"displayedColumns\"></tr>\n        </table>\n        \n    </div>\n\n    <mat-dialog-actions class=\"mt-4 d-flex justify-content-center\">\n        <button mat-raised-button color=\"primary\" (click)=\"refresh()\">Refresh</button>\n        <button mat-raised-button color=\"secondary\" (click)=\"back()\">Back</button>\n    </mat-dialog-actions>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/pagination/pagination.component.html": 
        /*!***************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/pagination/pagination.component.html ***!
          \***************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<nav [hidden]=\"!isVisible\">\r\n  <ul class=\"pagination\">\r\n    <li [class.disabled]=\"!previousEnabled\" (click)=\"previousNext(-1, $event)\">\r\n      <a aria-label=\"Previous\">\r\n        <span aria-hidden=\"true\">&laquo;</span>\r\n      </a>\r\n    </li>\r\n    <li *ngFor=\"let page of pages\" (click)=\"changePage(page, $event)\" [class.active]=\"currentPage === page\">\r\n      <a>{{ page }}</a>\r\n    </li>\r\n    <li [class.disabled]=\"!nextEnabled\" (click)=\"previousNext(1, $event)\">\r\n      <a aria-label=\"Next\">\r\n        <span aria-hidden=\"true\">&raquo;</span>\r\n      </a>\r\n    </li>\r\n  </ul>\r\n</nav>");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
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
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
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
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _form_page_form_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-page/form-page.component */ "./src/app/form-page/form-page.component.ts");
            /* harmony import */ var _entries_page_entries_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./entries-page/entries-page.component */ "./src/app/entries-page/entries-page.component.ts");
            /* harmony import */ var _review_page_review_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./review-page/review-page.component */ "./src/app/review-page/review-page.component.ts");
            /* import { NgModule } from '@angular/core';
            import { RouterModule, Routes } from '@angular/router';
            
            import { CustomersComponent } from './customers/customers.component';
            import { CustomersGridComponent } from './customers/customers-grid.component';
            import { CustomerEditComponent } from './customers/customer-edit.component';
            import { CustomerEditReactiveComponent } from './customers/customer-edit-reactive.component';
            import { IRouting } from './shared/interfaces';
            
            const routes: Routes = [
              { path: '', pathMatch: 'full', redirectTo: '/customers' },
              { path: 'customers', component: CustomersComponent},
              { path: 'customers/:id', component: CustomerEditComponent},
              //{ path: 'customers/:id', component: CustomerEditReactiveComponent },
              { path: '**', redirectTo: '/customers' } //catch any unfound routes and redirect to home page
            ];
            
            @NgModule({
              imports: [ RouterModule.forRoot(routes) ],
              exports: [ RouterModule ]
            })
            export class AppRoutingModule {
              static components = [ CustomersComponent, CustomerEditComponent, CustomerEditReactiveComponent, CustomersGridComponent ];
            }
             */
            //import { SigninRedirectCallbackComponent } from './redirects/signin-redirect-callback.component'
            //import { SignoutRedirectCallbackComponent } from './redirects/signout-redirect-callback.component'
            var routes = [
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
                        // {
                        //   path: 'signin-callback',
                        //   component: SigninRedirectCallbackComponent
                        // },
                        // {
                        //   path: 'signout-callback',
                        //   component: SignoutRedirectCallbackComponent
                        // },
                        {
                            path: 'review',
                            component: _review_page_review_page_component__WEBPACK_IMPORTED_MODULE_5__["ReviewPageComponent"],
                            children: [
                                { path: ':id/:groupName/:playerName', component: _review_page_review_page_component__WEBPACK_IMPORTED_MODULE_5__["ReviewPageComponent"] }
                            ]
                        },
                        {
                            path: '', redirectTo: '/form', pathMatch: 'full'
                        }
                    ]
                }
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: "<router-outlet></router-outlet>"
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
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
            /* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
            /* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
            /* harmony import */ var _form_page_info_dialog_info_dialog_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./form-page/info-dialog/info-dialog.component */ "./src/app/form-page/info-dialog/info-dialog.component.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _entries_page_entries_page_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./entries-page/entries-page.component */ "./src/app/entries-page/entries-page.component.ts");
            /* harmony import */ var _review_page_review_page_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./review-page/review-page.component */ "./src/app/review-page/review-page.component.ts");
            /* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
            /* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
            //import { SigninRedirectCallbackComponent } from './redirects/signin-redirect-callback.component'
            //import { SignoutRedirectCallbackComponent } from './redirects/signout-redirect-callback.component'
            //import { AuthModule, AuthService } from '@auth0/auth0-angular';
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
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
                        _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"],
                        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__["MatToolbarModule"],
                        //AuthModule,
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientXsrfModule"].withOptions({
                            cookieName: 'XSRF-TOKEN',
                            headerName: 'X-CSRF-TOKEN'
                        }),
                        _core_core_module__WEBPACK_IMPORTED_MODULE_20__["CoreModule"],
                        _shared_shared_module__WEBPACK_IMPORTED_MODULE_21__["SharedModule"]
                    ],
                    entryComponents: [_form_page_info_dialog_info_dialog_component__WEBPACK_IMPORTED_MODULE_16__["InfoDialogComponent"]],
                    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                        _form_page_form_page_component__WEBPACK_IMPORTED_MODULE_5__["FormPageComponent"],
                        _form_page_info_dialog_info_dialog_component__WEBPACK_IMPORTED_MODULE_16__["InfoDialogComponent"],
                        _entries_page_entries_page_component__WEBPACK_IMPORTED_MODULE_18__["EntriesPageComponent"],
                        _review_page_review_page_component__WEBPACK_IMPORTED_MODULE_19__["ReviewPageComponent"],],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/core/core.module.ts": 
        /*!*************************************!*\
          !*** ./src/app/core/core.module.ts ***!
          \*************************************/
        /*! exports provided: CoreModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function () { return CoreModule; });
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
            var CoreModule = /** @class */ (function (_super) {
                __extends(CoreModule, _super);
                //Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
                function CoreModule(parentModule) {
                    return _super.call(this, parentModule) || this;
                }
                return CoreModule;
            }(_shared_ensureModuleLoadedOnceGuard__WEBPACK_IMPORTED_MODULE_7__["EnsureModuleLoadedOnceGuard"]));
            CoreModule.ctorParameters = function () { return [
                { type: CoreModule, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"] }] }
            ]; };
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
            /***/ 
        }),
        /***/ "./src/app/core/data-filter.service.ts": 
        /*!*********************************************!*\
          !*** ./src/app/core/data-filter.service.ts ***!
          \*********************************************/
        /*! exports provided: DataFilterService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataFilterService", function () { return DataFilterService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _shared_property_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/property-resolver */ "./src/app/shared/property-resolver.ts");
            var DataFilterService = /** @class */ (function () {
                function DataFilterService() {
                }
                DataFilterService.prototype.filter = function (datasource, filterProperties, filterData) {
                    if (datasource && filterProperties && filterData) {
                        filterData = filterData.toUpperCase();
                        var filtered = datasource.filter(function (item) {
                            var match = false;
                            for (var _i = 0, filterProperties_1 = filterProperties; _i < filterProperties_1.length; _i++) {
                                var prop = filterProperties_1[_i];
                                var propVal = '';
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
                };
                return DataFilterService;
            }());
            DataFilterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], DataFilterService);
            /***/ 
        }),
        /***/ "./src/app/core/data.service.ts": 
        /*!**************************************!*\
          !*** ./src/app/core/data.service.ts ***!
          \**************************************/
        /*! exports provided: DataService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function () { return DataService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            //Using the new HttpClientModule now. If you're still on < Angular 4.3 see the 
            //data.service.ts file instead (simplify rename it to the name 
            //of this file to use it instead)
            var DataService = /** @class */ (function () {
                function DataService(http) {
                    this.http = http;
                    this.betUrl = '/api/bets';
                    this.eventUrl = '/api/events';
                    this.gameUrl = '/api/games';
                    this.playerUrl = '/api/players';
                    this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
                    this.headers = this.headers.set('Access-Control-Allow-Origin', '*').set('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT');
                }
                DataService.prototype.getBets = function () {
                    return this.http.get(this.betUrl, {
                        headers: this.headers
                    })
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (bets) {
                        //this.calculateBetsOrderTotal(bets);
                        return bets;
                    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
                };
                DataService.prototype.getBetsPage = function (page, pageSize) {
                    return this.http.get(this.betUrl + "/page/" + page + "/" + pageSize, {
                        headers: this.headers,
                        observe: 'response'
                    })
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
                        //Need to observe response in order to get to this header (see {observe: 'response'} above)
                        var totalRecords = +res.headers.get('x-inlinecount');
                        var bets = res.body;
                        return {
                            results: bets,
                            totalRecords: totalRecords
                        };
                    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
                };
                DataService.prototype.getBet = function (id) {
                    return this.http.get(this.betUrl + '/' + id, {
                        headers: this.headers
                    })
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
                };
                DataService.prototype.insertBet = function (bet) {
                    return this.http.post(this.betUrl, bet, {
                        headers: this.headers
                    })
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
                        console.log('insert bet status: ' + data.status);
                        return data.bet;
                    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
                };
                DataService.prototype.updateBet = function (bet) {
                    return this.http.put(this.betUrl + '/' + bet._id, bet, {
                        headers: this.headers
                    })
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
                        console.log('update bet status: ' + data.status);
                        return data.bet;
                    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
                };
                DataService.prototype.deleteBet = function (id) {
                    return this.http.delete(this.betUrl + '/' + id, {
                        headers: this.headers
                    })
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
                };
                DataService.prototype.getEvents = function () {
                    return this.http.get(this.eventUrl, {
                        headers: this.headers
                    })
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (events) {
                        //this.calculateBetsOrderTotal(events);
                        return events;
                    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
                };
                DataService.prototype.getEventsPage = function (page, pageSize) {
                    return this.http.get(this.eventUrl + "/page/" + page + "/" + pageSize, {
                        headers: this.headers,
                        observe: 'response'
                    })
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
                        //Need to observe response in order to get to this header (see {observe: 'response'} above)
                        var totalRecords = +res.headers.get('x-inlinecount');
                        var events = res.body;
                        return {
                            results: events,
                            totalRecords: totalRecords
                        };
                    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
                };
                DataService.prototype.getEvent = function (id) {
                    return this.http.get(this.eventUrl + '/' + id, {
                        headers: this.headers
                    })
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
                };
                DataService.prototype.insertEvent = function (event) {
                    return this.http.post(this.eventUrl, event, {
                        headers: this.headers
                    })
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
                        console.log('insert event status: ' + data.status);
                        return data.event;
                    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
                };
                DataService.prototype.updateEvent = function (event) {
                    return this.http.put(this.eventUrl + '/' + event._id, event, {
                        headers: this.headers
                    })
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
                        console.log('update event status: ' + data.status);
                        return data.event;
                    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
                };
                DataService.prototype.deleteEvent = function (id) {
                    return this.http.delete(this.eventUrl + '/' + id)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
                };
                DataService.prototype.getGames = function () {
                    return this.http.get(this.gameUrl, {
                        headers: this.headers
                    })
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (games) {
                        //this.calculateBetsOrderTotal(games);
                        return games;
                    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
                };
                DataService.prototype.getGamesPage = function (page, pageSize) {
                    return this.http.get(this.gameUrl + "/page/" + page + "/" + pageSize, {
                        headers: this.headers,
                        observe: 'response'
                    })
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
                        //Need to observe response in order to get to this header (see {observe: 'response'} above)
                        var totalRecords = +res.headers.get('x-inlinecount');
                        var games = res.body;
                        return {
                            results: games,
                            totalRecords: totalRecords
                        };
                    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
                };
                DataService.prototype.getGame = function (id) {
                    return this.http.get(this.gameUrl + '/' + id, {
                        headers: this.headers
                    })
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
                };
                DataService.prototype.insertGame = function (game) {
                    return this.http.post(this.gameUrl, game, { withCredentials: true })
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
                        console.log('insert game status: ' + data.status);
                        return data.game;
                    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
                };
                DataService.prototype.updateGame = function (game) {
                    return this.http.put(this.gameUrl + '/' + game._id, game, {
                        headers: this.headers
                    })
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
                        console.log('update game status: ' + data.status);
                        return data.game;
                    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
                };
                DataService.prototype.deleteGame = function (id) {
                    return this.http.delete(this.gameUrl + '/' + id, {
                        headers: this.headers
                    })
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
                };
                DataService.prototype.getPlayers = function () {
                    return this.http.get(this.playerUrl, {
                        headers: this.headers
                    })
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (players) {
                        //this.calculateBetsOrderTotal(players);
                        return players;
                    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
                };
                DataService.prototype.getPlayersPage = function (page, pageSize) {
                    return this.http.get(this.playerUrl + "/page/" + page + "/" + pageSize, {
                        headers: this.headers,
                        observe: 'response'
                    })
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
                        //Need to observe response in order to get to this header (see {observe: 'response'} above)
                        var totalRecords = +res.headers.get('x-inlinecount');
                        var players = res.body;
                        return {
                            results: players,
                            totalRecords: totalRecords
                        };
                    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
                };
                DataService.prototype.getPlayer = function (id) {
                    return this.http.get(this.playerUrl + '/' + id, {
                        headers: this.headers
                    })
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
                };
                DataService.prototype.insertPlayer = function (player) {
                    return this.http.post(this.playerUrl, player, {
                        headers: this.headers
                    })
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
                        console.log('insert player status: ' + data.status);
                        return data.player;
                    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
                };
                DataService.prototype.updatePlayer = function (player) {
                    return this.http.put(this.playerUrl + '/' + player._id, player, {
                        headers: this.headers
                    })
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
                        console.log('update player status: ' + data.status);
                        return data.player;
                    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
                };
                DataService.prototype.deletePlayer = function (id) {
                    return this.http.delete(this.playerUrl + '/' + id, {
                        headers: this.headers
                    })
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
                };
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
                DataService.prototype.handleError = function (error) {
                    console.error('server error:', error);
                    if (error.error instanceof Error) {
                        var errMessage = error.error.message;
                        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(errMessage);
                        // Use the following instead if using lite-server
                        //return Observable.throw(err.text() || 'backend server error');
                    }
                    return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(error || 'Node.js server error');
                };
                return DataService;
            }());
            DataService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], DataService);
            /***/ 
        }),
        /***/ "./src/app/core/sorter.ts": 
        /*!********************************!*\
          !*** ./src/app/core/sorter.ts ***!
          \********************************/
        /*! exports provided: Sorter */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sorter", function () { return Sorter; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _shared_property_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/property-resolver */ "./src/app/shared/property-resolver.ts");
            var Sorter = /** @class */ (function () {
                function Sorter() {
                    this.property = null;
                    this.direction = 1;
                }
                Sorter.prototype.sort = function (collection, prop) {
                    var _this = this;
                    this.property = prop;
                    this.direction = (this.property === prop) ? this.direction * -1 : 1;
                    collection.sort(function (a, b) {
                        var aVal;
                        var bVal;
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
                        if (_this.isString(aVal))
                            aVal = aVal.trim().toUpperCase();
                        if (_this.isString(bVal))
                            bVal = bVal.trim().toUpperCase();
                        if (aVal === bVal) {
                            return 0;
                        }
                        else if (aVal > bVal) {
                            return _this.direction * -1;
                        }
                        else {
                            return _this.direction * 1;
                        }
                    });
                };
                Sorter.prototype.isString = function (val) {
                    return (val && (typeof val === 'string' || val instanceof String));
                };
                return Sorter;
            }());
            Sorter = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], Sorter);
            /***/ 
        }),
        /***/ "./src/app/core/trackby.service.ts": 
        /*!*****************************************!*\
          !*** ./src/app/core/trackby.service.ts ***!
          \*****************************************/
        /*! exports provided: TrackByService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackByService", function () { return TrackByService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var TrackByService = /** @class */ (function () {
                function TrackByService() {
                }
                TrackByService.prototype.bet = function (index, bet) {
                    return bet._id;
                };
                TrackByService.prototype.event = function (index, event) {
                    return event._id;
                };
                TrackByService.prototype.game = function (index, game) {
                    return game._id;
                };
                TrackByService.prototype.player = function (index, player) {
                    return player._id;
                };
                return TrackByService;
            }());
            TrackByService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], TrackByService);
            /***/ 
        }),
        /***/ "./src/app/entries-page/entries-page.component.scss": 
        /*!**********************************************************!*\
          !*** ./src/app/entries-page/entries-page.component.scss ***!
          \**********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("#game {\n  background-color: #7b1fa2 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW50cmllcy1wYWdlL0M6XFxQcm9qZWN0c1xcYW5ndWxhciBub2RlanMgbW9uZ29kYlxcTUVBTi1Qcm9wLUJldHMvc3JjXFxhcHBcXGVudHJpZXMtcGFnZVxcZW50cmllcy1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9lbnRyaWVzLXBhZ2UvZW50cmllcy1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0NBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2VudHJpZXMtcGFnZS9lbnRyaWVzLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZ2FtZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2IxZmEyICFpbXBvcnRhbnQ7XHJcbn0iLCIjZ2FtZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3YjFmYTIgIWltcG9ydGFudDtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/entries-page/entries-page.component.ts": 
        /*!********************************************************!*\
          !*** ./src/app/entries-page/entries-page.component.ts ***!
          \********************************************************/
        /*! exports provided: EntriesPageComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntriesPageComponent", function () { return EntriesPageComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _core_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/data.service */ "./src/app/core/data.service.ts");
            var EntriesPageComponent = /** @class */ (function () {
                function EntriesPageComponent(formBuilder, dataService, router) {
                    this.formBuilder = formBuilder;
                    this.dataService = dataService;
                    this.router = router;
                    this.games = [];
                    this.players = [];
                    this.tablePlayers = [];
                    this.displayedColumns = ['name', 'record', 'details'];
                    this.isLive = false;
                }
                EntriesPageComponent.prototype.ngOnDestroy = function () {
                    //this.dataServiceSubscription.unsubscribe()
                };
                EntriesPageComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.dataService.getEvents().subscribe(function (events) {
                        if (events !== null && events.length > 1) {
                            var sortedEvents = events.sort(function (a, b) {
                                return new Date(b.start) - new Date(a.start);
                            });
                            _this.event = sortedEvents[0];
                            var today = new Date();
                            if (today > new Date(_this.event.start)) {
                                _this.isLive = true;
                            }
                        }
                        else if (events.length == 1) {
                            _this.event = events[0];
                        }
                        _this.dataService.getGames().subscribe(function (games) {
                            _this.games = games;
                            console.log(_this.games);
                        });
                    });
                    this.form = this.formBuilder.group({
                        game: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                        name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                    });
                };
                EntriesPageComponent.prototype.selected = function ($event) {
                    var _this = this;
                    this.numBets = "";
                    this.gameId = this.selectedValue._id;
                    this.gameText = this.selectedValue.name;
                    this.dataService.getPlayers().subscribe(function (players) {
                        _this.players = players.filter(function (item) { return item.gameId == _this.gameId; });
                        _this.tablePlayers = [];
                        _this.players.forEach(function (player) {
                            _this.dataService.getBets().subscribe(function (bets) {
                                bets = bets.filter(function (b) { b.playerId == player._id && b.groupId == _this.gameId; });
                                if (bets != null && bets.length > 0) {
                                    var done = bets.filter(function (bet) { return bet.answer != null && bet.answer != ''; });
                                    _this.numBets = _this.setRemainingBetsText(done, bets);
                                    var right = done.filter(function (bet) { return bet.answer == bet.guess; });
                                    player.record = right.length + "/" + done.length;
                                    _this.tablePlayers.push(player);
                                }
                            });
                        });
                    });
                };
                EntriesPageComponent.prototype.setRemainingBetsText = function (done, bets) {
                    var numLeft = bets.length - done.length;
                    if (numLeft == 0)
                        return "Game is finished!";
                    else if (numLeft == bets.length)
                        return "Game hasn't started";
                    else
                        return numLeft + " Remaining Bets out of " + bets.length;
                };
                EntriesPageComponent.prototype.goTo = function (player) {
                    this.router.navigate(['/review'], { queryParams: { id: player._id, playerName: player.name, groupId: this.gameId, groupName: this.gameText } });
                };
                EntriesPageComponent.prototype.new = function () {
                    this.router.navigate(['form']);
                };
                return EntriesPageComponent;
            }());
            EntriesPageComponent.ctorParameters = function () { return [
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
                { type: _core_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            EntriesPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-entries-page',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./entries-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/entries-page/entries-page.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./entries-page.component.scss */ "./src/app/entries-page/entries-page.component.scss")).default]
                })
            ], EntriesPageComponent);
            /***/ 
        }),
        /***/ "./src/app/form-page/form-page.component.scss": 
        /*!****************************************************!*\
          !*** ./src/app/form-page/form-page.component.scss ***!
          \****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".header-line {\n  border: none;\n  height: 1px;\n  color: #333;\n  background-color: #333;\n}\n\n.line {\n  display: block;\n  position: relative;\n  padding: 0;\n  margin: 8px auto;\n  height: 0;\n  width: 100%;\n  max-height: 0;\n  font-size: 1px;\n  line-height: 0;\n  clear: both;\n  border: none;\n  border-top: 1px solid #aaaaaa;\n  border-bottom: 1px solid #ffffff;\n}\n\n.even-row {\n  background-color: #e6e6e6;\n  padding-top: 5px;\n  padding-bottom: 1px;\n  border-style: solid;\n  border-width: 1px;\n  border-color: black;\n}\n\n.odd-row {\n  padding-top: 5px;\n  padding-bottom: 1px;\n  border-style: solid;\n  border-width: 1px;\n  border-color: black;\n}\n\nbutton {\n  margin: 5px;\n}\n\nmat-radio-button {\n  margin: 3px;\n}\n\n.backdropBackground {\n  background-color: #bbbbbbf2;\n  backdrop-filter: blur(4px);\n}\n\n::ng-deep .mat-radio-outer-circle {\n  border-color: #424242 !important;\n}\n\n::ng-deep .mat-radio-button.mat-accent .mat-radio-inner-circle {\n  background-color: #7b1fa2 !important;\n}\n\n::ng-deep .cdk-overlay-container {\n  backdrop-filter: blur(2px) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybS1wYWdlL0M6XFxQcm9qZWN0c1xcYW5ndWxhciBub2RlanMgbW9uZ29kYlxcTUVBTi1Qcm9wLUJldHMvc3JjXFxhcHBcXGZvcm0tcGFnZVxcZm9ybS1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mb3JtLXBhZ2UvZm9ybS1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QURDQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0FDRUo7O0FEQ0M7RUFDRyx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNFSjs7QURDQztFQUNHLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNFSjs7QURDQztFQUNJLFdBQUE7QUNFTDs7QURDQztFQUNJLFdBQUE7QUNFTDs7QURDQztFQUNHLDJCQUFBO0VBQ0EsMEJBQUE7QUNFSjs7QURDQztFQUNHLGdDQUFBO0FDRUo7O0FEQ0M7RUFDRyxvQ0FBQTtBQ0VKOztBRENDO0VBQ0cscUNBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL2Zvcm0tcGFnZS9mb3JtLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLWxpbmUge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XHJcbn1cclxuLmxpbmUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiA4cHggYXV0bztcclxuICAgIGhlaWdodDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LWhlaWdodDogMDtcclxuICAgIGZvbnQtc2l6ZTogMXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDA7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjYWFhYWFhO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmZmZmY7XHJcbiB9XHJcblxyXG4gLmV2ZW4tcm93IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDFweDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItd2lkdGg6IDFweDtcclxuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XHJcbiB9XHJcblxyXG4gLm9kZC1yb3cge1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxcHg7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4gYnV0dG9uIHtcclxuICAgICBtYXJnaW46IDVweDtcclxuIH1cclxuXHJcbiBtYXQtcmFkaW8tYnV0dG9uIHtcclxuICAgICBtYXJnaW46IDNweDtcclxuIH1cclxuXHJcbiAuYmFja2Ryb3BCYWNrZ3JvdW5kIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiYmJiYmJmMjtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xyXG4gfVxyXG5cclxuIDo6bmctZGVlcCAubWF0LXJhZGlvLW91dGVyLWNpcmNsZSB7XHJcbiAgICBib3JkZXItY29sb3I6ICM0MjQyNDIgIWltcG9ydGFudDtcclxuIH1cclxuXHJcbiA6Om5nLWRlZXAgLm1hdC1yYWRpby1idXR0b24ubWF0LWFjY2VudCAubWF0LXJhZGlvLWlubmVyLWNpcmNsZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2IxZmEyICFpbXBvcnRhbnQ7XHJcbiB9XHJcblxyXG4gOjpuZy1kZWVwIC5jZGstb3ZlcmxheS1jb250YWluZXIge1xyXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJweCkgIWltcG9ydGFudDtcclxuIH0iLCIuaGVhZGVyLWxpbmUge1xuICBib3JkZXI6IG5vbmU7XG4gIGhlaWdodDogMXB4O1xuICBjb2xvcjogIzMzMztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbn1cblxuLmxpbmUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDhweCBhdXRvO1xuICBoZWlnaHQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAwO1xuICBmb250LXNpemU6IDFweDtcbiAgbGluZS1oZWlnaHQ6IDA7XG4gIGNsZWFyOiBib3RoO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjYWFhYWFhO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZmZmZjtcbn1cblxuLmV2ZW4tcm93IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgcGFkZGluZy1ib3R0b206IDFweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XG59XG5cbi5vZGQtcm93IHtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgcGFkZGluZy1ib3R0b206IDFweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XG59XG5cbmJ1dHRvbiB7XG4gIG1hcmdpbjogNXB4O1xufVxuXG5tYXQtcmFkaW8tYnV0dG9uIHtcbiAgbWFyZ2luOiAzcHg7XG59XG5cbi5iYWNrZHJvcEJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmJiYmJiZjI7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xufVxuXG46Om5nLWRlZXAgLm1hdC1yYWRpby1vdXRlci1jaXJjbGUge1xuICBib3JkZXItY29sb3I6ICM0MjQyNDIgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtcmFkaW8tYnV0dG9uLm1hdC1hY2NlbnQgLm1hdC1yYWRpby1pbm5lci1jaXJjbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2IxZmEyICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAuY2RrLW92ZXJsYXktY29udGFpbmVyIHtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJweCkgIWltcG9ydGFudDtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/form-page/form-page.component.ts": 
        /*!**************************************************!*\
          !*** ./src/app/form-page/form-page.component.ts ***!
          \**************************************************/
        /*! exports provided: FormPageComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormPageComponent", function () { return FormPageComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            /* harmony import */ var _info_dialog_info_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./info-dialog/info-dialog.component */ "./src/app/form-page/info-dialog/info-dialog.component.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _core_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/data.service */ "./src/app/core/data.service.ts");
            var FormPageComponent = /** @class */ (function () {
                //private dataServiceSubscription: Subscription
                function FormPageComponent(dialog, dataService, router) {
                    this.dialog = dialog;
                    this.dataService = dataService;
                    this.router = router;
                    this.sections = [];
                    this.info = {
                        bets: [
                            {
                                id: "anthem",
                                section: "Time",
                                q: "2:00 (min:sec) Demi Lovato anthem length",
                                a1: "Over",
                                a2: "Under"
                            },
                            {
                                id: "halftime",
                                section: "Time",
                                q: "32:00 (min:sec) Halftime length",
                                a1: "Over",
                                a2: "Under"
                            },
                            {
                                id: "gametime",
                                section: "Time",
                                q: "3:34 (hr:min) Game time length",
                                a1: "Over",
                                a2: "Under"
                            },
                            {
                                id: "coin",
                                section: "Coin Toss",
                                q: "Heads or Tails",
                                a1: "Heads",
                                a2: "Tails"
                            },
                            {
                                id: "coinwinner",
                                section: "Coin Toss",
                                q: "Winner of coin toss",
                                a1: "SF",
                                a2: "KC"
                            }
                        ]
                    };
                    this.isDisabled = true;
                    this.isAdmin = false;
                    this.newBet = false;
                    this.guesses = [];
                    this.selectedPlayers = { _id: null, name: null, gameId: null };
                }
                FormPageComponent.prototype.ngOnDestroy = function () {
                    //this.dataServiceSubscription.unsubscribe()
                };
                FormPageComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.dataService.getEvents().subscribe(function (events) {
                        if (events !== null && events.length > 0) {
                            // this.event = events.sort((a: IEvent, b: IEvent) => {
                            //   return a.start.getTime() - b.start.getTime()
                            // })[0]
                            //this.dataService.setEvent(this.event)
                            _this.event = events[0];
                            var today = new Date();
                            _this.eventDate = new Date(_this.event.start);
                            if (today > _this.eventDate) {
                                _this.router.navigate(['entries']);
                            }
                            else {
                                var games = new Set(_this.info.bets.map(function (item) { return item.section; }));
                                games.forEach(function (g) { return _this.sections.push({
                                    name: g,
                                    bets: _this.info.bets.filter(function (i) { return i.section === g; })
                                }); });
                                _this.dataService.getPlayers().subscribe(function (players) {
                                    _this.players = players;
                                    //console.log(this.players);
                                });
                            }
                        }
                    });
                    this.makeBet();
                };
                FormPageComponent.prototype.makeBet = function () {
                    this.openDialog();
                    this.newBet = true;
                };
                FormPageComponent.prototype.seeEntries = function () {
                    this.router.navigate(['entries']);
                };
                FormPageComponent.prototype.radioChange = function (event) {
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
                        var questionText = this.info.bets.filter(function (i) { return i.id === question; })[0].q;
                        var newBet = { _id: "0", question: question, questionText: questionText, guess: guess, answer: '', playerId: this.playerId, groupId: this.groupId, eventId: this.event._id };
                        this.guesses.push(newBet);
                    }
                    if (this.info.bets.length == this.guesses.length || this.isAdmin) {
                        this.isDisabled = false;
                    }
                };
                FormPageComponent.prototype.submit = function () {
                    var _this = this;
                    if (this.isAdmin) {
                        this.guesses.forEach(function (guess) {
                            guess.answer = guess.guess;
                            _this.dataService.updateBet(guess).subscribe(function (bet) {
                                console.log("Player bet, ", bet);
                            });
                        });
                        this.router.navigate(['entries']);
                    }
                    else {
                        this.guesses.forEach(function (guess) {
                            guess.playerId = _this.playerId;
                            guess.groupId = _this.groupId;
                            _this.dataService.insertBet(guess).subscribe(function (bet) {
                                console.log("Player bet, ", bet);
                            });
                        });
                        this.router.navigate(['entries']);
                    }
                };
                FormPageComponent.prototype.openDialog = function () {
                    var _this = this;
                    var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
                    dialogConfig.disableClose = true;
                    dialogConfig.autoFocus = true;
                    dialogConfig.backdropClass = 'backdropBackground';
                    this.dialogRef = this.dialog.open(_info_dialog_info_dialog_component__WEBPACK_IMPORTED_MODULE_3__["InfoDialogComponent"], dialogConfig);
                    this.dialogRef.afterClosed().subscribe(function (data) {
                        if (data.gameName != null) {
                            _this.gameName = data.gameName;
                            _this.playerName = data.playerName;
                            _this.groupId = data.gameId;
                            _this.playerId = data.playerId;
                            if (_this.gameName == "Submit Picks") {
                                _this.isAdmin = true;
                                _this.isDisabled = false;
                            }
                        }
                        else {
                            _this.newBet = false;
                        }
                    });
                };
                return FormPageComponent;
            }());
            FormPageComponent.ctorParameters = function () { return [
                { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
                { type: _core_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
            ]; };
            FormPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'form-page',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./form-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/form-page/form-page.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./form-page.component.scss */ "./src/app/form-page/form-page.component.scss")).default]
                })
            ], FormPageComponent);
            /***/ 
        }),
        /***/ "./src/app/form-page/info-dialog/info-dialog.component.scss": 
        /*!******************************************************************!*\
          !*** ./src/app/form-page/info-dialog/info-dialog.component.scss ***!
          \******************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm0tcGFnZS9pbmZvLWRpYWxvZy9pbmZvLWRpYWxvZy5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/form-page/info-dialog/info-dialog.component.ts": 
        /*!****************************************************************!*\
          !*** ./src/app/form-page/info-dialog/info-dialog.component.ts ***!
          \****************************************************************/
        /*! exports provided: InfoDialogComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoDialogComponent", function () { return InfoDialogComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _core_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/data.service */ "./src/app/core/data.service.ts");
            var InfoDialogComponent = /** @class */ (function () {
                function InfoDialogComponent(dialogRef, formBuilder, dataService) {
                    this.dialogRef = dialogRef;
                    this.formBuilder = formBuilder;
                    this.dataService = dataService;
                }
                InfoDialogComponent.prototype.ngOnDestroy = function () {
                    //this.dataServiceSubscription.unsubscribe()
                };
                InfoDialogComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.form = this.formBuilder.group({
                        event: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                        game: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                        name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                        group: [null]
                    });
                    this.dataService.getEvents().subscribe(function (events) {
                        if (events !== null && events.length > 1) {
                            _this.events = events;
                            _this.form.get('event').setValue(_this.events[0]);
                            _this.firstEvent = _this.event = events.sort(function (a, b) {
                                return new Date(a.start).getTime() - new Date(b.start).getTime();
                            })[0];
                        }
                        else if (events !== null && events.length == 1) {
                            _this.events = events;
                            _this.form.get('event').setValue(_this.events[0]);
                            _this.event = events[0];
                        }
                        // else {
                        //   let event: IEvent = {
                        //     _id: '',
                        //     name: 'Superbowl',
                        //     start: new Date('2022-03-03 09:15'),
                        //     hasEnded: false
                        //   }
                        //   this.dataService.insertEvent(event).subscribe((event)=>{
                        //     this.event = event;
                        //   }) 
                        // }
                        _this.dataService.getGames().subscribe(function (games) {
                            _this.games = games;
                        });
                    });
                };
                InfoDialogComponent.prototype.selecteEvent = function ($event) {
                    var _this = this;
                    this.event = this.events.filter(function (i) { return i._id === _this.selectedEvent._id; })[0];
                    //this.dataService.setEvent(this.event)
                };
                InfoDialogComponent.prototype.selecteGame = function ($event) {
                    var _this = this;
                    if (this.selectedGame.toString() == "new") {
                        this.gameText = "Create New Group";
                    }
                    else {
                        var game = this.games.filter(function (i) { return i._id === _this.selectedGame._id; })[0];
                        this.gameId = game._id;
                        this.gameText = game.name;
                    }
                };
                InfoDialogComponent.prototype.close = function () {
                    this.dialogRef.close({});
                };
                InfoDialogComponent.prototype.submit = function () {
                    var _this = this;
                    Object.keys(this.form.controls).forEach(function (field) {
                        var control = _this.form.get(field);
                        control.markAsTouched({ onlySelf: true });
                    });
                    if (this.form.valid) {
                        if (this.gameText == "Create New Group" && this.form.value.group == "Submit Picks") {
                            var data = { playerId: 0, gameId: 0, playerName: "", gameName: "Submit Picks" };
                            this.dialogRef.close(data);
                        }
                        else if (this.gameText == "Create New Group") {
                            var game = { _id: "", name: this.form.value.group, eventId: this.event._id };
                            this.dataService.insertGame(game).subscribe(function (game) {
                                console.log("Game created, ", game);
                                _this.gameId = game._id;
                                _this.gameText = game.name;
                                var player = { _id: "", name: _this.form.value.name, gameId: _this.gameId };
                                _this.dataService.insertPlayer(player).subscribe(function (player) {
                                    console.log("Player created, ", player);
                                    var data = { playerId: player._id, gameId: player.gameId, playerName: player.name, gameName: _this.gameText };
                                    _this.dialogRef.close(data);
                                });
                            });
                        }
                        else {
                            var player = { _id: "", name: this.form.value.name, gameId: this.gameId };
                            this.dataService.insertPlayer(player).subscribe(function (player) {
                                console.log("Player created, ", player);
                                var data = { playerId: player._id, gameId: player.gameId, playerName: player.name, gameName: _this.gameText };
                                _this.dialogRef.close(data);
                            });
                        }
                    }
                };
                InfoDialogComponent.prototype.isFieldValid = function (field) {
                    return !this.form.get(field).valid && this.form.get(field).touched;
                };
                InfoDialogComponent.prototype.displayFieldCss = function (field) {
                    return {
                        'has-error': this.isFieldValid(field),
                        'has-feedback': this.isFieldValid(field)
                    };
                };
                return InfoDialogComponent;
            }());
            InfoDialogComponent.ctorParameters = function () { return [
                { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
                { type: _core_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] }
            ]; };
            InfoDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-info-dialog',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./info-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/form-page/info-dialog/info-dialog.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./info-dialog.component.scss */ "./src/app/form-page/info-dialog/info-dialog.component.scss")).default]
                })
            ], InfoDialogComponent);
            /***/ 
        }),
        /***/ "./src/app/review-page/review-page.component.scss": 
        /*!********************************************************!*\
          !*** ./src/app/review-page/review-page.component.scss ***!
          \********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("button {\n  margin: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmV2aWV3LXBhZ2UvQzpcXFByb2plY3RzXFxhbmd1bGFyIG5vZGVqcyBtb25nb2RiXFxNRUFOLVByb3AtQmV0cy9zcmNcXGFwcFxccmV2aWV3LXBhZ2VcXHJldmlldy1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9yZXZpZXctcGFnZS9yZXZpZXctcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3Jldmlldy1wYWdlL3Jldmlldy1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uIHtcclxuICAgIG1hcmdpbjogNXB4O1xyXG59IiwiYnV0dG9uIHtcbiAgbWFyZ2luOiA1cHg7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/review-page/review-page.component.ts": 
        /*!******************************************************!*\
          !*** ./src/app/review-page/review-page.component.ts ***!
          \******************************************************/
        /*! exports provided: ReviewPageComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewPageComponent", function () { return ReviewPageComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _core_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/data.service */ "./src/app/core/data.service.ts");
            var ReviewPageComponent = /** @class */ (function () {
                //private dataServiceSubscription: Subscription
                function ReviewPageComponent(//private mySqlService: MySqlService, 
                router, dataService, route) {
                    this.router = router;
                    this.dataService = dataService;
                    this.route = route;
                    this.isDisabled = true;
                    this.guesses = [];
                    this.displayedColumns = ['question', 'guess', 'answer', 'check'];
                }
                ReviewPageComponent.prototype.ngOnDestroy = function () {
                    //this.dataServiceSubscription.unsubscribe()
                };
                ReviewPageComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.dataService.getEvents().subscribe(function (events) {
                        if (events !== null) {
                            var sortedEvents = events.sort(function (a, b) {
                                return new Date(a.start) - new Date(b.start);
                            });
                            _this.event = sortedEvents[0];
                        }
                    });
                    this.route
                        .queryParams
                        .subscribe(function (params) {
                        _this.playerId = params['id'];
                        _this.playerName = params['playerName'];
                        _this.groupId = params['groupId'];
                        _this.groupName = params['groupName'];
                    });
                    this.dataService.getBets().subscribe(function (bets) {
                        _this.bets = bets.filter(function (bet) { return bet.playerId === _this.playerId; });
                        var rightPicks = _this.bets.filter(function (item) { return item.guess == item.answer; });
                        _this.results = rightPicks.length + "/" + _this.bets.length;
                    });
                };
                ReviewPageComponent.prototype.refresh = function () {
                    location.reload();
                };
                ReviewPageComponent.prototype.back = function () {
                    this.router.navigate(['entries']);
                };
                return ReviewPageComponent;
            }());
            ReviewPageComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _core_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
            ]; };
            ReviewPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-review-page',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./review-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/review-page/review-page.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./review-page.component.scss */ "./src/app/review-page/review-page.component.scss")).default]
                })
            ], ReviewPageComponent);
            /***/ 
        }),
        /***/ "./src/app/shared/ensureModuleLoadedOnceGuard.ts": 
        /*!*******************************************************!*\
          !*** ./src/app/shared/ensureModuleLoadedOnceGuard.ts ***!
          \*******************************************************/
        /*! exports provided: EnsureModuleLoadedOnceGuard */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnsureModuleLoadedOnceGuard", function () { return EnsureModuleLoadedOnceGuard; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var EnsureModuleLoadedOnceGuard = /** @class */ (function () {
                function EnsureModuleLoadedOnceGuard(targetModule) {
                    if (targetModule) {
                        throw new Error(targetModule.constructor.name + " has already been loaded. Import this module in the AppModule only.");
                    }
                }
                return EnsureModuleLoadedOnceGuard;
            }());
            /***/ 
        }),
        /***/ "./src/app/shared/filter-textbox/filter-textbox.component.ts": 
        /*!*******************************************************************!*\
          !*** ./src/app/shared/filter-textbox/filter-textbox.component.ts ***!
          \*******************************************************************/
        /*! exports provided: FilterTextboxComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterTextboxComponent", function () { return FilterTextboxComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var FilterTextboxComponent = /** @class */ (function () {
                function FilterTextboxComponent() {
                    this.model = { filter: null };
                    this.changed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                }
                FilterTextboxComponent.prototype.filterChanged = function (event) {
                    event.preventDefault();
                    this.changed.emit(this.model.filter); //Raise changed event
                };
                return FilterTextboxComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], FilterTextboxComponent.prototype, "changed", void 0);
            FilterTextboxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-filter-textbox',
                    template: "\n    <form>\n         Filter:\n         <input type=\"text\" name=\"filter\"\n                [(ngModel)]=\"model.filter\" \n                (keyup)=\"filterChanged($event)\"  />\n    </form>\n  "
                })
            ], FilterTextboxComponent);
            /***/ 
        }),
        /***/ "./src/app/shared/pagination/pagination.component.css": 
        /*!************************************************************!*\
          !*** ./src/app/shared/pagination/pagination.component.css ***!
          \************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".pagination>.active>a, .pagination>.active>a:focus, .pagination>.active>a:hover, .pagination>.active>span, .pagination>.active>span:focus, .pagination>.active>span:hover {\r\n  background-color: #027FF4;\r\n  border-color: #027FF4;\r\n}\r\n\r\n.pagination a {\r\n    cursor: pointer;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvcGFnaW5hdGlvbi9wYWdpbmF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnaW5hdGlvbj4uYWN0aXZlPmEsIC5wYWdpbmF0aW9uPi5hY3RpdmU+YTpmb2N1cywgLnBhZ2luYXRpb24+LmFjdGl2ZT5hOmhvdmVyLCAucGFnaW5hdGlvbj4uYWN0aXZlPnNwYW4sIC5wYWdpbmF0aW9uPi5hY3RpdmU+c3Bhbjpmb2N1cywgLnBhZ2luYXRpb24+LmFjdGl2ZT5zcGFuOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDI3RkY0O1xyXG4gIGJvcmRlci1jb2xvcjogIzAyN0ZGNDtcclxufVxyXG5cclxuLnBhZ2luYXRpb24gYSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/shared/pagination/pagination.component.ts": 
        /*!***********************************************************!*\
          !*** ./src/app/shared/pagination/pagination.component.ts ***!
          \***********************************************************/
        /*! exports provided: PaginationComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function () { return PaginationComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var PaginationComponent = /** @class */ (function () {
                function PaginationComponent() {
                    this.pages = [];
                    this.currentPage = 1;
                    this.isVisible = false;
                    this.previousEnabled = false;
                    this.nextEnabled = true;
                    this.pageChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                }
                Object.defineProperty(PaginationComponent.prototype, "pageSize", {
                    get: function () {
                        return this.pagerPageSize;
                    },
                    set: function (size) {
                        this.pagerPageSize = size;
                        this.update();
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(PaginationComponent.prototype, "totalItems", {
                    get: function () {
                        return this.pagerTotalItems;
                    },
                    set: function (itemCount) {
                        this.pagerTotalItems = itemCount;
                        this.update();
                    },
                    enumerable: true,
                    configurable: true
                });
                PaginationComponent.prototype.ngOnInit = function () {
                };
                PaginationComponent.prototype.update = function () {
                    if (this.pagerTotalItems && this.pagerPageSize) {
                        this.totalPages = Math.ceil(this.pagerTotalItems / this.pageSize);
                        this.isVisible = true;
                        if (this.totalItems >= this.pageSize) {
                            for (var i = 1; i < this.totalPages + 1; i++) {
                                this.pages.push(i);
                            }
                        }
                        return;
                    }
                    this.isVisible = false;
                };
                PaginationComponent.prototype.previousNext = function (direction, event) {
                    var page = this.currentPage;
                    if (direction == -1) {
                        if (page > 1)
                            page--;
                    }
                    else {
                        if (page < this.totalPages)
                            page++;
                    }
                    this.changePage(page, event);
                };
                PaginationComponent.prototype.changePage = function (page, event) {
                    if (event) {
                        event.preventDefault();
                    }
                    if (this.currentPage === page)
                        return;
                    this.currentPage = page;
                    this.previousEnabled = this.currentPage > 1;
                    this.nextEnabled = this.currentPage < this.totalPages;
                    this.pageChanged.emit(page);
                };
                return PaginationComponent;
            }());
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
            /***/ 
        }),
        /***/ "./src/app/shared/pipes/capitalize.pipe.ts": 
        /*!*************************************************!*\
          !*** ./src/app/shared/pipes/capitalize.pipe.ts ***!
          \*************************************************/
        /*! exports provided: CapitalizePipe */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapitalizePipe", function () { return CapitalizePipe; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var CapitalizePipe = /** @class */ (function () {
                function CapitalizePipe() {
                }
                CapitalizePipe.prototype.transform = function (value) {
                    if (value) {
                        return value.charAt(0).toUpperCase() + value.slice(1);
                    }
                    return value;
                };
                return CapitalizePipe;
            }());
            CapitalizePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'capitalize' })
            ], CapitalizePipe);
            /***/ 
        }),
        /***/ "./src/app/shared/pipes/trim.pipe.ts": 
        /*!*******************************************!*\
          !*** ./src/app/shared/pipes/trim.pipe.ts ***!
          \*******************************************/
        /*! exports provided: TrimPipe */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrimPipe", function () { return TrimPipe; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var TrimPipe = /** @class */ (function () {
                function TrimPipe() {
                }
                TrimPipe.prototype.transform = function (value) {
                    if (!value) {
                        return '';
                    }
                    return value.trim();
                };
                return TrimPipe;
            }());
            TrimPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'trim' })
            ], TrimPipe);
            /***/ 
        }),
        /***/ "./src/app/shared/property-resolver.ts": 
        /*!*********************************************!*\
          !*** ./src/app/shared/property-resolver.ts ***!
          \*********************************************/
        /*! exports provided: propertyResolver */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "propertyResolver", function () { return propertyResolver; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var propertyResolver = /** @class */ (function () {
                function propertyResolver() {
                }
                propertyResolver.resolve = function (path, obj) {
                    return path.split('.').reduce(function (prev, curr) {
                        return (prev ? prev[curr] : undefined);
                    }, obj || self);
                };
                return propertyResolver;
            }());
            /***/ 
        }),
        /***/ "./src/app/shared/shared.module.ts": 
        /*!*****************************************!*\
          !*** ./src/app/shared/shared.module.ts ***!
          \*****************************************/
        /*! exports provided: SharedModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function () { return SharedModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pagination/pagination.component */ "./src/app/shared/pagination/pagination.component.ts");
            /* harmony import */ var _pipes_capitalize_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pipes/capitalize.pipe */ "./src/app/shared/pipes/capitalize.pipe.ts");
            /* harmony import */ var _pipes_trim_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pipes/trim.pipe */ "./src/app/shared/pipes/trim.pipe.ts");
            /* harmony import */ var _filter_textbox_filter_textbox_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./filter-textbox/filter-textbox.component */ "./src/app/shared/filter-textbox/filter-textbox.component.ts");
            var SharedModule = /** @class */ (function () {
                function SharedModule() {
                }
                return SharedModule;
            }());
            SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
                    declarations: [_pipes_capitalize_pipe__WEBPACK_IMPORTED_MODULE_5__["CapitalizePipe"], _pipes_trim_pipe__WEBPACK_IMPORTED_MODULE_6__["TrimPipe"], _filter_textbox_filter_textbox_component__WEBPACK_IMPORTED_MODULE_7__["FilterTextboxComponent"], _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_4__["PaginationComponent"]],
                    exports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _pipes_capitalize_pipe__WEBPACK_IMPORTED_MODULE_5__["CapitalizePipe"], _pipes_trim_pipe__WEBPACK_IMPORTED_MODULE_6__["TrimPipe"], _filter_textbox_filter_textbox_component__WEBPACK_IMPORTED_MODULE_7__["FilterTextboxComponent"], _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_4__["PaginationComponent"]]
                })
            ], SharedModule);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // The file contents for the current environment will overwrite these during build.
            // The build system defaults to the dev environment which uses `environment.ts`, but if you do
            // `ng build --env=prod` then `environment.prod.ts` will be used instead.
            // The list of which env maps to which file can be found in `.angular-cli.json`.
            var environment = {
                production: false
            };
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
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
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! C:\Projects\angular nodejs mongodb\MEAN-Prop-Bets\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map