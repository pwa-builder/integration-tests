const timeout = 120000;

require('expect-puppeteer');

describe(
  'Run URLs that are a PWA',
  () => {
    let page;
    
    beforeEach(async () => {
      page = await global.__BROWSER__.newPage();
      await page.goto('https://preview.pwabuilder.com/');
    }, timeout);

    afterAll(async () => {
      await page.close()
    });

    it('should load https://thankful-flower-0709a8a1e.azurestaticapps.net/ and validate as a PWA', async () => {
      await page.type('#getStartedInput', 'https://thankful-flower-0709a8a1e.azurestaticapps.net');
      await expect(page).toClick('button', { text: 'Start' });

      await expect(page).toMatchElement('#attachSection', { timeout: timeout });
    }, timeout);

    it('should load https://applescrusher.azurewebsites.net/ and validate as a PWA', async () => {
      await page.type('#getStartedInput', 'https://applescrusher.azurewebsites.net/');
      await expect(page).toClick('button', { text: 'Start' });

      await expect(page).toMatchElement('#attachSection', { timeout: timeout });
    }, timeout);

    it('should load https://urzagatherer.app and validate as a PWA', async () => {
      await page.type('#getStartedInput', 'https://urzagatherer.app');
      await expect(page).toClick('button', { text: 'Start' });

      await expect(page).toMatchElement('#attachSection', { timeout: timeout });
    }, timeout);

    it('should load https://app.starbucks.com and validate as a PWA', async () => {
      await page.type('#getStartedInput', 'https://app.starbucks.com');
      await expect(page).toClick('button', { text: 'Start' });

      await expect(page).toMatchElement('#attachSection', { timeout: timeout });
    }, timeout);

  },
  timeout
)
