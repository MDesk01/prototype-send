import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';
import { Atividade } from './atividade.model';
import { catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AtividadeService {

  baseUrl = "http://localhost:3001/atividades"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { } 

  //estrutur do snack-bar
  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, '', {
      duration: 5000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-sucess']
    });
  }

  //mensagem de error
  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro!', true);
    return EMPTY
  }

  //incluir atividade
  create(product: Atividade): Observable<Atividade> {  
    return this.http.post<Atividade>(this.baseUrl, product).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  //exibir atividades
  read(): Observable<Atividade[]> {
    return this.http.get<Atividade[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

    //lendo atividade por id
    readById(id: string): Observable<Atividade> {
      const url = `${this.baseUrl}/${id}`
      return this.http.get<Atividade>(url).pipe(
        map((obj) => obj),
        catchError(e => this.errorHandler(e))
      );
    }

      //atualizando status da atividade
  update(product: Atividade): Observable<Atividade> {
    const url = `${this.baseUrl}/${product.id}`
    return this.http.put<Atividade>(url, product).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

    //excluindo atividades
    delete(id: number): Observable<Atividade> {
      const url = `${this.baseUrl}/${id}`;
      return this.http.delete<Atividade>(url).pipe(
        map((obj) => obj),
        catchError(e => this.errorHandler(e))
      );
    }



}
