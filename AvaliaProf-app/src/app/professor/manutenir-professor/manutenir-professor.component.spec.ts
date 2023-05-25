import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManutenirProfessorComponent } from './manutenir-professor.component';

describe('ManutenirProfessorComponent', () => {
  let component: ManutenirProfessorComponent;
  let fixture: ComponentFixture<ManutenirProfessorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManutenirProfessorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManutenirProfessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
