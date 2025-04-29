const { expect } = require('@playwright/test');

export class CustomersListPage {
  constructor(page) {
    this.page = page;
    this.firstName = page.getByRole('cell', { name: 'First Name' });
    this.lastName = page.getByRole('cell', { name: 'Last Name' });
    this.postalCode = page.getByRole('cell', { name: 'Post Code' });
    this.accountNumber = page.getByRole('cell', { name: 'Account Number' }); 
    this.deleteButton = page.getByRole('button', { name: 'Delete' });
    this.rows = page.locator('table tbody tr');
    this.searchCustomerField = page.getByPlaceholder('Search Customer');
    this.onlyOneCustomerRow = page.locator('table tbody tr');
  }

  async open() {
    await this.page.goto('/angularJs-protractor/BankingProject/#/manager/list');
  }

  async assertFirstName(firstName) {
    await expect(this.page.locator('table tbody tr').last().locator('td').nth(0)).toHaveText(firstName);
  }

  async assertLastName(lastName) {
    await expect(this.page.locator('table tbody tr').last().locator('td').nth(1)).toHaveText(lastName);
  }
  
  async assertPostalCode(postalCode) {
    const lastRow = this.page.locator('table tbody tr').last();
    const postalCodeCell = lastRow.locator('td').nth(2);
    await expect(postalCodeCell).toHaveText(postalCode);
  }

  async assertAccountNumber(accountNumber) {
    const lastRow = this.page.locator('table tbody tr').last();
    const accountNumberCell = lastRow.locator('td').nth(3);
    await expect(accountNumberCell).toHaveText(accountNumber);
  }

  async clickDeleteButtonForLastRow() {
    const lastRow = this.page.locator('table tbody tr').last();
    const deleteButton = lastRow.locator('button').nth(0);
    await deleteButton.click();
  }

  async expectLastCustomerHasAccount() {
    const lastRow = this.rows.last();
    const accountNumberCell = lastRow.locator('td').nth(3);
    await expect(accountNumberCell).not.toBeEmpty(); 
  }

  async searchCustomerByFirstName(firstName) {
    await this.searchCustomerField.fill(firstName);
  }
  
  async searchCustomerByLastName(lastName) {
    await this.searchCustomerField.fill(lastName);
  }

  async searchCustomerByPostalCode(postalCode) {
    await this.searchCustomerField.fill(postalCode);
  }

  async assertOnlyOneCustomerRow() {
    await expect(this.onlyOneCustomerRow).toHaveCount(1);
  }

}