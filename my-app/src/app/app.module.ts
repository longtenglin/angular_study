import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {LoggerService} from "../pages/page04/component/myInjectable.component";
import {provideRouter, RouterModule} from "@angular/router";
import {routes} from "./app.routes";
import {provideClientHydration} from "@angular/platform-browser";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  bootstrap: [
    AppComponent
  ]
  , imports: [
    BrowserAnimationsModule
    , CommonModule
    , FormsModule
    , ReactiveFormsModule
    , RouterModule
    , HttpClientModule
  ]
  , providers: [
    provideRouter(routes)
    , provideClientHydration()
    , {
      provide: LoggerService
      , useClass: LoggerService
    }
  ]
})

export class AppModule {}
