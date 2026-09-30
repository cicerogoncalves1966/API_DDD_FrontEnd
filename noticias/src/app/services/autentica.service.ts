import { Injectable } from "@angular/core";

@Injectable(
  {
    providedIn: 'root'
  }
)

export class AutenticaService
{
  private Autenticado : boolean = false;

  public DefineToken( token: string )
  {
    sessionStorage.setItem('token', token);
  }

  public ObterToken()
  {
    debugger
    var result = sessionStorage.getItem('token');
    return result;
  }

  public LimparToken()
  {
    sessionStorage.removeItem('token');
  }
}
