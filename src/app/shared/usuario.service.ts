import { Injectable } from '@angular/core';
import { UsuarioModel } from './usuario.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  BASE_URL = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  agregarUsuario(usuario: UsuarioModel) {
    return this.http.post<string>(`${this.BASE_URL}/usuarios`, usuario);
  }

  autenticarUsuario(correo: string, contrasena: string) {
    const url = `${this.BASE_URL}/acceder`;
    return this.http.post<string>(url, { correo, contrasena });
  }
}
