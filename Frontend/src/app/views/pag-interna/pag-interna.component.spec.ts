import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagInternaComponent } from './pag-interna.component';

describe('PagInternaComponent', () => {
  let component: PagInternaComponent;
  let fixture: ComponentFixture<PagInternaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagInternaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagInternaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
