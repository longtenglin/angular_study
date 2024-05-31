import {Component, HostBinding} from "@angular/core";
import {API_LIST_TYPE} from "../../app/app.type";
import {NgForOf, NgIf} from "@angular/common";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-page06'
  , standalone: true
  , templateUrl: 'page06.component.html'
  , imports: [NgForOf, NgIf]
  , styleUrl: 'page06.component.scss'
})

export class Page06Component {

  apiList: API_LIST_TYPE[] = API_LIST
  httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  @HostBinding('class')
  classes: string = 'app-page-flex app-page-flex-1'

  clickFunc() {
  }

  getInfo() {
    this.httpClient.get("http://localhost:3000/locations").subscribe(data => {
      console.log(data)
    })
  }
}

const API_LIST: API_LIST_TYPE[] = [
  {
    name: "@Injectable(providedIn?)"
    , success: false
    , description: "标记性元数据，表示一个类可以由 Injector 进行创建。"
  }
  , {
    name: "@NgModule()"
    , success: false
    , description: "把一个类标记为 NgModule，并提供配置元数据。"
  }
]
