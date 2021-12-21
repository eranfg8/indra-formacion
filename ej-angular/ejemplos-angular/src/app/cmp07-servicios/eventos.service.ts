import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  authEvent$ = new EventEmitter<boolean>()

  constructor() { }
}
