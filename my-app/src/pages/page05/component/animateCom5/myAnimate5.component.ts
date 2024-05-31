import {Component, Input} from "@angular/core";
import {animate, animation, keyframes, query, style, transition, trigger} from "@angular/animations";

@Component({
  templateUrl: './myAnimate5.component.html'
  , styleUrl: './myAnimate5.component.scss'
  , selector: 'app-my-animate5'
  , animations: [
    trigger(
      "animateTrigger5"
      , [
        transition(
          "start_5 <=> end_5"
          , [
            animate(
              2000
              , style({
                transform: 'rotate(360deg)'
              })
            )
            , query('div', animation(animate(1000, style({transform: 'translate(100px, 0)'}))), {limit: 1})
            , query('.inner-div-1', animate(1000, style({transform: 'rotateY(360deg)'})))
          ]
        )
      ]
    )
  ]
  , standalone: true
})
export class MyAnimate5Component {
  @Input('isStart')
  isStart = true;
}
