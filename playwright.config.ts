import { PlaywrightTestConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
	webServer: {
		command: 'npm run build && npm run preview',
		port: 4173,
	},
	testDir: 'tests',
	testMatch: /(.+\.)?(test|spec)\.[jt]s/,
	projects: [
		{
			name: 'Chromium',
			use: { browserName: 'chromium' },
		},
		{
			name: 'Firefox',
			use: { browserName: 'firefox' },
		},
		{
			name: 'webkit',
			use: { ...devices['Desktop Safari'] },
		},
		/* Test against mobile viewports. */
		{
			name: 'Mobile Chrome',
			use: { ...devices['Pixel 5'] },
		},
		{
			name: 'Mobile Safari',
			use: { ...devices['iPhone 12'] },
		},
		/* Test against branded browsers. */
		{
			name: 'Google Chrome',
			use: { ...devices['Desktop Chrome'], channel: 'chrome' }, // or 'chrome-beta'
		},
		{
			name: 'Microsoft Edge',
			use: { ...devices['Desktop Edge'], channel: 'msedge' }, // or 'msedge-dev'
		},
	],
	reporter: [['html', { open: 'never' }]],
};

export default config;
