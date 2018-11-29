import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PRUEBAComponent } from './prueba.component';

describe('PRUEBAComponent', () => {
  let component: PRUEBAComponent;
  let fixture: ComponentFixture<PRUEBAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PRUEBAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PRUEBAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
