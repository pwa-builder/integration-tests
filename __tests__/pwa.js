const timeout = 120000;

require('expect-puppeteer');
const edgePaths = require("edge-paths");

const EDGE_PATH = edgePaths.getEdgePath();

describe(
  'Run URLs that are a PWA',
  () => {
    let page;
    
    beforeAll(async () => {
      const browser = await chromium.launch({
        executablePath: EDGE_PATH
      });
      const page = await browser.newPage();
      
      await page.goto('https://www.pwabuilder.com/');
    })

    afterAll(async () => {
      await page.close()
    });

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

    it('should load https://m.aliexpress.com/ and validate as a PWA', async () => {
      await page.type('#getStartedInput', 'https://m.aliexpress.com/');
      await expect(page).toClick('button', { text: 'Start' });

      await expect(page).toMatchElement('#attachSection', { timeout: timeout });
    }, timeout);

    it('should load https://m.alibaba.com and validate as a PWA', async () => {
      await page.type('#getStartedInput', 'https://m.alibaba.com');
      await expect(page).toClick('button', { text: 'Start' });

      await expect(page).toMatchElement('#attachSection', { timeout: timeout });
    }, timeout);

    it('should load https://twitter.com and validate as a PWA', async () => {
      await page.type('#getStartedInput', 'https://twitter.com');
      await expect(page).toClick('button', { text: 'Start' });

      await expect(page).toMatchElement('#attachSection', { timeout: timeout });
    }, timeout);

    it('should load https://pinterest.com and validate as a PWA', async () => {
      await page.type('#getStartedInput', 'https://pinterest.com');
      await expect(page).toClick('button', { text: 'Start' });

      await expect(page).toMatchElement('#attachSection', { timeout: timeout });
    }, timeout);

  },
  timeout
)
