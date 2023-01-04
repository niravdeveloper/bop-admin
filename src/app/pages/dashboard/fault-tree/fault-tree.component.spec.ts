import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaultTreeComponent } from './fault-tree.component';

describe('FaultTreeComponent', () => {
  let component: FaultTreeComponent;
  let fixture: ComponentFixture<FaultTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaultTreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaultTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
