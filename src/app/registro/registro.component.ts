import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioModel } from '../shared/usuario.model';
import { UsuarioService } from '../shared/usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  usuario = new UsuarioModel('', '', '', '', '', '2');

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  ngOnInit() {}

  onSubmit() {
    alert('Registro exitoso');
    this.usuarioService.agregarUsuario(this.usuario).subscribe((data) => {
      this.router.navigate(['/']);
    });
  }
}
