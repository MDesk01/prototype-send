import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pag-aluno',
  templateUrl: './pag-aluno.component.html',
  styleUrls: ['./pag-aluno.component.css']
})
export class PagAlunoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToAtividadeCreate(): void{
    this.router.navigate(["adicao"]);
  }

}
