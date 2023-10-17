                                                        import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { inject } from '@angular/core';
import { UnclesSoundShopModule } from '../app.module';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule, } from '@angular/forms';
import {FloatLabelType, MatFormFieldModule} from '@angular/material/form-field';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, UnclesSoundShopModule, ReactiveFormsModule, FormsModule, MatFormFieldModule],
  providers: [UnclesSoundShopModule, FormControl, EmailService],
  template: `
    <div id='contact-form'>
      <form [formGroup]="options" (ngSubmit)="submitRequest()">
        <mat-form-field id="email" class="form-field" appearance="outline">
          <mat-label>Email</mat-label>
          <input matInput type="text" [formControl]='email' placeholder="Please enter your email address">
        </mat-form-field>
        <mat-form-field id="subject" class="form-field" appearance="outline">
          <mat-label>Subject</mat-label>
          <input matInput type="text" [formControl]='subject' placeholder="Please enter your subject for the email">
        </mat-form-field>
        <mat-form-field class="form-field" appearance="outline">
          <textarea matInput rows="15" [formControl]='inquiry' placeholder="Please Describe Your Inquiry In Detail"></textarea>
        </mat-form-field>

        <button mat-raised-button class="button form-field" type="submit" [disabled]="(this.inquiry.value === '' || this.email.value === '')">Send Email</button>
      </form>
    </div>
  `,
  styleUrls: ['./contact-us.component.sass']
})
export class ContactUsComponent {
  public email = new FormControl('');
  public subject = new FormControl('');
  public inquiry = new FormControl('');
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto' as FloatLabelType);
  options = this.formBuilder.group({
    hideRequired: this.hideRequiredControl,
    floatLabel: this.floatLabelControl,
  });

  public emailService = inject(EmailService);

  constructor(public formBuilder: FormBuilder) {

  }

  ngOnInit() {
  }

  submitRequest() {
    this.emailService.sendEmail(this.email.value!, this.subject.value!, this.inquiry.value!).subscribe((request) => console.log(request));
  }
}
