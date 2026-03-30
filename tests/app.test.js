// @ts-check
import { test, expect } from '@playwright/test';

test('Navegação home - checkout', async ({ page }) => {
  await page.goto('');

  // Expect a title "to contain" a substring.
  await expect(page.getByText('Produtos')).toBeDefined();

  await page.getByTestId('button-to-checkout').click();

  await expect(page.getByText('Checkout')).toBeDefined();

  await page.getByText('Voltar').click();

  await expect(page.getByText('Produtos')).toBeDefined();

});