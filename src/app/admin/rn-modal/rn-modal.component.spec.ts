import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RnModalComponent } from './rn-modal.component';

describe('RnModalComponent', () => {
  let component: RnModalComponent;
  let fixture: ComponentFixture<RnModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RnModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RnModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
