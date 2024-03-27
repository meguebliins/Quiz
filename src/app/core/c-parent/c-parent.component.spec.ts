import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CParentComponent } from './c-parent.component';

describe('CParentComponent', () => {
  let component: CParentComponent;
  let fixture: ComponentFixture<CParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CParentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
