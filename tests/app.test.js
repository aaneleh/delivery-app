// @ts-check
import { test } from '@playwright/test';

test('Navegação home - checkout', async ({ page }) => {
  await page.goto('delivery-app/');

  await page.getByText('Produtos');

  await page.getByAltText('shopping-cart').click();

  await page.getByText('Checkout');

  await page.getByAltText('arrow-back').click();

  await page.getByText('Produtos');

});