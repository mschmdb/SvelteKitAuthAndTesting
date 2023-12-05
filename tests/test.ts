import { expect, test } from '@playwright/test';

test('index page has expected h1', async ({ page }) => {
	await page.goto('/');
	await expect(page).toHaveTitle('SvelteKit');
});

test('login works as expexted with credentials matze/123', async ({ page }) => {
	await page.goto('/auth/login');
	await page.fill('input[name="username"]', 'matze');
	await page.fill('input[name="password"]', '123');
	await page.click('button[type="submit"]');
	await page.waitForNavigation();
	await expect(page).toHaveURL('/');
});
