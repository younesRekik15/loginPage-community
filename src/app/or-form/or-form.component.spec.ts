import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrFormComponent } from './or-form.component';

describe('OrFormComponent', () => {
  let component: OrFormComponent;
  let fixture: ComponentFixture<OrFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
