//import the rxjs extensions
import '../rxjs/rxjs-extensions';

//import the object modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

//import the components and services
import { AppComponent }  from '../components/app.component';
import { SimpleSearchComponent } from '../components/simple-search.component';
import { AdvanceSearchComponent } from '../components/advance-search.component';
import { LoginComponent } from '../components/login.component'
import { FileDetailComponent } from '../components/file-detail.component';
import { FileService } from '../services/file.service';
import { PagerService } from '../services/pager.service';
import { LoginService } from '../services/login.service';

//import the routes
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  //import the object modules to the project
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    JsonpModule
  ],
  //declaration the components in the project
  declarations: [
    AppComponent,
    SimpleSearchComponent,
    AdvanceSearchComponent,
    FileDetailComponent,
    LoginComponent
  ],
  providers: [
    FileService,
    PagerService,
    LoginService
  ],
  //bootstrap the main component
  bootstrap: [ AppComponent ]
})
export class AppModule { }