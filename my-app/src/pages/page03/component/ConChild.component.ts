import {Directive, Input} from "@angular/core";

@Directive({
  selector: '[appConChild]'
  , standalone: true
})

export class AppConChild {
  @Input() id: string | undefined | null;
}
