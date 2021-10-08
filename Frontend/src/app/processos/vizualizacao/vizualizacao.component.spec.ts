import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VizualizacaoComponent } from './vizualizacao.component';

describe('VizualizacaoComponent', () => {
  let component: VizualizacaoComponent;
  let fixture: ComponentFixture<VizualizacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VizualizacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VizualizacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
