import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ClientComponent } from './client/client.component';
import { LoginComponent } from './login/login.component';
import { PrincipalComponent } from './principal/principal.component';
import { ClientesComponent } from './admin/clientes/clientes.component'
import { ColaboradoresComponent } from './admin/colaboradores/colaboradores.component'
import { FormularioComponent } from './admin/colaboradores/formulario/formulario.component';
import * as $ from 'jquery';
import { ListCollaboratorComponent } from './admin/colaboradores/list-collaborator/list-collaborator.component';

ColaboradoresComponent
const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'admin', component: AdminComponent},
  {path:'client', component: ClientComponent},
  {path:'principal', component: PrincipalComponent},
  {path:'clientesAdmin', component: ClientesComponent},
  {path:'colaboradoresAdmin', component: ColaboradoresComponent},
  {path:'form', component: FormularioComponent},
  {path:'list-collaborator', component: ListCollaboratorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
