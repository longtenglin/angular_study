import {Component, Input} from "@angular/core";
import {animate, animation, group, query, stagger, style, transition, trigger} from "@angular/animations";

@Component({
  templateUrl: './myAnimate7.component.html'
  , styleUrl: './myAnimate7.component.scss'
  , selector: 'app-my-animate7'
  , animations: [
    trigger(
      "animateTrigger7"
      , [
        transition(
          "start_7 <=> end_7"
          , [
              query('div'
                , [
                  stagger('2000ms', [
                    animation(animate(1000, style({transform: 'translate(100px, 0)'})))
                  ])
                ]
              )
          ]
        )
      ]
    )
  ]
  , standalone: true
})
export class MyAnimate7Component {
  @Input('isStart')
  isStart = true;
}
