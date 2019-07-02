import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class EnvService {
  API_URL = 'http://mantenimiento-itp.herokuapp.com/api/';

  constructor() { }
}
