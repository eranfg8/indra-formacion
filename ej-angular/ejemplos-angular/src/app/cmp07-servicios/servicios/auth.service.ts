import { Injectable } from '@angular/core';
import { EventosService } from '../eventos.service';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  keytoken: string = "jwt"

  constructor(private eventos: EventosService) { }

  getToken(): string | null {
    return localStorage.getItem(this.keytoken)
  }

  setToken(token: string): void {
    console.log(token)
    localStorage.setItem(this.keytoken, token)
    this.eventos.authEvent$.emit(true) // Emitir que nos hemos loguedo
  }

  delToken(): void {
    localStorage.removeItem(this.keytoken)
    this.eventos.authEvent$.emit(false) // Emitir que nos hemos desloguedo
  }

  hasToken(): boolean{
   return this.getToken() === null ? false : true
  // return !!this.getToken() // !! devuelve el valor truthy de la string (hace lo mismo)
  }
  
}
