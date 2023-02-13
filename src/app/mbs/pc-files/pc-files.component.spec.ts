import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcFilesComponent } from './pc-files.component';

describe('PcFilesComponent', () => {
  let component: PcFilesComponent;
  let fixture: ComponentFixture<PcFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PcFilesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PcFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
