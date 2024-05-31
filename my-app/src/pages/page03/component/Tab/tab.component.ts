import {Component, ContentChild} from "@angular/core";
import {AppConChild} from "../ConChild.component";

@Component({
  selector: 'tab',
  template: `
    <div>T: {{appConChild.id}}</div>
  `
  , standalone: true
})
export class Tab {
  @ContentChild(AppConChild) appConChild!: AppConChild;
  // @ContentChild(Pane) appConChild!: Pane;

  ngAfterContentChecked() {
    if (this.appConChild.id == 'pane_2') {
      console.log('子元素的子元素带有 appConChild指令：' + this.appConChild.id)
    } else {
      console.log(this.appConChild.id)
    }
  }
}
