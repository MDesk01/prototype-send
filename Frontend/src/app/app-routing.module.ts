import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdicaoComponent } from './processos/adicao/adicao.component';
import { EdicaoComponent } from './processos/edicao/edicao.component';
import { ExclusaoComponent } from './processos/exclusao/exclusao.component';
import { VizualizacaoAlunoComponent } from './processos/vizualizacao-aluno/vizualizacao-aluno.component';
import { HomeComponent } from './views/home/home.component';
import { PagAlunoComponent } from './views/pag-aluno/pag-aluno.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: "pag-aluno", component: PagAlunoComponent},
  {path: "processos/exclusao/:id", component: ExclusaoComponent},
  {path: "adicao", component: AdicaoComponent},
  {path: "processos/vizualizacao-aluno/:id", component: VizualizacaoAlunoComponent},
  {  path:"processos/edicao/:id",  component: EdicaoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
