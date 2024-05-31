import {Component, Input} from "@angular/core";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  templateUrl: './myAnimate.component.html'
  , styleUrl: './myAnimate.component.scss'
  , selector: 'app-my-animate'
  , animations: [
    trigger(
      "animateTrigger"
      , [
        state(
          "start"
          , style({
            width: '50px'
            , height: '50px'
            , background: "green"
            , color: "white"
          })
        )
        , state(
          "end"
          , style({
            width: '150px'
            , height: '150px'
            , background: "red"
            , color: "white"
          })
        )
        , transition(
          'start <=> end'
          , animate(2000)
        )
      ]
    )
  ]
  , standalone: true
})
export class MyAnimateComponent {
  @Input('isStart')
  isStart = true;
}
