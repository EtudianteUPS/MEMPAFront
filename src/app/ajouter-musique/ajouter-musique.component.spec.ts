import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterMusiqueComponent } from './ajouter-musique.component';

describe('AjouterMusiqueComponent', () => {
  let component: AjouterMusiqueComponent;
  let fixture: ComponentFixture<AjouterMusiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterMusiqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterMusiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
