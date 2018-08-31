import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { DiegoComponent } from './components/diego/diego.component';

//Servicio
import { UsuarioService } from './services/usuario.service';

const routes: Routes = [
  { path: '', component: UsuarioComponent },
  { path: 'usuarios', component: UsuarioComponent },
  { path: 'diego', component: DiegoComponent },
  //{ path: '', redirectTo: '/diego', pathMatch: 'full'},
  { path: '**', component: DiegoComponent },
  
];

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    DiegoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      routes
    )
  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
