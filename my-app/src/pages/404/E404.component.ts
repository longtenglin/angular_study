import {Component, HostBinding} from "@angular/core";

@Component({
  selector: 'E404'
  , standalone: true
  , template: `
    <main class="app-page">
      <div>
        <h1>404 暂无资源</h1>
      </div>
    </main>
  `
  , styleUrl: 'E404.component.scss'
})
export class E404Component {

  @HostBinding('class')
  classes: string = 'app-page-flex app-page-flex-1'

}
