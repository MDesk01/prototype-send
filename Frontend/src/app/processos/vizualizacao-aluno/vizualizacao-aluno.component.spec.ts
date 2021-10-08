import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VizualizacaoAlunoComponent } from './vizualizacao-aluno.component';

describe('VizualizacaoAlunoComponent', () => {
  let component: VizualizacaoAlunoComponent;
  let fixture: ComponentFixture<VizualizacaoAlunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VizualizacaoAlunoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VizualizacaoAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
