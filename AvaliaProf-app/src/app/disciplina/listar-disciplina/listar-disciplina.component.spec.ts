import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarDisciplinaComponent } from './listar-disciplina.component';

describe('ListarDisciplinaComponent', () => {
  let component: ListarDisciplinaComponent;
  let fixture: ComponentFixture<ListarDisciplinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarDisciplinaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarDisciplinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
