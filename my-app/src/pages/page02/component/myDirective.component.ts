import {Attribute, Directive, Input} from "@angular/core";

@Directive({
  selector: 'input[appGetType]'
  , standalone: true
})

export class AppGetTypeDirective {
  @Input() type: string | undefined | null;
  constructor(@Attribute("type") type: string) {
    console.log("在构造函数中使用 @Attribute 获取 type 属性，并打印其值：", type)
    console.warn("只能获取到 type 属性，而不能获取到 [type] 属性。即使两个属性是一个。")
  }

  ngOnInit() {
    console.log("<input type='?'/>: 使用 @Input 注解获取 type 属性", this.type)
  }
}
