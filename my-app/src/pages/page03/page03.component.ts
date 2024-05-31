import {Component, HostBinding} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {Tab2Component} from "./component/Tab2/Tab2.component";
import {Tab} from "./component/Tab/tab.component";
import {Pane} from "./component/pane.component";
import {AppConChild} from "./component/ConChild.component";
import {API_LIST_TYPE} from "../../app/app.type";

@Component({
  selector: 'app-page03'
  , standalone: true
  , templateUrl: 'page03.component.html'
  , styleUrl: 'page03.component.scss'
  , imports: [FormsModule, CommonModule, AppConChild, Tab, Pane, Tab2Component]
})
export class Page03Component {

  apiList: API_LIST_TYPE[] = apiList
  shouldShow:number = 0
  shouldShowTab2: boolean = true;
  isStart: boolean = true;

  @HostBinding('class')
  classes: string = 'app-page-flex app-page-flex-1'

  toggle() {
    this.shouldShow++;
    this.shouldShow = this.shouldShow % 3
  }

  toggleChildren(): void {
    this.shouldShowTab2 = !this.shouldShowTab2
  }

  isStartFunc(): void {
    this.isStart = !this.isStart
  }
}

const apiList: API_LIST_TYPE[] = [
  {
    name: "@Direction(object)"
    , success: true
    , description: "定义自己的指令，以将自定义行为附加到 DOM 中的元素。"
  }
  , {
    name: "@ContentChild(Class)"
    , success: true
    , description: "用于配置内容查询的参数装饰器。"
  }
  , {
    name: "@ContentChildren(Class)"
    , success: true
    , description: "用于配置内容查询的参数装饰器。"
  }
  , {
    name: "trigger(name, definitions[])"
    , success: true
    , description: "创建一个有名字的动画触发器，包含一个 state() 和 transition() 的列表，当此触发器的绑定表达式发生变化时，它们就会重新求值。"
  }
]
