import { Injectable } from '@angular/core';
import {auth} from 'firebase/app';
import {User} from 'firebase';
import {AngularFireAuth} from '@angular/fire/auth';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../models/usuario.model';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = 'https://identitytoolkit.googleapis.com/v1/accounts';
  private apikey = 'AIzaSyCAAlbOd6eZcF19jQl_-ds9Kwa9rUF2PaU';
  userToken: string;
  public user: User;


  constructor(
    private http: HttpClient,
    public afAuth: AngularFireAuth) {
    this.leerToken()
  }

  async resetPassword(email: string): Promise<void>{
    try{
      return this.afAuth.sendPasswordResetEmail(email);
    }
    catch (error){console.log(error)}
  }

  logout(){
    localStorage.removeItem('token')
  }

  login(usuario: UsuarioModel){
    const authData = {
      email: usuario.email,
      password: usuario.password,
      returnSecureToken: true
    }

    return this.http.post(
      `${this.url}:signInWithPassword?key=${this.apikey}`,
       authData
      ).pipe(
        map( resp => {
          console.log('Entró en el map del RXJS')
          this.guardarToken(resp['idToken'])
          return resp
        })
      )
  }

  nuevoUsuario(usuario: UsuarioModel){
    const authData = {
      email: usuario.email,
      password: usuario.password,
      displayName: usuario.nombre,
      returnSecureToken: true
    }

    return this.http.post(
      `${this.url}:signUp?key=${this.apikey}`,
       authData
      ).pipe(
        map( resp => {
          console.log('Entró en el map del RXJS')
          this.guardarToken(resp['idToken'])
          return resp
        })
      )
  }

  private guardarToken(idToken: string){
    this.userToken = idToken
    localStorage.setItem('token', idToken)

    let hoy = new Date();
    hoy.setSeconds(3600)
    localStorage.setItem('expira', hoy.getTime().toString())
  }

  leerToken(){
    if (localStorage.getItem('token')){
      this.userToken = localStorage.getItem('token')
    } else {
      this.userToken = ''
    }

    return this.userToken;
  }

  estaAutenticado(): boolean{
    if (this.userToken.length < 2){
      return false
    }

    const expira = Number(localStorage.getItem('expira'))
    const expiraDate = new Date()
    expiraDate.setTime(expira)

    if (expiraDate > new Date()){
      return true
    } else {
      return false
    }
  }
}
