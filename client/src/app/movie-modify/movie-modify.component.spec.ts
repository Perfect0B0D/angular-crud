import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieModifyComponent } from './movie-modify.component';

describe('MovieModifyComponent', () => {
  let component: MovieModifyComponent;
  let fixture: ComponentFixture<MovieModifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieModifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
