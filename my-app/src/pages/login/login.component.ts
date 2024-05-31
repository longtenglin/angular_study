import { Component } from "@angular/core";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-login'
  , standalone: true
  , templateUrl: 'login.component.html'
  ,
  imports: [
    RouterLink
  ],
  styleUrls: ['login.component.scss']
})

export class LoginComponent {

  btnValue = "Login Test";

  toNavigator = () => {

  }
}
