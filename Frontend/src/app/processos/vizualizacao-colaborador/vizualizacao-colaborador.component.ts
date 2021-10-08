import { Component, OnInit } from '@angular/core';
import { Atividade } from '../atividade.model';
import { AtividadeService } from '../atividade.service';

@Component({
  selector: 'app-vizualizacao-colaborador',
  templateUrl: './vizualizacao-colaborador.component.html',
  styleUrls: ['./vizualizacao-colaborador.component.css']
})
export class VizualizacaoColaboradorComponent implements OnInit {

  atividades!: Atividade[]

  constructor(private atividadeService: AtividadeService) { }

  ngOnInit(): void {
    this.atividadeService.read().subscribe(atividades => {
      this.atividades = atividades
      console.log(atividades)
    });

  }
}
