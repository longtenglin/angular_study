import {Component, HostBinding} from "@angular/core";
import {API_LIST_TYPE} from "../../app/app.type";
import {NgForOf, NgIf} from "@angular/common";
import { MatSelect } from "@angular/material/select";

@Component({
  selector: 'app-page-10'
  , standalone: true
  , templateUrl: "page10.component.html"
  , imports: [NgForOf, NgIf, MatSelect]
  , styleUrls: ["page10.component.scss"]
})

export class Page10Component {

  @HostBinding('class')
  classes: string = 'app-page-flex app-page-flex-1'

  apiList: API_LIST_TYPE[] = API_LIST

  createBucket() {
  
  }
}

const API_LIST: API_LIST_TYPE[] = [
  {
    name: ""
    , success: false
    , description: ""
  }
  , {
    name: ""
    , success: false
    , description: ""
  }
]
