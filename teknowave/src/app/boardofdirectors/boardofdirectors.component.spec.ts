import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardofdirectorsComponent } from './boardofdirectors.component';

describe('BoardofdirectorsComponent', () => {
  let component: BoardofdirectorsComponent;
  let fixture: ComponentFixture<BoardofdirectorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardofdirectorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardofdirectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
