import {Component, HostBinding} from "@angular/core";
import {API_LIST_TYPE} from "../../app/app.type";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-page07'
  , standalone: true
  , templateUrl: 'page07.component.html'
  , imports: [NgForOf, NgIf]
  , styleUrl: 'page07.component.scss'
})

export class Page07Component {

  @HostBinding('class')
  classes: string = 'app-page-flex app-page-flex-1'

  apiList: API_LIST_TYPE[] = API_LIST
  infoStr: string = '假装这是一个由父组件传入的数据，或者从DB总取得的数据'

  addInputBox() {
    return ('<div class="zn-bg-red zn-show-height">'+ this.infoStr + '</div>')
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
