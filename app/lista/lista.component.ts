import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../tarefa.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  lista = [];

  constructor(private service: TarefaService) {
    this.listar();
  }

  private listar() {
    let promises: Promise<any>;
    promises = this.service.buscar();
    promises
      .then(res => {
        this.lista = res.json();
      });
  }

  ngOnInit() {
  }

  concluir(codigo: number) {
    this.service.concluir(codigo)
        .then(res => {
          const retorno = res.json();
          if (retorno.success === true) {
            this.listar();
          }
        });
  }

  excluir(codigo: number) {
    if (confirm('Remover a tarefa ' + codigo)) {
      this.service.remover(codigo)
        .then(res => {
          const retorno = res.json();
          if (retorno.success === true) {
            this.listar();
            alert('removido');
          }
        });
    }
  }

}
