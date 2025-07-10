import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValorantMainComponent } from './valorant-main.component';

describe('ValorantMainComponent', () => {
  let component: ValorantMainComponent;
  let fixture: ComponentFixture<ValorantMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ValorantMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValorantMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
