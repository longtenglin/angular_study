import {Component} from "@angular/core";
import {routes} from "../../app/app.routes";
import {RouterLink, RouterOutlet, Routes} from "@angular/router";
import {CommonModule} from "@angular/common";


@Component({
  selector: 'app-home'
  , standalone: true
  , templateUrl: 'home.component.html'
  ,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink
  ],
  styleUrl: 'home.component.scss'
})
export class HomeComponent {

  routeArr:Routes = []

  ngOnInit(): void {
    this.routeArr = routes[0].children ?? [];
  }
}
