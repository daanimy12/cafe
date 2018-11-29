import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesDatailComponent } from './recipes-datail.component';

describe('RecipesDatailComponent', () => {
  let component: RecipesDatailComponent;
  let fixture: ComponentFixture<RecipesDatailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipesDatailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipesDatailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
