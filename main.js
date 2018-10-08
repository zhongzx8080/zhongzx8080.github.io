(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing/app-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/app-routing/app-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_data_tree_data_tree_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/data-tree/data-tree.component */ "./src/app/components/data-tree/data-tree.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_option_form_option_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/option-form/option-form.component */ "./src/app/components/option-form/option-form.component.ts");
/* harmony import */ var _components_data_table_data_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/data-table/data-table.component */ "./src/app/components/data-table/data-table.component.ts");
/* harmony import */ var _components_sql_input_sql_input_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/sql-input/sql-input.component */ "./src/app/components/sql-input/sql-input.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var appRoutes = [
    {
        path: 'tree',
        component: _components_data_tree_data_tree_component__WEBPACK_IMPORTED_MODULE_3__["DataTreeComponent"]
    },
    {
        path: 'index',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/index'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)
            ],
            declarations: [],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ],
            entryComponents: [_components_option_form_option_form_component__WEBPACK_IMPORTED_MODULE_5__["OptionFormComponent"], _components_data_table_data_table_component__WEBPACK_IMPORTED_MODULE_6__["DataTableComponent"], _components_sql_input_sql_input_component__WEBPACK_IMPORTED_MODULE_7__["SqlInputComponent"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nz-layout class=\"layout\">\n  <nz-header>\n    <ul nz-menu [nzTheme]=\"'dark'\" [nzMode]=\"'horizontal'\" style=\"line-height: 64px;\">\n      <li nz-menu-item><a routerLink=\"/\">首页</a></li>\n      <li nz-menu-item><a href=\"https://github.com/zhongzhixing/fake-data\" target=\"_blank\"><i class=\"anticon anticon-github\"></i></a></li>\n    </ul>\n  </nz-header>\n  <nz-content>\n    <div id=\"content\">\n      <router-outlet></router-outlet>\n    </div>\n  </nz-content>\n  <nz-footer>\n    <a href=\"http://github.com/zhongzhixing/\" target=\"_blank\">Fake Data ©{{year}} Implement By\n      zhongzhixing</a>\n  </nz-footer>\n</nz-layout>"

/***/ }),

/***/ "./src/app/app.component.less":
/*!************************************!*\
  !*** ./src/app/app.component.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#content {\n  margin-top: 20px;\n  min-height: 500px;\n}\nnz-header {\n  position: fixed;\n  width: 100%;\n  z-index: 923;\n}\nnz-content {\n  padding: 0 50px;\n  margin-top: 64px;\n  background-color: #f0f2f5;\n}\nnz-footer {\n  text-align: center;\n  background-color: black;\n  position: fixed;\n  width: 100%;\n  left: 0;\n  bottom: 0;\n  z-index: -1;\n}\nnz-footer a {\n  color: white;\n}\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.year = new Date().getFullYear();
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.less */ "./src/app/app.component.less")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/locales/zh */ "./node_modules/@angular/common/locales/zh.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing/app-routing.module */ "./src/app/app-routing/app-routing.module.ts");
/* harmony import */ var _components_data_tree_data_tree_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/data-tree/data-tree.component */ "./src/app/components/data-tree/data-tree.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_option_form_option_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/option-form/option-form.component */ "./src/app/components/option-form/option-form.component.ts");
/* harmony import */ var _components_data_table_data_table_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/data-table/data-table.component */ "./src/app/components/data-table/data-table.component.ts");
/* harmony import */ var _components_sql_input_sql_input_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/sql-input/sql-input.component */ "./src/app/components/sql-input/sql-input.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















Object(_angular_common__WEBPACK_IMPORTED_MODULE_7__["registerLocaleData"])(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_8___default.a);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _components_data_tree_data_tree_component__WEBPACK_IMPORTED_MODULE_10__["DataTreeComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _components_option_form_option_form_component__WEBPACK_IMPORTED_MODULE_12__["OptionFormComponent"],
                _components_data_table_data_table_component__WEBPACK_IMPORTED_MODULE_13__["DataTableComponent"],
                _components_sql_input_sql_input_component__WEBPACK_IMPORTED_MODULE_14__["SqlInputComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NgZorroAntdModule"],
                _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"]
            ],
            providers: [{ provide: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NZ_I18N"], useValue: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["zh_CN"] }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/data-table/data-table.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/data-table/data-table.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div nz-row>\n  <div nz-col nzSpan=\"1\">\n    <button nz-button (click)=\"refresh()\"><i class=\"anticon anticon-reload\"></i></button>\n  </div>\n  <div nz-col nzSpan=\"3\">\n    <input nz-input placeholder=\"表名\" [(ngModel)]=\"tableName\" nz-tooltip nzTitle=\"输入表名\" nzPlacement=\"bottom\">\n  </div>\n  <div nz-col nzSpan=\"4\">\n    <button nz-button (click)=\"copyAs()\" class=\"copyAsSql\" data-clipboard-action=\"copy\" data-clipboard-target=\"#sql\">复制为INSERT语句</button>\n  </div>\n  <div nz-col nzSpan=\"2\">\n    <button nz-button (click)=\"copyAs('json')\" class=\"copyAsJson\" data-clipboard-action=\"copy\" data-clipboard-target=\"#json\">复制为JSON</button>\n  </div>\n</div>\n<br>\n<nz-table #table nzBordered [nzData]=\"dataSet\" [nzPageSize]=\"10\">\n  <thead>\n    <tr *ngIf='options'>\n      <th *ngFor='let option of options'>{{option['title']}}</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let data of table.data\">\n      <td *ngFor='let option of options'>\n        <span *ngIf=\"option['type'][0] != '@image' \">{{data[option['title']]}}</span>\n        <img *ngIf=\"option['type'][0] == '@image' \" src=\"{{data[option['title']]}}\">\n      </td>\n    </tr>\n  </tbody>\n</nz-table>\n<br>\n<textarea id=\"sql\" nz-input [(ngModel)]=\"copiedSql\" nzAutosize></textarea>\n<textarea id=\"json\" nz-input [(ngModel)]=\"copiedJson\" nzAutosize></textarea>"

/***/ }),

/***/ "./src/app/components/data-table/data-table.component.less":
/*!*****************************************************************!*\
  !*** ./src/app/components/data-table/data-table.component.less ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#sql,\n#json {\n  opacity: 0;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: -1;\n}\n"

/***/ }),

/***/ "./src/app/components/data-table/data-table.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/data-table/data-table.component.ts ***!
  \***************************************************************/
/*! exports provided: DataTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableComponent", function() { return DataTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/data.service */ "./src/app/service/data.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var clipboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clipboard */ "./node_modules/clipboard/dist/clipboard.js");
/* harmony import */ var clipboard__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(clipboard__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DataTableComponent = /** @class */ (function () {
    function DataTableComponent(dataService, messageService, modalRef) {
        this.dataService = dataService;
        this.messageService = messageService;
        this.modalRef = modalRef;
        this.dataSet = [];
        this.options = [];
        this.count = 10;
        this.copiedSql = '';
        this.copiedJson = '';
        this.tableName = '';
    }
    DataTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadData();
        // 复制到剪切版
        this.sqlClipBoard = new clipboard__WEBPACK_IMPORTED_MODULE_3__('.copyAsSql');
        this.sqlClipBoard.on('success', function (e) {
            _this.messageService.success('已复制至剪切板');
        });
        this.jsonClipBoard = new clipboard__WEBPACK_IMPORTED_MODULE_3__('.copyAsJson');
        this.jsonClipBoard.on('success', function (e) {
            _this.messageService.success('已复制至剪切板');
        });
    };
    DataTableComponent.prototype.ngOnDestroy = function () {
        this.sqlClipBoard.destroy();
        this.jsonClipBoard.destroy();
    };
    DataTableComponent.prototype.loadData = function () {
        this.dataSet = this.dataService.generate(this.options, this.count);
        this.copiedSql = this.dataService.generateAsSQL(this.dataSet);
    };
    DataTableComponent.prototype.refresh = function () {
        this.loadData();
    };
    DataTableComponent.prototype.copyAs = function (type) {
        if (type === void 0) { type = 'sql'; }
        if (type === 'sql') {
            this.tableName = this.tableName === '' ? 'demo' : this.tableName;
            var reg = /demo/g;
            this.copiedSql = this.copiedSql.replace(reg, this.tableName);
        }
        else {
            this.copiedJson = JSON.stringify(this.dataSet);
        }
    };
    DataTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-data-table',
            template: __webpack_require__(/*! ./data-table.component.html */ "./src/app/components/data-table/data-table.component.html"),
            styles: [__webpack_require__(/*! ./data-table.component.less */ "./src/app/components/data-table/data-table.component.less")]
        }),
        __metadata("design:paramtypes", [_service_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzMessageService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzModalRef"]])
    ], DataTableComponent);
    return DataTableComponent;
}());



/***/ }),

/***/ "./src/app/components/data-tree/data-tree.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/data-tree/data-tree.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div nz-row nzGutter=\"8\">\n  <div nz-col nzSpan=\"3\">\n    <button nz-button nzType=\"default\" (click)=\"addNode()\">添加</button>\n  </div>\n  <div nz-col nzSpan=\"5\">\n    <button nz-button nzType=\"default\" (click)=\"inputSql()\">SQL CREATE</button>\n  </div>\n  <div nz-col nzSpan=\"3\">\n    <button nz-button nzType=\"default\" (click)=\"editNode()\">编辑</button>\n  </div>\n  <div nz-col nzSpan=\"3\">\n    <button nz-button nzType=\"default\" (click)=\"selectAll()\">全选</button>\n  </div>\n  <div nz-col nzSpan=\"3\">\n    <button nz-button nzType=\"default\" (click)=\"unselect()\">反选</button>\n  </div>\n  <div nz-col nzSpan=\"3\">\n    <button nz-button nzType=\"danger\" (click)=\"deleteNode()\">删除</button>\n  </div>\n  <div nz-col nzSpan=\"4\">\n    <nz-input-group nzCompact>\n      <nz-input-number [(ngModel)]=\"dataCount\" [nzMin]=\"1\" [nzMax]=\"10000\" [nzStep]=\"1\"></nz-input-number>\n      <button nz-button nzType=\"primary\" (click)=\"generateData()\" nz-tooltip nzTitle=\"有效范围为[1, 10000]\" nzPlacement=\"right\">生成</button>\n    </nz-input-group>\n  </div>\n</div>\n<br>\n<nz-card>\n  <nz-input-group [nzSuffix]=\"suffixIcon\">\n    <input type=\"text\" nz-input placeholder=\"输入关键字搜索\" [(ngModel)]=\"searchValue\">\n  </nz-input-group>\n  <ng-template #suffixIcon>\n    <i class=\"anticon anticon-search\"></i>\n  </ng-template>\n  <nz-tree #treeCom [nzData]=\"nodes\" nzCheckable=\"true\" nzShowLine=\"true\" nzDraggable=\"true\" [nzCheckedKeys]=\"checkedKeys\"\n    (nzOnDragStart)=\"nzEvent($event)\" (nzOnDragEnter)=\"nzEvent($event)\" (nzOnDragLeave)=\"nzEvent($event)\" (nzOnDrop)=\"nzEvent($event)\"\n    (nzOnDragEnd)=\"nzEvent($event)\" (nzSearchValueChange)=\"nzEvent($event)\" [nzSearchValue]=\"searchValue\" (nzClick)=\"activeNode($event)\"\n    (nzCheckBoxChange)=\"checkNode($event)\">\n  </nz-tree>\n</nz-card>"

/***/ }),

/***/ "./src/app/components/data-tree/data-tree.component.less":
/*!***************************************************************!*\
  !*** ./src/app/components/data-tree/data-tree.component.less ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep .ant-tree {\n  overflow: hidden;\n  margin: 0 -24px;\n  padding: 0 24px;\n}\n:host ::ng-deep .ant-tree li {\n  padding: 4px 0 0 0;\n}\n@-webkit-keyframes shine {\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.5;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes shine {\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.5;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n.shine-animate {\n  -webkit-animation: shine 2s ease infinite;\n          animation: shine 2s ease infinite;\n}\n.custom-node {\n  cursor: pointer;\n  line-height: 26px;\n  margin-left: 4px;\n  display: inline-block;\n  margin: 0 -1000px;\n  padding: 0 1000px;\n}\n.active {\n  background: #1890FF;\n  color: #fff;\n}\n.is-dragging {\n  background-color: transparent !important;\n  color: #000;\n  opacity: 0.7;\n}\n.file-name,\n.folder-name,\n.file-desc,\n.folder-desc {\n  margin-left: 4px;\n}\n.file-desc,\n.folder-desc {\n  padding: 2px 8px;\n  background: #87CEFF;\n  color: #FFFFFF;\n}\n"

/***/ }),

/***/ "./src/app/components/data-tree/data-tree.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/data-tree/data-tree.component.ts ***!
  \*************************************************************/
/*! exports provided: DataTreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTreeComponent", function() { return DataTreeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _option_form_option_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../option-form/option-form.component */ "./src/app/components/option-form/option-form.component.ts");
/* harmony import */ var _data_table_data_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data-table/data-table.component */ "./src/app/components/data-table/data-table.component.ts");
/* harmony import */ var _sql_input_sql_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sql-input/sql-input.component */ "./src/app/components/sql-input/sql-input.component.ts");
/* harmony import */ var _service_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/data.service */ "./src/app/service/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DataTreeComponent = /** @class */ (function () {
    function DataTreeComponent(dataService, messageService, modalService) {
        this.dataService = dataService;
        this.messageService = messageService;
        this.modalService = modalService;
        this.nodes = [];
        this.dataCount = 10;
        this.checkedKeys = [];
    }
    DataTreeComponent.prototype.ngOnInit = function () {
        this.nodes = [];
    };
    DataTreeComponent.prototype.activeNode = function (data) {
        this.activedNode = data.node;
    };
    DataTreeComponent.prototype.nzEvent = function (event) {
    };
    // 选中节点
    DataTreeComponent.prototype.checkNode = function (event) {
        this.checkedKeys = event.keys;
    };
    // 添加节点
    DataTreeComponent.prototype.addNode = function () {
        var _this = this;
        var modal = this.modalService.create({
            nzTitle: '添加',
            nzContent: _option_form_option_form_component__WEBPACK_IMPORTED_MODULE_2__["OptionFormComponent"],
            nzFooter: null,
            nzClosable: false,
            nzMaskClosable: false,
            nzWidth: 800,
            nzComponentParams: {
                treeObj: this.getTreeObj()
            }
        });
        modal.afterClose.subscribe(function (dataList) {
            if (dataList && dataList.length > 0) {
                _this.nodes = _this.nodes.slice().concat(dataList);
            }
        });
    };
    // 节点 是否存在
    DataTreeComponent.prototype.existNode = function (nodes, key) {
        var exist = false;
        if (nodes) {
            nodes.forEach(function (node) {
                if (node.key == key) {
                    exist = true;
                }
            });
        }
        return exist;
    };
    // 编辑节点
    DataTreeComponent.prototype.editNode = function () {
        var _this = this;
        if (!this.activedNode) {
            this.messageService.error("请选择");
            return;
        }
        var modal = this.modalService.create({
            nzTitle: '编辑',
            nzContent: _option_form_option_form_component__WEBPACK_IMPORTED_MODULE_2__["OptionFormComponent"],
            nzFooter: null,
            nzClosable: false,
            nzWidth: 800,
            nzComponentParams: {
                option: this.activedNode.origin.option,
                treeObj: this.getTreeObj()
            }
        });
        modal.afterClose.subscribe(function (node) {
            if (!node) {
                return;
            }
            var nodeArr = [];
            _this.treeCom.getTreeNodes().forEach(function (treeNode) {
                if (treeNode.origin['option']['id'] == node['option']['id']) {
                    nodeArr.push(node);
                }
                else {
                    nodeArr.push(treeNode.origin);
                }
            });
            _this.nodes = nodeArr;
        });
    };
    // 删除节点
    DataTreeComponent.prototype.deleteNode = function () {
        var _this = this;
        if (this.checkedKeys.length == 0) {
            this.messageService.error("请选择");
            return;
        }
        this.nodes = this.nodes.filter(function (node) {
            return _this.checkedKeys.indexOf(node.key) < 0;
        });
    };
    // 全选
    DataTreeComponent.prototype.selectAll = function () {
        this.checkedKeys = this.getKeys();
    };
    // 反选
    DataTreeComponent.prototype.unselect = function () {
        /**
         *
         * @TODO
         * 全选后，不能反选
         *
         */
        var _this = this;
        var keys = this.getKeys();
        this.checkedKeys = keys.filter(function (key) {
            return _this.checkedKeys.indexOf(key) < 0;
        });
    };
    // 获取所有 key
    DataTreeComponent.prototype.getKeys = function () {
        var keys = [];
        if (this.nodes) {
            this.nodes.forEach(function (node) {
                keys.push(node.key);
            });
        }
        return keys;
    };
    // 获取树对象
    DataTreeComponent.prototype.getTreeObj = function () {
        var obj = {};
        if (this.treeCom && this.treeCom.getTreeNodes()) {
            this.treeCom.getTreeNodes().forEach(function (node) {
                var key = node.origin.key;
                if (!!!obj[key]) {
                    obj[key] = node.origin;
                }
            });
        }
        return obj;
    };
    DataTreeComponent.prototype.existPropName = function (node) {
        var treeObj = this.getTreeObj();
        if (treeObj.hasOwnProperty(node.title)) {
            return true;
        }
        return false;
    };
    DataTreeComponent.prototype.getOptionArr = function () {
        var optionArr = [];
        if (this.treeCom && this.treeCom.getTreeNodes()) {
            this.treeCom.getTreeNodes().forEach(function (node) {
                var option = node.origin['option'];
                optionArr.push(option);
            });
        }
        return optionArr;
    };
    DataTreeComponent.prototype.generateData = function () {
        var options = this.getOptionArr();
        if (options.length > 0) {
            var modal = this.modalService.create({
                nzTitle: '共 ' + this.dataCount + ' 条数据',
                nzContent: _data_table_data_table_component__WEBPACK_IMPORTED_MODULE_3__["DataTableComponent"],
                nzFooter: null,
                nzMaskClosable: false,
                nzWidth: '90%',
                nzComponentParams: {
                    options: options,
                    count: this.dataCount
                }
            });
        }
    };
    // 打开 输入sql 模态框
    DataTreeComponent.prototype.inputSql = function () {
        var _this = this;
        var modal = this.modalService.create({
            nzTitle: '输入SQL CREATE 语句',
            nzContent: _sql_input_sql_input_component__WEBPACK_IMPORTED_MODULE_4__["SqlInputComponent"],
            nzFooter: null,
            nzMaskClosable: false,
            nzWidth: 800,
            nzComponentParams: {}
        });
        modal.afterClose.subscribe(function (sql) {
            if (sql) {
                var nodes = _this.dataService.getNodesBySql(sql);
                _this.nodes = nodes;
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('treeCom'),
        __metadata("design:type", ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzTreeComponent"])
    ], DataTreeComponent.prototype, "treeCom", void 0);
    DataTreeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-data-tree',
            template: __webpack_require__(/*! ./data-tree.component.html */ "./src/app/components/data-tree/data-tree.component.html"),
            styles: [__webpack_require__(/*! ./data-tree.component.less */ "./src/app/components/data-tree/data-tree.component.less")]
        }),
        __metadata("design:paramtypes", [_service_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzMessageService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzModalService"]])
    ], DataTreeComponent);
    return DataTreeComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div nz-row nzType=\"flex\" nzJustify=\"space-around\" [nzGutter]=\"gutter\">\n  <div nz-col [nzSpan]=\"leftSpan\">\n    <app-data-tree></app-data-tree>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/home/home.component.less":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.less ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.leftSpan = 20;
        this.gutter = 16;
        this.rightSpan = 24 - this.leftSpan;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.less */ "./src/app/components/home/home.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/option-form/option-form.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/option-form/option-form.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div nz-row>\n  <div nz-col nzSpan=\"20\" *ngIf=\"treeObj\">\n    <nz-tag [nzColor]=\"'#87d068'\">已知属性:</nz-tag>\n    <nz-tag *ngFor=\"let item of treeObj | keyvalue\">{{item.key}}</nz-tag>\n  </div>\n</div>\n<br>\n\n<form>\n  <div nz-row nzGutter=\"16\">\n    <div nz-col nzOffset=\"3\" nzSpan=\"2\">\n      <span class=\"label\">属性名:</span>\n    </div>\n    <div nz-col nzSpan=\"16\">\n      <input required nz-input placeholder=\"数字不能放在属性名首位\" [(ngModel)]=\"option.title\" [ngModelOptions]=\"{standalone: true}\">\n    </div>\n  </div>\n  <br>\n  <div nz-row nzGutter=\"16\">\n    <div nz-col nzOffset=\"3\" nzSpan=\"2\">\n      <span class=\"label\">类型:</span>\n    </div>\n    <div nz-col nzSpan=\"16\">\n      <nz-cascader [nzExpandTrigger]=\"'hover'\" [nzOptions]=\"typeOptions\" [ngModelOptions]=\"{standalone: true}\"\n        [(ngModel)]=\"option.type\" (ngModelChange)=\"typeChanges($event)\">\n      </nz-cascader>\n    </div>\n  </div>\n  <br>\n\n  <div *ngIf=\"isImage\" nz-row nzGutter=\"16\">\n    <div nz-col nzOffset=\"3\" nzSpan=\"2\">\n      <span class=\"label\">图片属性:</span>\n    </div>\n    <div nz-col nzSpan=\"3\">\n      <nz-input-number nz-tooltip nzTitle=\"图片宽度\" nzPlacement=\"bottom\" [nzMin]=\"1\" [nzMax]=\"2000\" [(ngModel)]=\"option.img.width\"\n        [ngModelOptions]=\"{standalone: true}\"></nz-input-number>\n    </div>\n    <div nz-col nzSpan=\"3\">\n      <nz-input-number nz-tooltip nzTitle=\"图片高度\" nzPlacement=\"bottom\" [nzMin]=\"1\" [nzMax]=\"2000\" [(ngModel)]=\"option.img.height\"\n        [ngModelOptions]=\"{standalone: true}\"></nz-input-number>\n    </div>\n    <div nz-col nzSpan=\"4\">\n      <input nz-input placeholder=\"图片文字\" [(ngModel)]=\"option.img.text\" [ngModelOptions]=\"{standalone: true}\">\n    </div>\n    <div nz-col nzSpan=\"4\">\n      <nz-select [ngModel]=\"option.img.isRandom\" (ngModelChange)=\"randomColorChange($event)\" [ngModelOptions]=\"{standalone: true}\">\n        <nz-option [nzLabel]=\"'随机颜色'\" [nzValue]=\"'y'\"></nz-option>\n        <nz-option [nzLabel]=\"'自选颜色'\" [nzValue]=\"'n'\"></nz-option>\n      </nz-select>\n    </div>\n    <div *ngIf=\"option.img.isRandom == 'n'\" nz-col nzSpan=\"2\">\n      <input type=\"color\" nz-input nz-tooltip nzTitle=\"图片颜色\" nzPlacement=\"right\" [(ngModel)]=\"option.img.color\"\n        [ngModelOptions]=\"{standalone: true}\">\n    </div>\n  </div>\n  <br *ngIf=\"isImage\">\n\n  <div *ngIf=\"!isDefault && !isNum\" nz-row nzGutter=\"16\">\n    <div nz-col nzOffset=\"3\" nzSpan=\"2\">\n      <span class=\"label\">默认值:</span>\n    </div>\n    <div nz-col nzSpan=\"16\">\n      <input nz-input placeholder=\"默认值\" [(ngModel)]=\"option.defaultValue\" [ngModelOptions]=\"{standalone: true}\"\n        [disabled]=\"isDefault\">\n    </div>\n  </div>\n  <br *ngIf=\"!isDefault && !isNum\">\n\n  <div *ngIf=\"isNum\" nz-row nzGutter=\"16\">\n    <div nz-col nzOffset=\"3\" nzSpan=\"2\">\n      <span class=\"label\">范围:</span>\n    </div>\n    <div nz-col nzSpan=\"8\">\n      <nz-input-number nz-tooltip nzTitle=\"最小值\" nzPlacement=\"bottom\" [(ngModel)]=\"option.num.min\" [ngModelOptions]=\"{standalone: true}\"></nz-input-number>\n    </div>\n    <div nz-col nzSpan=\"8\">\n      <nz-input-number nz-tooltip nzTitle=\"最大值\" nzPlacement=\"bottom\" [(ngModel)]=\"option.num.max\" [ngModelOptions]=\"{standalone: true}\"></nz-input-number>\n    </div>\n  </div>\n  <br *ngIf=\"isNum\">\n\n  <div *ngIf=\"isNum\" nz-row nzGutter=\"16\">\n    <div nz-col nzOffset=\"3\" nzSpan=\"2\">\n      <span class=\"label\">顺序:</span>\n    </div>\n    <div nz-col nzSpan=\"16\">\n      <nz-select [(ngModel)]=\"option.sort\" nzAllowClear nzPlaceHolder=\"排序\" [ngModelOptions]=\"{standalone: true}\"\n        [nzDisabled]=\"!isNum\" nz-tooltip nzTitle=\"如果范围绝对值小于生成数据总数则顺序无效\" nzPlacement=\"right\">\n        <nz-option *ngFor=\"let sort of sortSelections\" nzValue=\"{{sort.value}}\" nzLabel=\"{{sort.label}}\"></nz-option>\n      </nz-select>\n    </div>\n  </div>\n  <br>\n  <!-- <div nz-row nzGutter=\"16\">\n    <div nz-col nzSpan=\"4\">\n      <span>按比例:</span>\n    </div>\n    <div nz-col nzSpan=\"16\">\n      <nz-radio-group [(ngModel)]=\"option.isProportion\" [ngModelOptions]=\"{standalone: true}\">\n        <label nz-radio nzValue=\"true\">是</label>\n        <label nz-radio nzValue=\"false\">否</label>\n      </nz-radio-group>\n    </div>\n  </div>\n\n  <br> -->\n  <div nz-row nzGutter=\"16\">\n    <div nz-col nzOffset=\"5\" nzSpan=\"4\">\n      <button nz-button nzType=\"default\" (click)=\"close()\">关闭</button>\n    </div>\n    <div nz-col nzSpan=\"4\">\n      <button nz-button nzType=\"primary\" (click)=\"submitForm()\">确定</button>\n    </div>\n  </div>\n\n</form>"

/***/ }),

/***/ "./src/app/components/option-form/option-form.component.less":
/*!*******************************************************************!*\
  !*** ./src/app/components/option-form/option-form.component.less ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".label {\n  line-height: 2.5;\n}\n"

/***/ }),

/***/ "./src/app/components/option-form/option-form.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/option-form/option-form.component.ts ***!
  \*****************************************************************/
/*! exports provided: OptionFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionFormComponent", function() { return OptionFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var mockjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mockjs */ "./node_modules/mockjs/dist/mock.js");
/* harmony import */ var mockjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mockjs__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OptionFormComponent = /** @class */ (function () {
    function OptionFormComponent(modalRef, messageService) {
        this.modalRef = modalRef;
        this.messageService = messageService;
        this.typeOptions = [];
        this.option = {};
        this.treeObj = {};
        this.isNum = true;
        this.sortSelections = [];
        this.dataList = [];
        this.gridStyle = {
            width: '25%',
            textAlign: 'center'
        };
        // 是否能有默认值
        this.isDefault = false;
        this.isImage = false;
    }
    OptionFormComponent.prototype.ngOnInit = function () {
        this.typeOptions = this.buildOptions();
        this.sortSelections = [
            { label: '升序', value: 'asc' },
            { label: '降序', value: 'desc' },
        ];
        this.isNum = this.checkNum(this.option['type']);
        this.isImage = this.checkImage(this.option['type']);
        this.isDefault = this.checkImage(this.option['type']);
        this.initOption();
    };
    OptionFormComponent.prototype.initOption = function () {
        if (!this.option['id']) {
            // 图片初始化
            this.option['img'] = {
                isRandom: 'y',
                width: 200,
                height: 200,
                text: 'This is my house !',
                color: '#FF6600'
            };
            // 数字初始化
            this.option['num'] = {
                min: 0,
                max: 100
            };
        }
    };
    OptionFormComponent.prototype.buildOptions = function () {
        var options = [];
        var basicType = { label: '基本', value: 'basic', children: [] };
        var dateType = { label: '日期', value: 'date', children: [] };
        var imageType = { label: '图片', value: '@image', isLeaf: true };
        var textType = { label: '文本', value: 'text', children: [] };
        var nameType = { label: '姓名', value: 'name', children: [] };
        var webType = { label: '网络', value: 'web', children: [] };
        var addressType = { label: '地址', value: 'address', children: [] };
        var basicIdOption = { label: 'guid', value: '@guid', isLeaf: true };
        var basicStringOption = { label: '字符串', value: '@string', isLeaf: true };
        var basicBooleanOption = { label: '布尔', value: '@boolean', isLeaf: true };
        var basicNaturalOption = { label: '自然数', value: '@natural', isLeaf: true };
        var basicIntegerOption = { label: '整数', value: '@integer', isLeaf: true };
        var basicFloatOption = { label: '浮点数', value: '@float', isLeaf: true };
        var basicNumberOption = { label: '数字', value: 'number', children: [] };
        var basicPhoneOption = { label: '手机号码', value: 'phone', isLeaf: true };
        basicNumberOption.children.push(basicIntegerOption);
        basicNumberOption.children.push(basicNaturalOption);
        basicNumberOption.children.push(basicFloatOption);
        basicType.children.push(basicIdOption);
        basicType.children.push(basicNumberOption);
        basicType.children.push(basicBooleanOption);
        basicType.children.push(basicStringOption);
        basicType.children.push(basicPhoneOption);
        var dateOption = { label: '日期', value: 'date', children: [] };
        var dateFormatOption1 = { label: 'yyyy-MM-dd', value: '@datetime("yyyy-MM-dd")', isLeaf: true };
        var dateFormatOption2 = { label: 'yyyy-MM-dd HH:mm:ss', value: '@datetime("yyyy-MM-dd HH:mm:ss")', isLeaf: true };
        var dateFormatOption3 = { label: 'yyyyMMddHHmmss', value: '@datetime("yyyyMMddHHmmss")', isLeaf: true };
        dateOption.children.push(dateFormatOption1);
        dateOption.children.push(dateFormatOption2);
        dateOption.children.push(dateFormatOption3);
        var timeOption = { label: '时间', value: 'time', children: [] };
        var timeFormatOption1 = { label: 'HH:mm:ss', value: '@time("HH:mm:ss")', isLeaf: true };
        var timeFormatOption2 = { label: 'H:m:s', value: '@time("H:m:s")', isLeaf: true };
        timeOption.children.push(timeFormatOption1);
        timeOption.children.push(timeFormatOption2);
        var nowOption = { label: '当前', value: 'now', children: [] };
        var nowTime = { label: '时刻', value: '@now("second")', isLeaf: true };
        nowOption.children.push(nowTime);
        dateType.children.push(nowOption);
        dateType.children.push(dateOption);
        dateType.children.push(timeOption);
        var enParagraph = { label: '英文段落', value: '@paragraph', isLeaf: true };
        var chParagraph = { label: '中文段落', value: '@cparagraph', isLeaf: true };
        var enSentence = { label: '英文句子', value: '@sentence', isLeaf: true };
        var chSentence = { label: '中文句子', value: '@csentence', isLeaf: true };
        var enTitle = { label: '英文标题', value: '@title', isLeaf: true };
        var chTitle = { label: '中文标题', value: '@ctitle', isLeaf: true };
        var textTitleOption = { label: '标题', value: 'title', children: [] };
        var textParagraphOption = { label: '段落', value: 'paragraph', children: [] };
        var textSentenceOption = { label: '句子', value: 'sentence', children: [] };
        textTitleOption.children.push(enTitle);
        textTitleOption.children.push(chTitle);
        textParagraphOption.children.push(enParagraph);
        textParagraphOption.children.push(chParagraph);
        textSentenceOption.children.push(enSentence);
        textSentenceOption.children.push(chSentence);
        textType.children.push(textTitleOption);
        textType.children.push(textParagraphOption);
        textType.children.push(textSentenceOption);
        var enName = { label: '英文名', value: '@name', isLeaf: true };
        var chName = { label: '中文名', value: '@cname', isLeaf: true };
        nameType.children.push(enName);
        nameType.children.push(chName);
        var webUrlOption = { label: 'URL', value: '@url("http")', isLeaf: true };
        var webDomainOption = { label: '域名', value: '@domain', isLeaf: true };
        var webEmailOption = { label: '邮箱', value: '@email', isLeaf: true };
        var webIpOption = { label: 'IP', value: '@ip', isLeaf: true };
        webType.children.push(webUrlOption);
        webType.children.push(webDomainOption);
        webType.children.push(webEmailOption);
        webType.children.push(webIpOption);
        var addressRegionOption = { label: '地区', value: '@region', isLeaf: true };
        var addressProvinceOption = { label: '省', value: '@province', isLeaf: true };
        var addressCityOption = { label: '市', value: 'city', children: [] };
        var addressCountyOption = { label: '县', value: 'county', children: [] };
        var addressZipOption = { label: '邮编', value: '@zip', isLeaf: true };
        var cityOption1 = { label: '带省', value: '@city(true)', isLeaf: true };
        var cityOption2 = { label: '不带省', value: '@city', isLeaf: true };
        addressCityOption.children.push(cityOption1);
        addressCityOption.children.push(cityOption2);
        var countyOption1 = { label: '带省市', value: '@county(true)', isLeaf: true };
        var countyOption2 = { label: '不带省市', value: '@county', isLeaf: true };
        addressCountyOption.children.push(countyOption1);
        addressCountyOption.children.push(countyOption2);
        addressType.children.push(addressRegionOption);
        addressType.children.push(addressProvinceOption);
        addressType.children.push(addressCityOption);
        addressType.children.push(addressCountyOption);
        addressType.children.push(addressZipOption);
        options.push(basicType);
        options.push(dateType);
        options.push(textType);
        options.push(nameType);
        options.push(webType);
        options.push(addressType);
        options.push(imageType);
        return options;
    };
    OptionFormComponent.prototype.typeChanges = function (result) {
        this.isNum = this.checkNum(result);
        this.isDefault = this.checkDefault(result);
        this.isImage = this.checkImage(result);
    };
    OptionFormComponent.prototype.checkNum = function (arr) {
        return (arr && arr[1] && arr[1] == 'number');
    };
    OptionFormComponent.prototype.checkDefault = function (arr) {
        return (arr && arr[0] && arr[0] == '@image');
    };
    OptionFormComponent.prototype.checkImage = function (arr) {
        return (arr && arr[0] && arr[0] == '@image');
    };
    OptionFormComponent.prototype.submitForm = function () {
        if (!this.validateForm()) {
            return;
        }
        var data = {
            title: this.option['title'],
            key: this.option['title'],
            isLeaf: true,
            option: this.option
        };
        if (this.option['id']) {
            // 编辑
            this.closeMoal(data);
        }
        else {
            // 添加
            if (!this.existPropName(data)) {
                data.option['id'] = mockjs__WEBPACK_IMPORTED_MODULE_2__["mock"]('@guid');
                this.dataList.push(data);
                this.option = {};
                this.initOption();
                this.treeObj[data.title] = data;
            }
            else {
                this.messageService.error('属性名已存在');
            }
        }
    };
    // 校验表单
    OptionFormComponent.prototype.validateForm = function () {
        if (!this.option['title']) {
            this.messageService.error('属性名不能为空');
            return false;
        }
        if (!this.validVarible(this.option['title'])) {
            this.messageService.error('属性名只能是字母(a-z A-Z)，数字(0-9)，下划线(_)，美元符号($)的组合，并且之间不能包含空格，数字不能放在属性名首位');
            return false;
        }
        if (!this.option['type']) {
            this.messageService.error('类型能为空');
            return false;
        }
        if (this.isNum) {
            var minNum = this.option['num']['min'];
            var maxNum = this.option['num']['max'];
            if (maxNum <= minNum) {
                this.messageService.error('最大值不能小于等于最小值');
                return false;
            }
        }
        return true;
    };
    // 属性名是否合法
    OptionFormComponent.prototype.validVarible = function (varible) {
        var reg = /^[$_a-zA-Z][$_a-zA-Z0-9]*$/;
        return reg.test(varible);
    };
    OptionFormComponent.prototype.existPropName = function (node) {
        if (this.treeObj.hasOwnProperty(node.title)) {
            return true;
        }
        return false;
    };
    OptionFormComponent.prototype.closeMoal = function (data) {
        this.modalRef.destroy(data);
    };
    OptionFormComponent.prototype.close = function () {
        if (this.option['id']) {
            this.closeMoal(null);
        }
        else {
            this.closeMoal(this.dataList);
        }
    };
    // 是否随机颜色下拉框变化
    OptionFormComponent.prototype.randomColorChange = function (value) {
        this.option['img']['isRandom'] = value;
    };
    OptionFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-option-form',
            template: __webpack_require__(/*! ./option-form.component.html */ "./src/app/components/option-form/option-form.component.html"),
            styles: [__webpack_require__(/*! ./option-form.component.less */ "./src/app/components/option-form/option-form.component.less")]
        }),
        __metadata("design:paramtypes", [ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzModalRef"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzMessageService"]])
    ], OptionFormComponent);
    return OptionFormComponent;
}());



/***/ }),

/***/ "./src/app/components/sql-input/sql-input.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/sql-input/sql-input.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div nz-row>\n  <div nz-col nzOffset=\"2\" [nzSpan]=\"leftSpan\">\n    <textarea rows=\"16\" nz-input [(ngModel)]=\"sql\" placeholder=\"可将SQL CREATE 语句粘贴至此\"></textarea>\n  </div>\n  <div nz-col nzOffset=\"1\" [nzSpan]=\"rightSpan\">\n    <nz-alert nzType=\"error\" nzCloseable [nzMessage]=\"'提示'\" [nzDescription]=\"description\" (nzOnClose)=\"closeAlert()\">\n    </nz-alert>\n  </div>\n</div>\n<br>\n<br>\n<div nz-row>\n  <div nz-col nzOffset=\"4\" nzSpan=\"8\">\n    <button nz-button nzType=\"danger\" (click)=\"reset()\">重置</button>\n  </div>\n  <div nz-col nzSpan=\"8\">\n    <button nz-button nzType=\"primary\" (click)=\"confirm()\">确定</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/sql-input/sql-input.component.less":
/*!***************************************************************!*\
  !*** ./src/app/components/sql-input/sql-input.component.less ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/sql-input/sql-input.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/sql-input/sql-input.component.ts ***!
  \*************************************************************/
/*! exports provided: SqlInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SqlInputComponent", function() { return SqlInputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SqlInputComponent = /** @class */ (function () {
    function SqlInputComponent(modalRef, messageService) {
        this.modalRef = modalRef;
        this.messageService = messageService;
        this.sql = '';
        this.description = '';
        this.rightSpan = 4;
        this.leftSpan = 16;
    }
    SqlInputComponent.prototype.ngOnInit = function () {
        this.description = "1.请确保输入正确的SQL CREATE 语句.2.点击确定后将清空原属性.\n3.目前支持SQL 数据类型有(*char, *text, *int, number, bool, image),如是其他类型默认处理为字符串类型\n4.可编辑属性选项";
    };
    SqlInputComponent.prototype.reset = function () {
        this.sql = '';
    };
    SqlInputComponent.prototype.confirm = function () {
        if (this.sql === '') {
            this.messageService.error('sql 不能为空');
        }
        else {
            // 简单判断否是 sql create 语句; create table 开头 则是
            var createReg = /^\s*create\s*table/i;
            if (!createReg.test(this.sql)) {
                this.messageService.error('不是SQL CREATE 语句');
                return;
            }
            this.modalRef.destroy(this.sql);
        }
    };
    SqlInputComponent.prototype.closeAlert = function () {
        this.leftSpan = 20;
        this.rightSpan = 0;
    };
    SqlInputComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sql-input',
            template: __webpack_require__(/*! ./sql-input.component.html */ "./src/app/components/sql-input/sql-input.component.html"),
            styles: [__webpack_require__(/*! ./sql-input.component.less */ "./src/app/components/sql-input/sql-input.component.less")]
        }),
        __metadata("design:paramtypes", [ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzModalRef"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzMessageService"]])
    ], SqlInputComponent);
    return SqlInputComponent;
}());



/***/ }),

/***/ "./src/app/service/data.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/data.service.ts ***!
  \*****************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var mockjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mockjs */ "./node_modules/mockjs/dist/mock.js");
/* harmony import */ var mockjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mockjs__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = /** @class */ (function () {
    function DataService() {
    }
    // 生成数据
    DataService.prototype.generate = function (options, count) {
        var _this = this;
        if (count === void 0) { count = 10; }
        var result = [];
        if (options.length > 0) {
            options.forEach(function (option) {
                var prop = option['title'];
                var mockDataArr = _this.mockMultiData(option, count);
                mockDataArr = _this.dealData(option, mockDataArr);
                _this.putData(prop, result, mockDataArr);
            });
        }
        return result;
    };
    // 处理生成数据
    DataService.prototype.dealData = function (option, dataArr) {
        var sort = option['sort'];
        if (sort === 'asc') {
            dataArr = dataArr.sort(function (a, b) {
                return a - b;
            });
        }
        else if (sort === 'desc') {
            dataArr = dataArr.sort(function (a, b) {
                return b - a;
            });
        }
        return dataArr;
    };
    DataService.prototype.putData = function (prop, result, data) {
        data.forEach(function (item, index) {
            var dataItem = result[index];
            if (!dataItem) {
                dataItem = {};
            }
            dataItem[prop] = item;
            result[index] = dataItem;
        });
    };
    DataService.prototype.mockMultiData = function (option, count) {
        var dataArr = [];
        for (var i = 1; i <= count; i++) {
            var data = this.getDataByOption(option, count);
            dataArr.push(data);
        }
        return dataArr;
    };
    // 通过 option 判断，生成数据
    DataService.prototype.getDataByOption = function (option, count) {
        var data;
        var typeLen = option.type.length;
        var type = option.type[typeLen - 1];
        if (type == '@image') {
            // 图片类型
            var image = option.img;
            if (!image.width) {
                image.width = '200';
            }
            if (!image.height) {
                image.height = '200';
            }
            if (!image.text) {
                image.height = 'This is my house !';
            }
            if (image.isRandom == 'y') {
                image.color = mockjs__WEBPACK_IMPORTED_MODULE_1__["mock"]('@color');
            }
            var template = type + "('" + image.width + "x" + image.height + "', " + image.color + ", " + image.text + ")";
            data = mockjs__WEBPACK_IMPORTED_MODULE_1__["mock"](template);
        }
        else if ((type == '@natural') || (type == '@integer') || (type == '@float')) {
            // 数据类型
            var num = option['num'];
            var min = num['min'];
            var max = num['max'];
            // 存在范围
            if (min !== '' && max !== '') {
                var template = type + "(" + min + ", " + max + ")";
                data = mockjs__WEBPACK_IMPORTED_MODULE_1__["mock"](template);
            }
            else {
                data = mockjs__WEBPACK_IMPORTED_MODULE_1__["mock"](type);
            }
        }
        else if (type == 'phone') {
            // 手机类型
            var phoneReg = /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/;
            var template = { 'regexp': phoneReg };
            data = mockjs__WEBPACK_IMPORTED_MODULE_1__["mock"](template)['regexp'];
            var defaultValue = option['defaultValue'];
            if (phoneReg.test(defaultValue)) {
                data = defaultValue;
            }
        }
        else {
            // 其他类型
            if (option['defaultValue'] && (type == '@domain' || type == '@email')) {
                // 如果有默认值，且类型为 域名或邮箱
                var template = type + "(" + option['defaultValue'] + ")";
                data = mockjs__WEBPACK_IMPORTED_MODULE_1__["mock"](template);
            }
            else if (option['defaultValue']) {
                // 有默认值，其他类型
                type = { 'array|1': option['defaultValue'].split(',') };
                data = mockjs__WEBPACK_IMPORTED_MODULE_1__["mock"](type)['array'];
            }
            else {
                // 没有默认值
                data = mockjs__WEBPACK_IMPORTED_MODULE_1__["mock"](type);
            }
        }
        return data;
    };
    // 生成为 sql 
    DataService.prototype.generateAsSQL = function (dataList, tableName) {
        if (tableName === void 0) { tableName = 'demo'; }
        // insert into table value
        var colStr = this.getColumnStr(dataList[0]);
        var resultSql = '';
        dataList.forEach(function (item) {
            var insertSql = "INSERT INTO " + tableName + " ( " + colStr + " ) VALUES  ( ";
            Object.values(item).forEach(function (value) {
                if (typeof value === 'number') {
                    insertSql += value + ",";
                }
                else {
                    insertSql += "\"" + value + "\",";
                }
            });
            // 把多余的 , 删除
            insertSql = insertSql.substring(0, insertSql.length - 1);
            insertSql += " );";
            resultSql += insertSql + '\n';
        });
        return resultSql;
    };
    // 获取列字符串
    DataService.prototype.getColumnStr = function (record) {
        var colStr = Object.keys(record).join(',');
        return colStr;
    };
    // 解析 sql create 
    DataService.prototype.getNodesBySql = function (sql) {
        var _this = this;
        // 去除 . [ ] 
        var reg = /[\.\[\]]/g;
        sql = sql.replace(reg, '');
        var leftBracketsIndex = sql.indexOf('(');
        var rightBracketsIndex = sql.lastIndexOf(')');
        // 通过 , 分离每一列
        var columns = sql.substring(leftBracketsIndex + 1, rightBracketsIndex).split(',');
        var separateReg = /[\s(]/g;
        var nodes = [];
        columns.forEach(function (column) {
            var columnType = column.trim().split(separateReg);
            var defaultIndex = columnType.findIndex(function (e) {
                return e.toLowerCase() == 'default';
            });
            var columnInfo = { prop: columnType[0], type: columnType[1], default: '' };
            if (defaultIndex >= 0) {
                columnInfo['default'] = columnType[defaultIndex + 1].replace(/['"]/g, '');
            }
            var node = _this.getNode(columnInfo);
            nodes.push(node);
        });
        return nodes;
    };
    // 通过 列 信息生成节点
    DataService.prototype.getNode = function (column) {
        var option = {
            id: mockjs__WEBPACK_IMPORTED_MODULE_1__["mock"]('@guid'),
            title: column['prop'],
            defaultValue: column['default']
        };
        option['num'] = { min: 0, max: 100 };
        option['img'] = {
            isRandom: 'y',
            width: 200,
            height: 200,
            text: 'This is my house !',
            color: '#FF6600'
        };
        var dataType = column['type'].toLowerCase();
        if (dataType.indexOf('char') >= 0) {
            // 字符串
            option['type'] = ['basic', '@string'];
        }
        else if (dataType.indexOf('text') >= 0) {
            // 文本
            option['type'] = ['text', 'paragraph', '@cparagraph'];
        }
        else if (dataType.indexOf('int') >= 0) {
            // int
            option['type'] = ['basic', 'number', '@integer'];
        }
        else if ((dataType.indexOf('float') >= 0) || (dataType.indexOf('double') >= 0) || (dataType.indexOf('decimal') >= 0) || (dataType.indexOf('numeric') >= 0)) {
            // float, double, decimal, numeric
            option['type'] = ['basic', 'number', '@float'];
        }
        else if (dataType.indexOf('bool') >= 0) {
            // bool
            option['type'] = ['basic', '@boolean'];
        }
        else if (dataType === 'date') {
            // 日期 yyyy-MM-dd
            option['type'] = ['date', 'date', '@datetime("yyyy-MM-dd")'];
        }
        else if (dataType === 'datetime') {
            // 日期 yyyy-MM-dd HH:mm:ss
            option['type'] = ['date', 'date', '@datetime("yyyy-MM-dd HH:mm:ss")'];
        }
        else if (dataType.indexOf('time') >= 0) {
            // 时间
            option['type'] = ['date', 'time', '@time("HH:mm:ss")'];
        }
        else if (dataType.indexOf('image') >= 0) {
            // 图片
            option['type'] = ['@image'];
        }
        else {
            // 其他类型暂处理为字符串
            option['type'] = ['basic', '@string'];
        }
        var node = {
            title: option['title'],
            key: option['title'],
            isLeaf: true,
            option: option
        };
        return node;
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/xing/code/frontend/angular/fake-data/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map