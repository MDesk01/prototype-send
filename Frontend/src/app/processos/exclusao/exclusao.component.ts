import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Atividade } from '../atividade.model';
import { AtividadeService } from '../atividade.service';

@Component({
  selector: 'app-exclusao',
  templateUrl: './exclusao.component.html',
  styleUrls: ['./exclusao.component.css']
})
export class ExclusaoComponent implements OnInit {
  atividade!: Atividade

  constructor(private atividadeService: AtividadeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.atividadeService.readById(id).subscribe(atividade => {
      this.atividade = atividade
    })
  }

  deleteAtividade(): void {
    this.atividadeService.delete(this.atividade.id).subscribe(() => {
      this.atividadeService.showMessage('Atividade Excluida!'); 
      this.router.navigate(['pag-aluno']); //retorna para a página product-crud
    })
  }

    //botao de cancelar
    cancel():void{
      this.router.navigate(['pag-aluno'])
    }

}
