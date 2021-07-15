const timeout = 120000;

const { chromium } = require('playwright');

const testURLs = [
  'https://webboard.app',
  'https://urzagatherer.app',
  'https://app.starbucks.com',
  'https://m.aliexpress.com/',
  'https://pinterest.com',
  'https://twitter.com'
]

describe(
  'Run URLs that are a PWA',
  () => {
    let page;
    let browser;

    beforeAll(async () => {
      browser = await chromium.launch({
        headless: true
      });
    });

    beforeEach(async () => {
      page = await browser.newPage();
      await page.goto('https://www.pwabuilder.com/');
    });

    afterEach(async () => {
      await page.close();
    })

    afterAll(async () => {
      await browser.close()
    });

    testURLs.map((url) => {
      it(`should load ${url} and validate as a PWA`, async () => {
        await page.fill('#getStartedInput', url);
        await page.click('button#getStartedButton');

        await expect(page).toHaveSelector('#attachSection', { timeout: timeout });
      }, timeout);
    });
  },
  timeout
)
