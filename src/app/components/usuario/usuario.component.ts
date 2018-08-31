import { Component, OnInit } from '@angular/core';
import { Usuario } from "../../clases/usuario";
import { UsuarioService } from '../../services/usuario.service';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  listasUsuarios:Usuario[];

  constructor(private _servicio: UsuarioService) { }

  ngOnInit() 
  {
    this.getListUser(); 
  }

  /**
   * Trae la lista de usuarios
   */
  getListUser()
  {
    this.listasUsuarios = this._servicio.getUsers();
  }

  /**
   * Enviamos el nombre del usuario para agregarlo
   * al objeto.
   * @param usuario 
   */
  addUsuario(usuario:any)
  {
    this._servicio.addUsers(usuario.value);
    return false;
  }

  /**
   * Pasamos el id al servicio para eliminar
   * @param id 
   */
  eliminarUsuario(id:any)
  {
    let validacion = confirm('Seguro desea eliminar');
    if(validacion)
    {
      this._servicio.deleteUser(id);
    }
  }

}
