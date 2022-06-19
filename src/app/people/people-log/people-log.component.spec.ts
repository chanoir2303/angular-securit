import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleLogComponent } from './people-log.component';

describe('PeopleLogComponent', () => {
  let component: PeopleLogComponent;
  let fixture: ComponentFixture<PeopleLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeopleLogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
