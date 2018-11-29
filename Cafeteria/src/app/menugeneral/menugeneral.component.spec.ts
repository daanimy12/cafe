import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenugeneralComponent } from './menugeneral.component';

describe('MenugeneralComponent', () => {
  let component: MenugeneralComponent;
  let fixture: ComponentFixture<MenugeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenugeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenugeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
