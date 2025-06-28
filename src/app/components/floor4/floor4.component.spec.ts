import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Floor4Component } from './floor4.component';

describe('Floor4Component', () => {
  let component: Floor4Component;
  let fixture: ComponentFixture<Floor4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Floor4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Floor4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
