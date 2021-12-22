import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsVersionComponent } from './settings-version.component';

describe('SettingsVersionComponent', () => {
  let component: SettingsVersionComponent;
  let fixture: ComponentFixture<SettingsVersionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsVersionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsVersionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
