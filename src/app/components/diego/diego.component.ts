import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diego',
  templateUrl: './diego.component.html',
  styleUrls: ['./diego.component.css']
})
export class DiegoComponent implements OnInit {

  usuarios: string[] = ['Diego','Mauricio','Suescun','Sebastian','Camilo','Julix'];
  activado: boolean = true;
  desactivado: boolean = true;
  name: string;
  age: number;
  addres:{
    street: string;
    city: string;
  };
  hobbies: string[];
  title:string = "Diego";

  constructor() { }

  ngOnInit() {
    this.name   = 'Diego Suescun';
    this.age    = 24;
    this.addres = {
      street: 'Calle 153 · 114 b 58',
      city: 'Bogotá'
    };
    this.hobbies = ['Leer','Billar','xbox'];
  }

  alerta(){
    alert('Holas');
  }
  
  delUsuario(user){
    for(let i = 0; i < this.usuarios.length; i ++){
      if(user == this.usuarios[i]){
        this.usuarios.splice(i,1);  
      }
    }
  }
  clickUsuario(nueUsuer){
    console.log(nueUsuer.value);
    this.usuarios.push(nueUsuer.value);
    nueUsuer.value = '';
    nueUsuer.focus();
    return false;
  }

}
