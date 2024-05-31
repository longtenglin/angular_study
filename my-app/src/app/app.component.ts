import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {LoginComponent} from "../pages/login/login.component";
import {LoggerService} from "../pages/page04/component/myInjectable.component";

@Component({
  selector: 'app-root'
  , standalone: true
  , imports: [CommonModule, RouterOutlet, LoginComponent]
  , templateUrl: './app.component.html'
  , styleUrl: './app.component.scss'
  , providers: [
    {
      provide: LoggerService
      , useClass: LoggerService
    }
  ]
})
export class AppComponent {
  title = 'my-app';
  constructor(public loggerService: LoggerService) {
  }
}
