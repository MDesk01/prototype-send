import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Atividade } from '../atividade.model';
import { AtividadeService } from '../atividade.service';

@Component({
  selector: 'app-adicao',
  templateUrl: './adicao.component.html',
  styleUrls: ['./adicao.component.css']
})
export class AdicaoComponent implements OnInit {
  value = 'Título aqui';

  constructor(private atividadeService: AtividadeService, private router: Router) { } 


  atividade: Atividade = {
    id: 0,
    name: 'titulo aqui',
    horas: 0,
    doc:'',
    status: 'EM ANÁLISE'
  }

  ngOnInit(): void {
  }

    //incluir atividade
    createAtividade(): void {
      this.atividadeService.create(this.atividade).subscribe(() => { 
        this.atividadeService.showMessage('Atividade inclusa!') 
        this.router.navigate(['pag-aluno']) 
      })
  }

    //botao de cancelar
    cancel(): void {
      this.router.navigate(['pag-aluno'])
    }

}
