import {Component, Input} from "@angular/core";
import {animate, animation, keyframes, query, style, transition, trigger, useAnimation} from "@angular/animations";

let animate_rotateY_360 = useAnimation(animation(animate(1000, style({transform: 'rotateY(360deg)'}))))

@Component({
  templateUrl: './myAnimate8.component.html'
  , styleUrl: './myAnimate8.component.scss'
  , selector: 'app-my-animate8'
  , animations: [
    trigger(
      "animateTrigger8"
      , [
        transition(
          "start_8 <=> end_8"
          , [
            animate_rotateY_360
            , query('div', animate_rotateY_360, {limit: 1})
            , query('.inner-div-1', animate_rotateY_360)
          ]
        )
      ]
    )
  ]
  , standalone: true
})
export class MyAnimate8Component {
  @Input('isStart')
  isStart = true;
}

// create a
