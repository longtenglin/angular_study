import {Directive, Input} from "@angular/core";

@Directive({
  selector: 'pane'
  , standalone: true
})
export class Pane{
  @Input() id!: string;
}
