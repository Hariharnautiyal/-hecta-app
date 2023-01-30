import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomiserComponent } from './customiser.component';

describe('CustomiserComponent', () => {
  let component: CustomiserComponent;
  let fixture: ComponentFixture<CustomiserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomiserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomiserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
