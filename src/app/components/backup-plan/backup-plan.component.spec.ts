import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackupPlanComponent } from './backup-plan.component';

describe('BackupPlanComponent', () => {
  let component: BackupPlanComponent;
  let fixture: ComponentFixture<BackupPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackupPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackupPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
