import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercherPlaylistComponent } from './rechercher-playlist.component';

describe('RechercherPlaylistComponent', () => {
  let component: RechercherPlaylistComponent;
  let fixture: ComponentFixture<RechercherPlaylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechercherPlaylistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercherPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
