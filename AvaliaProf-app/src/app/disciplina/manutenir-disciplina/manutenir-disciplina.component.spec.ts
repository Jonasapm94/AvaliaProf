import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManutenirDisciplinaComponent } from './manutenir-disciplina.component';

describe('ManutenirDisciplinaComponent', () => {
  let component: ManutenirDisciplinaComponent;
  let fixture: ComponentFixture<ManutenirDisciplinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManutenirDisciplinaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManutenirDisciplinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
