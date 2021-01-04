import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityInternProgramComponent } from './community-intern-program.component';

describe('CommunityInternProgramComponent', () => {
  let component: CommunityInternProgramComponent;
  let fixture: ComponentFixture<CommunityInternProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunityInternProgramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityInternProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
