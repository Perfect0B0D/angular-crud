import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorsListComponent } from './actors-list.component';

describe('ActorsListComponent', () => {
  let component: ActorsListComponent;
  let fixture: ComponentFixture<ActorsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActorsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
