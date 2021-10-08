import { Component, OnInit } from '@angular/core';
import { Atividade } from '../atividade.model';
import { AtividadeService } from '../atividade.service';

@Component({
  selector: 'app-vizualizacao',
  templateUrl: './vizualizacao.component.html',
  styleUrls: ['./vizualizacao.component.css']
})
export class VizualizacaoComponent implements OnInit {

  atividades!: Atividade[]

  constructor(private atividadeService: AtividadeService) { }


  ngOnInit(): void {
    this.atividadeService.read().subscribe(atividades => {
      this.atividades = atividades
      console.log(atividades)
    });

  }




}
