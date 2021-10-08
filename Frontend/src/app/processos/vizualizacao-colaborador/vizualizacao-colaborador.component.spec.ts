import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VizualizacaoColaboradorComponent } from './vizualizacao-colaborador.component';

describe('VizualizacaoColaboradorComponent', () => {
  let component: VizualizacaoColaboradorComponent;
  let fixture: ComponentFixture<VizualizacaoColaboradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VizualizacaoColaboradorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VizualizacaoColaboradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
