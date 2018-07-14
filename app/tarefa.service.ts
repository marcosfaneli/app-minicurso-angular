import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Tarefa } from './cadastro/tarefa';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  lista = [];
  url = 'http://localhost:5000';

  constructor(private http: Http) { }

  buscar(): Promise<any> {
    return this.http.get(this.url)
      .toPromise()
      .catch(erro => console.error(erro));
  }

  obter(codigo: number): Promise<any> {
    return this.http.get(this.url + '/' + codigo)
      .toPromise()
      .catch(erro => console.error(erro));
  }

  inserir(tarefa: Tarefa): Promise<any> {
    return this.http.post(this.url, tarefa)
      .toPromise()
      .catch(erro => console.error(erro));
  }

  atualizar(tarefa: Tarefa): Promise<any> {
    return this.http.put(this.url + '/' + tarefa.codigo, tarefa)
      .toPromise()
      .catch(erro => console.error(erro));
  }

  remover(codigo: number): Promise<any> {
    return this.http.delete(this.url + '/' + codigo)
      .toPromise()
      .catch(erro => console.error(erro));
  }

  concluir(codigo: number): Promise<any> {
    return this.http.put(this.url + '/feito/' + codigo, null)
      .toPromise()
      .catch(erro => console.error(erro));
  }

}
