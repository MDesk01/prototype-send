import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagAlunoComponent } from './pag-aluno.component';

describe('PagAlunoComponent', () => {
  let component: PagAlunoComponent;
  let fixture: ComponentFixture<PagAlunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagAlunoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
