import {Component, HostBinding} from "@angular/core";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-other-answer'
  , standalone: true
  , templateUrl: './OtherAnswer.component.html'
  ,
  imports: [
    NgOptimizedImage
  ],
  styleUrl: './OtherAnswer.component.scss'
})
export class OtherAnswerComponent {

  @HostBinding('class')
  classes = 'app-page-flex app-page-flex-1'


}
