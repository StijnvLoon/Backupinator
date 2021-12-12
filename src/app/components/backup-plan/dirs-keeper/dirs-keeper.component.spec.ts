import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirsKeeperComponent } from './dirs-keeper.component';

describe('DirsKeeperComponent', () => {
  let component: DirsKeeperComponent;
  let fixture: ComponentFixture<DirsKeeperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirsKeeperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirsKeeperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
