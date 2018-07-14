import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { TarefaService } from './tarefa.service';

import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { ListaComponent } from './lista/lista.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { RoutesModule } from './routes/routes.module';

@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    ListaComponent,
    CadastroComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserModule,
    RoutesModule
  ],
  providers: [
    TarefaService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
