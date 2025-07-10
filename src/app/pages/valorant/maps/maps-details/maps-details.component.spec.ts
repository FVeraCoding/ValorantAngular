import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapsDetailsComponent } from './maps-details.component';

describe('MapsDetailsComponent', () => {
  let component: MapsDetailsComponent;
  let fixture: ComponentFixture<MapsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MapsDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
