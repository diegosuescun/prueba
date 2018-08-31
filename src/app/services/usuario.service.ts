import { Injectable } from '@angular/core';
import { Usuario } from '../clases/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  listaUsuarios:Usuario[] = [
    {
      id:0,
      nombre: 'Diego'
    },
    {
      id:1,
      nombre: 'Sebastian'
    },
    {
      id:2,
      nombre: 'Jeison'
    },
    {
      id:3,
      nombre: 'Mateo'
    },
  ];

  constructor() { }

  /**
   * Trae todo los usuarios
   */
  getUsers()
  {
    return this.listaUsuarios;
  }

  /**
   * MEtodo que agrega usuarios al array
   * @param nombre - El nombre del usuario
   */
  addUsers(nombre:string)
  {
    this.listaUsuarios.push({
      nombre:nombre,
    });
  }

  /**
   * Elimina un usuario por su id
   * @param id 
   */
  deleteUser(id:any)
  {
    for(let i = 0; i < this.listaUsuarios.length; i ++){
      if(id === this.listaUsuarios[i].id){
        this.listaUsuarios.splice(i,1);  
      }
    }
  }

}
