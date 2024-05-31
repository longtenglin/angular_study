import {Component, Input} from "@angular/core";
import {animate, sequence, style, transition, trigger} from "@angular/animations";

@Component({
  templateUrl: './myAnimate2.component.html'
  , styleUrl: './myAnimate2.component.scss'
  , selector: 'app-my-animate2'
  , animations: [
    trigger(
      "animateTrigger2"
      , [
        transition(
          "start_2 <=> end_2"
          , sequence([
            animate(
              1000
              , style({
                transform: 'rotate(360deg)'
              })
            )
            , animate(
              1000
              , style({
                width: '150px'
                , height: '150px'
                , background: "red"
                , color: "white"
              }))
          ])
        )
      ]
    )
  ]
  , standalone: true
})
export class MyAnimate2Component {
  @Input('isStart')
  isStart = true;
}
