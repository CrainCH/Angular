import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrewCardComponent } from './brew-card.component';

describe('BrewCardComponent', () => {
  let component: BrewCardComponent;
  let fixture: ComponentFixture<BrewCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrewCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
