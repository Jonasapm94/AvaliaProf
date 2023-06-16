import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaAvaliacaoComponent } from './tela-avaliacao.component';

describe('TelaAvaliacaoComponent', () => {
  let component: TelaAvaliacaoComponent;
  let fixture: ComponentFixture<TelaAvaliacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaAvaliacaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaAvaliacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
