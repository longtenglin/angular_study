import {NgModule} from "@angular/core";
import {Page04Component} from "../page04.component";

class Greeter {
  greet(name: string) {
    return 'Hello ' + name + '!'
  }
}
@NgModule({
  id: 'app-my-module'
  , providers: [
    Greeter
  ]
  , jit: true
  , bootstrap: [Page04Component]
})
export class MyNgModule {
  greeter: Greeter
  constructor(greeter: Greeter) {
    this.greeter = greeter
  }

  clickModuleFunc() {
    this.greeter.greet("Mr.ZhaoNan");
  }
}
