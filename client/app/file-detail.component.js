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
var router_1 = require('@angular/router');
//import the service "HeroService" from the file "./hero.service"
var file_service_1 = require('./file.service');
//create new component
var FileDetailComponent = (function () {
    function FileDetailComponent(fileService, route) {
        this.fileService = fileService;
        this.route = route;
    }
    FileDetailComponent.prototype.ngOnChanges = function () { };
    FileDetailComponent.prototype.goBack = function () {
        //visible and hidden change
        var regularSearch = document.getElementById("regular");
        regularSearch.className = "hidden";
        var advanceSearch = document.getElementById("advance");
        advanceSearch.className = "visible";
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], FileDetailComponent.prototype, "files", void 0);
    FileDetailComponent = __decorate([
        core_1.Component({
            //his label in the HTML code
            selector: 'my-file-detail',
            //the code that will be read when the component will be called
            templateUrl: 'app/pages/file-detail.component.html',
            styleUrls: ['app/styles/file-detail.component.css'],
        }), 
        __metadata('design:paramtypes', [file_service_1.FileService, router_1.ActivatedRoute])
    ], FileDetailComponent);
    return FileDetailComponent;
}());
exports.FileDetailComponent = FileDetailComponent;
//# sourceMappingURL=file-detail.component.js.map