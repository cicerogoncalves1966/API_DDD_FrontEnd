import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../enviroments/environment";
import { AutenticaService } from "./autentica.service";

@Injectable(
  {
    providedIn: "root"
  }
)

export class NoticiaService
{
  constructor(private autenticaService: AutenticaService,
              private httpClient: HttpClient)
  {
  }
  private readonly baseURL = environment["endPoint"];

  // async ListarNoticias()
  // {
  //   debugger
  //   // Após pesquisa, encontrei a solução abaixo para executar os métodos da API, no Angular 8 e superior
  //   //const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  //   const response = await this.httpClient.post<any>(`${this.baseURL}/ListarNoticias/`, null);

  //   return response;

  //   // A maneira abaixo, usada durante a aula só funciona no Angular versão menor que 6.
  //   // return this.httpClient.post<any>
  //   //         (`${this.baseURL}/ListarNoticias/`, null)
  // }

  async ListarNoticias() {
    debugger;

    const token = this.autenticaService.ObterToken();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    try {
      const response = await this.httpClient.post<any>(`${this.baseURL}/ListarNoticias`, null, { headers });
      return response;
    } catch (error) {
      console.error('Erro ao listar notícias:', error);
      throw error;
    }
  }
}

