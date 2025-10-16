import { defineConfig } from '@playwright/test';
import path from 'path';

export default defineConfig({
  testDir: 'tests',
  timeout: 30_000,
  expect: { timeout: 5000 },
  reporter: [['html', { outputFolder: 'playwright-report' }]],
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    launchOptions: {
      args: [
        `--disable-extensions-except=${path.join(__dirname)}`,
        `--load-extension=${path.join(__dirname)}`
      ]
    }
  },
  projects: [
    {
      name: 'chromium',
      use: { channel: 'chrome' }
    }
  ]
});