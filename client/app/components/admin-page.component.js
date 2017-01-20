"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import the component declare in order to create a new one
var core_1 = require('@angular/core');
var admin_page_service_1 = require("../services/admin-page.service");
//create new component
var AdminPageComponent = (function () {
    function AdminPageComponent(adminPageService) {
        this.adminPageService = adminPageService;
        //window.location.reload(true);
    }
    AdminPageComponent = __decorate([
        core_1.Component({
            //his label in the HTML code
            selector: 'admin-page',
            //the code that will be read when the component will be called
            templateUrl: './app/pages/admin-page.component.html',
            //the style of the code
            styleUrls: ['./app/styles/admin-page.component.css'],
            providers: [admin_page_service_1.AdminPageService]
        }), 
        __metadata('design:paramtypes', [admin_page_service_1.AdminPageService])
    ], AdminPageComponent);
    return AdminPageComponent;
}());
exports.AdminPageComponent = AdminPageComponent;
//# sourceMappingURL=admin-page.component.js.map