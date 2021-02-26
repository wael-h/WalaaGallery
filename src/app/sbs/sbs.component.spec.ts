import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SBSComponent } from './sbs.component';

describe('SBSComponent', () => {
  let component: SBSComponent;
  let fixture: ComponentFixture<SBSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SBSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SBSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
