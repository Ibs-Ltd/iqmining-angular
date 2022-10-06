import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiningContractTableComponent } from './mining-contract-table.component';

describe('MiningContractTableComponent', () => {
  let component: MiningContractTableComponent;
  let fixture: ComponentFixture<MiningContractTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiningContractTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiningContractTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
