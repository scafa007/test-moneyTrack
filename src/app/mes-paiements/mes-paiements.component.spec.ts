import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesPaiementsComponent } from './mes-paiements.component';

describe('MesPaiementComponent', () => {
  let component: MesPaiementComponent;
  let fixture: ComponentFixture<MesPaiementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesPaiementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesPaiementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
