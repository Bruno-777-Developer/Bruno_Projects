import {HttpClient} from '@angular/common/http';
import {Usuario} from '../../model/Usuario';
import {Observable} from 'rxjs';

export class UsuarioService {

  constructor(private httpClient: HttpClient) {
  }

  public listar(): Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>('/api/usuario/');
  }
  public listarId(id): Observable<Usuario> {
    return this.httpClient.get<Usuario>('/api/usuario/' + id);
  }
  public criar(usuario): Observable<Usuario> {
    return this.httpClient.post<Usuario>('/api/usuario/' , usuario );
  }
  public atualizar(usuario): Observable<Usuario> {
    return this.httpClient.put<Usuario>('/api/usuario/', usuario);
  }
  public deletar(usuario: Usuario): Observable<any> {
    const httpOṕtions: any = {
      headers: {'Content-Type': 'application/json'}
    };
    httpOṕtions.body = usuario;
    return this.httpClient.delete('/api/usuario/', httpOṕtions);
  }
}
