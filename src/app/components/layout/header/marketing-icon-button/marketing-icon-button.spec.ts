import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingIconButton } from './marketing-icon-button';

describe('MarketingIconButton', () => {
  let component: MarketingIconButton;
  let fixture: ComponentFixture<MarketingIconButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarketingIconButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketingIconButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
