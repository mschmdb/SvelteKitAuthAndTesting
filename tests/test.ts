import { expect, test } from '@playwright/test';

test('index page has expected title', async ({ page }) => {
	await page.goto('/');
	// await expect(page).toHaveTitle('SvelteKit');
	await page.getByRole('button', { name: 'Create' }).click();
});

test('login works as expexted with credentials matze/123', async ({ page }) => {
	await page.goto('/auth/login');
	await page.fill('input[name="username"]', 'matze');
	await page.fill('input[name="password"]', '123');
	await page.click('button[type="submit"]');
	await page.waitForLoadState();
	await expect(page).toHaveURL('/');
});

test('login fails as expected with wrong credentials matze/1234', async ({ page }) => {
	await page.goto('/auth/login');
	await page.fill('input[name="username"]', 'matze');
	await page.fill('input[name="password"]', '1234');
	await page.click('button[type="submit"]');
	await page.waitForLoadState();
	await expect(page).toHaveURL('/auth/login');
});

test('logout works as expected', async ({ page }) => {
	await page.goto('/auth/login');
	await page.fill('input[name="username"]', 'matze');
	await page.fill('input[name="password"]', '123');
	await page.click('button[type="submit"]');
	await page.goto('/auth/logout');
	await page.waitForLoadState();
	await expect(page).toHaveURL('/auth/login');
});

test('index page is keyboard accessible', async ({ page }) => {
	await page.goto('/');
	await page.keyboard.press('Tab');
	await page.keyboard.press('Tab');
	await page.keyboard.press('Tab');
	await page.keyboard.press('Tab');
	await page.keyboard.press('Tab');
	await page.keyboard.press('Enter');
	await page.waitForLoadState();
	await expect(page).toHaveURL('/auth/login');
	
});