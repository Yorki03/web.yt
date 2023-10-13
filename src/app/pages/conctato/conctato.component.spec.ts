import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConctatoComponent } from './conctato.component';

describe('ConctatoComponent', () => {
  let component: ConctatoComponent;
  let fixture: ComponentFixture<ConctatoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConctatoComponent]
    });
    fixture = TestBed.createComponent(ConctatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
