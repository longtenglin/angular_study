import {Component, HostBinding, HostListener} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {AppGetTypeDirective} from "./component/myDirective.component";
import {API_LIST_TYPE} from "../../app/app.type";

@Component({
  selector: 'app-page02'
  , standalone: true
  , templateUrl: 'page02.component.html'
  , styleUrl: 'page02.component.scss'
  , imports: [FormsModule, CommonModule, AppGetTypeDirective, AppGetTypeDirective]
})
export class Page02Component {


  inputText1: string = ""
  inputText2: string = ""
  typeValue: string = "text"
  apiList: API_LIST_TYPE[] = apiList

  @HostBinding('class')
  classes: string = 'app-page-flex app-page-flex-1'

  @HostListener('click', ['$event.target'])
  onClick(event: Event): void {
    console.log('@HostListener: 使用该注释监听了点击事件', event)
  }

  clickFunc(e: Event) {
    console.log("(click)='clickFunc()'：", e.target)
    console.log("inputText2: " + this.inputText2)
    this.inputText1 = this.inputText2;
    this.inputText2 = "手动设置"
  }
}

const apiList: API_LIST_TYPE[] = [
  {
    name: "@Attribute(attributeName)"
    , success: true
    , description: "指令构造函数的参数修饰器，用于指定宿主元素属性，其值作为常量字符串文字注入。"
  }
  , {
    name: "@Input(alias?, required?, transform?)"
    , success: true
    , description: "指令构造函数的参数修饰器，用于指定宿主元素属性，其值作为常量字符串文字注入。"
  }
  , {
    name: "@Direction(object)"
    , success: true
    , description: "定义自己的指令，以将自定义行为附加到 DOM 中的元素。"
  }
  , {
    name: "@HostBinding()"
    , success: true
    , description: "一个装饰器，用于把一个 DOM 属性标记为绑定到宿主的属性，并提供配置元数据。Angular 在变更检测期间会自动检查宿主属性绑定，如果这个绑定变化了，它就会更新该指令所在的宿主元素。\n"
  }
  , {
    name: "@HostListener(eventName?, args?)"
    , success: true
    , description: "一个装饰器，用于声明要监听的 DOM 事件，并提供在该事件发生时要运行的处理器方法。"
  }
  , {
    name: "FormsModule"
    , success: true
    , description: ""
  }
  , {
    name: "CommonModule"
    , success: true
    , description: ""
  }
]
