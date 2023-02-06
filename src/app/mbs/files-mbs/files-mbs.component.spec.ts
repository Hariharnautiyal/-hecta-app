import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilesMbsComponent } from './files-mbs.component';

describe('FilesMbsComponent', () => {
  let component: FilesMbsComponent;
  let fixture: ComponentFixture<FilesMbsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilesMbsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilesMbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

