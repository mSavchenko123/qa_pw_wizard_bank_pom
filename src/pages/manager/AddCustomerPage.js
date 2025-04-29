const { expect } = require('@playwright/test');

export class AddCustomerPage {
  constructor(page) {
    this.page = page;
    this.firstName = page.getByPlaceholder('First Name')
    this.lastName = page.getByPlaceholder('Last Name');
    this.postalCode = page.getByPlaceholder('Post Code');
    this.addCastomerButton = page.getByRole('form').getByRole('button', { name: 'Add Customer' });
    this.customersButton = page.getByRole('button', { name: 'Customers' });
  }

  async open() {
    await this.page.goto('/angularJs-protractor/BankingProject/#/manager/addCust');
  }
  
  async fillFirstName(firstName) {
    await this.firstName.fill(firstName);
  }

  async fillLastName(lastName) {
    await this.lastName.fill(lastName);
  } 

  async fillPostalCode(postalCode) {
    await this.postalCode.fill(postalCode);
  }

  async clickAddCustomerButton() {
    await this.addCastomerButton.click();
  }

  async clickCustomersButton() {
    await this.customersButton.click();
  }
}