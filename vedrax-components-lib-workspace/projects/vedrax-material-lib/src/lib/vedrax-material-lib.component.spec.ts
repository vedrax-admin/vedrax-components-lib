import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VedraxMaterialLibComponent } from './vedrax-material-lib.component';

describe('VedraxMaterialLibComponent', () => {
  let component: VedraxMaterialLibComponent;
  let fixture: ComponentFixture<VedraxMaterialLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VedraxMaterialLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VedraxMaterialLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
