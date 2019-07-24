import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesPaiementsComponent } from './mes-paiements.component';

describe('MesPaiementComponent', () => {
  let component: MesPaiementsComponent;
  let fixture: ComponentFixture<MesPaiementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesPaiementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesPaiementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
