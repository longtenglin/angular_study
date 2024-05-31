import {Component, HostBinding} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {API_LIST_TYPE} from "../../app/app.type";
import {MyAnimateComponent} from "./component/animateCom/myAnimate.component";
import {MyAnimate2Component} from "./component/animateCom2/myAnimate2.component";
import {MyAnimate3Component} from "./component/animateCom3/myAnimate3.component";
import {MyAnimate4Component} from "./component/animateCom4/myAnimate4.component";
import {MyAnimate5Component} from "./component/animateCom5/myAnimate5.component";
import {MyAnimate6Component} from "./component/animateCom6/myAnimate6.component";
import {MyAnimate7Component} from "./component/animateCom7/myAnimate7.component";
import {MyAnimate8Component} from "./component/animateCom8/myAnimate8.component";

@Component({
  selector: 'app-page05'
  , standalone: true
  , templateUrl: 'page05.component.html'
  , styleUrl: 'page05.component.scss'
  ,
  imports: [FormsModule, CommonModule, MyAnimate2Component, MyAnimateComponent, MyAnimate3Component, MyAnimate4Component, MyAnimate5Component, MyAnimate6Component, MyAnimate7Component, MyAnimate8Component]
})
export class Page05Component {

  apiList: API_LIST_TYPE[] = apiList
  shouldShow:number = 0
  shouldShowTab2: boolean = true;
  isStart: boolean[] = [true, true, true, true, true, true, true, true, true];

  @HostBinding('class')
  classes: string = 'app-page-flex app-page-flex-1'

  isStartFunc(index: number) {
    this.isStart[index] = !this.isStart[index];
  }

  isStartFuncAll(): void {
    this.isStart = this.isStart.map(item => {
      return !item
    })
  }
}

const apiList: API_LIST_TYPE[] = [
  {
    name: "trigger(name, definitions)"
    , success: true
    , description: "创建一个有名字的动画触发器，包含一个 state() 和 transition() 的列表，当此触发器的绑定表达式发生变化时，它们就会重新求值。"
  }
  , {
    name: "transition(stateChangeExpr, steps, options)"
    , success: true
    , description: "声明一个转场动画，以便在满足给定条件时运行一系列动画步骤。"
  }
  , {
    name: "animate(timings, styles)"
    , success: true
    , description: "定义一个动画步骤，它把一些样式信息和时序信息组合在一起。"
  }
  , {
    name: "style(tokens)"
    , success: true
    , description: "声明一个包含 CSS 属性/样式的键值对象，可在动画序列中用作动画状态（state），或在调用 animate() 和 keyframes() 时作为传入的样式数据。"
  }
  , {
    name: "state(name, styles, options)"
    , success: true
    , description: "在附加到元素的触发器上，声明一个动画状态。"
  }
  , {
    name: "group(steps, options)"
    , success: true
    , description: "定义一个可以并行运行的动画步骤列表。"
  }
  , {
    name: "sequence(steps, options)"
    , success: true
    , description: "定义一个动画步骤列表，逐个依次运行它们。"
  }
  , {
    name: "keyframes(steps, options)"
    , success: true
    , description: "可定义一组动画样式，每个样式都关联着一个可选的 offset 值。"
  }
  , {
    name: "animateChild(options)"
    , success: true
    , description: "在一个动画序列中执行一个查询到的内部动画元素。"
  }
  , {
    name: "query(selector, steps, options)"
    , success: true
    , description: "在动画序列中正在播放的元素中查找一个或多个内部元素。和 animateChild() 一起使用。"
  }
  , {
    name: "useAnimation"
    , success: true
    , description: "启动一个使用 animation() 函数创建的可复用动画。返回一个包含动画参数的对象。"
  }
]
