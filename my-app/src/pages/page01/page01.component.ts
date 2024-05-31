import {Component, HostBinding} from "@angular/core";

@Component({
  selector: 'app-page01'
  , standalone: true
  , templateUrl: 'page01.component.html'
  , styleUrl: 'page01.component.scss'
})

export class Page01Component {

  countBtnText:string = "Add"
  count:number = 0;
  consoleText:string = "";

  @HostBinding('class')
  classes: string = 'app-page-flex app-page-flex-1'

  ngOnInit(): void {
    console.log("ngOnInit(): 在 Angular 第一次显示数据绑定和设置指令/组件的输入属性之后，初始化指令/组件。")
    console.log("ngOnInit(): 在第一轮 ngOnChanges() 完成之后调用，只调用一次。而且即使没有调用过 ngOnChanges()，也仍然会调用 ngOnInit()（比如当模板中没有绑定任何输入属性时）。")
  }

  ngOnChanges(): void {
    console.log(this.count)
    console.log("ngOnChanges(): 当 Angular 设置或重新设置数据绑定的输入属性时响应。该方法接受当前和上一属性值的 SimpleChanges 对象。")
    console.log("ngOnChanges(): 如果组件绑定过输入属性，那么在 ngOnInit() 之前以及所绑定的一个或多个输入属性的值发生变化时都会调用。")
  }

  ngDoCheck(): void {
    console.log("ngDoCheck(): 检测，并在发生 Angular 无法或不愿意自己检测的变化时作出反应。");
    console.log("ngDoCheck(): 紧跟在每次执行变更检测时的 ngOnChanges() 和 首次执行变更检测时的 ngOnInit() 后调用。")
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit(): 当 Angular 把外部内容投影进组件视图或指令所在的视图之后调用。")
    console.log("ngAfterContentInit(): 第一次 ngDoCheck() 之后调用，只调用一次。")
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked(): 每当 Angular 检查完被投影到组件或指令中的内容之后调用。")
    console.log("ngAfterContentChecked(): ngAfterContentInit() 和每次 ngDoCheck() 之后调用。")
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit(): 当 Angular 初始化完组件视图及其子视图或包含该指令的视图之后调用。")
    console.log("ngAfterViewInit(): 第一次 ngAfterContentChecked() 之后调用，只调用一次。")
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked(): 每当 Angular 做完组件视图和子视图或包含该指令的视图的变更检测之后调用。")
    console.log("ngAfterViewChecked(): ngAfterViewInit() 和每次 ngAfterContentChecked() 之后调用。")
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy(): 每当 Angular 每次销毁指令/组件之前调用并清扫。在这儿反订阅可观察对象和分离事件处理器，以防内存泄漏。")
    console.log("ngOnDestroy(): 在 Angular 销毁指令或组件之前立即调用。")
  }

  add(): void {
    this.count++;
    console.log(this.count)
  }
}
