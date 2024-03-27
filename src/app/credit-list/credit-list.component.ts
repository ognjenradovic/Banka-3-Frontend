import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Credit } from '../models/models';

@Component({
  selector: 'app-credit-list',
  templateUrl: './credit-list.component.html',
  styleUrls: ['./credit-list.component.css']
})
export class CreditListComponent {
  credits: Credit[] = []; // Replace transactions with credits array

  constructor(private router: Router) {
    // Initialize or fetch credits data here
    this.fetchMockCredits(); // Fetch credits for a certain user
  }

  sortCredits(sortOption: string) {
    if (sortOption === 'asc') {
      this.credits.sort((a, b) => a.amount - b.amount);
    } else if (sortOption === 'desc') {
      this.credits.sort((a, b) => b.amount - a.amount);
    }
  }

  fetchMockCredits() {
    // Mock data for credits
    const mockCredits: Credit[] = [
      { 
        name: 'Credit 1',
        accountNumber: '1234567890',
        amount: 5000,
        paymentPeriod: 12,
        fee: 50,
        startDate: 20230101,
        endDate: 20231231,
        monthlyFee: 5,
        remainingAmount: 4500,
        currencyMark: 'USD'
      },
      { 
        name: 'Credit 2',
        accountNumber: '0987654321',
        amount: 8000,
        paymentPeriod: 24,
        fee: 80,
        startDate: 20240101,
        endDate: 20251231,
        monthlyFee: 10,
        remainingAmount: 7200,
        currencyMark: 'EUR'
      }
      // Add more mock credits if needed
    ];

    this.credits = mockCredits;
  }

  // Uncomment this method for actual fetching from API
  /*
  fetchCreditsForUser() {
    // Make API call to fetch credits for the user
    // Example:
    // this.http.get<Credit[]>('/api/credits?userId=<userId>').subscribe(
    //   (response) => {
    //     this.credits = response;
    //   },
    //   (error) => {
    //     console.error('Error fetching credits:', error);
    //   }
    // );
  }
  */

  sortByPriceAsc() {
    this.credits.sort((a, b) => a.amount - b.amount);
  }

  sortByPriceDesc() {
    this.credits.sort((a, b) => b.amount - a.amount);
  }

}
