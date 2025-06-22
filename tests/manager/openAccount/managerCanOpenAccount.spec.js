import { test } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { AddCustomerPage } from '../../../src/pages/manager/AddCustomerPage';
import { OpenAccountPage } from '../../../src/pages/manager/OpenAccountPage';
import { CustomersListPage } from '../../../src/pages/manager/CustomersListPage';

let firstName;
let lastName;
let postCode;

test.beforeEach(async ({ page }) => {
  const addCustomerPage = new AddCustomerPage(page);

  firstName = faker.person.firstName();
  lastName = faker.person.lastName();
  postCode = faker.location.zipCode();

  await addCustomerPage.open();
  await addCustomerPage.fillFirstName(firstName);
  await addCustomerPage.fillLastName(lastName);
  await addCustomerPage.fillPostalCode(postCode);
  await addCustomerPage.clickAddCustomerButton();
  await page.reload();
});

test('Assert manager can add new customer', async ({ page }) => {
  const openAccountPage = new OpenAccountPage(page);
  await openAccountPage.open();

  await page
    .locator('select#userSelect')
    .selectOption({ label: `${firstName} ${lastName}` });
  await page.locator('select#currency').selectOption({ label: 'Dollar' });

  await openAccountPage.clickProcessButton();
  await page.reload();

  const customersListPage = new CustomersListPage(page);
  await customersListPage.open();

  await customersListPage.expectLastCustomerHasAccount();
});
