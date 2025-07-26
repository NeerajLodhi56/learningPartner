import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlinecrudUpdateComponent } from './inlinecrud-update.component';

describe('InlinecrudUpdateComponent', () => {
  let component: InlinecrudUpdateComponent;
  let fixture: ComponentFixture<InlinecrudUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InlinecrudUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InlinecrudUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
