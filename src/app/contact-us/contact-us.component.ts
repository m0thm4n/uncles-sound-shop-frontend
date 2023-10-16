                                                        import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnclesSoundShopModule } from '../app.module';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {FloatLabelType, MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, UnclesSoundShopModule, ReactiveFormsModule, FormsModule, MatFormFieldModule],
  template: `
    <div id='contact-form'>
      <form [formGroup]="options">
        <mat-form-field class="form-field" [ngClass]="email" appearance="outline">
          <mat-label>Email</mat-label>
          <input matInput placeholder="Please enter your email address">
        </mat-form-field>
        <textarea cols="600" rows="15" placeholder="Please Describe Your Inquiry In Detail"></textarea> 
        <button class="button form-field" type="submit">Send Email</button>
      </form>
    </div>
  `,
  styleUrls: ['./contact-us.component.sass']
})
export class ContactUsComponent {
  public email = new FormControl('');
  public inquiry = new FormControl('')
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto' as FloatLabelType);
  options = this.formBuilder.group({
    hideRequired: this.hideRequiredControl,
    floatLabel: this.floatLabelControl,
  });

  constructor(private formBuilder: FormBuilder) {

  }
}
