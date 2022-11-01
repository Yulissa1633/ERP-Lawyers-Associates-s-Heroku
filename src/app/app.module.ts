import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import * as $ from 'jquery';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { ClientComponent } from './client/client.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { PrincipalComponent } from './principal/principal.component';
import { ClientesComponent } from './admin/clientes/clientes.component';
import { ColaboradoresComponent } from './admin/colaboradores/colaboradores.component';
import { FormularioComponent } from './admin/colaboradores/formulario/formulario.component';
import { ListCollaboratorComponent } from './admin/colaboradores/list-collaborator/list-collaborator.component';

const appRoutes: Routes = [
  {
    path: 'principal',
    component: PrincipalComponent,
    data: { title: 'ERP Collections Principal' }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'ERP Collections Login' }
  },
  {
    path: 'admin',
    component: AdminComponent,
    data: { title: 'ERP Collections Admin' }
  },
  {
    path: 'assistant',
    component: ColaboradoresComponent,
    data: { title: 'ERP Collections Assitstant' }
  },
  {
    path: 'client',
    component: ClientComponent,
    data: { title: 'ERP Collections Client' }
  },
  { path: '',
    redirectTo: '/principal',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ClientComponent,
    LoginComponent,
    PrincipalComponent,
    ClientesComponent,
    ColaboradoresComponent,
    FormularioComponent,
    ListCollaboratorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
