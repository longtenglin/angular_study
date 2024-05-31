import {Component, Input} from "@angular/core";
import {animate, group, style, transition, trigger} from "@angular/animations";

@Component({
  templateUrl: './myAnimate3.component.html'
  , styleUrl: './myAnimate3.component.scss'
  , selector: 'app-my-animate3'
  , animations: [
    trigger(
      "animateTrigger3"
      , [
        transition(
          "start_3 <=> end_3"
          , group([
            animate(
              1000
              , style({
                width: '150px'
                , height: '150px'
                , background: "red"
                , color: "white"
              })
            )
            , animate(
              2000
              , style({
                transform: 'rotate(360deg)'
              })
            )
          ])
        )
      ]
    )
  ]
  , standalone: true
})
export class MyAnimate3Component {
  @Input('isStart')
  isStart = true;
}
