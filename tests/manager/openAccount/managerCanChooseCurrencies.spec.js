import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { OpenAccountPage } from '../../../src/pages/manager/OpenAccountPage';

test('Assert manager can choose currencies for account', async ({ page }) => {
  const openAccountPage = new OpenAccountPage(page);
  await openAccountPage.open();

  const currencySelect = page.locator('#currency');

  await currencySelect.selectOption({ label: 'Dollar' });
  await expect(currencySelect).toHaveValue('Dollar');

  await currencySelect.selectOption({ label: 'Pound' });
  await expect(currencySelect).toHaveValue('Pound');

  await currencySelect.selectOption({ label: 'Rupee' });
  await expect(currencySelect).toHaveValue('Rupee');
});
