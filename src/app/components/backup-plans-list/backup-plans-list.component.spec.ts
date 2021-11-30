import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackupPlansListComponent } from './backup-plans-list.component';

describe('BackupPlansListComponent', () => {
  let component: BackupPlansListComponent;
  let fixture: ComponentFixture<BackupPlansListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackupPlansListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackupPlansListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
