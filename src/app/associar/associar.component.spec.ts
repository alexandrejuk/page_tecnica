import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociarComponent } from './associar.component';

describe('AssociarComponent', () => {
  let component: AssociarComponent;
  let fixture: ComponentFixture<AssociarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssociarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
