import { Component, OnInit } from '@angular/core';
import { AnimationDurations } from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Atividade } from '../atividade.model';
import { AtividadeService } from '../atividade.service';

interface Status {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-edicao',
  templateUrl: './edicao.component.html',
  styleUrls: ['./edicao.component.css']
})



export class EdicaoComponent implements OnInit {
  selectedStatus!: string;

  statuss: Status[] = [
    {value: 'EM ANÁLISE', viewValue: 'EM ANÁLISE'},
    {value: 'DEFERIDO', viewValue: 'DEFERIDO'},
    {value: 'INDEFERIDO', viewValue: 'INDEFERIDO'}
  ];


  constructor(private atividadeService: AtividadeService, private router: Router, private route: ActivatedRoute) { }

  atividade!: Atividade

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.atividadeService.readById(id).subscribe(atividade => {
      this.atividade = atividade
    })
  }

  //metodo de atualizar o produto
  updateAtividade(): void {
    this.atividadeService.update(this.atividade).subscribe(() => {
      this.atividadeService.showMessage('Atividade Auditada com sucesso!');
      this.router.navigate(['pag-interna']);
    });
  }

  //botão cancelar
  cancel(): void {
    this.router.navigate(['pag-interna'])
  }

}
