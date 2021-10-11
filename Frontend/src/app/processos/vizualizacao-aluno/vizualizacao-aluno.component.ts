import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Atividade } from '../atividade.model';
import { AtividadeService } from '../atividade.service';

@Component({
  selector: 'app-vizualizacao-aluno',
  templateUrl: './vizualizacao-aluno.component.html',
  styleUrls: ['./vizualizacao-aluno.component.css']
})
export class VizualizacaoAlunoComponent implements OnInit {

  atividade!: Atividade

  constructor(private atividadeService: AtividadeService, private router: Router, private route: ActivatedRoute, public dialog: MatDialog) { }

  //dialog-download-archive
  openDialog() {
    const dialogRef = this.dialog.open(DownloadContent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.atividadeService.readById(id).subscribe(atividade => {
      this.atividade = atividade
    })
  }


    //botao de voltar
    voltar():void{
      this.router.navigate(['pag-aluno'])
    }

}

@Component({
  selector: 'download-content',
  templateUrl: 'download-content.html',
})
export class DownloadContent {}
