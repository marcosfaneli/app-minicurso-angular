import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { CadastroComponent } from '../cadastro/cadastro.component';
import { ListaComponent } from '../lista/lista.component';

const routes: Routes = [
  { path: '', component: ListaComponent },
  { path: 'cadastro', component: CadastroComponent},
  { path: 'cadastro/:codigo', component: CadastroComponent},
  { path: '**', component: ListaComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ],
  declarations: [
  ]
})
export class RoutesModule { }
