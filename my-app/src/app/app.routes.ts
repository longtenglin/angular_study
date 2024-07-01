import {Routes} from '@angular/router';
import {LoginComponent} from "../pages/login/login.component";
import {Page01Component} from "../pages/page01/page01.component";
import {HomeComponent} from "../pages/home/home.component";
import {Page02Component} from "../pages/page02/page02.component";
import {E404Component} from "../pages/404/E404.component";
import {Page03Component} from "../pages/page03/page03.component";
import {Page04Component} from "../pages/page04/page04.component";
import {OtherAnswerComponent} from "../pages/otherAnswer/OtherAnswer.component";
import {Page05Component} from "../pages/page05/page05.component";
import {Page06Component} from "../pages/page06/page06.component";
import { Page07Component } from "../pages/page07/page07.component";
import { Page08Component } from "../pages/page08/page08.component";

export const routes: Routes = [
  {
    path: 'home'
    , component: HomeComponent
    , title: '首页'
    , children: [
      {
        path: 'page01'
        , component: Page01Component
        , title: 'Page_01 生命周期函数'
      }
      , {
        path: 'page02'
        , component: Page02Component
        , title: 'Page02_API 使用案例'
      }
      , {
        path: 'page03'
        , component: Page03Component
        , title: 'Page03_API 自定义标签 使用案例'
      }
      , {
        path: 'page04'
        , component: Page04Component
        , title: 'Page04_API Injectable 等使用案例'
      }
      , {
        path: 'page05'
        , component: Page05Component
        , title: 'Page05_API 动画使用案例'
      }, {
        path: 'page06'
        , component: Page06Component
        , title: 'Page06_API HttpClient 使用案例'
      }
      , {
        path: 'page07'
        , component: Page07Component
        , title: 'Page07_API 动态植入HTML片段'
      }
      , {
        path: 'page08'
        , component: Page08Component
        , title: 'Page08_API 使用案例'
      }
      , {
        path: 'page09'
        , component: E404Component
        , title: 'Page09_API 使用案例'
      }
      , {
        path: 'page10'
        , component: E404Component
        , title: 'Page10_API 使用案例'
      }
      , {
        path: 'page11'
        , component: OtherAnswerComponent
        , title: '其他解决方案'
      }
    ]
  }
  , {
    path: ''
    , component: LoginComponent
    , title: '登录'
  }
];
