import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup  } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  imports: [ReactiveFormsModule],
  template: `
    <div [formGroup]="calculatorForm" >
      <input type="number" formControlName="number1" placeholder="Enter first number" />
      <input type="number" formControlName="number2" placeholder="Enter second number" />

      <button (click)="multiply()">Multiply</button>
      <button (click)="divide()">Divide</button>

      <p>Result: {{ result }}</p>
    </div>
  `,
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  result: number | string = 0;
  calculatorForm = new FormGroup({
    number1: new FormControl(0),
    number2: new FormControl(0),
  });

  multiply(): void {
    this.result = this.calculatorForm.value.number1! * this.calculatorForm.value.number2!;
  }

  divide(): void {
    if (this.calculatorForm.value.number2 === 0) {
      this.result = 'Error: Division by zero';
    } else {
      this.result = this.calculatorForm.value.number1! / this.calculatorForm.value.number2!;
    }
  }
}
