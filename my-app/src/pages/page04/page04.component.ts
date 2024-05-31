import {Component, HostBinding, Inject, Optional} from "@angular/core";
import {API_LIST_TYPE} from "../../app/app.type";
import {AppConChild} from "../page03/component/ConChild.component";
import {NgForOf, NgIf} from "@angular/common";
import {LoggerService} from "./component/myInjectable.component";

@Component({
  selector: 'app-page04'
  , standalone: true
  , templateUrl: 'page04.component.html'
  ,
  imports: [
    AppConChild,
    NgForOf,
    NgIf
  ],
  styleUrl: 'page04.component.scss'
})

export class Page04Component {

  apiList:API_LIST_TYPE[] = API_LIST
  constructor(public loggerService: LoggerService) {
    this.loggerService.info("123")
  }

  @HostBinding('class')
  classes: string = 'app-page-flex app-page-flex-1'

  clickFunc() {
    this.loggerService.info("您点击了一个按钮，并输出了一个值：", undefined, null)
  }

}

const API_LIST: API_LIST_TYPE[] = [
  {
    name: "@Injectable(providedIn?)",
    success: false,
    description: "标记性元数据，表示一个类可以由 Injector 进行创建。"
  }
  , {
    name: "@NgModule()",
    success: false,
    description: "把一个类标记为 NgModule，并提供配置元数据。"
  }
]
