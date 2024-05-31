import {Component, Input} from "@angular/core";
import {animate, keyframes, style, transition, trigger} from "@angular/animations";

@Component({
  templateUrl: './myAnimate4.component.html'
  , styleUrl: './myAnimate4.component.scss'
  , selector: 'app-my-animate4'
  , animations: [
    trigger(
      "animateTrigger4"
      , [
        transition(
          "start_4 <=> end_4"
          , animate(
            2000
            , keyframes(
              [
                style({backgroundColor: "red"})
                , style({backgroundColor: "blue"})
                , style({backgroundColor: "orange"})
                , style({backgroundColor: "black"})
              ]
            )
          )
        )
      ]
    )
  ]
  , standalone: true
})
export class MyAnimate4Component {
  @Input('isStart')
  isStart = true;
}
