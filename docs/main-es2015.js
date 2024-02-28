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

/***/ "./node_modules/raw-loader/index.js!./src/app/question-form/question-form.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/question-form/question-form.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"quiz\" *ngIf=\"question\">\n  <div class=\"label\">{{question.label}}</div>\n  <form [formGroup]=\"form\">\n    <mat-radio-group aria-label=\"form-group\" formControlName=\"choice\">\n      <label *ngFor=\"let choice of question.choices\">\n        <mat-radio-button [value]=\"choice\">\n          {{choice.value}}</mat-radio-button>\n      </label>\n    </mat-radio-group>\n  </form>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/questions/questions.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/questions/questions.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mx-auto\">\n  <div *ngIf=\"quiz && !questions\" class=\"spinner-grow text-primary\"></div>\n\n<div class=\"quiz\" *ngIf=\"questions\">\n\n  <div class=\"questions\" *ngIf=\"!showResults\">\n    <app-question-form [question]=\"questions[currentQuestionIndex]\" (onChoiceMade)=\"updateChoice($event)\">\n    </app-question-form>\n\n    <button mat-stroked-button class=\"btn btnNext text-white\" (click)=\"nextOrViewResults()\"\n      [disabled]=\"!answers.values[currentQuestionIndex]\">{{currentQuestionIndex === questions.length - 1 ? 'View results' : 'Next'}}</button>\n  </div>\n\n  <app-results *ngIf=\"showResults\" [answers]=\"answers\"></app-results>\n</div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/results/results.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/results/results.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"results\">\n  <h2>Your results:</h2>\n  <div class=\"answer\" *ngFor=\"let a of answers.values; let i = index\" [ngClass]=\"{correct: a.correct}\">\n    {{i+1}}. {{a.value}}\n  </div>\n  <br />\n  <a class=\"btn btn btn-primary\" routerLink=\"/welcome\">Choose from another quiz</a>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/welcome/welcome.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/welcome/welcome.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mx-auto\">\n<div class=\"welcome\">\n  <h1 class=\"title_welcome\">Quiz app!</h1>\n  <div class=\"quizzes\">\n    <mat-card class=\"quiz\" *ngFor=\"let quiz of quiz\">\n      <mat-card-title>{{quiz.label}}</mat-card-title>\n      <mat-card-content>{{quiz.description}}</mat-card-content>\n      <mat-card-actions>\n        <a class=\"btn btn-warning rounded-pill\" routerLink=\"/{{quiz.name}}\">Start quiz</a>\n      </mat-card-actions>\n    </mat-card>\n  </div>\n</div>\n<div class=\"image-container\">\n<img src=\"../../assets/quiz.gif\" alt=\"\" class=\"rounded-pill\">\n</div>\n</div>"

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
        template: '<router-outlet></router-outlet>'
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _question_form_question_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./question-form/question-form.component */ "./src/app/question-form/question-form.component.ts");
/* harmony import */ var _results_results_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./results/results.component */ "./src/app/results/results.component.ts");
/* harmony import */ var _questions_questions_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./questions/questions.component */ "./src/app/questions/questions.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");













const appRoutes = [
    { path: 'welcome', component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_10__["WelcomeComponent"] },
    { path: ':quizId', component: _questions_questions_component__WEBPACK_IMPORTED_MODULE_9__["QuestionsComponent"] },
    { path: '', redirectTo: "welcome", pathMatch: "prefix" },
];
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _question_form_question_form_component__WEBPACK_IMPORTED_MODULE_7__["QuestionFormComponent"],
            _results_results_component__WEBPACK_IMPORTED_MODULE_8__["ResultsComponent"],
            _questions_questions_component__WEBPACK_IMPORTED_MODULE_9__["QuestionsComponent"],
            _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_10__["WelcomeComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatRadioModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(appRoutes)
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/question-form/question-form.component.scss":
/*!************************************************************!*\
  !*** ./src/app/question-form/question-form.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-radio-group {\n  display: flex;\n  flex-direction: column;\n  margin: 15px 0;\n}\n\n.label {\n  font-family: \"Source Sans Pro\", sans-serif;\n  font-weight: 600;\n  font-size: 24px;\n  padding-top: 2%;\n}\n\n@media all and (max-width: 750px) {\n  .label {\n    font-size: 18px;\n    font-weight: 600;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVlc3Rpb24tZm9ybS9DOlxcVXNlcnNcXGhvdWFzXFxPbmVEcml2ZVxcQnVyZWF1XFxxdWl6LWFwcC1hbmd1bGFyL3NyY1xcYXBwXFxxdWVzdGlvbi1mb3JtXFxxdWVzdGlvbi1mb3JtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9xdWVzdGlvbi1mb3JtL3F1ZXN0aW9uLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0E7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FDTkE7O0FEU0E7RUFDRSwwQ0FWZTtFQVdmLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNORjs7QURTQTtFQUNFO0lBQ0UsZUFBQTtJQUNBLGdCQUFBO0VDTkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3F1ZXN0aW9uLWZvcm0vcXVlc3Rpb24tZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRwcmltYXJ5LWNvbG9yOiAjNUM2QkMwO1xuJHNlY29uZGFyeS1jb2xvcjogIzFlYTg5NjtcbiR0ZXJ0aWFyeS1jb2xvcjogd2hpdGU7XG4kcHJpbWFyeS1mb250OidVYnVudHUnLCBzYW5zLXNlcmlmO1xuJHNlY29uZGFyeS1mb250OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcblxuXG5tYXQtcmFkaW8tZ3JvdXAge1xuZGlzcGxheTogZmxleDtcbmZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5tYXJnaW46IDE1cHggMDtcbn1cblxuLmxhYmVsIHtcbiAgZm9udC1mYW1pbHk6ICRzZWNvbmRhcnktZm9udDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBwYWRkaW5nLXRvcDogMiU7XG59XG5cbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDc1MHB4KSB7XG4gIC5sYWJlbCB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIH1cbn1cbiIsIm1hdC1yYWRpby1ncm91cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbjogMTVweCAwO1xufVxuXG4ubGFiZWwge1xuICBmb250LWZhbWlseTogXCJTb3VyY2UgU2FucyBQcm9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBwYWRkaW5nLXRvcDogMiU7XG59XG5cbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDc1MHB4KSB7XG4gIC5sYWJlbCB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/question-form/question-form.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/question-form/question-form.component.ts ***!
  \**********************************************************/
/*! exports provided: QuestionFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionFormComponent", function() { return QuestionFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let QuestionFormComponent = class QuestionFormComponent {
    constructor() {
        this.onChoiceMade = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onChange = () => {
            this.onChoiceMade.emit(this.form.value.choice);
        };
    }
    ngOnInit() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            choice: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
        });
        this.form.valueChanges.subscribe(this.onChange);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], QuestionFormComponent.prototype, "question", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], QuestionFormComponent.prototype, "onChoiceMade", void 0);
QuestionFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-question-form',
        template: __webpack_require__(/*! raw-loader!./question-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/question-form/question-form.component.html"),
        styles: [__webpack_require__(/*! ./question-form.component.scss */ "./src/app/question-form/question-form.component.scss")]
    })
], QuestionFormComponent);



/***/ }),

/***/ "./src/app/questions.service.ts":
/*!**************************************!*\
  !*** ./src/app/questions.service.ts ***!
  \**************************************/
/*! exports provided: QuestionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionsService", function() { return QuestionsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _quiz_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./quiz.model */ "./src/app/quiz.model.ts");





let QuestionsService = class QuestionsService {
    constructor(http) {
        this.http = http;
    }
    getQuizzes() {
        return this.http.get(`./assets/quiz-list.json`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((result) => {
            return result.map(r => new _quiz_model__WEBPACK_IMPORTED_MODULE_4__["Quiz"](r.label, r.name, r.description, r.fileName));
        }));
    }
    getQuestions(fileName) {
        return this.http.get(`./assets/${fileName}.json`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((result) => {
            return result.map(r => new _quiz_model__WEBPACK_IMPORTED_MODULE_4__["Question"](r.label, r.choices));
        }));
    }
};
QuestionsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
QuestionsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], QuestionsService);



/***/ }),

/***/ "./src/app/questions/questions.component.scss":
/*!****************************************************!*\
  !*** ./src/app/questions/questions.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".questions {\n  max-width: 60%;\n  padding: 5%;\n  padding-top: 2%;\n  background-image: linear-gradient(to bottom right, rgba(255, 255, 255, 0.799), rgba(255, 255, 255, 0.42));\n  margin: auto;\n  border-radius: 30px;\n  margin-top: 5%;\n}\n\n.btnNext {\n  background-image: linear-gradient(to bottom right, #0c022b, #055969);\n  border-radius: 15px;\n  padding: 5px;\n  border: none;\n}\n\n@media all and (max-width: 750px) {\n  button {\n    font-size: 16px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVlc3Rpb25zL0M6XFxVc2Vyc1xcaG91YXNcXE9uZURyaXZlXFxCdXJlYXVcXHF1aXotYXBwLWFuZ3VsYXIvc3JjXFxhcHBcXHF1ZXN0aW9uc1xccXVlc3Rpb25zLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9xdWVzdGlvbnMvcXVlc3Rpb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EseUdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxvRUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFO0lBQ0UsZUFBQTtFQ0NGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9xdWVzdGlvbnMvcXVlc3Rpb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnF1ZXN0aW9ucyB7XG4gIG1heC13aWR0aDogNjAlO1xuICBwYWRkaW5nOiA1JTtcbiAgcGFkZGluZy10b3A6IDIlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzk5KSwgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40MikpOyBcbiAgbWFyZ2luOiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBtYXJnaW4tdG9wOiA1JTtcbn1cblxuLmJ0bk5leHR7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsIHJnYmEoMTIsIDIsIDQzKSwgIHJnYig1LCA4OSwgMTA1KSk7IFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNzUwcHgpIHtcbiAgYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbn1cbiIsIi5xdWVzdGlvbnMge1xuICBtYXgtd2lkdGg6IDYwJTtcbiAgcGFkZGluZzogNSU7XG4gIHBhZGRpbmctdG9wOiAyJTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc5OSksIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40MikpO1xuICBtYXJnaW46IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIG1hcmdpbi10b3A6IDUlO1xufVxuXG4uYnRuTmV4dCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICMwYzAyMmIsICMwNTU5NjkpO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNzUwcHgpIHtcbiAgYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/questions/questions.component.ts":
/*!**************************************************!*\
  !*** ./src/app/questions/questions.component.ts ***!
  \**************************************************/
/*! exports provided: QuestionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionsComponent", function() { return QuestionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _questions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../questions.service */ "./src/app/questions.service.ts");
/* harmony import */ var _quiz_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../quiz.model */ "./src/app/quiz.model.ts");



// import { switchMap } from 'rxjs/operators';


let QuestionsComponent = class QuestionsComponent {
    // inject both the active route and the questions service
    constructor(route, questionsService) {
        this.route = route;
        this.questionsService = questionsService;
        this.showResults = false;
    }
    ngOnInit() {
        // read from the dynamic route and load the proper quiz data
        this.questionsService.getQuestions(this.route.snapshot.params.quizId)
            .subscribe(questions => {
            // initialize everything
            this.questions = questions;
            this.answers = new _quiz_model__WEBPACK_IMPORTED_MODULE_4__["Answers"]();
            this.currentQuestionIndex = 0;
        });
    }
    updateChoice(choice) {
        this.answers.values[this.currentQuestionIndex] = choice;
    }
    nextOrViewResults() {
        if (this.currentQuestionIndex === this.questions.length - 1) {
            this.showResults = true;
            return;
        }
        this.currentQuestionIndex++;
    }
    reset() {
        this.quiz = undefined;
        this.questions = undefined;
        this.answers = undefined;
        this.currentQuestionIndex = undefined;
    }
};
QuestionsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _questions_service__WEBPACK_IMPORTED_MODULE_3__["QuestionsService"] }
];
QuestionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-questions',
        template: __webpack_require__(/*! raw-loader!./questions.component.html */ "./node_modules/raw-loader/index.js!./src/app/questions/questions.component.html"),
        styles: [__webpack_require__(/*! ./questions.component.scss */ "./src/app/questions/questions.component.scss")]
    })
], QuestionsComponent);



/***/ }),

/***/ "./src/app/quiz.model.ts":
/*!*******************************!*\
  !*** ./src/app/quiz.model.ts ***!
  \*******************************/
/*! exports provided: Choice, Question, Quiz, Answers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Choice", function() { return Choice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Question", function() { return Question; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Quiz", function() { return Quiz; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Answers", function() { return Answers; });
class Choice {
    constructor(value, correct) {
        this.value = value;
        this.correct = correct;
    }
}
Choice.ctorParameters = () => [
    { type: String },
    { type: Boolean }
];
class Question {
    constructor(label, choices) {
        this.label = label;
        this.choices = choices;
    }
}
Question.ctorParameters = () => [
    { type: String },
    { type: Array }
];
class Quiz {
    constructor(label, name, description, fileName) {
        this.label = label;
        this.name = name;
        this.description = description;
        this.fileName = fileName;
    }
}
Quiz.ctorParameters = () => [
    { type: String },
    { type: String },
    { type: String },
    { type: String }
];
class Answers {
    constructor(values = []) {
        this.values = values;
    }
}
Answers.ctorParameters = () => [
    { type: Array }
];


/***/ }),

/***/ "./src/app/results/results.component.scss":
/*!************************************************!*\
  !*** ./src/app/results/results.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.results {\n  max-width: 80%;\n  padding: 5%;\n  padding-top: 2%;\n  background-color: rgba(255, 255, 255, 0.611);\n  margin: auto;\n  border-radius: 30px;\n  margin-top: 5%;\n}\n.answer.correct:before {\n  content: \"✓\";\n  display: inline-block;\n  color: #076307;\n  padding: 0 6px 0 0;\n}\n.answer:not(.correct):before {\n  content: \"✗\";\n  display: inline-block;\n  color: #b60a0a;\n  padding: 0 6px 0 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdWx0cy9yZXN1bHRzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9yZXN1bHRzL0M6XFxVc2Vyc1xcaG91YXNcXE9uZURyaXZlXFxCdXJlYXVcXHF1aXotYXBwLWFuZ3VsYXIvc3JjXFxhcHBcXHJlc3VsdHNcXHJlc3VsdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDTWhCO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsNENBVGU7RUFVZixZQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FESkY7QUNPQTtFQUNFLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBREpGO0FDT0E7RUFDRSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QURKRiIsImZpbGUiOiJzcmMvYXBwL3Jlc3VsdHMvcmVzdWx0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5yZXN1bHRzIHtcbiAgbWF4LXdpZHRoOiA4MCU7XG4gIHBhZGRpbmc6IDUlO1xuICBwYWRkaW5nLXRvcDogMiU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42MTEpO1xuICBtYXJnaW46IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIG1hcmdpbi10b3A6IDUlO1xufVxuXG4uYW5zd2VyLmNvcnJlY3Q6YmVmb3JlIHtcbiAgY29udGVudDogXCLinJNcIjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjb2xvcjogIzA3NjMwNztcbiAgcGFkZGluZzogMCA2cHggMCAwO1xufVxuXG4uYW5zd2VyOm5vdCguY29ycmVjdCk6YmVmb3JlIHtcbiAgY29udGVudDogXCLinJdcIjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjb2xvcjogI2I2MGEwYTtcbiAgcGFkZGluZzogMCA2cHggMCAwO1xufSIsIiRwcmltYXJ5LWNvbG9yOiAjNUM2QkMwO1xuJHRlcnRpYXJ5LWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjExKTtcbiRwcmltYXJ5LWZvbnQ6J1VidW50dScsIHNhbnMtc2VyaWY7XG4kc2Vjb25kYXJ5LWZvbnQ6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xuXG5cbi5yZXN1bHRzIHtcbiAgbWF4LXdpZHRoOiA4MCU7XG4gIHBhZGRpbmc6IDUlO1xuICBwYWRkaW5nLXRvcDogMiU7XG4gIGJhY2tncm91bmQtY29sb3I6ICR0ZXJ0aWFyeS1jb2xvcjtcbiAgbWFyZ2luOiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBtYXJnaW4tdG9wOiA1JTtcbn1cblxuLmFuc3dlci5jb3JyZWN0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDI3MTMnO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGNvbG9yOiByZ2IoNywgOTksIDcpO1xuICBwYWRkaW5nOiAwIDZweCAwIDA7XG59XG5cbi5hbnN3ZXI6bm90KC5jb3JyZWN0KTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcMjcxN1wiO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGNvbG9yOiByZ2IoMTgyLCAxMCwgMTApO1xuICBwYWRkaW5nOiAwIDZweCAwIDA7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/results/results.component.ts":
/*!**********************************************!*\
  !*** ./src/app/results/results.component.ts ***!
  \**********************************************/
/*! exports provided: ResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultsComponent", function() { return ResultsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ResultsComponent = class ResultsComponent {
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ResultsComponent.prototype, "answers", void 0);
ResultsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-results',
        template: __webpack_require__(/*! raw-loader!./results.component.html */ "./node_modules/raw-loader/index.js!./src/app/results/results.component.html"),
        styles: [__webpack_require__(/*! ./results.component.scss */ "./src/app/results/results.component.scss")]
    })
], ResultsComponent);



/***/ }),

/***/ "./src/app/welcome/welcome.component.scss":
/*!************************************************!*\
  !*** ./src/app/welcome/welcome.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\n  width: 30%;\n  display: inline-block;\n  margin: auto;\n  margin-top: 3%;\n  text-align: center;\n  padding: 3%;\n}\n\n.mat-card > .mat-card-actions:last-child {\n  padding-bottom: 3%;\n}\n\nmat-card-content {\n  font-family: \"Source Sans Pro\", sans-serif;\n  font-weight: 400;\n  font-size: 16px;\n}\n\nmat-card-title {\n  font-family: \"Ubuntu\", sans-serif;\n  font-weight: 600;\n  font-size: 30px;\n}\n\n.quizzes {\n  display: flex;\n  justify-content: space-between;\n  font-family: \"Ubuntu\", sans-serif;\n}\n\n.welcome {\n  max-width: 80%;\n  padding: 2%;\n  background-image: linear-gradient(to bottom right, rgba(255, 255, 255, 0.69), rgba(0, 0, 0, 0.42));\n  margin: auto;\n  margin-top: 5%;\n  text-align: center;\n  font-size: 1.2em;\n  border-radius: 20px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.396), 0 15px 30px white, 0 6px 6px rgba(236, 238, 239, 0.864) inset;\n  -webkit-transform: perspective(1500px) rotateY(15deg);\n          transform: perspective(1500px) rotateY(15deg);\n}\n\n.title_welcome {\n  font-size: 4em;\n  background: linear-gradient(to right, #000000, rgba(1, 7, 119, 0.73));\n  -webkit-background-clip: text;\n  background-clip: text;\n  color: transparent;\n  -webkit-text-fill-color: transparent;\n  display: inline-block;\n  margin: 0 auto;\n}\n\n.image-container {\n  text-align: center;\n  /* Center the image */\n  margin-top: 20px;\n  /* Add space between the .welcome div and the image */\n}\n\n.image-container img {\n  width: 200px;\n  /* Adjust the width as necessary */\n  height: auto;\n  /* Keep the aspect ratio of the image */\n}\n\n@media all and (max-width: 750px) {\n  h1 {\n    font-size: 3em;\n  }\n\n  .quizzes {\n    flex-direction: column;\n  }\n\n  mat-card {\n    width: 85%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2VsY29tZS9DOlxcVXNlcnNcXGhvdWFzXFxPbmVEcml2ZVxcQnVyZWF1XFxxdWl6LWFwcC1hbmd1bGFyL3NyY1xcYXBwXFx3ZWxjb21lXFx3ZWxjb21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC93ZWxjb21lL3dlbGNvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0E7RUFDRSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ05GOztBRFNBO0VBQ0Usa0JBQUE7QUNORjs7QURTQTtFQUNFLDBDQWpCZTtFQWtCZixnQkFBQTtFQUNBLGVBQUE7QUNORjs7QURTQTtFQUNFLGlDQXhCWTtFQXlCWixnQkFBQTtFQUNBLGVBQUE7QUNORjs7QURTQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGlDQWhDWTtBQzBCZDs7QURTQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0Esa0dBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlHQUNFO0VBR0YscURBQUE7VUFBQSw2Q0FBQTtBQ1RGOztBRGFBO0VBQ0UsY0FBQTtFQUVBLHFFQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7QUNWRjs7QURlQTtFQUNFLGtCQUFBO0VBQW9CLHFCQUFBO0VBQ3BCLGdCQUFBO0VBQWtCLHFEQUFBO0FDVnBCOztBRGFBO0VBQ0UsWUFBQTtFQUFjLGtDQUFBO0VBQ2QsWUFBQTtFQUFjLHVDQUFBO0FDUmhCOztBRGFBO0VBQ0U7SUFDRSxjQUFBO0VDVkY7O0VEWUE7SUFDRSxzQkFBQTtFQ1RGOztFRFlBO0lBQ0UsVUFBQTtFQ1RGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC93ZWxjb21lL3dlbGNvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkcHJpbWFyeS1jb2xvcjogI2ZmZmZmZjtcbiRzZWNvbmRhcnktY29sb3I6ICMxZWE4OTY7XG4kdGVydGlhcnktY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41NzkpO1xuJHByaW1hcnktZm9udDonVWJ1bnR1Jywgc2Fucy1zZXJpZjtcbiRzZWNvbmRhcnktZm9udDogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XG5cblxubWF0LWNhcmQge1xuICB3aWR0aDogMzAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLXRvcDogMyU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMyU7XG59XG5cbi5tYXQtY2FyZD4ubWF0LWNhcmQtYWN0aW9uczpsYXN0LWNoaWxkIHtcbiAgcGFkZGluZy1ib3R0b206IDMlO1xufVxuXG5tYXQtY2FyZC1jb250ZW50IHtcbiAgZm9udC1mYW1pbHk6ICRzZWNvbmRhcnktZm9udDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG5tYXQtY2FyZC10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiAkcHJpbWFyeS1mb250O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDMwcHg7XG59XG5cbi5xdWl6emVzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmb250LWZhbWlseTogJHByaW1hcnktZm9udDtcbn1cblxuLndlbGNvbWUge1xuICBtYXgtd2lkdGg6IDgwJTtcbiAgcGFkZGluZzogMiU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42OSksICByZ2JhKDAsIDAsIDAsIDAuNDIpKTsgXG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLXRvcDogNSU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYm94LXNoYWRvdzogXG4gICAgMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4zOTYpLFxuICAgIDAgMTVweCAzMHB4IHJnYigyNTUsIDI1NSwgMjU1KSwgXG4gICAgMCA2cHggNnB4IHJnYmEoMjM2LCAyMzgsIDIzOSwgMC44NjQpIGluc2V0OyBcbiAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxNTAwcHgpIHJvdGF0ZVkoMTVkZWcpO1xufVxuLy8gVm9zIHZhcmlhYmxlcyBldCBsZSByZXN0ZSBkdSBjb2RlLi4uXG5cbi50aXRsZV93ZWxjb21lIHtcbiAgZm9udC1zaXplOiA0ZW07IC8vIFRhaWxsZSBkZSBwb2xpY2Ugc291aGFpdMOpZVxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjMDAwMDAwLCByZ2IoMzksIDE3MCwgMTkwKSk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwjMDAwMDAwICxyZ2JhKDEsIDcsIDExOSwgMC43MykgKTsgXG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0OyBcbiAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0OyBcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jazsgXG4gIG1hcmdpbjogMCBhdXRvOyBcbn1cblxuXG5cbi5pbWFnZS1jb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IC8qIENlbnRlciB0aGUgaW1hZ2UgKi9cbiAgbWFyZ2luLXRvcDogMjBweDsgLyogQWRkIHNwYWNlIGJldHdlZW4gdGhlIC53ZWxjb21lIGRpdiBhbmQgdGhlIGltYWdlICovXG59XG5cbi5pbWFnZS1jb250YWluZXIgaW1nIHtcbiAgd2lkdGg6IDIwMHB4OyAvKiBBZGp1c3QgdGhlIHdpZHRoIGFzIG5lY2Vzc2FyeSAqL1xuICBoZWlnaHQ6IGF1dG87IC8qIEtlZXAgdGhlIGFzcGVjdCByYXRpbyBvZiB0aGUgaW1hZ2UgKi9cbn1cblxuXG5cbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDc1MHB4KSB7XG4gIGgxe1xuICAgIGZvbnQtc2l6ZTogM2VtXG4gIH1cbiAgLnF1aXp6ZXMge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cblxuICBtYXQtY2FyZCB7XG4gICAgd2lkdGg6IDg1JTtcbiAgfVxufVxuIiwibWF0LWNhcmQge1xuICB3aWR0aDogMzAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLXRvcDogMyU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMyU7XG59XG5cbi5tYXQtY2FyZCA+IC5tYXQtY2FyZC1hY3Rpb25zOmxhc3QtY2hpbGQge1xuICBwYWRkaW5nLWJvdHRvbTogMyU7XG59XG5cbm1hdC1jYXJkLWNvbnRlbnQge1xuICBmb250LWZhbWlseTogXCJTb3VyY2UgU2FucyBQcm9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG5tYXQtY2FyZC10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDMwcHg7XG59XG5cbi5xdWl6emVzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcbn1cblxuLndlbGNvbWUge1xuICBtYXgtd2lkdGg6IDgwJTtcbiAgcGFkZGluZzogMiU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42OSksIHJnYmEoMCwgMCwgMCwgMC40MikpO1xuICBtYXJnaW46IGF1dG87XG4gIG1hcmdpbi10b3A6IDUlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMzk2KSwgMCAxNXB4IDMwcHggd2hpdGUsIDAgNnB4IDZweCByZ2JhKDIzNiwgMjM4LCAyMzksIDAuODY0KSBpbnNldDtcbiAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxNTAwcHgpIHJvdGF0ZVkoMTVkZWcpO1xufVxuXG4udGl0bGVfd2VsY29tZSB7XG4gIGZvbnQtc2l6ZTogNGVtO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjMDAwMDAwLCAjMjdhYWJlKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDAwMDAwLCByZ2JhKDEsIDcsIDExOSwgMC43MykpO1xuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmltYWdlLWNvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLyogQ2VudGVyIHRoZSBpbWFnZSAqL1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICAvKiBBZGQgc3BhY2UgYmV0d2VlbiB0aGUgLndlbGNvbWUgZGl2IGFuZCB0aGUgaW1hZ2UgKi9cbn1cblxuLmltYWdlLWNvbnRhaW5lciBpbWcge1xuICB3aWR0aDogMjAwcHg7XG4gIC8qIEFkanVzdCB0aGUgd2lkdGggYXMgbmVjZXNzYXJ5ICovXG4gIGhlaWdodDogYXV0bztcbiAgLyogS2VlcCB0aGUgYXNwZWN0IHJhdGlvIG9mIHRoZSBpbWFnZSAqL1xufVxuXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA3NTBweCkge1xuICBoMSB7XG4gICAgZm9udC1zaXplOiAzZW07XG4gIH1cblxuICAucXVpenplcyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuXG4gIG1hdC1jYXJkIHtcbiAgICB3aWR0aDogODUlO1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _questions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../questions.service */ "./src/app/questions.service.ts");



let WelcomeComponent = class WelcomeComponent {
    constructor(questionsService) {
        this.questionsService = questionsService;
        this.questionsService.getQuizzes()
            .subscribe(quiz => {
            this.quiz = quiz;
        });
    }
    reset() {
        this.quiz = undefined;
    }
};
WelcomeComponent.ctorParameters = () => [
    { type: _questions_service__WEBPACK_IMPORTED_MODULE_2__["QuestionsService"] }
];
WelcomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-welcome',
        template: __webpack_require__(/*! raw-loader!./welcome.component.html */ "./node_modules/raw-loader/index.js!./src/app/welcome/welcome.component.html"),
        styles: [__webpack_require__(/*! ./welcome.component.scss */ "./src/app/welcome/welcome.component.scss")]
    })
], WelcomeComponent);



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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\houas\OneDrive\Bureau\quiz-app-angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map