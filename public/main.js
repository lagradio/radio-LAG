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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_team_team_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/team/team.component */ "./src/app/components/team/team.component.ts");
/* harmony import */ var _components_news_news_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/news/news.component */ "./src/app/components/news/news.component.ts");
/* harmony import */ var _components_programs_programs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/programs/programs.component */ "./src/app/components/programs/programs.component.ts");
/* harmony import */ var _components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/contacts/contacts.component */ "./src/app/components/contacts/contacts.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _guards_notAuth_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./guards/notAuth.guard */ "./src/app/guards/notAuth.guard.ts");












var routes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'team', component: _components_team_team_component__WEBPACK_IMPORTED_MODULE_4__["TeamComponent"] },
    { path: 'news', component: _components_news_news_component__WEBPACK_IMPORTED_MODULE_5__["NewsComponent"] },
    { path: 'programs', component: _components_programs_programs_component__WEBPACK_IMPORTED_MODULE_6__["ProgramsComponent"] },
    { path: 'contacts', component: _components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_7__["ContactsComponent"] },
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"], canActivate: [_guards_notAuth_guard__WEBPACK_IMPORTED_MODULE_11__["NotAuthGuard"]] },
    { path: '**', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] }
    // {path: '**', component: PageNotFound}
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<!--The content below is only a placeholder and can be replaced.-->\n\n\n\n\n\n\n<!--<flash-messages></flash-messages>-->\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'radiostation';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"])) {
                return;
            }
            window.scrollTo(0, 0);
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_team_team_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/team/team.component */ "./src/app/components/team/team.component.ts");
/* harmony import */ var _components_news_news_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/news/news.component */ "./src/app/components/news/news.component.ts");
/* harmony import */ var _components_programs_programs_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/programs/programs.component */ "./src/app/components/programs/programs.component.ts");
/* harmony import */ var _components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/contacts/contacts.component */ "./src/app/components/contacts/contacts.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _pipes_safe_pipe_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pipes/safe-pipe.pipe */ "./src/app/pipes/safe-pipe.pipe.ts");
/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/index */ "./src/app/services/index.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _guards_notAuth_guard__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./guards/notAuth.guard */ "./src/app/guards/notAuth.guard.ts");
/* harmony import */ var _services_cards_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/cards.service */ "./src/app/services/cards.service.ts");
/* harmony import */ var _services_table_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/table.service */ "./src/app/services/table.service.ts");
























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _components_team_team_component__WEBPACK_IMPORTED_MODULE_9__["TeamComponent"],
                _components_news_news_component__WEBPACK_IMPORTED_MODULE_10__["NewsComponent"],
                _components_programs_programs_component__WEBPACK_IMPORTED_MODULE_11__["ProgramsComponent"],
                _components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_12__["ContactsComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"],
                _pipes_safe_pipe_pipe__WEBPACK_IMPORTED_MODULE_14__["SafePipePipe"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_16__["RegisterComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_17__["LoginComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_19__["FlashMessagesModule"]
            ],
            providers: [_services_index__WEBPACK_IMPORTED_MODULE_15__["PagerService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_18__["AuthService"], _guards_auth_guard__WEBPACK_IMPORTED_MODULE_20__["AuthGuard"], _guards_notAuth_guard__WEBPACK_IMPORTED_MODULE_21__["NotAuthGuard"], _services_cards_service__WEBPACK_IMPORTED_MODULE_22__["CardsService"], _services_table_service__WEBPACK_IMPORTED_MODULE_23__["TableService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/contacts/contacts.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/contacts/contacts.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFjdHMvY29udGFjdHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/contacts/contacts.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/contacts/contacts.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--top image -->\n<div class=\"site-blocks-cover inner-page-cover overlay\" [style.background-image]=\"backgroundImg\" data-aos=\"fade\" data-stellar-background-ratio=\"0.5\" data-aos=\"fade\">\n  <div class=\"container\">\n    <div class=\"row align-items-center justify-content-center\">\n      <div class=\"col-md-7 text-center\" data-aos=\"fade-up\" data-aos-delay=\"400\">\n\n        <h2 class=\"text-white h1\">Contact Us</h2>\n        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<!--feedback form-->\n<div class=\"site-section bg-light\">\n  <div class=\"container\">\n    <div class=\"row\">\n\n      <div class=\"col-md-12 col-lg-8 mb-5\">\n\n\n\n        <!--<form class=\"p-5 bg-white\">-->\n\n          <div class=\"row form-group\">\n            <div class=\"col-md-12 mb-3 mb-md-0\">\n              <label class=\"font-weight-bold\" for=\"fullname\">Ім'я</label>\n              <input type=\"text\" id=\"fullname\" class=\"form-control\" placeholder=\"Ім'я\">\n            </div>\n          </div>\n          <div class=\"row form-group\">\n            <div class=\"col-md-12\">\n              <label class=\"font-weight-bold\" for=\"email\">Email</label>\n              <input type=\"email\" id=\"email\" class=\"form-control\" placeholder=\"Email\">\n            </div>\n          </div>\n          <div class=\"row form-group\">\n            <div class=\"col-md-12\">\n              <label class=\"font-weight-bold\" for=\"email\">Тема</label>\n              <input type=\"text\" id=\"subject\" class=\"form-control\" placeholder=\"Тема\">\n            </div>\n          </div>\n\n\n          <div class=\"row form-group\">\n            <div class=\"col-md-12\">\n              <label class=\"font-weight-bold\" for=\"message\">Повідомлення</label>\n              <textarea name=\"message\" id=\"message\" cols=\"30\" rows=\"5\" class=\"form-control\" placeholder=\"Текст повідомлення...\"></textarea>\n            </div>\n          </div>\n\n          <div class=\"row form-group\">\n            <div class=\"col-md-12\">\n              <input type=\"submit\" value=\"Send\" class=\"btn btn-primary  py-2 px-4 rounded-0\">\n            </div>\n          </div>\n\n\n        <!--</form>-->\n      </div>\n\n      <div class=\"col-lg-4 col-md-12 col-xs-12\">\n        <div class=\"p-4 mb-3 bg-white\">\n          <h3 class=\"h5 text-black mb-3\">Контактна інформація</h3>\n          <p class=\"mb-0 font-weight-bold\">Адреса</p>\n          <p class=\"mb-4\">вул. Бандери 14, м.Львів, Ураїна</p>\n\n          <p class=\"mb-0 font-weight-bold\">Телефон</p>\n          <p class=\"mb-4\"><a class=\"contactInfoLinks\" href=\"#\">+38 067 000 0000</a></p>\n\n          <p class=\"mb-0 font-weight-bold\">Email</p>\n          <p class=\"mb-0\"><a class=\"contactInfoLinks\" href=\"#\">academic.gymnasium.radio@gmail.com</a></p>\n\n        </div>\n\n        <div class=\"p-4 mb-3 bg-white\">\n          <h3 class=\"h5 text-black mb-3\">Ми на карті</h3>\n          <iframe [src]=\"'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.402590358911!2d24.01011191526671!3d49.83489253940759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add796525ebad%3A0x85fdbedda8b4a6b6!2z0YPQuy4g0KHRgtC10L_QsNC90LAg0JHQsNC90LTQtdGA0YssIDE0LCDQm9GM0LLQvtCyLCDQm9GM0LLQvtCy0YHQutCw0Y8g0L7QsdC70LDRgdGC0YwsIDc5MDAw!5e0!3m2!1sru!2sua!4v1550344014307' | safePipe\"  frameborder=\"0\" width=\"100%\" style=\"border:0\" allowfullscreen></iframe>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n<!--FAQ-->\n<div class=\"site-section\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center text-center mb-5\">\n      <div class=\"col-md-6\" data-aos=\"fade\" >\n        <h2>Frequently Ask Questions</h2>\n      </div>\n    </div>\n\n\n    <div class=\"row justify-content-center\" data-aos=\"fade\" data-aos-delay=\"100\">\n      <div class=\"col-md-8\">\n        <div class=\"accordion unit-8\" id=\"accordion\">\n          <div class=\"accordion-item\">\n            <h3 class=\"mb-0 heading\">\n              <a class=\"btn-block\" data-toggle=\"collapse\" href=\"#collapseOne\" role=\"button\" aria-expanded=\"true\" aria-controls=\"collapseOne\">Lorem ipsum dolor sit amet, consectetur adipisicing elit?<span class=\"icon\"></span></a>\n            </h3>\n            <div id=\"collapseOne\" class=\"collapse show\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\n              <div class=\"body-text\">\n                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur quae cumque perspiciatis aperiam accusantium facilis provident aspernatur nisi optio debitis dolorum, est eum eligendi vero aut ad necessitatibus nulla sit labore doloremque magnam! Ex molestiae, dolor tempora, ad fuga minima enim mollitia consequuntur, necessitatibus praesentium eligendi officia recusandae culpa tempore eaque quasi ullam magnam modi quidem in amet. Quod debitis error placeat, tempore quasi aliquid eaque vel facilis culpa voluptate.</p>\n              </div>\n            </div>\n          </div> <!-- .accordion-item -->\n\n          <div class=\"accordion-item\">\n            <h3 class=\"mb-0 heading\">\n              <a class=\"btn-block\" data-toggle=\"collapse\" href=\"#collapseTwo\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseTwo\">Lorem ipsum dolor sit amet?<span class=\"icon\"></span></a>\n            </h3>\n            <div id=\"collapseTwo\" class=\"collapse\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\n              <div class=\"body-text\">\n                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel ad laborum expedita. Nostrum iure atque enim quisquam minima distinctio omnis, consequatur aliquam suscipit, quidem, esse aspernatur! Libero, excepturi animi repellendus porro impedit nihil in doloremque a quaerat enim voluptatum, perspiciatis, quas dignissimos maxime ut cum reiciendis eius dolorum voluptatem aliquam!</p>\n              </div>\n            </div>\n          </div> <!-- .accordion-item -->\n\n          <div class=\"accordion-item\">\n            <h3 class=\"mb-0 heading\">\n              <a class=\"btn-block\" data-toggle=\"collapse\" href=\"#collapseThree\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseThree\">Lorem ipsum dolor?  <span class=\"icon\"></span></a>\n            </h3>\n            <div id=\"collapseThree\" class=\"collapse\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\n              <div class=\"body-text\">\n                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel ad laborum expedita. Nostrum iure atque enim quisquam minima distinctio omnis, consequatur aliquam suscipit, quidem, esse aspernatur! Libero, excepturi animi repellendus porro impedit nihil in doloremque a quaerat enim voluptatum, perspiciatis, quas dignissimos maxime ut cum reiciendis eius dolorum voluptatem aliquam!</p>\n              </div>\n            </div>\n          </div> <!-- .accordion-item -->\n\n          <div class=\"accordion-item\">\n            <h3 class=\"mb-0 heading\">\n              <a class=\"btn-block\" data-toggle=\"collapse\" href=\"#collapseFour\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseFour\">Lorem ipsum dolor sit amet, consectetur?<span class=\"icon\"></span></a>\n            </h3>\n            <div id=\"collapseFour\" class=\"collapse\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\n              <div class=\"body-text\">\n                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel ad laborum expedita. Nostrum iure atque enim quisquam minima distinctio omnis, consequatur aliquam suscipit, quidem, esse aspernatur! Libero, excepturi animi repellendus porro impedit nihil in doloremque a quaerat enim voluptatum, perspiciatis, quas dignissimos maxime ut cum reiciendis eius dolorum voluptatem aliquam!</p>\n              </div>\n            </div>\n          </div> <!-- .accordion-item -->\n\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/contacts/contacts.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/contacts/contacts.component.ts ***!
  \***********************************************************/
/*! exports provided: ContactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsComponent", function() { return ContactsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _scripts_aos_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../scripts/aos.js */ "./src/scripts/aos.js");
/* harmony import */ var _scripts_aos_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_scripts_aos_js__WEBPACK_IMPORTED_MODULE_3__);




var ContactsComponent = /** @class */ (function () {
    function ContactsComponent(sanitizer, zone, elRef) {
        this.sanitizer = sanitizer;
        this.zone = zone;
        this.elRef = elRef;
        // top background image
        this.backgroundImg = sanitizer.bypassSecurityTrustStyle('url("../../../assets/configImages/hero_bg_3.jpeg")');
    }
    ContactsComponent.prototype.ngAfterViewInit = function () {
        // Initialize AOS library
        _scripts_aos_js__WEBPACK_IMPORTED_MODULE_3__["init"]();
    };
    ContactsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contacts',
            template: __webpack_require__(/*! ./contacts.component.html */ "./src/app/components/contacts/contacts.component.html"),
            styles: [__webpack_require__(/*! ./contacts.component.css */ "./src/app/components/contacts/contacts.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], ContactsComponent);
    return ContactsComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bg-primary\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <a [href]=\"'https://www.facebook.com/radiolag1' |safePipe\" class=\"col-4 text-center py-4 social-icon d-block\"><i class=\"fab fa-facebook-f text-white iconsSize\"></i></a>\n      <a [href]=\"'https://www.instagram.com/radio_lag/' |safePipe\" class=\"col-4 text-center py-4 social-icon d-block\"><i class=\"fab fa-instagram text-white iconsSize\"></i></a>\n      <a [href]=\"'https://www.youtube.com/channel/UCQASHX7bjovzRCBVVkdbfaA' |safePipe\" class=\"col-4 text-center py-4 social-icon d-block\"><i class=\"fab fa-youtube text-white iconsSize\"></i></a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _scripts_aos_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../scripts/aos.js */ "./src/scripts/aos.js");
/* harmony import */ var _scripts_aos_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scripts_aos_js__WEBPACK_IMPORTED_MODULE_2__);



var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
        // Initialize AOS library
        _scripts_aos_js__WEBPACK_IMPORTED_MODULE_2__["init"]();
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n#accordionExample{\n  margin: 0px 170px 110px 170px;\n  overflow-x: hidden;\n}\n\n@media screen and (max-width: 1024px) {\n  #accordionExample{\n    margin: 70px 100px;\n  }\n}\n\n@media screen and (max-width: 485px) {\n  #accordionExample{\n    margin: 70px 10px;\n  }\n}\n\n.card {\n   border: 0px solid rgba(0, 0, 0, 0.125) !important;\n   border-radius: 0rem !important;\n}\n\n.card-header {\n   padding: 0.75rem 1.25rem 0.75rem 0.15rem;\n   background-color: transparent !important;\n   border-bottom: 0px solid rgba(0, 0, 0, 0.125) !important;\n}\n\n.card-body {\n  padding: 1.25rem 1.25rem 1.25rem 5.5rem !important;\n}\n\n.link-color-evol.collapsed{\n  font-weight: bold;\n  color: #876119 !important;\n  font-size: larger;\n  text-decoration: none !important;\n}\n\n.link-color-evol{\n  color: #de9000 !important;\n  font-weight: bold;\n  text-decoration: none !important;\n  font-size: xx-large;\n}\n\n.link-color-evol:hover{\n  cursor: pointer;\n}\n\n.evol-title{\n  margin-top: 6.25rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSw2QkFBNkI7RUFDN0Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0U7SUFDRSxrQkFBa0I7RUFDcEI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0Y7O0FBRUE7R0FDRyxpREFBaUQ7R0FDakQsOEJBQThCO0FBQ2pDOztBQUdBO0dBQ0csd0NBQXdDO0dBQ3hDLHdDQUF3QztHQUN4Qyx3REFBd0Q7QUFDM0Q7O0FBRUE7RUFDRSxrREFBa0Q7QUFDcEQ7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGdDQUFnQztFQUNoQyxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUdBO0VBQ0UsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuI2FjY29yZGlvbkV4YW1wbGV7XG4gIG1hcmdpbjogMHB4IDE3MHB4IDExMHB4IDE3MHB4O1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAjYWNjb3JkaW9uRXhhbXBsZXtcbiAgICBtYXJnaW46IDcwcHggMTAwcHg7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDg1cHgpIHtcbiAgI2FjY29yZGlvbkV4YW1wbGV7XG4gICAgbWFyZ2luOiA3MHB4IDEwcHg7XG4gIH1cbn1cblxuLmNhcmQge1xuICAgYm9yZGVyOiAwcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyNSkgIWltcG9ydGFudDtcbiAgIGJvcmRlci1yYWRpdXM6IDByZW0gIWltcG9ydGFudDtcbn1cblxuXG4uY2FyZC1oZWFkZXIge1xuICAgcGFkZGluZzogMC43NXJlbSAxLjI1cmVtIDAuNzVyZW0gMC4xNXJlbTtcbiAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICBib3JkZXItYm90dG9tOiAwcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyNSkgIWltcG9ydGFudDtcbn1cblxuLmNhcmQtYm9keSB7XG4gIHBhZGRpbmc6IDEuMjVyZW0gMS4yNXJlbSAxLjI1cmVtIDUuNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ubGluay1jb2xvci1ldm9sLmNvbGxhcHNlZHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjODc2MTE5ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmxpbmstY29sb3ItZXZvbHtcbiAgY29sb3I6ICNkZTkwMDAgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IHh4LWxhcmdlO1xufVxuXG4ubGluay1jb2xvci1ldm9sOmhvdmVye1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cblxuLmV2b2wtdGl0bGV7XG4gIG1hcmdpbi10b3A6IDYuMjVyZW07XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- Background Image & Audio player -->\n\n<div class=\"site-blocks-cover overlay\" [style.background-image]=\"backgroundImg\" data-aos=\"fade\" data-stellar-background-ratio=\"0.5\" data-aos=\"fade\">\n  <div class=\"container\">\n    <div class=\"row align-items-center justify-content-center\">\n      <div class=\"col-md-7 text-center\" data-aos=\"fade-up\" data-aos-delay=\"400\">\n        <h1>\"Radio.LAG\" &mdash; скарбниця талантів</h1>\n        <br>\n\n        <div id=\"playerContainer\"></div>\n\n      </div>\n    </div>\n  </div>\n</div>\n\n<!--/end image top-->\n\n\n\n\n<!--Programs schedule or popular as you want-->\n\n<div class=\"pb-5\" style=\"margin-top: -100px;\">\n  <div class=\"container-fluid\">\n    <div class=\"row no-gutters\">\n\n      <!--First program-->\n      <div class=\"col-md-6 col-lg-3\" data-aos=\"fade-up\" data-aos-delay=\"100\" >\n        <a href=\"#\" class=\"unit-9\">\n          <div class=\"image\" [style.background-image]=\"firstImgCard\"></div>\n          <div class=\"unit-9-content\" *ngFor=\"let card of cardPosts\">\n            <h2>{{card.firstCardTitle}}</h2>\n            <span>{{ card.firstCardTime }}</span>\n          </div>\n        </a>\n      </div>\n\n      <!--Second program-->\n      <div class=\"col-md-6 col-lg-3\" data-aos=\"fade-up\" data-aos-delay=\"200\">\n        <a href=\"#\" class=\"unit-9\">\n          <div class=\"image\" [style.background-image]=\"secondImgCard\"></div>\n          <div class=\"unit-9-content\" *ngFor=\"let card of cardPosts\">\n            <h2>{{ card.secondCardTitle}}</h2>\n            <span>{{ card.secondCardTime }}</span>\n          </div>\n        </a>\n      </div>\n\n      <!--Third program-->\n      <div class=\"col-md-6 col-lg-3\" data-aos=\"fade-up\" data-aos-delay=\"300\">\n        <a href=\"#\" class=\"unit-9\">\n          <div class=\"image\" [style.background-image]=\"thirdImgCard\"></div>\n          <div class=\"unit-9-content\" *ngFor=\"let card of cardPosts\">\n            <h2>{{ card.thirdCardTitle }}</h2>\n            <span>{{ card.thirdCardTime }}</span>\n          </div>\n        </a>\n      </div>\n\n      <!--Fourth program-->\n      <div class=\"col-md-6 col-lg-3\" data-aos=\"fade-up\" data-aos-delay=\"400\">\n        <a href=\"#\" class=\"unit-9\">\n          <div class=\"image\" [style.background-image]=\"fourthImgCard\"></div>\n          <div class=\"unit-9-content\" *ngFor=\"let card of cardPosts\">\n            <h2>{{ card.fourthCardTitle }}</h2>\n            <span>{{ card.fourthCardTime }}</span>\n          </div>\n        </a>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!--/end programs-->\n\n\n<!--Opinion about us-->\n\n<div class=\"site-section bg-light block-13\">\n  <div class=\"container\" data-aos=\"fade-up\">\n    <div class=\"row\">\n      <div class=\"site-section-heading text-center mb-5 w-border col-md-6 mx-auto\">\n        <h2 class=\"mb-5\">Слухачі про нас</h2>\n        <p>Ми із задоволенням працюємо, знаючи, що нас люблять та чекають у ефірі!</p>\n      </div>\n    </div>\n\n\n    <div class=\"nonloop-block-13 owl-carousel\">\n\n      <div class=\"text-center p-3 p-md-5 bg-white\">\n        <div class=\"mb-4\">\n          <img [src]=\"firstPerson | safePipe\" alt=\"Image\" class=\"w-50 mx-auto img-fluid rounded-circle\">\n        </div>\n        <div class=\"\">\n          <h3 class=\"font-weight-light h5\">Олег Парнета</h3>\n          <p class=\"font-italic\">&ldquo;Я вважаю, що власне радіо повинна мати кожна школа, адже учні завжди є в курсі останніх подій. &rdquo;</p>\n        </div>\n      </div>\n\n      <div class=\"text-center p-3 p-md-5 bg-white\">\n        <div class=\"mb-4\">\n          <img [src]=\"secondPerson | safePipe\" alt=\"Image\" class=\"w-50 mx-auto img-fluid rounded-circle\">\n        </div>\n        <div class=\"\">\n          <h3 class=\"font-weight-light h5\">Христина Близнюк</h3>\n          <p class=\"font-italic\">&ldquo;Завдяки ініцівтиві учнів я можу насолоджуватися якісною музикою та цікавою інформацією.&rdquo;</p>\n        </div>\n      </div>\n\n      <div class=\"text-center p-3 p-md-5 bg-white\">\n        <div class=\"mb-4\">\n          <img [src]=\"thirdPerson | safePipe\" alt=\"Image\" class=\"w-50 mx-auto img-fluid rounded-circle\">\n        </div>\n        <div class=\"\">\n          <h3 class=\"font-weight-light h5\">Захар Малецький</h3>\n          <p class=\"font-italic\">&ldquo;Дякуючи, гімназійному віснику, я завжди володію актуальною інформацією.&rdquo;</p>\n          <br>\n        </div>\n      </div>\n\n      <div class=\"text-center p-3 p-md-5 bg-white\">\n        <div class=\"mb-4\">\n          <img [src]=\"fourthPerson | safePipe\" alt=\"Image\" class=\"w-50 mx-auto img-fluid rounded-circle\">\n        </div>\n        <div class=\"\">\n          <h3 class=\"font-weight-light h5\">Ярина Кисіль</h3>\n          <p class=\"font-italic\">&ldquo;Шкільне радіо - це крута ініціатива, яка дає можливість реалізовувати себе.&rdquo;</p>\n        </div>\n      </div>\n\n      <div class=\"text-center p-3 p-md-5 bg-white\">\n        <div class=\"mb-4\">\n          <img [src]=\"fifthPerson\" alt=\"Image\" class=\"w-50 mx-auto img-fluid rounded-circle\">\n        </div>\n        <div class=\"\">\n          <h3 class=\"font-weight-light h5\">Стас Вербицький</h3>\n          <p class=\"font-italic\">&ldquo;\"ТАТАНЦІ\" - моя улюблена рубрика. Кожної середи я дізнаюсь щось нове.&rdquo;</p>\n          <br>\n        </div>\n      </div>\n\n      <div class=\"text-center p-3 p-md-5 bg-white\">\n        <div class=\"mb-4\">\n          <img [src]=\"sixthPerson | safePipe\" alt=\"Image\" class=\"w-50 mx-auto img-fluid rounded-circle\">\n        </div>\n        <div class=\"\">\n          <h3 class=\"font-weight-light h5\">Захар Оприсько</h3>\n          <p class=\"font-italic\">&ldquo;Гімназійне радіо - заряд позитиву на весь день.&rdquo;</p>\n          <br>\n          <br>\n        </div>\n      </div>\n\n\n\n    </div>\n  </div>\n</div>\n\n<!--/end opinions-->\n\n<!--evolution-->\n\n<div class=\"site-section-heading text-center mb-5 w-border col-md-6 mx-auto\">\n  <h2 class=\"mb-5 evol-title\">Наша історія</h2>\n</div>\n\n\n<div class=\"accordion\" id=\"accordionExample\">\n  <div class=\"card\">\n    <div class=\"card-header\" id=\"headingOne\">\n      <h5 class=\"mb-0\">\n        <button class=\"btn btn-link link-color-evol\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\n          -2016\n        </button>\n      </h5>\n    </div>\n\n    <div id=\"collapseOne\" class=\"collapse show\" aria-labelledby=\"headingOne\" data-parent=\"#accordionExample\">\n      <div class=\"card-body\">\n        Це був початок нашої історії адже саме в цьому році наші гімназисти: Загартовський Марко, Костів Анастасія,\n        Саєнко Андрій створили проект про гімназійне радіо та подали його на конкурс \"Friendly School\".\n        <br>\n        Та виграли його — завдяки цим людям в нас зараз є радіо в школі.\n      </div>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"card-header\" id=\"headingTwo\">\n      <h5 class=\"mb-0\">\n        <button class=\"btn btn-link link-color-evol collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseTwo\" aria-expanded=\"false\" aria-controls=\"collapseTwo\">\n          -2017\n        </button>\n      </h5>\n    </div>\n    <div id=\"collapseTwo\" class=\"collapse\" aria-labelledby=\"headingTwo\" data-parent=\"#accordionExample\">\n      <div class=\"card-body\">\n        Другий рік існування - гімназисти: Кисіль Ярина, Горкавенко Катерина, Доброгорська Анна, Мандюк Роксолана почали вести\n        ефіри програм. Ми робимо перші проби пера: складаємо графік радіопрограм, пишемо цікаву для гімназистів інформацію,\n        яку згодом їм транслюємо.\n      </div>\n    </div>\n  </div>\n  <div class=\"card \">\n    <div class=\"card-header\" id=\"headingThree\">\n      <h5 class=\"mb-0\">\n        <button class=\"btn btn-link link-color-evol collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseThree\" aria-expanded=\"false\" aria-controls=\"collapseThree\">\n          -2018\n        </button>\n      </h5>\n    </div>\n    <div id=\"collapseThree\" class=\"collapse\" aria-labelledby=\"headingThree\" data-parent=\"#accordionExample\">\n      <div class=\"card-body\">\n        Цей рік був захоплюючим. Оскільки наші попередники випустились до команди радіоведучих\n        додались ми: Анна Белей та Олег Федорич. Крім того, цього року наша гімназія брала участь у проекті\n        присвяченому космосу. Катерина Пашкевич була автором і творцем найрізноманітніших текстів про нашу галактику.\n        Гімназисти із радістю її слухали, дізнаваючись щось нове та невідоме для себе.\n      </div>\n    </div>\n  </div>\n  <div class=\"card \">\n    <div class=\"card-header\" id=\"headingFour\">\n      <h5 class=\"mb-0\">\n        <button class=\"btn btn-link link-color-evol collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseFour\" aria-expanded=\"false\" aria-controls=\"collapseFour\">\n          -2019\n        </button>\n      </h5>\n    </div>\n    <div id=\"collapseFour\" class=\"collapse\" aria-labelledby=\"headingFour\" data-parent=\"#accordionExample\">\n      <div class=\"card-body\">\n        \"Radio.LAG\" веде активне гімназійне життя. Ми проводимо гімназійні лінійки та ведемо різноманітні радіопередачі.\n        Журналісти не стоять на місці: весь час розвиваючись, роблять гімазистів задоволеними свіжою та актуальною інформацією.\n        Крім того, команда радіо та гімназійний парламент бере участь у проекті &ldquo;Healthy school&rdquo;, тож щочетверга ми\n        організовуємо всегімназійну руханку.\n      </div>\n    </div>\n  </div>\n</div>\n\n<!--/end evolution-->\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_cards_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/cards.service */ "./src/app/services/cards.service.ts");
/* harmony import */ var _scripts_circleaudioplayer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../scripts/circleaudioplayer.js */ "./src/scripts/circleaudioplayer.js");
/* harmony import */ var _scripts_circleaudioplayer_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_scripts_circleaudioplayer_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _scripts_aos_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../scripts/aos.js */ "./src/scripts/aos.js");
/* harmony import */ var _scripts_aos_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_scripts_aos_js__WEBPACK_IMPORTED_MODULE_6__);







var HomeComponent = /** @class */ (function () {
    function HomeComponent(sanitizer, zone, elRef, authService, cardsService) {
        this.sanitizer = sanitizer;
        this.zone = zone;
        this.elRef = elRef;
        this.authService = authService;
        this.cardsService = cardsService;
        // top background image
        this.backgroundImg = sanitizer.bypassSecurityTrustStyle('url("../../../assets/configImages/hero_bg_3.jpeg")');
        // programs schedule images or popular
        this.firstImgCard = sanitizer.bypassSecurityTrustStyle('url("../../../assets/configImages/card_1img.png")');
        this.secondImgCard = sanitizer.bypassSecurityTrustStyle('url("../../../assets/configImages/historyCardTwo.jpeg")');
        this.thirdImgCard = sanitizer.bypassSecurityTrustStyle('url("../../../assets/configImages/DanceCardThree.jpeg")');
        this.fourthImgCard = sanitizer.bypassSecurityTrustStyle('url("../../../assets/configImages/newspaperCardFour.jpeg")');
        // Faces images
        this.firstPerson = '/assets/configImages/PeopleOrOpinions/person_1.jpg';
        this.secondPerson = '/assets/configImages/PeopleOrOpinions/person_2.jpg';
        this.thirdPerson = '/assets/configImages/PeopleOrOpinions/person_3.jpg';
        this.fourthPerson = '/assets/configImages/PeopleOrOpinions/person_6.jpg';
        this.fifthPerson = '/assets/configImages/PeopleOrOpinions/person_4.jpg';
        this.sixthPerson = '/assets/configImages/PeopleOrOpinions/person_5.jpg';
    }
    // Function to get all blogs from the database
    HomeComponent.prototype.getAllCards = function () {
        var _this = this;
        // Function to GET all blogs from database
        this.cardsService.getAllCards().subscribe(function (data) {
            _this.cardPosts = data.cards; // Assign array to use in HTML
        });
    };
    HomeComponent.prototype.ngAfterViewInit = function () {
        // Call function to appear music canvas container
        cap.appendTo(document.getElementById('playerContainer'));
        // Initialize AOS library
        _scripts_aos_js__WEBPACK_IMPORTED_MODULE_6__["init"]();
        // Jquery carousel & owl carousel init
        if ($(this.elRef.nativeElement).find('.nonloop-block-13').length > 0) {
            $(this.elRef.nativeElement).find('.nonloop-block-13').owlCarousel({
                center: false,
                items: 1,
                loop: true,
                stagePadding: 0,
                autoplay: true,
                margin: 20,
                nav: false,
                dots: true,
                navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
                responsive: {
                    600: {
                        margin: 20,
                        stagePadding: 0,
                        items: 1
                    },
                    1000: {
                        margin: 20,
                        stagePadding: 0,
                        items: 2
                    },
                    1200: {
                        margin: 20,
                        stagePadding: 0,
                        items: 3
                    }
                }
            });
        }
        if ($(this.elRef.nativeElement).find('.slide-one-item').length > 0) {
            $(this.elRef.nativeElement).find('.slide-one-item').owlCarousel({
                center: false,
                items: 1,
                loop: true,
                stagePadding: 0,
                margin: 0,
                autoplay: true,
                pauseOnHover: false,
                nav: true,
                animateOut: 'fadeOut',
                animateIn: 'fadeIn',
                navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">']
            });
        }
        if ($(this.elRef.nativeElement).find('.nonloop-block-4').length > 0) {
            $(this.elRef.nativeElement).find('.nonloop-block-4').owlCarousel({
                center: true,
                items: 1,
                loop: false,
                margin: 10,
                nav: true,
                navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
                responsive: {
                    600: {
                        items: 1
                    }
                }
            });
        }
        // end carousel
        // get top cards
        this.getAllCards();
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _services_cards_service__WEBPACK_IMPORTED_MODULE_4__["CardsService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".site-footer{\n  height: -webkit-fill-available;\n}\n\n.inptStyle{\n  width: -webkit-fill-available;\n  text-decoration: none;\n  box-shadow: none;\n  background-color: #333333;\n  border-top: none;\n  border-right: none;\n  border-left: none;\n  border-bottom: 2px solid white;\n  color: orange;\n}\n\n.inptStyle:focus, .inptStyle:active {\n  border-bottom: 2px solid orange;\n  color: orange;\n}\n\n.inptStyle::-webkit-input-placeholder{\n  color: #737373;\n}\n\n.inptStyle::-ms-input-placeholder{\n  color: #737373;\n}\n\n.inptStyle::placeholder{\n  color: #737373;\n}\n\n.labelStyleCustom{\n  width: -webkit-fill-available;\n  text-align: left;\n  margin-top: 30px;\n  color: white;\n}\n\n.btnRegister{\n  float: right;\n  margin-top: 20px;\n  text-decoration: none;\n  background-color: #de9000;\n  box-shadow: none;\n  border: none;\n  padding: 5px 20px;\n  font-weight: bold;\n  font-size: large;\n  border-radius: 5px;\n}\n\n.btnRegister:hover{\n  background-color: #c38208;\n  color: white;\n  cursor: pointer;\n}\n\n.AdminPageMainPart{\n  margin-top: 80px;\n}\n\n.adminTitleStyle{\n  text-align: left;\n  font-weight: bold;\n  font-size: x-large;\n  color: orange;\n}\n\n.alertMsg{\n  color: red;\n  text-align: left;\n  margin-bottom: 0px;\n}\n\n.form-control{\n  border-radius: 0px;\n}\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLDhCQUE4QjtFQUM5QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsYUFBYTtBQUNmOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFGQTtFQUNFLGNBQWM7QUFDaEI7O0FBRkE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUdBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2l0ZS1mb290ZXJ7XG4gIGhlaWdodDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcbn1cblxuLmlucHRTdHlsZXtcbiAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcbiAgYm9yZGVyLXRvcDogbm9uZTtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICBib3JkZXItbGVmdDogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlO1xuICBjb2xvcjogb3JhbmdlO1xufVxuXG4uaW5wdFN0eWxlOmZvY3VzLCAuaW5wdFN0eWxlOmFjdGl2ZSB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBvcmFuZ2U7XG4gIGNvbG9yOiBvcmFuZ2U7XG59XG5cbi5pbnB0U3R5bGU6OnBsYWNlaG9sZGVye1xuICBjb2xvcjogIzczNzM3Mztcbn1cblxuLmxhYmVsU3R5bGVDdXN0b217XG4gIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5idG5SZWdpc3RlcntcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZTkwMDA7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogNXB4IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IGxhcmdlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5idG5SZWdpc3Rlcjpob3ZlcntcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MzODIwODtcbiAgY29sb3I6IHdoaXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cblxuLkFkbWluUGFnZU1haW5QYXJ0e1xuICBtYXJnaW4tdG9wOiA4MHB4O1xufVxuXG4uYWRtaW5UaXRsZVN0eWxle1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xuICBjb2xvcjogb3JhbmdlO1xufVxuXG4uYWxlcnRNc2d7XG4gIGNvbG9yOiByZWQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuLmZvcm0tY29udHJvbHtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xufVxuXG5cblxuIl19 */"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"site-footer\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-12 col-md-12 text-center\">\n        <div class=\"mb-5 text-center AdminPageMainPart\">\n          <h3 class=\"footer-heading mb-4 adminTitleStyle\">Login page</h3>\n\n\n          <!-- Custom Success/Error Message -->\n          <div class=\"row show-hide-message\">\n            <div [ngClass]=\"messageClass\">\n              {{ message }}\n            </div>\n          </div>\n\n\n          <form [formGroup]=\"form\" (submit)=\"onLoginSubmit()\">\n\n\n\n            <label for=\"username\" class=\"labelStyleCustom\">Username</label>\n            <br>\n            <div [ngClass]=\"{'has-error': form.controls.username.errors && form.controls.username.dirty, 'has-success': form.controls.username.valid && form.controls.username.dirty }\">\n              <input type=\"text\" class=\"inptStyle form-control\" name=\"username\" formControlName=\"username\" placeholder=\"Enter username\">\n              <!--<p class=\"alertMsg\">*rdtrdtdr cfgcfg</p>-->\n              <p class=\"alertMsg\" *ngIf=\"form.controls.username.errors?.required && form.controls.username.dirty\">This field is required.</p>\n              <br>\n            </div>\n\n            <label for=\"password\" class=\"labelStyleCustom\">Password</label>\n            <br>\n            <div [ngClass]=\"{'has-error': form.controls.password.errors && form.controls.password.dirty, 'has-success': form.controls.password.valid && form.controls.password.dirty }\">\n            <input type=\"password\" class=\"inptStyle form-control\" name=\"password\" placeholder=\"Enter your password\" formControlName=\"password\">\n              <p class=\"alertMsg\" *ngIf=\"form.controls.password.errors?.required && form.controls.password.dirty\">This field is required.</p>\n            <br>\n            </div>\n            <button [disabled]=\"!form.valid || processing\" class=\"btnRegister\" type=\"submit\">Sign In</button>\n            <br>\n          </form>\n\n\n          <p></p>\n        </div>\n\n\n\n      </div>\n\n\n\n    </div>\n\n    <div class=\"row pt-5 mt-5 text-center\">\n      <div class=\"col-md-12\">\n        <p>\n\n        </p>\n      </div>\n    </div>\n\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../guards/auth.guard */ "./src/app/guards/auth.guard.ts");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, authService, router, authGuard) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.authGuard = authGuard;
        this.processing = false;
        this.createForm();
    }
    // Function to create login form
    LoginComponent.prototype.createForm = function () {
        this.form = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required] // Password field
        });
    };
    // Function to disable form
    LoginComponent.prototype.disableForm = function () {
        this.form.controls['username'].disable(); // Disable username field
        this.form.controls['password'].disable(); // Disable password field
    };
    // Function to enable form
    LoginComponent.prototype.enableForm = function () {
        this.form.controls['username'].enable(); // Enable username field
        this.form.controls['password'].enable(); // Enable password field
    };
    // Functiont to submit form and login user
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        this.processing = true; // Used to submit button while is being processed
        this.disableForm(); // Disable form while being process
        // Create user object from user's input
        var user = {
            username: this.form.get('username').value,
            password: this.form.get('password').value // Password input field
        };
        // Function to send login data to API
        this.authService.login(user).subscribe(function (data) {
            // Check if response was a success or error
            if (!data.success) {
                _this.messageClass = 'alert alert-danger'; // Set bootstrap error class
                _this.message = data.message; // Set error message
                _this.processing = false; // Enable submit button
                _this.enableForm(); // Enable form for editting
            }
            else {
                _this.messageClass = 'alert alert-success'; // Set bootstrap success class
                _this.message = data.message; // Set success message
                // Function to store user's token in client local storage
                _this.authService.storeUserData(data.token, data.user);
                // After 2 seconds, redirect to dashboard page
                setTimeout(function () {
                    // Check if user was redirected or logging in for first time
                    if (_this.previousUrl) {
                        _this.router.navigate([_this.previousUrl]); // Redirect to page they were trying to view before
                    }
                    else {
                        _this.router.navigate(['/']); // Navigate to main page
                    }
                }, 2000);
            }
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
        // On page load, check if user was redirected to login
        if (this.authGuard.redirectUrl) {
            this.messageClass = 'alert alert-danger'; // Set error message: need to login
            this.message = 'You must be logged in to view that page.'; // Set message
            this.previousUrl = this.authGuard.redirectUrl; // Set the previous URL user was redirected from
            this.authGuard.redirectUrl = undefined; // Erase previous URL
        }
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logcursor{\n  cursor:pointer !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2djdXJzb3J7XG4gIGN1cnNvcjpwb2ludGVyICFpbXBvcnRhbnQ7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"site-wrap\">\n\n  <div class=\"site-navbar mt-4\">\n    <div class=\"container py-1\">\n      <div class=\"row align-items-center\">\n        <div class=\"col-8 col-md-8 col-lg-4\">\n          <h1 class=\"mb-0\"><a routerLink=\"/\" class=\"text-white h2 mb-0\"><strong>Radio<span class=\"text-primary\">.</span ><span class=\"text-primary\">LAG</span></strong></a></h1>\n        </div>\n        <div class=\"col-4 col-md-4 col-lg-8\">\n          <nav class=\"site-navigation text-right text-md-right\" role=\"navigation\">\n\n            <div class=\"d-inline-block d-lg-none ml-md-0 mr-auto py-3\"><a href=\"#\" class=\"site-menu-toggle js-menu-toggle text-white\"><i class=\"fas fa-bars iconsSize\"></i></a></div>\n\n            <ul class=\"site-menu js-clone-nav d-none d-lg-block\">\n              <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n                <a routerLink=\"/\">ГОЛОВНА</a>\n              </li>\n              <li [routerLinkActive]=\"['active']\"><a routerLink=\"/team\">КОМАНДА</a></li>\n              <li [routerLinkActive]=\"['active']\"><a routerLink=\"/news\">НОВИНИ</a></li>\n              <li [routerLinkActive]=\"['active']\"><a routerLink=\"/programs\">ЕФІРИ</a></li>\n              <li [routerLinkActive]=\"['active']\"><a routerLink=\"/contacts\">КОНТАКТИ</a></li>\n              <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\"><a routerLink=\"/register\">REGISTER</a></li>\n              <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\"><a class=\"logcursor\" (click)=\"onLogoutClick()\">LOGOUT</a></li>\n\n            </ul>\n          </nav>\n        </div>\n\n\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<div class=\"site-mobile-menu\">\n  <div class=\"site-mobile-menu-header\">\n    <div class=\"site-mobile-menu-close mt-3\">\n      <i class=\"fas fa-times iconsSize js-menu-toggle\"></i>\n    </div>\n  </div>\n  <div class=\"site-mobile-menu-body\"></div>\n</div> <!-- .site-mobile-menu -->\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




// import { FlashMessagesService } from 'angular2-flash-messages';
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    // Function to logout user
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout(); // Logout user
        // this.flashMessagesService.show('You are logged out', { cssClass: 'alert-info' }); // Set custom flash message
        this.router.navigate(['/']); // Navigate back to home page
    };
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/news/news.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/news/news.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".site-block-27 ul li a, .site-block-27 ul li span {\n  text-align: center;\n  display: inline-block;\n  width: 40px;\n  height: 40px;\n  line-height: 40px;\n  border-radius: 32% !important;\n   border: 0px solid transparent !important;\n  color: grey !important;\n  cursor: pointer;\n  font-weight: bolder;\n\n}\n\n\n.site-block-27 ul li.active a, .site-block-27 ul li.active span{\n  color: #fff !important;\n}\n\n\n.modal-title {\n  color: #de9000 !important;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uZXdzL25ld3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsNkJBQTZCO0dBQzVCLHdDQUF3QztFQUN6QyxzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLG1CQUFtQjs7QUFFckI7OztBQUdBO0VBQ0Usc0JBQXNCO0FBQ3hCOzs7QUFHQTtFQUNFLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmV3cy9uZXdzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2l0ZS1ibG9jay0yNyB1bCBsaSBhLCAuc2l0ZS1ibG9jay0yNyB1bCBsaSBzcGFuIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiAzMiUgIWltcG9ydGFudDtcbiAgIGJvcmRlcjogMHB4IHNvbGlkIHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiBncmV5ICFpbXBvcnRhbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcblxufVxuXG5cbi5zaXRlLWJsb2NrLTI3IHVsIGxpLmFjdGl2ZSBhLCAuc2l0ZS1ibG9jay0yNyB1bCBsaS5hY3RpdmUgc3BhbntcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cblxuXG4ubW9kYWwtdGl0bGUge1xuICBjb2xvcjogI2RlOTAwMCAhaW1wb3J0YW50O1xufVxuXG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/news/news.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/news/news.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--top image -->\n\n<div class=\"site-blocks-cover inner-page-cover overlay\" [style.background-image]=\"backgroundImg\" data-aos=\"fade\" data-stellar-background-ratio=\"0.5\" data-aos=\"fade\">\n  <div class=\"container\">\n    <div class=\"row align-items-center justify-content-center\">\n      <div class=\"col-md-7 text-center\" data-aos=\"fade-up\" data-aos-delay=\"400\">\n\n        <h2 class=\"text-white h1\">News &amp; Events</h2>\n        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<!--news-->\n\n<div class=\"site-section bg-light\">\n  <div class=\"container\">\n    <div class=\"row\">\n\n    <div *ngFor=\"let item of pagedItems\" class=\"col-md-6 col-lg-4 mb-5\">\n        <div data-toggle=\"modal\" [attr.data-target]=\" '#' + item.ID\" data-aos=\"fade-up\" data-aos-delay=\"300\">\n          <img [src]=\"NewImagePath + (item.mainPhoto) | safePipe\" alt=\"Image\" class=\"img-fluid\">\n          <div class=\"p-4 bg-white\">\n            <span class=\"d-block text-secondary small text-uppercase\">{{ item.time }}</span>\n            <h2 class=\"h5 text-black mb-3\"><a class=\"contactInfoLinks\">{{ item.title }}</a></h2>\n            <p class=\"text-truncate\"> {{ item.description }}</p>\n          </div>\n        </div>\n\n      <!-- Modal -->\n        <div class=\"modal fade\" [attr.id]=\"item.ID\" role=\"dialog\">\n          <div class=\"modal-dialog modal-lg\">\n\n            <!-- Modal content-->\n            <div class=\"modal-content\">\n              <div class=\"modal-header\">\n                <h4 class=\"modal-title\">{{ item.title }}</h4>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n              </div>\n              <div class=\"modal-body\">\n                <p>{{ item.description }}</p>\n\n                <p class=\"moodal-link-color\" *ngIf=\"item.urlText\">\n                  <a [href]=\"item.urlPath |safePipe\">{{ item.urlText }}</a>\n                </p>\n\n                <div [attr.id]=\"'carouselExampleIndicators' + item.ID\" class=\"carousel slide\" data-ride=\"carousel\">\n                  <ol class=\"carousel-indicators\">\n                    <li [attr.data-target]=\"'#carouselExampleIndicators' + item.ID\" data-slide-to=\"0\" class=\"active\"></li>\n                    <li [attr.data-target]=\"'#carouselExampleIndicators' + item.ID\" data-slide-to=\"1\"></li>\n                    <li [attr.data-target]=\"'#carouselExampleIndicators' + item.ID\" data-slide-to=\"2\"></li>\n                  </ol>\n                  <div class=\"carousel-inner\">\n                    <div class=\"carousel-item active\">\n                      <img class=\"d-block w-100\" [src]=\"NewImagePath + item.fone | safePipe\" alt=\"First slide\">\n                    </div>\n                    <div class=\"carousel-item\">\n                      <img class=\"d-block w-100\" [src]=\"NewImagePath + item.ftwo | safePipe\" alt=\"Second slide\">\n                    </div>\n                    <div class=\"carousel-item\">\n                      <img class=\"d-block w-100\" [src]=\"NewImagePath + item.fthree | safePipe\" alt=\"Third slide\">\n                    </div>\n                    <div class=\"carousel-item\" *ngIf=\"item.ffour\">\n                      <img class=\"d-block w-100\" [src]=\"NewImagePath + item.ffour | safePipe\" alt=\"4 slide\">\n                    </div>\n                    <div class=\"carousel-item\" *ngIf=\"item.ffive\">\n                      <img class=\"d-block w-100\" [src]=\"NewImagePath + item.ffive | safePipe\" alt=\"5 slide\">\n                    </div>\n                    <div class=\"carousel-item\" *ngIf=\"item.fsix\">\n                      <img class=\"d-block w-100\" [src]=\"NewImagePath + item.fsix | safePipe\" alt=\"6 slide\">\n                    </div>\n                    <div class=\"carousel-item\" *ngIf=\"item.fseven\">\n                      <img class=\"d-block w-100\" [src]=\"NewImagePath + item.fseven | safePipe\" alt=\"7 slide\">\n                    </div>\n                    <div class=\"carousel-item\" *ngIf=\"item.feight\">\n                      <img class=\"d-block w-100\" [src]=\"NewImagePath + item.feight | safePipe\" alt=\"8 slide\">\n                    </div>\n                    <div class=\"carousel-item\" *ngIf=\"item.fnine\">\n                      <img class=\"d-block w-100\" [src]=\"NewImagePath + item.fnine | safePipe\" alt=\"9 slide\">\n                    </div>\n                    <div class=\"carousel-item\" *ngIf=\"item.ften\">\n                      <img class=\"d-block w-100\" [src]=\"NewImagePath + item.ften | safePipe\" alt=\"10 slide\">\n                    </div>\n                  </div>\n                  <a class=\"carousel-control-prev\" [href]=\"'#carouselExampleIndicators' + + item.ID\" role=\"button\" data-slide=\"prev\">\n                    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n                    <span class=\"sr-only\">Previous</span>\n                  </a>\n                  <a class=\"carousel-control-next\" [href]=\"'#carouselExampleIndicators' + item.ID\" role=\"button\" data-slide=\"next\">\n                    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n                    <span class=\"sr-only\">Next</span>\n                  </a>\n                </div>\n\n\n\n\n                <div style=\"margin-top: 50px\" *ngIf=\"item.videoIframeURL\">\n                  <iframe width=\"100%\" height=\"415\" [src]=\"item.videoIframeURL | safePipe\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n                </div>\n\n\n\n              </div>\n              <div class=\"modal-footer\">\n                <!--<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>-->\n                <span class=\"d-block text-secondary small text-uppercase\">{{ item.time }}</span>\n              </div>\n            </div>\n          </div>\n        </div>\n\n    </div>\n\n\n\n\n\n\n    </div>\n\n  </div>\n\n  <div class=\"container mt-5\" data-aos=\"fade-up\">\n    <div class=\"row\">\n      <div class=\"col-md-12 text-center\">\n        <div class=\"site-block-27\">\n          <ul *ngIf=\"pager.pages && pager.pages.length\">\n            <li [ngClass]=\"{'disabled':pager.currentPage === 1}\" >\n              <a (click)=\"setPage(pager.currentPage - 1)\">&lt;</a>\n            </li>\n            <li *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager.currentPage === page}\">\n              <a (click)=\"setPage(page)\">{{page}}</a>\n            </li>\n\n            <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\n              <a (click)=\"setPage(pager.currentPage + 1)\">&gt;</a>\n            </li>\n\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/components/news/news.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/news/news.component.ts ***!
  \***************************************************/
/*! exports provided: NewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsComponent", function() { return NewsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/index */ "./src/app/services/index.ts");
/* harmony import */ var _scripts_aos_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../scripts/aos.js */ "./src/scripts/aos.js");
/* harmony import */ var _scripts_aos_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_scripts_aos_js__WEBPACK_IMPORTED_MODULE_6__);







var NewsComponent = /** @class */ (function () {
    function NewsComponent(sanitizer, zone, elRef, http, pagerService) {
        this.sanitizer = sanitizer;
        this.zone = zone;
        this.elRef = elRef;
        this.http = http;
        this.pagerService = pagerService;
        // pager object
        this.pager = {};
        // top background image
        this.backgroundImg = sanitizer.bypassSecurityTrustStyle('url("../../../assets/configImages/hero_bg_3.jpeg")');
        this.NewImagePath = '/assets/NewsPageImages/';
    }
    NewsComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // Initialize AOS library
        _scripts_aos_js__WEBPACK_IMPORTED_MODULE_6__["init"]();
        this.http.get('/assets/jsonsfiles/news.json')
            .map(function (response) { return response.json(); })
            .subscribe(function (data) {
            _this.allnews = data;
            _this.allItems = data;
            // initialize to page 1
            _this.setPage(1);
        });
    };
    NewsComponent.prototype.setPage = function (page) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        // get pager object from service
        this.pager = this.pagerService.getPager(this.allItems.length, page);
        // get current page of items
        this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    NewsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-news',
            template: __webpack_require__(/*! ./news.component.html */ "./src/app/components/news/news.component.html"),
            styles: [__webpack_require__(/*! ./news.component.css */ "./src/app/components/news/news.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"],
            _services_index__WEBPACK_IMPORTED_MODULE_5__["PagerService"]])
    ], NewsComponent);
    return NewsComponent;
}());



/***/ }),

/***/ "./src/app/components/programs/programs.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/programs/programs.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZ3JhbXMvcHJvZ3JhbXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/programs/programs.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/programs/programs.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--top image -->\n\n<div class=\"site-blocks-cover inner-page-cover overlay\" [style.background-image]=\"backgroundImg\" data-aos=\"fade\" data-stellar-background-ratio=\"0.5\" data-aos=\"fade\">\n  <div class=\"container\">\n    <div class=\"row align-items-center justify-content-center\">\n      <div class=\"col-md-7 text-center\" data-aos=\"fade-up\" data-aos-delay=\"400\">\n\n        <h2 class=\"text-white h1\">Lorem Ipsum</h2>\n        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<!--programs-->\n<div class=\"site-section\">\n\n  <div class=\"container\">\n\n    <div class=\"row\">\n      <div class=\"site-section-heading text-center mb-5 w-border col-md-6 mx-auto\" data-aos=\"fade-up\">\n        <h2 class=\"mb-5\">Щотижневі радіоефіри</h2>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, fugit nam obcaecati fuga itaque deserunt officia, error reiciendis ab quod?</p>\n      </div>\n    </div>\n\n    <div class=\"site-block-retro d-block d-md-flex\">\n\n      <a href=\"#\" class=\"col1 unit-9 no-height\" data-aos=\"fade-up\" data-aos-delay=\"100\">\n        <div class=\"image\" [style.background-image]=\"firstProgramImgCard\"></div>\n        <div class=\"unit-9-content\">\n          <h2>ТАТАНЦІ</h2>\n          <span>Середа/Четвер 11:10 &mdash; 11:17</span>\n        </div>\n      </a>\n\n      <div class=\"col2 ml-auto\">\n\n        <a href=\"#\" class=\"col2-row1 unit-9 no-height\" data-aos=\"fade-up\" data-aos-delay=\"200\">\n          <div class=\"image\" [style.background-image]=\"secondProgramImgCard\"></div>\n          <div class=\"unit-9-content\">\n            <h2>Цей день в історії</h2>\n            <span>Середа 12:15 &mdash; 12:20</span>\n          </div>\n        </a>\n\n        <a href=\"#\" class=\"col2-row2 unit-9 no-height\" data-aos=\"fade-up\" data-aos-delay=\"300\">\n          <div class=\"image\" [style.background-image]=\"thirdProgramImgCard\"></div>\n          <div class=\"unit-9-content\">\n            <h2>Гімназійний вісник</h2>\n            <span>П'ятнця 11:07 &mdash; 11:10</span>\n          </div>\n        </a>\n\n      </div>\n\n\n    </div>\n\n    <div class=\"site-block-retro d-block d-md-flex\" style=\"margin-top:20px\">\n\n      <a href=\"#\" class=\"col1 unit-9 no-height\" data-aos=\"fade-up\" data-aos-delay=\"200\">\n        <!-- <div class=\"image\" [style.background-image]=\"secondProgramImgCard\"></div>\n        <div class=\"unit-9-content\">\n          <h2>Цей день в історії</h2>\n          <span>Середа 12:15 &mdash; 12:20</span>\n        </div> -->\n\n        <iframe width=\"100%\" height=\"450\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay\" src=\"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/743568175&color=%239c8c8c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true | safePipe\"></iframe>\n      </a>\n\n\n      <a href=\"#\" class=\"col1 unit-9 no-height ml-auto\" data-aos=\"fade-up\" data-aos-delay=\"100\">\n        <!-- <div class=\"image\" [style.background-image]=\"firstProgramImgCard\"></div>\n        <div class=\"unit-9-content\">\n          <h2>ТАТАНЦІ</h2>\n          <span>Середа/Четвер 11:10 &mdash; 11:17</span>\n        </div> -->\n        <iframe width=\"100%\" height=\"300\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay\" src=\"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/743370025&color=%23b1b0a4&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true | safePipe\"></iframe>\n      </a>\n\n\n    </div>\n\n\n    <!-- <div class=\"site-block-retro d-block d-md-flex\" style=\"margin-top: 50px\">\n\n      <div class=\"col2 ml-auto\" style=\"margin-left:0px !important; margin-right: auto !important;\">\n\n        <a href=\"#\" class=\"col2-row1 unit-9 no-height\" data-aos=\"fade-up\" data-aos-delay=\"200\">\n          <div class=\"image\" [style.background-image]=\"secondProgramImgCard\"></div>\n          <div class=\"unit-9-content\">\n            <h2>Classic Songs For Classic People</h2>\n            <span>Friday 1:00pm &mdash; 2:30pm</span>\n          </div>\n        </a>\n\n        <a href=\"#\" class=\"col2-row2 unit-9 no-height\" data-aos=\"fade-up\" data-aos-delay=\"300\">\n          <div class=\"image\" [style.background-image]=\"thirdProgramImgCard\"></div>\n          <div class=\"unit-9-content\">\n            <h2>Classic Songs For Classic People</h2>\n            <span>Friday 1:00pm &mdash; 2:30pm</span>\n          </div>\n        </a>\n\n      </div>\n\n      <a href=\"#\" class=\"col1 unit-9 no-height\" data-aos=\"fade-up\" data-aos-delay=\"100\">\n        <div class=\"image\" [style.background-image]=\"firstProgramImgCard\"></div>\n        <div class=\"unit-9-content\">\n          <h2>Classic Songs For Classic People</h2>\n          <span>Friday 1:00pm &mdash; 2:30pm</span>\n        </div>\n      </a>\n\n\n    </div>\n    -->\n\n\n\n\n\n  </div>\n</div>\n\n\n\n\n\n\n<!--program table-->\n<footer class=\"site-footer\">\n\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"site-section-heading text-center mb-5 w-border col-md-6 mx-auto\" data-aos=\"fade-up\">\n        <h2 class=\"mb-5\">Розклад ефірів</h2>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"container tableOverflow\">\n\n    <table data-aos=\"fade-up\" class=\"table table-bordered\" style=\"width:100% !important;\">\n      <thead>\n      <tr>\n        <th style=\"text-align: center;\"><i class=\"fas fa-headphones-alt\" style=\"color: white; font-size: 25px; text-align: center;\"></i></th>\n        <th>ПОНЕДІЛОК</th>\n        <th>ВІВТОРОК</th>\n        <th>СЕРЕДА</th>\n        <th>ЧЕТВЕР</th>\n        <th>П'ЯТНИЦЯ</th>\n      </tr>\n      </thead>\n      <tbody *ngFor=\"let table of tablePosts\">\n      <tr>\n        <!--08:00 - 08:25-->\n        <td>08:30 - 08:34</td>\n        <td>{{table.Monday_1}}</td>\n        <td>{{table.Tuesday_1}}</td>\n        <td>{{table.Wednesday_1}}</td>\n        <td>{{table.Thursday_1}}</td>\n        <td>{{table.Friday_1}}</td>\n\n      </tr>\n      <!-- <tr>\n        <td>09:20 - 09:25</td>\n        <td>{{table.Monday_2}}</td>\n        <td>{{table.Tuesday_2}}</td>\n        <td>{{table.Wednesday_2}}</td>\n        <td>{{table.Thursday_2}}</td>\n        <td>{{table.Friday_2}}</td>\n      </tr> -->\n      <!-- <tr>\n        <td>10:10 - 10:20</td>\n        <td>{{table.Monday_3}}</td>\n        <td>{{table.Tuesday_3}}</td>\n        <td>{{table.Wednesday_3}}</td>\n        <td>{{table.Thursday_3}}</td>\n        <td>{{table.Friday_3}}</td>\n      </tr> -->\n      <tr>\n        <td>11:05 - 11:25</td>\n        <td>{{table.Monday_4}}</td>\n        <td>{{table.Tuesday_4}}</td>\n        <td>{{table.Wednesday_4}}</td>\n        <td>{{table.Thursday_4}}</td>\n        <td>{{table.Friday_4}}</td>\n      </tr>\n      <tr>\n        <td>12:10 - 12:25</td>\n        <td>{{table.Monday_5}}</td>\n        <td>{{table.Tuesday_5}}</td>\n        <td>{{table.Wednesday_5}}</td>\n        <td>{{table.Thursday_5}}</td>\n        <td>{{table.Friday_5}}</td>\n      </tr>\n      <tr>\n        <td>13:10 - 13:20</td>\n        <td>{{table.Monday_6}}</td>\n        <td>{{table.Tuesday_6}}</td>\n        <td>{{table.Wednesday_6}}</td>\n        <td>{{table.Thursday_6}}</td>\n        <td>{{table.Friday_6}}</td>\n      </tr>\n      <tr>\n        <td>14:10 - 14:20</td>\n        <td>{{table.Monday_7}}</td>\n        <td>{{table.Tuesday_7}}</td>\n        <td>{{table.Wednesday_7}}</td>\n        <td>{{table.Thursday_7}}</td>\n        <td>{{table.Friday_7}}</td>\n      </tr>\n\n      </tbody>\n    </table>\n\n\n\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/components/programs/programs.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/programs/programs.component.ts ***!
  \***********************************************************/
/*! exports provided: ProgramsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramsComponent", function() { return ProgramsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_table_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/table.service */ "./src/app/services/table.service.ts");
/* harmony import */ var _scripts_aos_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../scripts/aos.js */ "./src/scripts/aos.js");
/* harmony import */ var _scripts_aos_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_scripts_aos_js__WEBPACK_IMPORTED_MODULE_5__);






var ProgramsComponent = /** @class */ (function () {
    function ProgramsComponent(sanitizer, zone, elRef, authService, tableService) {
        this.sanitizer = sanitizer;
        this.zone = zone;
        this.elRef = elRef;
        this.authService = authService;
        this.tableService = tableService;
        // top background image
        this.backgroundImg = sanitizer.bypassSecurityTrustStyle('url("../../../assets/configImages/hero_bg_3.jpeg")');
        // programs schedule images or popular
        this.firstProgramImgCard = sanitizer.bypassSecurityTrustStyle('url("../../../assets/configImages/DanceCardThree.jpeg")');
        this.secondProgramImgCard = sanitizer.bypassSecurityTrustStyle('url("../../../assets/configImages/historyCardTwo.jpeg")');
        this.thirdProgramImgCard = sanitizer.bypassSecurityTrustStyle('url("../../../assets/configImages/newspaperCardFour.jpeg")');
        this.fourthProgramImgCard = sanitizer.bypassSecurityTrustStyle('url("../../../assets/configImages/img_4.jpg")');
    }
    // Function to get all blogs from the database
    ProgramsComponent.prototype.getAllTables = function () {
        var _this = this;
        // Function to GET all blogs from database
        this.tableService.getAllTables().subscribe(function (data) {
            _this.tablePosts = data.tables; // Assign array to use in HTML
        });
    };
    ProgramsComponent.prototype.ngAfterViewInit = function () {
        // Initialize AOS library
        _scripts_aos_js__WEBPACK_IMPORTED_MODULE_5__["init"]();
        // get table
        this.getAllTables();
    };
    ProgramsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-programs',
            template: __webpack_require__(/*! ./programs.component.html */ "./src/app/components/programs/programs.component.html"),
            styles: [__webpack_require__(/*! ./programs.component.css */ "./src/app/components/programs/programs.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _services_table_service__WEBPACK_IMPORTED_MODULE_4__["TableService"]])
    ], ProgramsComponent);
    return ProgramsComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*.site-footer{*/\n  /*height: -webkit-fill-available;*/\n  /*}*/\n  .inptStyle{\n  width: -webkit-fill-available;\n  text-decoration: none;\n  box-shadow: none;\n  background-color: #333333;\n  border-top: none;\n  border-right: none;\n  border-left: none;\n  border-bottom: 2px solid white;\n  color: orange;\n}\n  .inptStyle:focus, .inptStyle:active {\n  border-bottom: 2px solid orange;\n  color: orange;\n}\n  .inptStyle::-webkit-input-placeholder{\n  color: #737373;\n}\n  .inptStyle::-ms-input-placeholder{\n  color: #737373;\n}\n  .inptStyle::placeholder{\n  color: #737373;\n}\n  .labelStyleCustom{\n  width: -webkit-fill-available;\n  text-align: left;\n  margin-top: 30px;\n  color: white;\n}\n  .btnRegister{\n  float: right;\n  margin-top: 20px;\n  text-decoration: none;\n  background-color: #de9000;\n  box-shadow: none;\n  border: none;\n  padding: 5px 20px;\n  font-weight: bold;\n  font-size: large;\n  border-radius: 5px;\n}\n  .btnRegister:hover{\n  background-color: #c38208;\n  color: white;\n  cursor: pointer;\n}\n  .AdminPageMainPart{\n  margin-top: 80px;\n}\n  .adminTitleStyle{\n  text-align: left;\n  font-weight: bold;\n  font-size: x-large;\n  color: orange;\n}\n  .alertMsg{\n  color: red;\n  text-align: left;\n  margin-bottom: 0px;\n}\n  .form-control{\n  border-radius: 0px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtFQUNkLGtDQUFrQztFQUNwQyxJQUFJO0VBRUo7RUFDRSw2QkFBNkI7RUFDN0IscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsOEJBQThCO0VBQzlCLGFBQWE7QUFDZjtFQUVBO0VBQ0UsK0JBQStCO0VBQy9CLGFBQWE7QUFDZjtFQUVBO0VBQ0UsY0FBYztBQUNoQjtFQUZBO0VBQ0UsY0FBYztBQUNoQjtFQUZBO0VBQ0UsY0FBYztBQUNoQjtFQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkO0VBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7RUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osZUFBZTtBQUNqQjtFQUdBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0VBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2Y7RUFFQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCO0VBRUE7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKi5zaXRlLWZvb3RlcnsqL1xuICAvKmhlaWdodDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTsqL1xuLyp9Ki9cblxuLmlucHRTdHlsZXtcbiAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcbiAgYm9yZGVyLXRvcDogbm9uZTtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICBib3JkZXItbGVmdDogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlO1xuICBjb2xvcjogb3JhbmdlO1xufVxuXG4uaW5wdFN0eWxlOmZvY3VzLCAuaW5wdFN0eWxlOmFjdGl2ZSB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBvcmFuZ2U7XG4gIGNvbG9yOiBvcmFuZ2U7XG59XG5cbi5pbnB0U3R5bGU6OnBsYWNlaG9sZGVye1xuICBjb2xvcjogIzczNzM3Mztcbn1cblxuLmxhYmVsU3R5bGVDdXN0b217XG4gIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5idG5SZWdpc3RlcntcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZTkwMDA7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogNXB4IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IGxhcmdlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5idG5SZWdpc3Rlcjpob3ZlcntcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MzODIwODtcbiAgY29sb3I6IHdoaXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cblxuLkFkbWluUGFnZU1haW5QYXJ0e1xuICBtYXJnaW4tdG9wOiA4MHB4O1xufVxuXG4uYWRtaW5UaXRsZVN0eWxle1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xuICBjb2xvcjogb3JhbmdlO1xufVxuXG4uYWxlcnRNc2d7XG4gIGNvbG9yOiByZWQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuLmZvcm0tY29udHJvbHtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"site-footer\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-12 col-md-12 text-center\">\n        <div class=\"mb-5 text-center AdminPageMainPart\">\n          <h3 class=\"footer-heading mb-4 adminTitleStyle\">Register page</h3>\n\n\n          <!-- Custom Success/Error Message -->\n          <div class=\"row show-hide-message\">\n            <div [ngClass]=\"messageClass\">\n              {{ message }}\n            </div>\n          </div>\n\n\n          <form [formGroup]=\"form\" (submit)=\"onRegisterSubmit()\">\n\n            <label class=\"labelStyleCustom\" for=\"email\">E-mail</label>\n            <br>\n            <div [ngClass]=\"{'has-error': (form.controls.email.errors && form.controls.email.dirty) || (!emailValid && form.controls.email.dirty), 'has-success': !form.controls.email.errors && emailValid}\">\n            <input type=\"email\" name=\"email\" autocomplete=\"off\" class=\"inptStyle form-control\" placeholder=\"Enter e-mail\" formControlName=\"email\" (blur)=\"checkEmail()\" />\n            <!--<p class=\"alertMsg\">*rdtrdtdr cfgcfg</p>-->\n              <p class=\"alertMsg\" *ngIf=\"form.controls.email.errors?.required && form.controls.email.dirty\">This field is required</p>\n              <p class=\"alertMsg\" *ngIf=\"(form.controls.email.errors?.minlength && form.controls.email.dirty || form.controls.email.errors?.maxlength && form.controls.email.dirty ) && form.controls.email.dirty\">Minimum characters: 5, Maximum characters: 50</p>\n              <p class=\"alertMsg\" *ngIf=\"form.controls.email.errors?.validateEmail && form.controls.email.dirty\">This must be a valid e-mail</p>\n              <p class=\"alertMsg\" *ngIf=\"emailMessage\">{{ emailMessage}}</p>\n\n            <br>\n            </div>\n\n            <label class=\"labelStyleCustom\" for=\"username\">Username</label>\n            <br>\n            <div [ngClass]=\"{'has-error': (form.controls.username.errors && form.controls.username.dirty) || (!usernameValid && form.controls.username.dirty), 'has-success': !form.controls.username.errors && usernameValid}\">\n              <input type=\"text\" name=\"username\" autocomplete=\"off\" class=\"inptStyle form-control\" placeholder=\"Enter username\" formControlName=\"username\" (blur)=\"checkUsername()\" />\n\n              <p class=\"alertMsg\" *ngIf=\"form.controls.username.errors?.required && form.controls.username.dirty\">*This field is required</p>\n              <p class=\"alertMsg\" *ngIf=\"form.controls.username.errors?.minlength && form.controls.username.dirty || form.controls.username.errors?.maxlength && form.controls.username.dirty \">*Minimum characters: 3, Maximum characters: 15</p>\n              <p class=\"alertMsg\" *ngIf=\"form.controls.username.errors?.validateUsername && form.controls.username.dirty\">*Username must not have any special characters</p>\n              <p class=\"alertMsg\" *ngIf=\"usernameMessage\">{{ usernameMessage }}</p>\n\n            <br>\n            </div>\n\n            <label class=\"labelStyleCustom\" for=\"password\">Password</label>\n            <br>\n\n            <div [ngClass]=\"{'has-error': (form.controls.password.errors && form.controls.password.dirty), 'has-success': !form.controls.password.errors}\">\n\n            <input type=\"password\" name=\"password\" autocomplete=\"off\" class=\"inptStyle form-control\" placeholder=\"Enter your password\" formControlName=\"password\" />\n\n              <p class=\"alertMsg\" *ngIf=\"form.controls.password.errors?.required && form.controls.password.dirty\">This field is required</p>\n              <p class=\"alertMsg\" *ngIf=\"form.controls.password.errors?.minlength && form.controls.password.dirty || form.controls.password.errors?.maxlength && form.controls.password.dirty \">Minimum characters: 8, Maximum characters: 35</p>\n              <p class=\"alertMsg\" *ngIf=\"form.controls.password.errors?.validatePassword && form.controls.password.dirty\">Password must be at least 8 characters but no more than 35</p>\n\n            <br>\n            </div>\n\n\n            <label class=\"labelStyleCustom\" for=\"confirm\">Confirm password</label>\n            <br>\n            <div [ngClass]=\"{'has-error': (form.controls.confirm.errors && form.controls.confirm.dirty) || (form.errors?.matchingPasswords && form.controls.confirm.dirty), 'has-success': !form.controls.confirm.errors && !form.errors?.matchingPasswords}\">\n            <input name=\"confirm\" autocomplete=\"off\" type=\"password\" class=\"inptStyle form-control\" placeholder=\"Confirm your password\" formControlName=\"confirm\" />\n\n              <p class=\"alertMsg\" *ngIf=\"form.controls.confirm.errors?.required && form.controls.confirm.dirty\">This field is required</p>\n              <p class=\"alertMsg\" *ngIf=\"form.errors?.matchingPasswords && form.controls.confirm.dirty\">Password does not match</p>\n\n            <br>\n            </div>\n\n            <button [disabled]=\"!form.valid || processing || !emailValid || !usernameValid\" type=\"submit\" class=\"btnRegister\">Sign Up</button>\n\n          </form>\n\n\n\n          <p></p>\n        </div>\n\n\n\n      </div>\n\n\n\n    </div>\n\n    <div class=\"row pt-5 mt-5 text-center\">\n      <div class=\"col-md-12\">\n        <p>\n\n        </p>\n      </div>\n    </div>\n\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(formBuilder, authService, router) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.processing = false;
        this.createForm();
    }
    // Function to create registration form
    RegisterComponent.prototype.createForm = function () {
        this.form = this.formBuilder.group({
            // Email Input
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50),
                    this.validateEmail // Custom validation
                ])],
            // Username Input
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(25),
                    this.validateUsername // Custom validation
                ])],
            // Password Input
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(35),
                    this.validatePassword // Custom validation
                ])],
            // Confirm Password Input
            confirm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required] // Field is required
        }, { validator: this.matchingPasswords('password', 'confirm') }); // Add custom validator to form for matching passwords
    };
    // Function to disable the registration form
    RegisterComponent.prototype.disableForm = function () {
        this.form.controls['email'].disable();
        this.form.controls['username'].disable();
        this.form.controls['password'].disable();
        this.form.controls['confirm'].disable();
    };
    // Function to enable the registration form
    RegisterComponent.prototype.enableForm = function () {
        this.form.controls['email'].enable();
        this.form.controls['username'].enable();
        this.form.controls['password'].enable();
        this.form.controls['confirm'].enable();
    };
    // Function to validate e-mail is proper format
    RegisterComponent.prototype.validateEmail = function (controls) {
        // Create a regular expression
        var regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        // Test email against regular expression
        if (regExp.test(controls.value)) {
            return null; // Return as valid email
        }
        else {
            return { 'validateEmail': true }; // Return as invalid email
        }
    };
    // Function to validate username is proper format
    RegisterComponent.prototype.validateUsername = function (controls) {
        // Create a regular expression
        var regExp = new RegExp(/^[a-zA-Z0-9]+$/);
        // Test username against regular expression
        if (regExp.test(controls.value)) {
            return null; // Return as valid username
        }
        else {
            return { 'validateUsername': true }; // Return as invalid username
        }
    };
    // Function to validate password
    RegisterComponent.prototype.validatePassword = function (controls) {
        // Create a regular expression
        var regExp = new RegExp(/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[\d])(?=.*?[\W]).{8,35}$/);
        // Test password against regular expression
        if (regExp.test(controls.value)) {
            return null; // Return as valid password
        }
        else {
            return { 'validatePassword': true }; // Return as invalid password
        }
    };
    // Funciton to ensure passwords match
    RegisterComponent.prototype.matchingPasswords = function (password, confirm) {
        return function (group) {
            // Check if both fields are the same
            if (group.controls[password].value === group.controls[confirm].value) {
                return null; // Return as a match
            }
            else {
                return { 'matchingPasswords': true }; // Return as error: do not match
            }
        };
    };
    // Function to submit form
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        this.processing = true; // Used to notify HTML that form is in processing, so that it can be disabled
        this.disableForm(); // Disable the form
        // Create user object form user's inputs
        var user = {
            email: this.form.get('email').value,
            username: this.form.get('username').value,
            password: this.form.get('password').value // Password input field
        };
        // Function from authentication service to register user
        this.authService.registerUser(user).subscribe(function (data) {
            // Resposne from registration attempt
            if (!data.success) {
                _this.messageClass = 'alert alert-danger'; // Set an error class
                _this.message = data.message; // Set an error message
                _this.processing = false; // Re-enable submit button
                _this.enableForm(); // Re-enable form
            }
            else {
                _this.messageClass = 'alert alert-success'; // Set a success class
                _this.message = data.message; // Set a success message
                // After 2 second timeout, navigate to the login page
                setTimeout(function () {
                    _this.router.navigate(['/login']); // Redirect to login view
                }, 1000);
            }
        });
    };
    // Function to check if e-mail is taken
    RegisterComponent.prototype.checkEmail = function () {
        var _this = this;
        // Function from authentication file to check if e-mail is taken
        this.authService.checkEmail(this.form.get('email').value).subscribe(function (data) {
            // Check if success true or false was returned from API
            if (!data.success) {
                _this.emailValid = false; // Return email as invalid
                _this.emailMessage = data.message; // Return error message
            }
            else {
                _this.emailValid = true; // Return email as valid
                _this.emailMessage = " "; // Return success message
            }
        });
    };
    // Function to check if username is available
    RegisterComponent.prototype.checkUsername = function () {
        var _this = this;
        // Function from authentication file to check if username is taken
        this.authService.checkUsername(this.form.get('username').value).subscribe(function (data) {
            // Check if success true or success false was returned from API
            if (!data.success) {
                _this.usernameValid = false; // Return username as invalid
                _this.usernameMessage = data.message; // Return error message
            }
            else {
                _this.usernameValid = true; // Return username as valid
                _this.usernameMessage = " "; // Return success message
            }
        });
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/team/team.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/team/team.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGVhbS90ZWFtLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/team/team.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/team/team.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Page top image-->\n\n<div class=\"site-blocks-cover inner-page-cover overlay\" [style.background-image]=\"backgroundImg\" data-aos=\"fade\" data-stellar-background-ratio=\"0.5\" data-aos=\"fade\">\n  <div class=\"container\">\n    <div class=\"row align-items-center justify-content-center\">\n      <div class=\"col-md-7 text-center\" data-aos=\"fade-up\" data-aos-delay=\"400\">\n\n        <h2 class=\"text-white h1\">Lorem ipsum dolor</h2>\n        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<!--Teammembers photos-->\n<div class=\"site-section\">\n  <div class=\"container\" data-aos=\"fade-up\">\n    <div class=\"row\" data-aos=\"zoom-in\">\n      <div class=\"site-section-heading text-center mb-5 w-border col-md-6 mx-auto\">\n        <h2 class=\"mb-5\">Наша Команда</h2>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, fugit nam obcaecati fuga itaque deserunt officia, error reiciendis ab quod?</p>\n      </div>\n    </div>\n\n    <h1 data-aos=\"fade-right\" class=\"byYears\">20<span>19/20</span></h1>\n\n    <div class=\"row\"  >\n      <div class=\"col-md-6 col-lg-4 mb-5 mb-lg-5\">\n        <div class=\"team-member\">\n\n          <img [src]=\"firstMember\" alt=\"Image\" class=\"img-fluid\">\n\n          <div class=\"text\">\n\n            <h2 class=\"mb-2 font-weight-light h4\">Олег Федорич</h2>\n            <span class=\"d-block mb-2 text-white-opacity-05\">Creative Director</span>\n            <p class=\"mb-4\">Lorem ipsum dolor sit amet consectetur adipisicing elit ullam reprehenderit nemo.</p>\n            <p>\n              <a [href]=\"'https://www.facebook.com/fedorych.oleg' | safePipe\" class=\"text-white p-2\" target=\"_blank\"><i class=\"fab fa-facebook-f text-white iconsSize\"></i></a>\n              <a [href]=\"'https://www.instagram.com/o_skyer/?hl=ru' | safePipe\" class=\"text-white p-2\" target=\"_blank\"><i class=\"fab fa-instagram text-white iconsSize\"></i></a>\n              <!-- <a href=\"#\" class=\"text-white p-2\"><i class=\"fab fa-twitter text-white iconsSize\"></i></a> -->\n            </p>\n          </div>\n\n        </div>\n      </div>\n\n      <div class=\"col-md-6 col-lg-4 mb-5 mb-lg-5\">\n        <div class=\"team-member\">\n\n          <img [src]=\"secondMember\" alt=\"Image\" class=\"img-fluid\">\n\n          <div class=\"text\">\n\n            <h2 class=\"mb-2 font-weight-light h4\">Анна Белей</h2>\n            <span class=\"d-block mb-2 text-white-opacity-05\">Creative Director</span>\n            <p class=\"mb-4\">Lorem ipsum dolor sit amet consectetur adipisicing elit ullam reprehenderit nemo.</p>\n            <p>\n              <a href=\"#\" class=\"text-white p-2\"><i class=\"fab fa-facebook-f text-white iconsSize\"></i></a>\n              <a [href]=\"'https://www.instagram.com/annab_e_l_/?hl=ru' | safePipe\" class=\"text-white p-2\" target=\"_blank\"><i class=\"fab fa-instagram text-white iconsSize\"></i></a>\n              <!-- <a href=\"#\" class=\"text-white p-2\"><i class=\"fab fa-twitter text-white iconsSize\"></i></a> -->\n            </p>\n          </div>\n\n        </div>\n      </div>\n\n      <div class=\"col-md-6 col-lg-4 mb-5 mb-lg-5\">\n        <div class=\"team-member\">\n\n          <img [src]=\"thirdMember\" alt=\"Image\" class=\"img-fluid\">\n\n          <div class=\"text\">\n\n            <h2 class=\"mb-2 font-weight-light h4\">Name Surname</h2>\n            <span class=\"d-block mb-2 text-white-opacity-05\">Creative Director</span>\n            <p class=\"mb-4\">Lorem ipsum dolor sit amet consectetur adipisicing elit ullam reprehenderit nemo.</p>\n            <p>\n              <a href=\"#\" class=\"text-white p-2\"><i class=\"fab fa-facebook-f text-white iconsSize\"></i></a>\n              <a href=\"#\" class=\"text-white p-2\"><i class=\"fab fa-instagram text-white iconsSize\"></i></a>\n              <a href=\"#\" class=\"text-white p-2\"><i class=\"fab fa-twitter text-white iconsSize\"></i></a>\n            </p>\n          </div>\n\n        </div>\n      </div>\n\n      <div class=\"col-md-6 col-lg-4 mb-5 mb-lg-5\">\n        <div class=\"team-member\">\n\n          <img [src]=\"fourthMember\" alt=\"Image\" class=\"img-fluid\">\n\n          <div class=\"text\">\n\n            <h2 class=\"mb-2 font-weight-light h4\">Name Surname</h2>\n            <span class=\"d-block mb-2 text-white-opacity-05\">Creative Director</span>\n            <p class=\"mb-4\">Lorem ipsum dolor sit amet consectetur adipisicing elit ullam reprehenderit nemo.</p>\n            <p>\n              <a href=\"#\" class=\"text-white p-2\"><i class=\"fab fa-facebook-f text-white iconsSize\"></i></a>\n              <a href=\"#\" class=\"text-white p-2\"><i class=\"fab fa-instagram text-white iconsSize\"></i></a>\n              <a href=\"#\" class=\"text-white p-2\"><i class=\"fab fa-twitter text-white iconsSize\"></i></a>\n            </p>\n          </div>\n\n        </div>\n      </div>\n\n      <div class=\"col-md-6 col-lg-4 mb-5 mb-lg-5\">\n        <div class=\"team-member\">\n\n          <img [src]=\"fifthMember\" alt=\"Image\" class=\"img-fluid\">\n\n          <div class=\"text\">\n\n            <h2 class=\"mb-2 font-weight-light h4\">Name Surname</h2>\n            <span class=\"d-block mb-2 text-white-opacity-05\">Creative Director</span>\n            <p class=\"mb-4\">Lorem ipsum dolor sit amet consectetur adipisicing elit ullam reprehenderit nemo.</p>\n            <p>\n              <a href=\"#\" class=\"text-white p-2\"><i class=\"fab fa-facebook-f text-white iconsSize\"></i></a>\n              <a href=\"#\" class=\"text-white p-2\"><i class=\"fab fa-instagram text-white iconsSize\"></i></a>\n              <a href=\"#\" class=\"text-white p-2\"><i class=\"fab fa-twitter text-white iconsSize\"></i></a>\n            </p>\n          </div>\n\n        </div>\n      </div>\n\n      <div class=\"col-md-6 col-lg-4 mb-5 mb-lg-5\">\n        <div class=\"team-member\">\n\n          <img [src]=\"sixthMember\" alt=\"Image\" class=\"img-fluid\">\n          <div class=\"text\">\n            <h2 class=\"mb-2 font-weight-light h4\">Name Surname</h2>\n            <span class=\"d-block mb-2 text-white-opacity-05\">Creative Director</span>\n            <p class=\"mb-4\">Lorem ipsum dolor sit amet consectetur adipisicing elit ullam reprehenderit nemo.</p>\n            <p>\n              <a href=\"#\" class=\"text-white p-2\"><i class=\"fab fa-facebook-f text-white iconsSize\"></i></a>\n              <a href=\"#\" class=\"text-white p-2\"><i class=\"fab fa-instagram text-white iconsSize\"></i></a>\n              <a href=\"#\" class=\"text-white p-2\"><i class=\"fab fa-twitter text-white iconsSize\"></i></a>\n            </p>\n          </div>\n\n        </div>\n      </div>\n\n\n      <div class=\"col-md-6 col-lg-4 mb-5 mb-lg-5\">\n        <div class=\"team-member\">\n\n          <img [src]=\"sevenMember\" alt=\"Image\" class=\"img-fluid\">\n          <div class=\"text\">\n            <h2 class=\"mb-2 font-weight-light h4\">Name Surname</h2>\n            <span class=\"d-block mb-2 text-white-opacity-05\">Creative Director</span>\n            <p class=\"mb-4\">Lorem ipsum dolor sit amet consectetur adipisicing elit ullam reprehenderit nemo.</p>\n            <p>\n              <a href=\"#\" class=\"text-white p-2\"><i class=\"fab fa-facebook-f text-white iconsSize\"></i></a>\n              <a href=\"#\" class=\"text-white p-2\"><i class=\"fab fa-instagram text-white iconsSize\"></i></a>\n              <a href=\"#\" class=\"text-white p-2\"><i class=\"fab fa-twitter text-white iconsSize\"></i></a>\n            </p>\n          </div>\n\n        </div>\n      </div>\n\n\n    </div>\n\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/team/team.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/team/team.component.ts ***!
  \***************************************************/
/*! exports provided: TeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamComponent", function() { return TeamComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _scripts_aos_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../scripts/aos.js */ "./src/scripts/aos.js");
/* harmony import */ var _scripts_aos_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_scripts_aos_js__WEBPACK_IMPORTED_MODULE_3__);




var TeamComponent = /** @class */ (function () {
    function TeamComponent(sanitizer, zone, elRef) {
        this.sanitizer = sanitizer;
        this.zone = zone;
        this.elRef = elRef;
        // top background image
        this.backgroundImg = sanitizer.bypassSecurityTrustStyle('url("../../../assets/configImages/hero_bg_3.jpeg")');
        // TeamMembers images
        this.firstMember = '/assets/configImages/Teammembers/person_1.jpeg';
        this.secondMember = '/assets/configImages/Teammembers/person_2.jpeg';
        this.thirdMember = '/assets/configImages/Teammembers/person_3.jpg';
        this.fourthMember = '/assets/configImages/Teammembers/person_6.jpg';
        this.fifthMember = '/assets/configImages/Teammembers/person_4.jpg';
        this.sixthMember = '/assets/configImages/Teammembers/person_5.jpg';
        this.sevenMember = '/assets/configImages/Teammembers/person_7.jpg';
    }
    TeamComponent.prototype.ngAfterViewInit = function () {
        // Initialize AOS library
        _scripts_aos_js__WEBPACK_IMPORTED_MODULE_3__["init"]();
    };
    TeamComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-team',
            template: __webpack_require__(/*! ./team.component.html */ "./src/app/components/team/team.component.html"),
            styles: [__webpack_require__(/*! ./team.component.css */ "./src/app/components/team/team.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], TeamComponent);
    return TeamComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/**
 * Created by Anastasiia Kostiv on 22.02.2019.
 */




var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    // Function to check if user is authorized to view route
    AuthGuard.prototype.canActivate = function (router, state) {
        // Check if user is logge din
        if (this.authService.loggedIn()) {
            return true; // Return true: User is allowed to view route
        }
        else {
            this.redirectUrl = state.url; // Grab previous urul
            this.router.navigate(['/login']); // Return error and route to login page
            return false; // Return false: user not authorized to view page
        }
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/guards/notAuth.guard.ts":
/*!*****************************************!*\
  !*** ./src/app/guards/notAuth.guard.ts ***!
  \*****************************************/
/*! exports provided: NotAuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotAuthGuard", function() { return NotAuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/**
 * Created by Anastasiia on 22.02.2019.
 */




var NotAuthGuard = /** @class */ (function () {
    function NotAuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    // Function to determine whether user is authorized to view route
    NotAuthGuard.prototype.canActivate = function () {
        // Check if user is logged in
        if (this.authService.loggedIn()) {
            this.router.navigate(['/']); // Return error, route to home
            return false; // Return false: user not allowed to view route
        }
        else {
            return true; // Return true: user is allowed to view route
        }
    };
    NotAuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NotAuthGuard);
    return NotAuthGuard;
}());



/***/ }),

/***/ "./src/app/pipes/safe-pipe.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/pipes/safe-pipe.pipe.ts ***!
  \*****************************************/
/*! exports provided: SafePipePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafePipePipe", function() { return SafePipePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var SafePipePipe = /** @class */ (function () {
    function SafePipePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipePipe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    SafePipePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'safePipe'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], SafePipePipe);
    return SafePipePipe;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-jwt */ "./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_jwt__WEBPACK_IMPORTED_MODULE_4__);





var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.domain = "";
    }
    // Function to create headers, add token, to be used in HTTP requests
    AuthService.prototype.createAuthenticationHeaders = function () {
        this.loadToken(); // Get token so it can be attached to headers
        // Headers configuration options
        this.options = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({
            headers: new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({
                'Content-Type': 'application/json',
                'authorization': this.authToken // Attach token
            })
        });
    };
    // Function to get token from client local storage
    AuthService.prototype.loadToken = function () {
        this.authToken = localStorage.getItem('token'); // Get token and asssign to variable to be used elsewhere
    };
    // Function to register user accounts
    AuthService.prototype.registerUser = function (user) {
        return this.http.post(this.domain + '/authentication/register', user).map(function (res) { return res.json(); });
    };
    // Function to check if username is taken
    AuthService.prototype.checkUsername = function (username) {
        return this.http.get(this.domain + '/authentication/checkUsername/' + username).map(function (res) { return res.json(); });
    };
    // Function to check if e-mail is taken
    AuthService.prototype.checkEmail = function (email) {
        return this.http.get(this.domain + '/authentication/checkEmail/' + email).map(function (res) { return res.json(); });
    };
    // Function to login user
    AuthService.prototype.login = function (user) {
        return this.http.post(this.domain + '/authentication/login', user).map(function (res) { return res.json(); });
    };
    // Function to logout
    AuthService.prototype.logout = function () {
        this.authToken = null; // Set token to null
        this.user = null; // Set user to null
        localStorage.clear(); // Clear local storage
    };
    // Function to store user's data in client local storage
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('token', token); // Set token in local storage
        localStorage.setItem('user', JSON.stringify(user)); // Set user in local storage as string
        this.authToken = token; // Assign token to be used elsewhere
        this.user = user; // Set user to be used elsewhere
    };
    // Function to get user's profile data
    AuthService.prototype.getProfile = function () {
        this.createAuthenticationHeaders(); // Create headers before sending to API
        return this.http.get(this.domain + '/authentication/profile', this.options).map(function (res) { return res.json(); });
    };
    // Function to check if user is logged in
    AuthService.prototype.loggedIn = function () {
        return Object(angular2_jwt__WEBPACK_IMPORTED_MODULE_4__["tokenNotExpired"])();
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/cards.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/cards.service.ts ***!
  \*******************************************/
/*! exports provided: CardsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsService", function() { return CardsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");




var CardsService = /** @class */ (function () {
    function CardsService(authService, http) {
        this.authService = authService;
        this.http = http;
        this.domain = this.authService.domain;
    }
    // Function to create headers, add token, to be used in HTTP requests
    CardsService.prototype.createAuthenticationHeaders = function () {
        this.authService.loadToken(); // Get token so it can be attached to headers
        // Headers configuration options
        this.options = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestOptions"]({
            headers: new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({
                'Content-Type': 'application/json',
                'authorization': this.authService.authToken // Attach token
            })
        });
    };
    // Function to get all cards from the database
    CardsService.prototype.getAllCards = function () {
        this.createAuthenticationHeaders(); // Create headers
        return this.http.get(this.domain + '/cards/allCards', this.options).map(function (res) { return res.json(); });
    };
    CardsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"]])
    ], CardsService);
    return CardsService;
}());



/***/ }),

/***/ "./src/app/services/index.ts":
/*!***********************************!*\
  !*** ./src/app/services/index.ts ***!
  \***********************************/
/*! exports provided: PagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pager_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pager.service */ "./src/app/services/pager.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PagerService", function() { return _pager_service__WEBPACK_IMPORTED_MODULE_0__["PagerService"]; });




/***/ }),

/***/ "./src/app/services/pager.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/pager.service.ts ***!
  \*******************************************/
/*! exports provided: PagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagerService", function() { return PagerService; });
// import { Injectable } from '@angular/core';
//
// @Injectable()
var PagerService = /** @class */ (function () {
    function PagerService() {
    }
    PagerService.prototype.getPager = function (totalItems, currentPage, pageSize) {
        if (currentPage === void 0) { currentPage = 1; }
        if (pageSize === void 0) { pageSize = 3; }
        // calculate total pages
        var totalPages = Math.ceil(totalItems / pageSize);
        var startPage, endPage;
        if (totalPages <= 5) {
            // less than 10 total pages so show all
            startPage = 1;
            endPage = totalPages;
        }
        else {
            // more than 10 total pages so calculate start and end pages
            if (currentPage <= 3) {
                startPage = 1;
                endPage = 5;
            }
            else if (currentPage + 2 >= totalPages) {
                startPage = totalPages - 3;
                endPage = totalPages;
            }
            else {
                startPage = currentPage - 2;
                endPage = currentPage + 2;
            }
        }
        // calculate start and end item indexes
        var startIndex = (currentPage - 1) * pageSize;
        var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
        // create an array of pages to ng-repeat in the pager control
        var pages = Array.from(Array(endPage + 1 - startPage), function (_, i) { return startPage + i; });
        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    };
    return PagerService;
}());



/***/ }),

/***/ "./src/app/services/table.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/table.service.ts ***!
  \*******************************************/
/*! exports provided: TableService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableService", function() { return TableService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");




var TableService = /** @class */ (function () {
    function TableService(authService, http) {
        this.authService = authService;
        this.http = http;
        this.domain = this.authService.domain;
    }
    // Function to create headers, add token, to be used in HTTP requests
    TableService.prototype.createAuthenticationHeaders = function () {
        this.authService.loadToken(); // Get token so it can be attached to headers
        // Headers configuration options
        this.options = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestOptions"]({
            headers: new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({
                'Content-Type': 'application/json',
                'authorization': this.authService.authToken // Attach token
            })
        });
    };
    // Function to get all cards from the database
    TableService.prototype.getAllTables = function () {
        this.createAuthenticationHeaders(); // Create headers
        return this.http.get(this.domain + '/tables/allTables', this.options).map(function (res) { return res.json(); });
    };
    TableService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"]])
    ], TableService);
    return TableService;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/scripts/aos.js":
/*!****************************!*\
  !*** ./src/scripts/aos.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="dist/",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=n(1),a=(o(r),n(6)),u=o(a),c=n(7),f=o(c),s=n(8),d=o(s),l=n(9),p=o(l),m=n(10),b=o(m),v=n(11),y=o(v),g=n(14),h=o(g),w=[],k=!1,x=document.all&&!window.atob,j={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded"},O=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e&&(k=!0),k)return w=(0,y.default)(w,j),(0,b.default)(w,j.once),w},S=function(){w=(0,h.default)(),O()},_=function(){w.forEach(function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")})},E=function(e){return e===!0||"mobile"===e&&p.default.mobile()||"phone"===e&&p.default.phone()||"tablet"===e&&p.default.tablet()||"function"==typeof e&&e()===!0},z=function(e){return j=i(j,e),w=(0,h.default)(),E(j.disable)||x?_():(document.querySelector("body").setAttribute("data-aos-easing",j.easing),document.querySelector("body").setAttribute("data-aos-duration",j.duration),document.querySelector("body").setAttribute("data-aos-delay",j.delay),"DOMContentLoaded"===j.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?O(!0):"load"===j.startEvent?window.addEventListener(j.startEvent,function(){O(!0)}):document.addEventListener(j.startEvent,function(){O(!0)}),window.addEventListener("resize",(0,f.default)(O,50,!0)),window.addEventListener("orientationchange",(0,f.default)(O,50,!0)),window.addEventListener("scroll",(0,u.default)(function(){(0,b.default)(w,j.once)},99)),document.addEventListener("DOMNodeRemoved",function(e){var t=e.target;t&&1===t.nodeType&&t.hasAttribute&&t.hasAttribute("data-aos")&&(0,f.default)(S,50,!0)}),(0,d.default)("[data-aos]",S),w)};e.exports={init:z,refresh:O,refreshHard:S}},function(e,t){},,,,,function(e,t){(function(t){"use strict";function n(e,t,n){function o(t){var n=b,o=v;return b=v=void 0,k=t,g=e.apply(o,n)}function r(e){return k=e,h=setTimeout(s,t),S?o(e):g}function a(e){var n=e-w,o=e-k,i=t-n;return _?j(i,y-o):i}function c(e){var n=e-w,o=e-k;return void 0===w||n>=t||n<0||_&&o>=y}function s(){var e=O();return c(e)?d(e):void(h=setTimeout(s,a(e)))}function d(e){return h=void 0,E&&b?o(e):(b=v=void 0,g)}function l(){void 0!==h&&clearTimeout(h),k=0,b=w=v=h=void 0}function p(){return void 0===h?g:d(O())}function m(){var e=O(),n=c(e);if(b=arguments,v=this,w=e,n){if(void 0===h)return r(w);if(_)return h=setTimeout(s,t),o(w)}return void 0===h&&(h=setTimeout(s,t)),g}var b,v,y,g,h,w,k=0,S=!1,_=!1,E=!0;if("function"!=typeof e)throw new TypeError(f);return t=u(t)||0,i(n)&&(S=!!n.leading,_="maxWait"in n,y=_?x(u(n.maxWait)||0,t):y,E="trailing"in n?!!n.trailing:E),m.cancel=l,m.flush=p,m}function o(e,t,o){var r=!0,a=!0;if("function"!=typeof e)throw new TypeError(f);return i(o)&&(r="leading"in o?!!o.leading:r,a="trailing"in o?!!o.trailing:a),n(e,t,{leading:r,maxWait:t,trailing:a})}function i(e){var t="undefined"==typeof e?"undefined":c(e);return!!e&&("object"==t||"function"==t)}function r(e){return!!e&&"object"==("undefined"==typeof e?"undefined":c(e))}function a(e){return"symbol"==("undefined"==typeof e?"undefined":c(e))||r(e)&&k.call(e)==d}function u(e){if("number"==typeof e)return e;if(a(e))return s;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(l,"");var n=m.test(e);return n||b.test(e)?v(e.slice(2),n?2:8):p.test(e)?s:+e}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f="Expected a function",s=NaN,d="[object Symbol]",l=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,b=/^0o[0-7]+$/i,v=parseInt,y="object"==("undefined"==typeof t?"undefined":c(t))&&t&&t.Object===Object&&t,g="object"==("undefined"==typeof self?"undefined":c(self))&&self&&self.Object===Object&&self,h=y||g||Function("return this")(),w=Object.prototype,k=w.toString,x=Math.max,j=Math.min,O=function(){return h.Date.now()};e.exports=o}).call(t,function(){return this}())},function(e,t){(function(t){"use strict";function n(e,t,n){function i(t){var n=b,o=v;return b=v=void 0,O=t,g=e.apply(o,n)}function r(e){return O=e,h=setTimeout(s,t),S?i(e):g}function u(e){var n=e-w,o=e-O,i=t-n;return _?x(i,y-o):i}function f(e){var n=e-w,o=e-O;return void 0===w||n>=t||n<0||_&&o>=y}function s(){var e=j();return f(e)?d(e):void(h=setTimeout(s,u(e)))}function d(e){return h=void 0,E&&b?i(e):(b=v=void 0,g)}function l(){void 0!==h&&clearTimeout(h),O=0,b=w=v=h=void 0}function p(){return void 0===h?g:d(j())}function m(){var e=j(),n=f(e);if(b=arguments,v=this,w=e,n){if(void 0===h)return r(w);if(_)return h=setTimeout(s,t),i(w)}return void 0===h&&(h=setTimeout(s,t)),g}var b,v,y,g,h,w,O=0,S=!1,_=!1,E=!0;if("function"!=typeof e)throw new TypeError(c);return t=a(t)||0,o(n)&&(S=!!n.leading,_="maxWait"in n,y=_?k(a(n.maxWait)||0,t):y,E="trailing"in n?!!n.trailing:E),m.cancel=l,m.flush=p,m}function o(e){var t="undefined"==typeof e?"undefined":u(e);return!!e&&("object"==t||"function"==t)}function i(e){return!!e&&"object"==("undefined"==typeof e?"undefined":u(e))}function r(e){return"symbol"==("undefined"==typeof e?"undefined":u(e))||i(e)&&w.call(e)==s}function a(e){if("number"==typeof e)return e;if(r(e))return f;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(d,"");var n=p.test(e);return n||m.test(e)?b(e.slice(2),n?2:8):l.test(e)?f:+e}var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c="Expected a function",f=NaN,s="[object Symbol]",d=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,m=/^0o[0-7]+$/i,b=parseInt,v="object"==("undefined"==typeof t?"undefined":u(t))&&t&&t.Object===Object&&t,y="object"==("undefined"==typeof self?"undefined":u(self))&&self&&self.Object===Object&&self,g=v||y||Function("return this")(),h=Object.prototype,w=h.toString,k=Math.max,x=Math.min,j=function(){return g.Date.now()};e.exports=n}).call(t,function(){return this}())},function(e,t){"use strict";function n(e,t){a.push({selector:e,fn:t}),!u&&r&&(u=new r(o),u.observe(i.documentElement,{childList:!0,subtree:!0,removedNodes:!0})),o()}function o(){for(var e,t,n=0,o=a.length;n<o;n++){e=a[n],t=i.querySelectorAll(e.selector);for(var r,u=0,c=t.length;u<c;u++)r=t[u],r.ready||(r.ready=!0,e.fn.call(r,r))}}Object.defineProperty(t,"__esModule",{value:!0});var i=window.document,r=window.MutationObserver||window.WebKitMutationObserver,a=[],u=void 0;t.default=n},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,a=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,u=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,c=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,f=function(){function e(){n(this,e)}return i(e,[{key:"phone",value:function(){var e=o();return!(!r.test(e)&&!a.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=o();return!(!u.test(e)&&!c.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new f},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t,n){var o=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):"undefined"!=typeof o&&("false"===o||!n&&"true"!==o)&&e.node.classList.remove("aos-animate")},o=function(e,t){var o=window.pageYOffset,i=window.innerHeight;e.forEach(function(e,r){n(e,i+o,t)})};t.default=o},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(12),r=o(i),a=function(e,t){return e.forEach(function(e,n){e.node.classList.add("aos-init"),e.position=(0,r.default)(e.node,t.offset)}),e};t.default=a},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(13),r=o(i),a=function(e,t){var n=0,o=0,i=window.innerHeight,a={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(a.offset&&!isNaN(a.offset)&&(o=parseInt(a.offset)),a.anchor&&document.querySelectorAll(a.anchor)&&(e=document.querySelectorAll(a.anchor)[0]),n=(0,r.default)(e).top,a.anchorPlacement){case"top-bottom":break;case"center-bottom":n+=e.offsetHeight/2;break;case"bottom-bottom":n+=e.offsetHeight;break;case"top-center":n+=i/2;break;case"bottom-center":n+=i/2+e.offsetHeight;break;case"center-center":n+=i/2+e.offsetHeight/2;break;case"top-top":n+=i;break;case"bottom-top":n+=e.offsetHeight+i;break;case"center-top":n+=e.offsetHeight/2+i}return a.anchorPlacement||a.offset||isNaN(t)||(o=t),n+o};t.default=a},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}};t.default=n},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){e=e||document.querySelectorAll("[data-aos]");var t=[];return[].forEach.call(e,function(e,n){t.push({node:e})}),t};t.default=n}])});
//# sourceMappingURL=aos.js.map

/***/ }),

/***/ "./src/scripts/circleaudioplayer.js":
/*!******************************************!*\
  !*** ./src/scripts/circleaudioplayer.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * CircleAudioPlayer
 *
 * A minimalist audio player represented by a single button in a circle which
 * fills clockwise as the audio file progresses.
 *
 * Isolated to have no requirements.
 *
 * @param {object} options
 *   @prop {string} audio
 *   @prop {string} borderColor
 *   @prop {string} playedColor
 *   @prop {string} backgroundColor
 *   @prop {string} iconColor
 *   @prop {number} borderWidth
 *   @prop {number} size
 *   @prop {string} className - class to add to the canvas element
 *
 * @method {void} addEventListener (planned, not implemented)
 *   forwards to the canvas' addEventListener or the audio element's
 *   addEventListener, depending on whether or not the event string matches a
 *   media event
 *
 * @method {void} setAudio
 *   @param {string} audioUrl
 * @method {void} setSize
 *   @param {number} size
 * @method {void} appendTo
 *   @param {DOMElement} element
 * @method {void} play
 * @method {void} pause
 * @method {void} draw - force a redraw
 */
// requirements

// settings
var DEFAULTS = {
	borderColor: "#de9000",
	playedColor: "#ffffff",
	backgroundColor: "rgba(222,144,0,.2)",
	iconColor: "#ffffff",
	borderWidth: 2,
	size: 48,
	className: 'circle-audio-player'
};

// reused values
var pi = Math.PI;
var doublePi = pi * 2;
var arcOffset = -pi / 2;
var animTime = 200;
var loaderTime = 1800;

var CircleAudioPlayer = function (options) {
	options = options || {};
	for (var property in DEFAULTS) {
		this[property] = options[property] || DEFAULTS[property];
	}

	// create some things we need
	this._canvas = document.createElement('canvas');
	this._canvas.setAttribute('class', this.className + ' is-loading');
	this._canvas.addEventListener('mousedown', (function () {
		if (this.playing) {
			this.pause();
		}
		else {
			this.play();
		}
	}).bind(this));
	this._ctx = this._canvas.getContext('2d');

	// set up initial stuff
	this.setAudio(options.audio);
	this.setSize(this.size);

	// redraw loop
	(function cAPAnimationLoop (now) {
		// check if we need to update anything
		if (this.animating) {
			this._updateAnimations(now);
		}
		if (this._forceDraw || this.playing || this.animating || this.loading) {
			this._draw();
			this._forceDraw = false;
		}

		requestAnimationFrame(cAPAnimationLoop.bind(this));
	}).call(this, new Date().getTime());
};
CircleAudioPlayer.prototype = {
	// private methods
	_animateIcon: function (to, from) {
		// define a few things the first time
		this._animationProps = {
			animStart: null,
			from: from,
			to: to
		};
		if (from) {
			this.animating = true;
		}
		else {
			this._animationProps.current = this._icons[to].slice();
			this.draw();
		}
	},
	_updateAnimations: function (now) {
		this._animationProps.animStart = this._animationProps.animStart || now;
		var deltaTime = now - this._animationProps.animStart;
		var perc = (1 - Math.cos(deltaTime / animTime * pi / 2));
		if (deltaTime >= animTime) {
			this.animating = false;
			perc = 1;
			this._animationProps.current = this._icons[this._animationProps.to].slice();
			this.draw();
		}
		else {
			var from = this._icons[this._animationProps.from];
			var current = [];
			for (var i = 0; i < from.length; i++) {
				current.push([]);
				for (var j = 0; j < from[i].length; j++) {
					current[i].push([]);
					var to = this._icons[this._animationProps.to][i][j];
					current[i][j][0] = from[i][j][0] + (to[0] - from[i][j][0]) * perc;
					current[i][j][1] = from[i][j][1] + (to[1] - from[i][j][1]) * perc;
				}
			}
			this._animationProps.current = current;
		}
	},
	_draw: function (progress) {
		// common settings
		if (isNaN(progress)) {
			progress = this.audio.currentTime / this.audio.duration || 0;
		}

		// clear existing
		this._ctx.clearRect(0, 0, this.size, this.size);

		// draw bg
		this._ctx.beginPath();
		this._ctx.arc(this._halfSize, this._halfSize, this._halfSize - (this.borderWidth / 2), 0, doublePi);
		this._ctx.closePath();
		this._ctx.fillStyle = this.backgroundColor;
		this._ctx.fill();

		// draw border
		// our active path is already the full circle, so just stroke it
		this._ctx.lineWidth = this.borderWidth;
		this._ctx.strokeStyle = this.borderColor;
		this._ctx.stroke();

		// play progress
		if (progress > 0) {
			this._ctx.beginPath();
			this._ctx.arc(this._halfSize, this._halfSize, this._halfSize - (this.borderWidth / 2), arcOffset, arcOffset + doublePi * progress);
			this._ctx.strokeStyle = this.playedColor;
			this._ctx.stroke();
		}

		// icons
		this._ctx.fillStyle = this.iconColor;
		if (this.loading) {
			var loaderOffset = -Math.cos((new Date().getTime() % (loaderTime)) / (loaderTime) * pi) * doublePi - (pi / 3) - (pi / 2);
			this._ctx.beginPath();
			this._ctx.arc(this._halfSize, this._halfSize, this._halfSize / 3, loaderOffset, loaderOffset + pi / 3 * 2);
			this._ctx.strokeStyle = this.iconColor;
			this._ctx.stroke();
		}
		else {
			this._ctx.beginPath();
			var icon = (this._animationProps && this._animationProps.current) || this._icons.play;
			for (var i = 0; i < icon.length; i++) {
				this._ctx.moveTo(icon[i][0][0], icon[i][0][1]);

				for (var j = 1; j < icon[i].length; j++) {
					this._ctx.lineTo(icon[i][j][0], icon[i][j][1]);
				}
			}

			// this._ctx.closePath();
			this._ctx.fill();
			// stroke to fill in for retina
			this._ctx.strokeStyle = this.iconColor;
			this._ctx.lineWidth = 2;
			this._ctx.lineJoin = 'miter';
			this._ctx.stroke();
		}
	},
	_setState: function (state) {
		this.playing = false;
		this.loading = false;
		if (state === 'playing') {
			this.playing = true;
			this._animateIcon('pause', 'play');
		}
		else if (state === 'loading') {
			this.loading = true;
		}
		else if (this.state !== 'loading') {
			this._animateIcon('play', 'pause');
		}
		else {
			this._animateIcon('play', null);
		}
		this.state = state;
		this._canvas.setAttribute('class', this.className + ' is-' + state);
		this.draw();
	},
	// public methods
	draw: function () {
		this._forceDraw = true;
	},
	setSize: function (size) {
		this.size = size;
		this._halfSize = size / 2; // we do this a lot. it's not heavy, but why repeat?
		this._canvas.width = size;
		this._canvas.height = size;
		// set icon paths
		var iconSize = this.size / 2;
		var pauseGap = iconSize / 10;
		var playLeft = Math.cos(pi / 3 * 2) * (iconSize / 2) + this._halfSize;
		var playRight = iconSize / 2 + this._halfSize;
		var playHalf = (playRight - playLeft) / 2 + playLeft;
		var top = this._halfSize - Math.sin(pi / 3 * 2) * (iconSize / 2);
		var bottom = this.size - top;
		var pauseLeft = this._halfSize - iconSize / 3;
		var pauseRight = this.size - pauseLeft;
		this._icons = {
			play: [
				[
					[playLeft, top],
					[playHalf, (this._halfSize - top) / 2 + top],
					[playHalf, (this._halfSize - top) / 2 + this._halfSize],
					[playLeft, bottom]
				],
				[
					[playHalf, (this._halfSize - top) / 2 + top],
					[playRight, this._halfSize],
					[playRight, this._halfSize],
					[playHalf, (this._halfSize - top) / 2 + this._halfSize]
				]
			],
			pause: [
				[
					[pauseLeft, top + pauseGap],
					[this._halfSize - pauseGap, top + pauseGap],
					[this._halfSize - pauseGap, bottom - pauseGap],
					[pauseLeft, bottom - pauseGap]
				],
				[
					[this._halfSize + pauseGap, top + pauseGap],
					[pauseRight, top + pauseGap],
					[pauseRight, bottom - pauseGap],
					[this._halfSize + pauseGap, bottom - pauseGap]
				]
			]
		};

		if (this._animationProps && this._animationProps.current) {
			this._animateIcon(this._animationProps.to);
		}
		if (!this.playing) {
			this.draw();
		}
	},
	setAudio: function (audioUrl) {
		this.audio = new Audio(audioUrl);
		this._setState('loading');

		this.audio.addEventListener('canplaythrough', (function () {
			this._setState('paused');
		}).bind(this));
		this.audio.addEventListener('play', (function () {
			this._setState('playing');
		}).bind(this));
		this.audio.addEventListener('pause', (function () {
			// reset when finished
			if (this.audio.currentTime === this.audio.duration) {
				this.audio.currentTime = 0;
			}
			this._setState('paused');
		}).bind(this));
	},
	appendTo: function (element) {
		element.appendChild(this._canvas);
	},
	play: function () {
		this.audio.play();
	},
	pause: function () {
		this.audio.pause();
	}
};


// now init one as an example
var cap = new CircleAudioPlayer({
	audio: 'http://www.largesound.com/ashborytour/sound/AshboryBYU.mp3',
  size: 120,
  borderWidth: 4
});
// cap.appendTo(playerContainer);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/anastasiia_kostiv/Documents/GitHub/radio-LAG/radiostation/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map