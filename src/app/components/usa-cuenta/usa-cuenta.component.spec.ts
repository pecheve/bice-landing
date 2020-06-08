import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsaCuentaComponent } from './usa-cuenta.component';

describe('UsaCuentaComponent', () => {
  let component: UsaCuentaComponent;
  let fixture: ComponentFixture<UsaCuentaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsaCuentaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsaCuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
