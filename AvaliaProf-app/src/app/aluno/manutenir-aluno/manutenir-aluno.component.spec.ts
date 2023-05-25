import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManutenirAlunoComponent } from './manutenir-aluno.component';

describe('ManutenirAlunoComponent', () => {
  let component: ManutenirAlunoComponent;
  let fixture: ComponentFixture<ManutenirAlunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManutenirAlunoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManutenirAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
