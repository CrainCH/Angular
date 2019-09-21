import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreweryCardComponent } from './brewery-card.component';

describe('BrewCardComponent', () => {
  let component: BreweryCardComponent;
  let fixture: ComponentFixture<BreweryCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BreweryCardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreweryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
