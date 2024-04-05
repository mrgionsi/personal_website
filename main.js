"use strict";
(self["webpackChunkpersonalwebsite"] = self["webpackChunkpersonalwebsite"] || []).push([["main"],{

/***/ 7080:
/*!****************************************************!*\
  !*** ./src/app/about-page/about-page.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AboutPageComponent: () => (/* binding */ AboutPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class AboutPageComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function AboutPageComponent_Factory(t) {
    return new (t || AboutPageComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AboutPageComponent,
    selectors: [["app-about-page"]],
    decls: 18,
    vars: 0,
    consts: [["target", "_blank", "href", "https://it.wikipedia.org/wiki/Recale"], [1, "row", 2, "text-align", "center"]],
    template: function AboutPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "ABOUT US");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "WHO AM I?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Hi I'm Giovanni Pasquariello and I am 25 yo. I come from ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Recale ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "(CE). I am currently studing computer science at University of Salerno and in the meanwhile I am working as Integration Engineer at Ericsson Naples. \"Work makes man nobles\", my dad always said to me. I worked as waiter for many years when I was 17, in order to be indipendent. After first univeristy year I started to work on IT. I love play football and listen music. My hobbies are dancing, football with friends and coding of course. I learned during my work experience to help the other people to solve their problems, in every scope. This is important for a great team-work!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "My motto is always:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1)(12, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "BE LIQUID MY FRIEND.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Be flexible like the water, as it can adapt itself to every container, the same you should do in every situation: adapt yourself to the situation to solve your problem.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "This concept accompanies me along the working life as well :)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 4114:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);



const routes = [];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ }),

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _left_menu_left_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./left-menu/left-menu.component */ 6920);
/* harmony import */ var _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about-page/about-page.component */ 7080);
/* harmony import */ var _skill_page_skill_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./skill-page/skill-page.component */ 6856);
/* harmony import */ var _education_page_education_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./education-page/education-page.component */ 6534);
/* harmony import */ var _experience_page_experience_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./experience-page/experience-page.component */ 1264);
/* harmony import */ var _personal_work_page_personal_work_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./personal-work-page/personal-work-page.component */ 3986);
/* harmony import */ var _contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact-page/contact-page.component */ 5558);








class AppComponent {
  constructor() {
    this.title = 'Giovanni\'s Web Site';
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 56,
    vars: 0,
    consts: [[1, "container-fluid", "p-0"], [1, "row"], ["id", "left-menu-div", 1, "col-lg-3", "col-md-3", "col-sx-0", "text-center", "pl-0", "row-left"], [1, "col-lg-3", "col-md-3", "col-sx-0", "text-center", "pl-0", "row-left"], ["id", "app-page", 1, "col-sx-12", "col-lg-9", "col-md-9", "row-left"], [1, "row", "row-left"], [1, "col-12"], ["id", "welcome_component"], ["id", "hello-p"], ["data-aos", "fade-up-left", "data-aos-delay", "300"], ["data-aos-delay", "300", "data-aos", "fade-up-right"], ["target", "_blank", "href", "https://www.unisa.it/"], ["target", "_blank", "href", "https://www.ericsson.com/en"], ["data-aos-delay", "300", "data-aos", "fade-up-right", "href", "#about-page"], ["type", "button", 1, "btn", "btn-light", "mt-3"], ["id", "about-page", 1, "row", "center"], [1, "col-lg-3", "col-md-3", "col-sx-0", "text-center"], [1, "col-sx-12", "col-lg-9", "col-md-9", "mt-5"], ["id", "skill-page", 1, "row", "center"], ["id", "education-page", 1, "row", "center"], ["id", "experience-page", 1, "row", "center"], ["id", "personal-work-page", 1, "row", "center"], ["id", "contact-page", 1, "row", "center"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "app-left-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "div", 8)(10, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, " Ciao! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "I'm Giovanni");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "small", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "Studying computer Science at ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "Unisa");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "small", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, " Integration Engineer at ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23, "Ericsson");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24, " since 2019.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "small", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, "Actually learning microservices architecture.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "a", 13)(30, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31, "View portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](33, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](35, "app-about-page");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](37, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](39, "app-skill-page");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](41, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](43, "app-education-page");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](45, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](47, "app-experience-page");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](49, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](50, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](51, "app-personal-work-page");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](53, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](54, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](55, "app-contact-page");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      }
    },
    dependencies: [_left_menu_left_menu_component__WEBPACK_IMPORTED_MODULE_0__.LeftMenuComponent, _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_1__.AboutPageComponent, _skill_page_skill_page_component__WEBPACK_IMPORTED_MODULE_2__.SkillPageComponent, _education_page_education_page_component__WEBPACK_IMPORTED_MODULE_3__.EducationPageComponent, _experience_page_experience_page_component__WEBPACK_IMPORTED_MODULE_4__.ExperiencePageComponent, _personal_work_page_personal_work_page_component__WEBPACK_IMPORTED_MODULE_5__.PersonalWorkPageComponent, _contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_6__.ContactPageComponent],
    styles: ["#left-menu-div[_ngcontent-%COMP%] {\n  position: fixed;\n  padding-right: 0%;\n}\n\n.row-left[_ngcontent-%COMP%] {\n  margin-left: 0%;\n  margin-right: 0%;\n  padding-right: 0;\n  padding-left: 0;\n}\n\n#welcome_component[_ngcontent-%COMP%] {\n  background-image: url('zagreb-5319-min.jpg');\n  width: 100vw;\n  height: 100vh;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n#hello-p[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 16em;\n  right: 50em;\n  z-index: 100001;\n  color: white;\n}\n\n#hello-p[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 40px;\n  font-family: \"Playfair Display\", Georgia, serif;\n}\n\n#hello-p[_ngcontent-%COMP%]    > small[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n\n.btn-light[_ngcontent-%COMP%] {\n  border: 1px solid black;\n  background-color: transparent;\n}\n\n.btn-light[_ngcontent-%COMP%]:hover {\n  border: 1px solid black;\n  background-color: white;\n}\n\n@media only screen and (max-width: 450px) {\n  div[_ngcontent-%COMP%]   #hello-p[_ngcontent-%COMP%] {\n    right: 4em;\n    z-index: 100001;\n    color: #f9fafb;\n  }\n}\n@media only screen and (max-width: 800px) {\n  #welcome_component[_ngcontent-%COMP%] {\n    width: calc(100% - 0px);\n    overflow-x: hidden;\n  }\n  body[_ngcontent-%COMP%] {\n    overflow-x: hidden;\n    margin-left: 5%;\n  }\n  div[_ngcontent-%COMP%]   #hello-p[_ngcontent-%COMP%] {\n    right: 4em;\n    top: 23em;\n    z-index: 100001;\n    color: #f9fafb;\n  }\n  .btn-light[_ngcontent-%COMP%] {\n    color: white;\n    text-align: center;\n  }\n  .center[_ngcontent-%COMP%] {\n    display: block;\n    margin: 2rem;\n  }\n  .timeline[_ngcontent-%COMP%] {\n    padding: 100px -1px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLDRDQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFDSjs7QUFTQTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLCtDQUFBO0FBTko7O0FBU0E7RUFDSSxlQUFBO0FBTko7O0FBU0E7RUFDSSx1QkFBQTtFQUNBLDZCQUFBO0FBTko7O0FBU0E7RUFDSSx1QkFBQTtFQUNBLHVCQUFBO0FBTko7O0FBU0E7RUFDSTtJQUNJLFVBQUE7SUFDQSxlQUFBO0lBQ0EsY0FBQTtFQU5OO0FBQ0Y7QUFTQTtFQUNJO0lBQ0ksdUJBQUE7SUFDQSxrQkFBQTtFQVBOO0VBU0U7SUFDSSxrQkFBQTtJQUNBLGVBQUE7RUFQTjtFQVNFO0lBQ0ksVUFBQTtJQUNBLFNBQUE7SUFDQSxlQUFBO0lBQ0EsY0FBQTtFQVBOO0VBU0U7SUFDSSxZQUFBO0lBQ0Esa0JBQUE7RUFQTjtFQVNFO0lBQ0ksY0FBQTtJQUNBLFlBQUE7RUFQTjtFQVNFO0lBQ0ksbUJBQUE7RUFQTjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiI2xlZnQtbWVudS1kaXYge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgcGFkZGluZy1yaWdodDogMCU7XHJcbn1cclxuXHJcbi5yb3ctbGVmdCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDAlO1xyXG4gICAgcGFkZGluZy1yaWdodDogMDtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxufVxyXG5cclxuI3dlbGNvbWVfY29tcG9uZW50IHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL2Fzc2V0cy9pbWFnZXMvemFncmViLTUzMTktbWluLmpwZ1wiKTtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuI2hlbGxvLXAge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxNmVtO1xyXG4gICAgcmlnaHQ6IDUwZW07XHJcbiAgICB6LWluZGV4OiAxMDAwMDE7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi8vICNuYW1lLXAge1xyXG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgICAgdG9wOiAxOGVtO1xyXG4vLyAgICAgcmlnaHQ6IDExZW07XHJcbi8vICAgICB6LWluZGV4OiAxMDAwMDE7XHJcbi8vICAgICBjb2xvcjogYmxhY2s7XHJcbi8vIH1cclxuI2hlbGxvLXA+cCB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlBsYXlmYWlyIERpc3BsYXlcIiwgR2VvcmdpYSwgc2VyaWY7XHJcbn1cclxuXHJcbiNoZWxsby1wPnNtYWxsIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG5cclxuLmJ0bi1saWdodCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uYnRuLWxpZ2h0OmhvdmVyIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcclxuICAgIGRpdiAjaGVsbG8tcCB7XHJcbiAgICAgICAgcmlnaHQ6IDRlbTtcclxuICAgICAgICB6LWluZGV4OiAxMDAwMDE7XHJcbiAgICAgICAgY29sb3I6ICNmOWZhZmI7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAgICN3ZWxjb21lX2NvbXBvbmVudCB7XHJcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDBweCk7XHJcbiAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgfVxyXG4gICAgYm9keSB7XHJcbiAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuICAgIH1cclxuICAgIGRpdiAjaGVsbG8tcCB7XHJcbiAgICAgICAgcmlnaHQ6IDRlbTtcclxuICAgICAgICB0b3A6IDIzZW07XHJcbiAgICAgICAgei1pbmRleDogMTAwMDAxO1xyXG4gICAgICAgIGNvbG9yOiAjZjlmYWZiO1xyXG4gICAgfVxyXG4gICAgLmJ0bi1saWdodCB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5jZW50ZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIG1hcmdpbjogMnJlbTtcclxuICAgIH1cclxuICAgIC50aW1lbGluZSB7XHJcbiAgICAgICAgcGFkZGluZzogMTAwcHggLTFweDtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 635:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 4114);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 92);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 8418);
/* harmony import */ var _left_menu_left_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./left-menu/left-menu.component */ 6920);
/* harmony import */ var _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about-page/about-page.component */ 7080);
/* harmony import */ var _skill_page_skill_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./skill-page/skill-page.component */ 6856);
/* harmony import */ var _education_page_education_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./education-page/education-page.component */ 6534);
/* harmony import */ var _experience_page_experience_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./experience-page/experience-page.component */ 1264);
/* harmony import */ var _experience_page_workexperience_timeline_workexperience_timeline_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./experience-page/workexperience-timeline/workexperience-timeline.component */ 7343);
/* harmony import */ var _personal_work_page_personal_work_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./personal-work-page/personal-work-page.component */ 3986);
/* harmony import */ var _contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./contact-page/contact-page.component */ 5558);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 7580);













class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _left_menu_left_menu_component__WEBPACK_IMPORTED_MODULE_2__.LeftMenuComponent, _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_3__.AboutPageComponent, _skill_page_skill_page_component__WEBPACK_IMPORTED_MODULE_4__.SkillPageComponent, _education_page_education_page_component__WEBPACK_IMPORTED_MODULE_5__.EducationPageComponent, _experience_page_experience_page_component__WEBPACK_IMPORTED_MODULE_6__.ExperiencePageComponent, _experience_page_workexperience_timeline_workexperience_timeline_component__WEBPACK_IMPORTED_MODULE_7__.WorkexperienceTimelineComponent, _personal_work_page_personal_work_page_component__WEBPACK_IMPORTED_MODULE_8__.PersonalWorkPageComponent, _contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_9__.ContactPageComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbModule]
  });
})();

/***/ }),

/***/ 5558:
/*!********************************************************!*\
  !*** ./src/app/contact-page/contact-page.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactPageComponent: () => (/* binding */ ContactPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class ContactPageComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function ContactPageComponent_Factory(t) {
    return new (t || ContactPageComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ContactPageComponent,
    selectors: [["app-contact-page"]],
    decls: 40,
    vars: 0,
    consts: [["rel", "stylesheet", "href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtrustConstantResourceUrl"]`https://pro.fontawesome.com/releases/v5.10.0/css/all.css`, "integrity", "sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p", "crossorigin", "anonymous"], [1, "row"], [1, "row", "icons", "text-center"], [1, "col-1"], [1, "col-sx-3", "col-md-2", "col-lg-1"], ["target", "_blank", "href", "https://t.me/mr_gionsi"], [1, "fab", "fa-2x", "fa-telegram-plane", "fa-light", "m-5", "grow", "dark"], [1, "col-sx-2", "col-md-2", "col-lg-1"], ["target", "_blank", "href", "mailto:g.pasquariello96@gmail.com"], [1, "fas", "fa-2x", "fa-envelope-open-text", "fa-light", "m-5", "grow", "dark"], ["target", "_blank", "href", "tel:3454526037"], [1, "fas", "fa-2x", "fa-envelope-open-text", "fa-phone", "m-5", "grow", "dark"], [1, "col-2"], ["target", "_blank", "href", "../../assets/downloads/CV-Pasquariello Giovanni.pdf"], [1, "fas", "fa-2x", "fa-file-download", "fa-light", "m-5", "grow", "dark"], ["target", "_blank", "href", "http://github.com/mrgionsi"], [1, "fas", "fa-2x", "fa-code-branch", "fa-light", "m-5", "grow", "dark"], ["target", "_blank", "href", "https://www.facebook.com/giovanni.pasquariello.16"], [1, "fab", "fa-2x", "fa-facebook-f", "fa-light", "m-5", "grow", "dark"], ["target", "_blank", "href", "https://instagram.com/mr_gionsi/"], [1, "fab", "fa-2x", "fa-instagram", "fa-light", "m-5", "grow", "dark", 2, "border-radius", "40%"], ["target", "_blank", "href", "https://www.linkedin.com/in/giovanni-pasquariello-5a6215151/"], [1, "fab", "fa-2x", "fa-linkedin-in", "fa-light", "m-5", "grow", "dark"]],
    template: function ContactPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "GET IN TOUCH");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "CONTACT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1)(6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Below you can find all links to keep in touch with me. You can drop me a message on Telegram to have a quick chat. Emails are an evergreen if you want to keep it professional!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "You can also download my Curriculum vitae below!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4)(13, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7)(16, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7)(19, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7)(23, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 7)(26, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 7)(29, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 7)(32, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 7)(35, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 1)(38, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Made with Angular \u2764\uFE0F. Copyright \u24B8 Giovanni Pasquariello 2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
    },
    styles: [".image-contact[_ngcontent-%COMP%] {\n  width: 7em;\n  height: 5em;\n  right: -25%;\n  position: relative;\n}\n\n.dark[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.grow[_ngcontent-%COMP%] {\n  overflow: hidden;\n  transition-duration: 0.8s;\n  transition-property: transform;\n}\n\n.grow[_ngcontent-%COMP%]:hover {\n  transform: rotate(360deg);\n  -webkit-transform: rotate(360deg);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29udGFjdC1wYWdlL2NvbnRhY3QtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0VBQ0EsaUNBQUE7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbIi5pbWFnZS1jb250YWN0IHtcclxuICAgIHdpZHRoOiA3ZW07XHJcbiAgICBoZWlnaHQ6IDVlbTtcclxuICAgIHJpZ2h0OiAtMjUlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uZGFyayB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5ncm93IHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjhzO1xyXG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xyXG59XHJcblxyXG4uZ3Jvdzpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 6534:
/*!************************************************************!*\
  !*** ./src/app/education-page/education-page.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EducationPageComponent: () => (/* binding */ EducationPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class EducationPageComponent {
  constructor() {}
  ngOnInit() {}
  expandcollapse(collapseId, event) {
    var a = document.getElementById(collapseId)?.classList;
    if (a?.contains("show")) {
      a?.remove("show");
      event.path[2].style.background = 'none';
      event.path[0].style.color = 'black';
    } else {
      a?.add("show");
      event.path[2].style.background = '#2d98f0';
      event.path[0].style.color = 'white';
    }
  }
  static #_ = this.ɵfac = function EducationPageComponent_Factory(t) {
    return new (t || EducationPageComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: EducationPageComponent,
    selectors: [["app-education-page"]],
    decls: 43,
    vars: 0,
    consts: [[1, "row"], [1, "col-12"], ["id", "accordionExample", 1, "accordion"], [1, "card"], ["id", "headingOne", 1, "card-header"], [1, "mb-0"], ["type", "button", "data-toggle", "collapse", "data-target", "#collapseOne", "aria-expanded", "true", "aria-controls", "collapseOne", 1, "btn", "btn-link", 3, "click"], ["id", "collapseOne", "aria-labelledby", "headingOne", "data-parent", "#accordionExample", 1, "collapse"], [1, "card-body"], ["id", "headingTwo", 1, "card-header"], ["type", "button", "data-toggle", "collapse", "data-target", "#collapseTwo", "aria-expanded", "false", "aria-controls", "collapseTwo", 1, "btn", "btn-link", "collapsed", 3, "click"], ["id", "collapseTwo", "aria-labelledby", "headingTwo", "data-parent", "#accordionExample", 1, "collapse"], ["id", "headingThree", 1, "card-header"], ["type", "button", "data-toggle", "collapse", "data-target", "#collapseThree", "aria-expanded", "false", "aria-controls", "collapseThree", 1, "btn", "btn-link", "collapsed", 3, "click"], ["id", "collapseThree", "aria-labelledby", "headingThree", "data-parent", "#accordionExample", 1, "collapse"]],
    template: function EducationPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "EDUCATION");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "MY EDUCATION");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 0)(5, "div", 1)(6, "div", 2)(7, "div", 3)(8, "div", 4)(9, "h5", 5)(10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EducationPageComponent_Template_button_click_10_listener($event) {
          return ctx.expandcollapse("collapseOne", $event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " DEGREE IN COMPUTER SCIENCE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7)(13, "div", 8)(14, "p")(15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Target Degree: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " 2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Degree in Computer Scienze at University of Fisciano (SA) U.N.I.S.A.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 3)(22, "div", 9)(23, "h5", 5)(24, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EducationPageComponent_Template_button_click_24_listener($event) {
          return ctx.expandcollapse("collapseTwo", $event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " ERASMUS PLUS: BRUSSELS (2016) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 11)(27, "div", 8)(28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "3 months Erasmus in Brussels (Belgium) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Stage about web development (HTML, CSS, JS) and use of Wordpress at Service Plan Brussels.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 3)(33, "div", 12)(34, "h5", 5)(35, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EducationPageComponent_Template_button_click_35_listener($event) {
          return ctx.expandcollapse("collapseThree", $event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " DIPLOMA IN INFORMATION TECHNOLOGY (2015) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 14)(38, "div", 8)(39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "DIPLOMA IN INFORMATION TECHNOLOGY AT I.T.I.S. F. Giordani, Caserta. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Vote: 83/100 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
      }
    },
    styles: ["div[_ngcontent-%COMP%], p[_ngcontent-%COMP%], span[_ngcontent-%COMP%] {\n  font-family: \"Quicksand\", Arial, sans-serif;\n  font-weight: 400;\n  font-size: 15px;\n  line-height: 1.8;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.btn-link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: black;\n}\n\n.card-body[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%], .card-body[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%], .card-body[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  color: #97cbf7;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZWR1Y2F0aW9uLXBhZ2UvZWR1Y2F0aW9uLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztFQUdJLDJDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQUNKOztBQUVBO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7OztFQUdJLGNBQUE7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbImRpdixcclxucCxcclxuc3BhbiB7XHJcbiAgICBmb250LWZhbWlseTogXCJRdWlja3NhbmRcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuODtcclxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XHJcbn1cclxuXHJcbi5idG4tbGluayB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5jYXJkLWJvZHk+cD5zcGFuLFxyXG4uY2FyZC1ib2R5PnNwYW4sXHJcbi5jYXJkLWJvZHk+cCB7XHJcbiAgICBjb2xvcjogIzk3Y2JmNztcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 1264:
/*!**************************************************************!*\
  !*** ./src/app/experience-page/experience-page.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExperiencePageComponent: () => (/* binding */ ExperiencePageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _workexperience_timeline_workexperience_timeline_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./workexperience-timeline/workexperience-timeline.component */ 7343);


class ExperiencePageComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function ExperiencePageComponent_Factory(t) {
    return new (t || ExperiencePageComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ExperiencePageComponent,
    selectors: [["app-experience-page"]],
    decls: 7,
    vars: 0,
    consts: [[1, "row"], [1, "col-12"]],
    template: function ExperiencePageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "EXPERIENCE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "WORK EXPERIENCE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 0)(5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "app-workexperience-timeline");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
    },
    dependencies: [_workexperience_timeline_workexperience_timeline_component__WEBPACK_IMPORTED_MODULE_0__.WorkexperienceTimelineComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 7343:
/*!**********************************************************************************************!*\
  !*** ./src/app/experience-page/workexperience-timeline/workexperience-timeline.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WorkexperienceTimelineComponent: () => (/* binding */ WorkexperienceTimelineComponent)
/* harmony export */ });
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aos */ 7502);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);


class WorkexperienceTimelineComponent {
  constructor() {}
  ngOnInit() {
    aos__WEBPACK_IMPORTED_MODULE_0__.init();
  }
  static #_ = this.ɵfac = function WorkexperienceTimelineComponent_Factory(t) {
    return new (t || WorkexperienceTimelineComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: WorkexperienceTimelineComponent,
    selectors: [["app-workexperience-timeline"]],
    decls: 29,
    vars: 0,
    consts: [[1, "timeline"], [1, "entry"], ["data-aos", "fade-right", 1, "title"], ["data-aos", "fade-left", 1, "body"], ["href", "www.ericsson.com"]],
    template: function WorkexperienceTimelineComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "2019 - Present");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "IE, Ericsson");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 3)(8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Integration Engineer, Ericsson");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Engineer for dynamic activation system, provisioning and sim activation for O2 UK Customer. Experience on service provisioning ( 2G, 3G, 4G and VoLTE ). QoS for customer solution, assurance of working system. System integration, based on the requirement. Use of Agile Methodology in a non-development project. Design, test verification and test management are reported on Jira/Confluence. Use of XRay plugin on Jira for manual testing. Owner of testing automation software. (See Work section).");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p")(13, "small")(14, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Ericsson");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 1)(17, "div", 2)(18, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "2017 - 2018");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Web Developer, 3EM Group");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 3)(23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Developer, 3EM Group");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Internship for web development - HTML, CSS, Javascript.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Development of Monitoring system using .NET Framework and pure web technologies ( HTML, CSS, JS). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      }
    },
    styles: ["@charset \"UTF-8\";\nbody[_ngcontent-%COMP%] {\n  background: linear-gradient(55deg, #4E75B9 30%, #5CBF98 90%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 100vh;\n  width: 100vw;\n  margin: 0;\n  padding: 12vh 100px;\n  font-family: \"Source Sans Pro\", arial, sans-serif;\n  font-weight: 300;\n  color: #333;\n  box-sizing: border-box;\n}\nbody[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\n.timeline[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 800px;\n  background: #fff;\n  padding: 100px 20px;\n  position: relative;\n}\n.timeline[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  top: 0px;\n  left: calc(33% + 15px);\n  bottom: 0px;\n  width: 4px;\n  background: #ddd;\n}\n.timeline[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.entry[_ngcontent-%COMP%] {\n  clear: both;\n  text-align: left;\n  position: relative;\n}\n.entry[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin-bottom: 0.5em;\n  float: left;\n  width: 33%;\n  padding-right: 30px;\n  text-align: right;\n  position: relative;\n}\n.entry[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  width: 4px;\n  height: 4px;\n  border: 4px solid salmon;\n  background-color: #fff;\n  border-radius: 100%;\n  top: 15%;\n  right: -4px;\n  z-index: 99;\n}\n.entry[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 120%;\n}\n.entry[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 100%;\n}\n.entry[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%] {\n  margin: 0 0 3em;\n  float: right;\n  width: 66%;\n  padding-left: 30px;\n}\n.entry[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  line-height: 1.4em;\n}\n.entry[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:first-child {\n  margin-top: 0;\n  font-weight: 400;\n}\n.entry[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  color: #aaa;\n  padding-left: 0;\n  list-style-type: none;\n}\n.entry[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before {\n  content: \"\u2013\";\n  margin-right: 0.5em;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZXhwZXJpZW5jZS1wYWdlL3dvcmtleHBlcmllbmNlLXRpbWVsaW5lL3dvcmtleHBlcmllbmNlLXRpbWVsaW5lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUloQjtFQUNJLDREQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxpREFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FBRko7QUFHSTtFQUNJLHNCQUFBO0FBRFI7O0FBS0E7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFGSjtBQUlJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBakNPO0VBa0NQLGdCQUFBO0FBRlI7QUFJSTtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQUZSOztBQU1BO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFISjtBQUlJO0VBQ0ksb0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQXBEQztFQXFERCxpQkFBQTtFQUNBLGtCQUFBO0FBRlI7QUFHUTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBeERHO0VBeURILFdBekRHO0VBMERILHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQURaO0FBR1E7RUFDSSxTQUFBO0VBQ0EsZUFBQTtBQURaO0FBR1E7RUFDSSxTQUFBO0VBQ0EsZUFBQTtBQURaO0FBSUk7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFoRkM7QUE4RVQ7QUFHUTtFQUNJLGtCQUFBO0FBRFo7QUFFWTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtBQUFoQjtBQUdRO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQURaO0FBRVk7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7QUFBaEIiLCJzb3VyY2VzQ29udGVudCI6WyIkY29udGFpbmVyLXNoYWRvdzogMC41cmVtIDAuNXJlbSAycmVtIDAgcmdiYShibGFjaywgMC4yKTtcclxuJGd1dHRlcjogMzBweDtcclxuJGJvcmRlci13aWR0aDogNHB4O1xyXG4kZG90LWRpYW1ldGVyOiA0cHg7XHJcbmJvZHkge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDU1ZGVnLCAjNEU3NUI5IDMwJSwgIzVDQkY5OCA5MCUpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMTJ2aCAxMDBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgYXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgKiB7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIH1cclxufVxyXG5cclxuLnRpbWVsaW5lIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiA4MDBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAxMDBweCAyMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLy8gYm94LXNoYWRvdzogJGNvbnRhaW5lci1zaGFkb3c7XHJcbiAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMHB4O1xyXG4gICAgICAgIGxlZnQ6IGNhbGMoMzMlICsgMTVweCk7IC8vJGd1dHRlci8yXHJcbiAgICAgICAgYm90dG9tOiAwcHg7XHJcbiAgICAgICAgd2lkdGg6ICRib3JkZXItd2lkdGg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2RkZDtcclxuICAgIH1cclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgZGlzcGxheTogdGFibGU7XHJcbiAgICAgICAgY2xlYXI6IGJvdGg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5lbnRyeSB7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAudGl0bGUge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IC41ZW07XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgd2lkdGg6IDMzJTtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAkZ3V0dGVyO1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAkZG90LWRpYW1ldGVyO1xyXG4gICAgICAgICAgICBoZWlnaHQ6ICRkb3QtZGlhbWV0ZXI7XHJcbiAgICAgICAgICAgIGJvcmRlcjogJGJvcmRlci13aWR0aCBzb2xpZCBzYWxtb247XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICAgICAgICAgIHRvcDogMTUlO1xyXG4gICAgICAgICAgICByaWdodDogLSRkb3QtZGlhbWV0ZXI7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDk5O1xyXG4gICAgICAgIH1cclxuICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMjAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmJvZHkge1xyXG4gICAgICAgIG1hcmdpbjogMCAwIDNlbTtcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgd2lkdGg6IDY2JTtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6ICRndXR0ZXI7XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjRlbTtcclxuICAgICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB1bCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjYWFhO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgICAgICAgbGk6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiw6LCgMKTXCI7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IC41ZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHt9Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 6920:
/*!**************************************************!*\
  !*** ./src/app/left-menu/left-menu.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LeftMenuComponent: () => (/* binding */ LeftMenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class LeftMenuComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function LeftMenuComponent_Factory(t) {
    return new (t || LeftMenuComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: LeftMenuComponent,
    selectors: [["app-left-menu"]],
    decls: 33,
    vars: 0,
    consts: [["id", "main-left-col"], [1, "p-2"], [1, "col-lg-12", "col-md-12"], ["src", "assets/images/me_sea.jpg", "id", "rounded_me_image"], [1, "p-1", "mt-3"], [1, "font-weight-bold"], [1, "p-1", "occupation"], [1, "p-1"], [1, "nav", "flex-column", "nav-menu"], [1, "nav-item"], ["href", "#app-page", 1, "nav-link", "active"], ["href", "#about-page", 1, "nav-link"], ["href", "#skill-page", 1, "nav-link"], ["href", "#education-page", 1, "nav-link"], ["href", "#experience-page", 1, "nav-link"], ["href", "#personal-work-page", 1, "nav-link"], ["href", "#contact-page", 1, "nav-link"]],
    template: function LeftMenuComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4)(5, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Giovanni Pasquariello");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6)(8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Web Developer in Italy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7)(11, "ul", 8)(12, "li", 9)(13, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "HOME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 9)(16, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "ABOUT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 9)(19, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "SKILLS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 9)(22, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "EDUCATION");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 9)(25, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "EXPERIENCE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 9)(28, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "WORK");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 9)(31, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "CONTACT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      }
    },
    styles: ["#main-left-col[_ngcontent-%COMP%] {\n  background-color: #f2f3f7;\n  height: 100vh;\n}\n\n#rounded_me_image[_ngcontent-%COMP%] {\n  width: 175px;\n  height: 175px;\n  border-radius: 50%;\n}\n\n.occupation[_ngcontent-%COMP%] {\n  font-family: \"Quicksand\", Arial, sans-serif;\n  font-weight: 400;\n  font-size: 15px;\n  line-height: 1.8;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.nav-menu[_ngcontent-%COMP%] {\n  list-style: none;\n  font-size: 12px;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  text-decoration: none;\n  position: relative;\n  padding: 10px 0;\n  font-family: \"Quicksand\", Arial, sans-serif;\n}\n\nul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.7);\n}\n\nul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover, ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > .active[_ngcontent-%COMP%] {\n  letter-spacing: 1px;\n  text-decoration: underline;\n  color: #2c98f0;\n  font-weight: bold;\n}\n\n@media only screen and (max-width: 850px) {\n  #main-left-col[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbGVmdC1tZW51L2xlZnQtbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksMkNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLDJDQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtBQUNKOztBQUVBOztFQUVJLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFHQTtFQUNJO0lBQ0ksYUFBQTtFQUFOO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFpbi1sZWZ0LWNvbCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmM2Y3O1xyXG4gICAgaGVpZ2h0OiAxMDB2aFxyXG59XHJcblxyXG4jcm91bmRlZF9tZV9pbWFnZSB7XHJcbiAgICB3aWR0aDogMTc1cHg7XHJcbiAgICBoZWlnaHQ6IDE3NXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4ub2NjdXBhdGlvbiB7XHJcbiAgICBmb250LWZhbWlseTogXCJRdWlja3NhbmRcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuODtcclxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XHJcbn1cclxuXHJcbi5uYXYtbWVudSB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUXVpY2tzYW5kXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG51bD5saT5hIHtcclxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XHJcbn1cclxuXHJcbnVsPmxpPmE6aG92ZXIsXHJcbnVsPmxpPi5hY3RpdmUge1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgY29sb3I6ICMyYzk4ZjA7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vL3Jlc3BvbnNpdmUgXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODUwcHgpIHtcclxuICAgICNtYWluLWxlZnQtY29sIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 3986:
/*!********************************************************************!*\
  !*** ./src/app/personal-work-page/personal-work-page.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PersonalWorkPageComponent: () => (/* binding */ PersonalWorkPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class PersonalWorkPageComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function PersonalWorkPageComponent_Factory(t) {
    return new (t || PersonalWorkPageComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: PersonalWorkPageComponent,
    selectors: [["app-personal-work-page"]],
    decls: 93,
    vars: 0,
    consts: [[1, "row"], [1, "col-sx-12", "col-md-5", "col-lg-5"], ["data-aos", "fade-down-left", 1, "services", "service-2"], [1, "desc"], ["target", "_blank", "href", "https://u-work.it"], ["target", "_blank", "href", "https://gestionale-magazzino.gionsihome.duckdns.org/"], ["data-aos", "fade-down-right", 1, "services", "service-1"], ["target", "_blank", "href", "http://clickeat.herokuapp.com/"]],
    template: function PersonalWorkPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "MY WORK");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "RECENT WORK");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 0)(5, "div", 1)(6, "div", 2)(7, "div", 3)(8, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "U-Work ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " U-Work Co-Producer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul")(13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Python Flask ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Angular 16");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "ORM,Postgres");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Docker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Jitsi Meet Self Hostes and customized");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Keycloak Integration for Authentication");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p")(26, "small")(27, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Go to website");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 1)(30, "div", 2)(31, "div", 3)(32, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "IT Gestionale Magazzino ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Gestionale Magazzino developed to handle product storing and selling. Made with Angular, Angular Material, Python, Postgres. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "ul")(37, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Python Flask, Guvicorn ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Angular 15");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Angular Material");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "ORM,Postgres");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Docker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p")(48, "small")(49, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Go to website");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Access with Username = admin; Password = Admin123.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 1)(54, "div", 6)(55, "div", 3)(56, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "ClickEat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "University project. Development of restaurant software management. Requirement was to create a software to handle customer orders, generate the bill and take the ordination. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Use of Java, Java Servlet and HTML, CSS, JS. MySQL has been used as database.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "For demo: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "ul")(65, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Username: g.pasquariello");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Password: g.pasquariello");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p")(70, "small")(71, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Go to website");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Note: Website is hosted on free website, connection could be slow.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 1)(76, "div", 2)(77, "div", 3)(78, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Testing Automation ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " Owner of testing automation software for E///. Idea was born performing tests in a manual way, to speed up the testing process and testing verification. Use of Agile Methodology, from requirement on Confluence to task on Jira. Adopting DevOps philosophy , creating a pipeline for CI/CD from code analysis, compile, testing and deploy (On \"server\" and/or Docker creation). Jira Integration, using Jira API to report an issue on a space and attaching evidence. Technologies used: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "ul")(83, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " Java Spring Boot ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Angular 8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "JPA,H2 In memory");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Docker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, " Future idea will be to migrate monothic application to Microservices architecture.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      }
    },
    styles: [".services[_ngcontent-%COMP%] {\n  box-shadow: 0 0 56px -8px rgba(0, 0, 0, 0.17);\n  border-bottom: 2px solid #2c98f0;\n  padding: 5%;\n  height: 98%;\n}\n\n.services[_ngcontent-%COMP%]    > .desc[_ngcontent-%COMP%]    > h4[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  text-transform: uppercase;\n  font-family: \"Quicksand\", Arial, sans-serif;\n  margin-bottom: 30px;\n  color: #000;\n}\n\n.services[_ngcontent-%COMP%]    > .desc[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%], .services[_ngcontent-%COMP%]    > .desc[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%], .services[_ngcontent-%COMP%]    > .desc[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%], .services[_ngcontent-%COMP%]    > .desc[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%], .services[_ngcontent-%COMP%]    > .desc[_ngcontent-%COMP%]    > small[_ngcontent-%COMP%], .services[_ngcontent-%COMP%]    > .desc[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  display: block;\n  margin-block-start: 1em;\n  margin-block-end: 1em;\n  margin-inline-start: 0px;\n  margin-inline-end: 0px;\n  font-family: \"Quicksand\", Arial, sans-serif;\n  font-weight: 400;\n  font-size: 15px;\n  line-height: 1.8;\n  color: rgba(0, 0, 0, 0.7);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGVyc29uYWwtd29yay1wYWdlL3BlcnNvbmFsLXdvcmstcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDZDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSwyQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBOzs7Ozs7RUFNSSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbIi5zZXJ2aWNlcyB7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgNTZweCAtOHB4IHJnYigwIDAgMCAvIDE3JSk7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzJjOThmMDtcclxuICAgIHBhZGRpbmc6IDUlO1xyXG4gICAgaGVpZ2h0OiA5OCU7XHJcbn1cclxuXHJcbi5zZXJ2aWNlcz4uZGVzYz5oNCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZFwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICBjb2xvcjogIzAwMDtcclxufVxyXG5cclxuLnNlcnZpY2VzPi5kZXNjPnAsXHJcbi5zZXJ2aWNlcz4uZGVzYz5zcGFuLFxyXG4uc2VydmljZXM+LmRlc2M+dWwsXHJcbi5zZXJ2aWNlcz4uZGVzYz5saSxcclxuLnNlcnZpY2VzPi5kZXNjPnNtYWxsLFxyXG4uc2VydmljZXM+LmRlc2M+YSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1ibG9jay1zdGFydDogMWVtO1xyXG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMWVtO1xyXG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogMHB4O1xyXG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IDBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZFwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS44O1xyXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgLjcpO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 6856:
/*!****************************************************!*\
  !*** ./src/app/skill-page/skill-page.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SkillPageComponent: () => (/* binding */ SkillPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class SkillPageComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function SkillPageComponent_Factory(t) {
    return new (t || SkillPageComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SkillPageComponent,
    selectors: [["app-skill-page"]],
    decls: 70,
    vars: 0,
    consts: [[1, "row"], [1, "col-lg-6", "col-md-6", "col-sx-12"], [1, "progress-wrap"], [1, "progress"], ["data-aos", "fade-right", "role", "progressbar", "aria-valuenow", "80", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "color-3", 2, "width", "80%"], ["data-aos", "fade-right", "role", "progressbar", "aria-valuenow", "75", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "color-4", 2, "width", "75%"], ["data-aos", "fade-right", "role", "progressbar", "aria-valuenow", "75", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "color-5", 2, "width", "75%"], ["data-aos", "fade-right", "role", "progressbar", "aria-valuenow", "70", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "color-2", 2, "width", "70%"], ["data-aos", "fade-right", "role", "progressbar", "aria-valuenow", "45", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "color-9", 2, "width", "45%"], ["data-aos", "fade-right", "role", "progressbar", "aria-valuenow", "85", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "color-10", 2, "width", "85%"], ["data-aos", "fade-right", "role", "progressbar", "aria-valuenow", "70", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "color-6", 2, "width", "70%"], ["data-aos", "fade-right", "role", "progressbar", "aria-valuenow", "75", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "color-7", 2, "width", "50%"], ["data-aos", "fade-right", "role", "progressbar", "aria-valuenow", "73", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "color-8", 2, "width", "73%"]],
    template: function SkillPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "SKILLS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "MY SKILLS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 0)(5, "div", 1)(6, "div", 2)(7, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "HTML");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3)(10, "div", 4)(11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "80%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 2)(14, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "CSS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 3)(17, "div", 5)(18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "75%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 2)(21, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Javascript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 3)(24, "div", 6)(25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "75%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 2)(28, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 3)(31, "div", 7)(32, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "70%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 2)(35, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Python");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 3)(38, "div", 8)(39, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "45%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 1)(42, "div", 2)(43, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Java");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 3)(46, "div", 9)(47, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "85%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 2)(50, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Docker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 3)(53, "div", 10)(54, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "70%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 2)(57, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Kubernetes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 3)(60, "div", 11)(61, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "50%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 2)(64, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "DevOps");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 3)(67, "div", 12)(68, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "73%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      }
    },
    styles: [".progress-wrap[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.progress-bar.color-1[_ngcontent-%COMP%]:after {\n  background: #2c98f0;\n}\n\n.progress[_ngcontent-%COMP%] {\n  height: 8px;\n  border-radius: 9.5px;\n  box-shadow: none;\n  background: #f2f3f7;\n  overflow: visible;\n}\n.progress[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  position: relative;\n  box-shadow: none;\n  font-size: 12px;\n  line-height: 1.2;\n  color: #000;\n  font-weight: 600;\n  text-align: right;\n  position: relative;\n  overflow: visible;\n}\n.progress[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]::after {\n  content: \"\";\n  width: 12px;\n  height: 12px;\n  position: absolute;\n  border-radius: 100%;\n  right: 0px;\n}\n\n.progress-bar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -22px;\n  right: 0;\n  color: black;\n}\n\n.progress-bar.color-2[_ngcontent-%COMP%]::after, .progress-bar.color-2[_ngcontent-%COMP%] {\n  background: #ec5453;\n}\n\n.progress-bar.color-3[_ngcontent-%COMP%]::after, .progress-bar.color-3[_ngcontent-%COMP%] {\n  background-color: #f9bf3f;\n  background: #f9bf3f;\n}\n\n.progress-bar.color-4[_ngcontent-%COMP%]::after, .progress-bar.color-4[_ngcontent-%COMP%] {\n  background: #a84cb8;\n}\n\n.progress-bar.color-5[_ngcontent-%COMP%]::after, .progress-bar.color-5[_ngcontent-%COMP%] {\n  background: #2fa499;\n}\n\n.progress-bar.color-6[_ngcontent-%COMP%]::after, .progress-bar.color-6[_ngcontent-%COMP%] {\n  background: #1274c5;\n}\n\n.progress-bar.color-7[_ngcontent-%COMP%]::after, .progress-bar.color-7[_ngcontent-%COMP%] {\n  background: #4054b2;\n}\n\n.progress-bar.color-8[_ngcontent-%COMP%]::after, .progress-bar.color-8[_ngcontent-%COMP%] {\n  background: #848ba7;\n}\n\n.progress-bar.color-9[_ngcontent-%COMP%]::after, .progress-bar.color-9[_ngcontent-%COMP%] {\n  background: rgb(54, 108, 156);\n}\n\n.progress-bar.color-10[_ngcontent-%COMP%]::after, .progress-bar.color-10[_ngcontent-%COMP%] {\n  background: #c01313;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2tpbGwtcGFnZS9za2lsbC1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFDSjtBQUFJO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBRVI7QUFEUTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FBR1o7O0FBR0E7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtBQUFKOztBQUdBOztFQUVJLG1CQUFBO0FBQUo7O0FBR0E7O0VBRUkseUJBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUdBOztFQUVJLG1CQUFBO0FBQUo7O0FBR0E7O0VBRUksbUJBQUE7QUFBSjs7QUFHQTs7RUFFSSxtQkFBQTtBQUFKOztBQUdBOztFQUVJLG1CQUFBO0FBQUo7O0FBR0E7O0VBRUksbUJBQUE7QUFBSjs7QUFHQTs7RUFFSSw2QkFBQTtBQUFKOztBQUdBOztFQUVJLG1CQUFBO0FBQUoiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZ3Jlc3Mtd3JhcCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4ucHJvZ3Jlc3MtYmFyLmNvbG9yLTE6YWZ0ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzJjOThmMDtcclxufVxyXG5cclxuLnByb2dyZXNzIHtcclxuICAgIGhlaWdodDogOHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOS41cHg7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogI2YyZjNmNztcclxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gICAgLnByb2dyZXNzLWJhciB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gICAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgd2lkdGg6IDEycHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTJweDtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgICAgICAgICByaWdodDogMHB4O1xyXG4gICAgICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjEyLCAxNCwgMTQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnByb2dyZXNzLWJhciBzcGFuIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogLTIycHg7XHJcbiAgICByaWdodDogMDtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLnByb2dyZXNzLWJhci5jb2xvci0yOjphZnRlcixcclxuLnByb2dyZXNzLWJhci5jb2xvci0yIHtcclxuICAgIGJhY2tncm91bmQ6ICNlYzU0NTM7XHJcbn1cclxuXHJcbi5wcm9ncmVzcy1iYXIuY29sb3ItMzo6YWZ0ZXIsXHJcbi5wcm9ncmVzcy1iYXIuY29sb3ItMyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjliZjNmO1xyXG4gICAgYmFja2dyb3VuZDogI2Y5YmYzZjtcclxufVxyXG5cclxuLnByb2dyZXNzLWJhci5jb2xvci00OjphZnRlcixcclxuLnByb2dyZXNzLWJhci5jb2xvci00IHtcclxuICAgIGJhY2tncm91bmQ6ICNhODRjYjg7XHJcbn1cclxuXHJcbi5wcm9ncmVzcy1iYXIuY29sb3ItNTo6YWZ0ZXIsXHJcbi5wcm9ncmVzcy1iYXIuY29sb3ItNSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMmZhNDk5O1xyXG59XHJcblxyXG4ucHJvZ3Jlc3MtYmFyLmNvbG9yLTY6OmFmdGVyLFxyXG4ucHJvZ3Jlc3MtYmFyLmNvbG9yLTYge1xyXG4gICAgYmFja2dyb3VuZDogIzEyNzRjNTtcclxufVxyXG5cclxuLnByb2dyZXNzLWJhci5jb2xvci03OjphZnRlcixcclxuLnByb2dyZXNzLWJhci5jb2xvci03IHtcclxuICAgIGJhY2tncm91bmQ6ICM0MDU0YjI7XHJcbn1cclxuXHJcbi5wcm9ncmVzcy1iYXIuY29sb3ItODo6YWZ0ZXIsXHJcbi5wcm9ncmVzcy1iYXIuY29sb3ItOCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjODQ4YmE3O1xyXG59XHJcblxyXG4ucHJvZ3Jlc3MtYmFyLmNvbG9yLTk6OmFmdGVyLFxyXG4ucHJvZ3Jlc3MtYmFyLmNvbG9yLTkge1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDU0IDEwOCAxNTYpO1xyXG59XHJcblxyXG4ucHJvZ3Jlc3MtYmFyLmNvbG9yLTEwOjphZnRlcixcclxuLnByb2dyZXNzLWJhci5jb2xvci0xMCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYzAxMzEzO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 5312:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
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
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 635);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 5312);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map