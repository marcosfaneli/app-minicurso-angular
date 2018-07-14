import { Component, OnInit } from '@angular/core';

import { TarefaService } from '../tarefa.service';
import { Tarefa } from './tarefa';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  tarefa: Tarefa = new Tarefa(0, '');

  constructor(private service: TarefaService, private route: ActivatedRoute, private router: Router) {
    let codigo = 0;
    this.route.params.subscribe(params => {
      codigo = params.codigo;
    });

    if (codigo) {
      this.service.obter(codigo)
        .then(res => {
          const retorno = res.json();
          this.tarefa = new Tarefa(retorno.codigo, retorno.descricao);
        });

    } else {
      this.tarefa = new Tarefa(0, '');
    }
  }

  ngOnInit() { }

  salvar() {
    console.log(this.tarefa);

    if (this.tarefa.codigo) {
      this.service.atualizar(this.tarefa)
        .then(res => {
          const retorno = res.json();

          if (retorno.success === true) {
            alert('alterado');
            this.router.navigateByUrl('/');
          }
        });
    } else {
      this.service.inserir(this.tarefa)
        .then(res => {
          const retorno = res.json();

          if (retorno.success === true) {
            alert('salvo');
            this.router.navigateByUrl('/');
          }
        });
    }
  }

}
