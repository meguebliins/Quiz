import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CChildComponent } from './c-child.component';

describe('CChildComponent', () => {
  let component: CChildComponent;
  let fixture: ComponentFixture<CChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CChildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
