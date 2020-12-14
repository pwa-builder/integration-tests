const timeout = 120000;

require('expect-puppeteer');

describe(
  'Run URLs that are not a PWA',
  () => {
    let page;

    beforeEach(async () => {
      page = await global.__BROWSER__.newPage();
      await page.goto('https://www.pwabuilder.com/');
    }, timeout);

    afterAll(async () => {
      await page.close()
    });

    it('should load example.com with a score of 20', async () => {
      await page.type('#getStartedInput', 'https://example.com');
      await expect(page).toClick('button', { text: 'Start' });

      await expect(page).toMatchElement('#infoSection h2', { timeout: timeout, text: 'Hub' });
    }, timeout);

    it('should load https://github.com with a score of 50', async () => {
      await page.type('#getStartedInput', 'https://github.com');
      await expect(page).toClick('button', { text: 'Start' });

      await expect(page).toMatchElement('#infoSection h2', { timeout: timeout, text: 'Hub' });
    }, timeout);

    it('should load https://ebay.com with a score of 35', async () => {
      await page.type('#getStartedInput', 'https://ebay.com');
      await expect(page).toClick('button', { text: 'Start' });

      await expect(page).toMatchElement('#infoSection h2', { timeout: timeout, text: 'Hub' });
    }, timeout);

  },
  timeout
)
