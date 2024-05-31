import {Component, Input} from "@angular/core";
import {
  animate,
  animateChild,
  animation,
  group,
  keyframes,
  query,
  style,
  transition,
  trigger
} from "@angular/animations";

@Component({
  templateUrl: './myAnimate6.component.html'
  , styleUrl: './myAnimate6.component.scss'
  , selector: 'app-my-animate6'
  , animations: [
    trigger(
      "animateTrigger6"
      , [
        transition(
          "start_6 <=> end_6"
          , [
            group([
              animate(
                2000
                , style({
                  transform: 'rotate(360deg)'
                })
              )
              , query('@animateTrigger6_child', [
                animateChild()
              ])
            ])
          ]
        )
      ]
    )
    ,trigger(
      "animateTrigger6_child"
      , [
        transition(
          "start_6 <=> end_6"
          , [
            animate(
              1500
              , style({
                transform: 'translate(100px, 0)'
              })
            )
          ]
        )
      ]
    )
  ]
  , standalone: true
})
export class MyAnimate6Component {
  @Input('isStart')
  isStart = true;
}
