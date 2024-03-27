import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-credit-request',
  templateUrl: './credit-request.component.html',
  styleUrls: ['./credit-request.component.css']
})
export class CreditRequestComponent implements OnInit {

  formGroup!: FormGroup;
  userId: string = 'user123'; // Example user ID, replace with actual user ID retrieval logic
  userAccounts: any[] = []; // Array to store user's accounts
  account: any; // Assuming you're receiving the account data from the router
  selectedCurrency: string = ''; // Variable to store the selected currency

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.preloadUserAccounts();
    // Initialize form group and set up validators
    this.formGroup = this.formBuilder.group({
      creditType: ['', Validators.required],
      accountNumber: ['', Validators.required],
      amount: ['', Validators.required],
      repaymentPeriod: ['', Validators.required],
      employed: [false],
      monthlySalary: [''],
      employmentDate: [''],
      creditPurpose: ['', Validators.required],
      userId: [this.userId]
    });
    
    // Retrieve account data from router extras
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras.state) {
      this.account = navigation.extras.state['account'];
      // Assuming account data contains a list of user's accounts
      this.userAccounts = this.account.accounts;
      // if (this.userAccounts.length > 0) {
      //   this.formGroup.patchValue({ accountNumber: this.userAccounts[0].accountNumber }); // Select the first account by default
      // }
    }
  }

  onSubmit(): void {
    if (this.formGroup.valid) {
      // Form is valid, proceed with submission
      const formData = this.formGroup.value;
      // You can now send formData to your backend for processing
      console.log(formData);
      // For demonstration purposes, resetting the form after submission
      this.formGroup.reset();
    } else {
      // Form is invalid, display error message or handle accordingly
      alert("Fields not filled correctly.")
    }
  }

  preloadUserAccounts(): void {
    // Simulating preloading user accounts as an array
    // This can be replaced with actual API calls to fetch user account data from the backend
    this.userAccounts = [
      { accountNumber: '1234567890', accountName: 'Savings Account', currency: 'EUR' },
      { accountNumber: '0987654321', accountName: 'Checking Account', currency: 'USD' },
      // Add more account objects as needed
    ];

    // Select the first account by default in the dropdown menu if available
    // if (this.userAccounts.length > 0) {
    //   this.formGroup.patchValue({ accountNumber: this.userAccounts[0].accountNumber });
    // }
  }
}