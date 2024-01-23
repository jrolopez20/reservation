import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectConceptComponent } from './select-concept.component';

describe('SelectConceptComponent', () => {
  let component: SelectConceptComponent;
  let fixture: ComponentFixture<SelectConceptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectConceptComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectConceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
