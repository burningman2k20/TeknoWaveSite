import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JosephTNortonScholarshipComponent } from './joseph-t-norton-scholarship.component';

describe('JosephTNortonScholarshipComponent', () => {
  let component: JosephTNortonScholarshipComponent;
  let fixture: ComponentFixture<JosephTNortonScholarshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JosephTNortonScholarshipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JosephTNortonScholarshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
