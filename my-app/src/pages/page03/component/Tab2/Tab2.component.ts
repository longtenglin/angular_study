import {Component, ContentChildren, QueryList} from "@angular/core";
import {Pane} from "../pane.component";

@Component({
  selector: 'tab2',
  template: `
    <div class="top-level">Top level panes: {{serializedPanes}}</div>
    <div class="nested">Arbitrary nested panes: {{serializedNestedPanes}}</div>
  `,
  standalone: true
  , styleUrl: 'Tab2.component.scss'
})
export class Tab2Component {

  @ContentChildren(Pane) topLevelPanes!: QueryList<Pane>;
  @ContentChildren(Pane, {descendants: true}) arbitraryNestedPanes!: QueryList<Pane>;

  get serializedPanes(): string {
    return this.topLevelPanes ? this.topLevelPanes.map(p => p.id).join(', ') : '';
  }
  get serializedNestedPanes(): string {
    return this.arbitraryNestedPanes ? this.arbitraryNestedPanes.map(p => p.id).join(', ') : '';
  }

  ngAfterViewChecked(): void {
    console.log('@ContentChildren: this.topLevelPanes: ', this.topLevelPanes)
    console.log('@ContentChildren: this.arbitraryNestedPanes: ', this.arbitraryNestedPanes)
  }
}
