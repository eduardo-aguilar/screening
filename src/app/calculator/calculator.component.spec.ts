import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorComponent } from './calculator.component';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.calculatorForm.setValue({
      number1: 10,
      number2: 2
    })
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should divide', () => {
    component.divide()
    expect(component.result).toEqual(5)
  })
  it('should multiply', () => {
    component.multiply()
    expect(component.result).toEqual(20)
  })
});
