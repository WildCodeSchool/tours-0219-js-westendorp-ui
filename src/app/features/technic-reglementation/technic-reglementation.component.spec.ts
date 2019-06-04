import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicReglementationComponent } from './technic-reglementation.component';

describe('TechnicReglementationComponent', () => {
  let component: TechnicReglementationComponent;
  let fixture: ComponentFixture<TechnicReglementationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TechnicReglementationComponent],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicReglementationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
