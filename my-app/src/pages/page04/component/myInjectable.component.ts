import {Injectable, Injector} from "@angular/core";
import {TCity, TLocation} from "../../../app/app.type";

const dataCity: TCity[] = [
  {
    id: '1'
    , name: '济南'
  }
  , {
    id: '2'
    , name: '北京'
  }
]

const dataLocation: TLocation[] = [
  {
    id: '1'
    , name: '济南'
    , location: {
      x: '125'
      , y: '42'
    }
  }
  , {
    id: '2'
    , name: '北京'
    , location: {
      x: '124'
      , y: '46'
    }
  }
]

@Injectable()
export class CityService {
  getCity(id: string): TCity[] {
    return dataCity.filter(city => {
      return city.id === id
    })
  }
}

@Injectable()
export class LocationService {
  constructor(public service: CityService) {
  }

  getCity(id: string) {
    return this.service.getCity(id);
  }

  getLocation(id: string) {
    return dataLocation.filter(location => {
      return location.id === id
    })
  }
}

@Injectable({providedIn: "root"})
export class LoggerService {
  info(message?: any, ...optionalParams: any[]) {
    console.log(message, optionalParams)
  }
}

export const injector = Injector.create({
  providers: [
    {
      provide: LocationService
      , deps: [CityService]
    }
    , {
      provide: CityService
      , deps: []
    }
    , {
      provide: LoggerService
      , deps: []
    }
  ]
  , name: "app-injector-t"
});
