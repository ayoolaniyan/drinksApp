import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PocLibComponent } from './poc-lib.component';

describe('PocLibComponent', () => {
  let component: PocLibComponent;
  let fixture: ComponentFixture<PocLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PocLibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PocLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
