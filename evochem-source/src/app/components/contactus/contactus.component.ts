import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.scss'
})
export class ContactusComponent {


  // Same-origin endpoint in evochem/_worker.js; it validates the form and relays it to the email Lambda
  // server-side, so the browser never sees the AWS URL, recipient or template.
  private apiUrl = '/api/contact';

  contactForm: FormGroup;
  sending = false;

  constructor(private fb: FormBuilder, private http: HttpClient, private toastr: ToastrService) {
    this.contactForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobileNumber: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      message: ['', Validators.required],
      businessName: [''],
      industry: [''],
      website: [''] // honeypot
    });
  }

  /** Returns true when a control is invalid AND the user has interacted with it OR the form has been submitted. */
  isInvalid(controlName: string): boolean {
    const c = this.contactForm.get(controlName);
    return !!c && c.invalid && (c.touched || c.dirty || this.submitAttempted);
  }

  submitAttempted = false;

  onSubmit() {
    this.submitAttempted = true;
    if (this.contactForm.valid && !this.sending) {
      const formData: FormData = this.contactForm.value;
      this.sending = true;

      this.sendEmail(formData).subscribe({
        next: () => {
          this.sending = false;
          this.toastr.success('Your message has been sent successfully!', 'Success');
          this.contactForm.reset(); // Clear the form after successful submission
          this.submitAttempted = false;
        },
        error: (error) => {
          this.sending = false;
          console.error('Error sending message:', error.status);
          this.toastr.error('There was an error sending your message. Please try again later.', 'Error');
        }
      });
      
    } else {
      this.toastr.warning('Please fill out the form correctly.', 'Form Invalid');
    }
  }

  sendEmail(formData: FormData): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.apiUrl, JSON.stringify(formData), { headers });
  }

 

}

export interface FormData {
  fullName: string;
  email: string;
  mobileNumber: string;
  businessName: string;
  industry: string;
  message: string;
  website: string;
}
