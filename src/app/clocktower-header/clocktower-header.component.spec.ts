import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClocktowerHeaderComponent } from './clocktower-header.component';

describe('ClocktowerHeaderComponent', () => {
  let component: ClocktowerHeaderComponent;
  let fixture: ComponentFixture<ClocktowerHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClocktowerHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClocktowerHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
