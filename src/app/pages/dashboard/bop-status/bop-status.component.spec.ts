import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BopStatusComponent } from './bop-status.component';

describe('BopStatusComponent', () => {
  let component: BopStatusComponent;
  let fixture: ComponentFixture<BopStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BopStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BopStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
