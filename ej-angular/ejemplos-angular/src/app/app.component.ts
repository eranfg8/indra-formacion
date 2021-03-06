import { Component, OnInit } from '@angular/core';
import { EventosService } from './cmp07-servicios/eventos.service';
import { AuthService } from './cmp07-servicios/servicios/auth.service';
import { AutenticacionService } from './cmp10-autenticacion/autenticacion.service';
import jwtDecode from 'jwt-decode'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ejemplos-angular';

  isLoggedIn: boolean = false;

  constructor(private auth: AuthService, private eventos: EventosService, private autenticacion: AutenticacionService) { }

  ngOnInit(): void {
    // this.isLoggedIn = this.auth.hasToken()
    this.eventos.authEvent$.subscribe((isLoggedIn: boolean) => {
      console.log('Event Emitter ' + isLoggedIn)
      this.isLoggedIn = isLoggedIn
    })
    this.eventos.authEvent$.emit(this.auth.hasToken())
  }

  /* ngAfterViewInit(): void{
     this.eventos.authEvent$.emit(this.auth.hasToken())
   }*/


  login(): void {
    this.autenticacion.login()
      .subscribe((datos: any) => {
        const token = datos.token

        const payload = jwtDecode(token)
        console.log(payload)
        
        
        this.auth.setToken(token)
      })
  }

  logout(): void {
    this.auth.delToken()
  }


}
