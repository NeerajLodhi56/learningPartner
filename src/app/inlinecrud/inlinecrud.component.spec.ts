import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlinecrudComponent } from './inlinecrud.component';

describe('InlinecrudComponent', () => {
  let component: InlinecrudComponent;
  let fixture: ComponentFixture<InlinecrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InlinecrudComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InlinecrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
