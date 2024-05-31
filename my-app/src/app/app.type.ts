export interface API_LIST {
  name: string;
  success: boolean;
  description: string
}

export type API_LIST_TYPE = API_LIST;


export interface ICity {
  id: string;
  name: string;
}

export interface ILocation {
  id: string;
  name: string;
  location: {
    x: string;
    y: string;
  }
}

export type TCity = ICity;
export type TLocation = ILocation
