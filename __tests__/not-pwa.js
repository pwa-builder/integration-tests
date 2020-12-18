const timeout = 120000;

const { chromium } = require('playwright');
const edgePaths = require("edge-paths");

const EDGE_PATH = edgePaths.getEdgePath();

const testURLs = [
  'https://example.com',
  'https://cnn.com',
]

describe(
  'Run URLs that are a NOT a PWA',
  () => {
    let page;
    let browser;

    beforeAll(async () => {
      browser = await chromium.launch({
        executablePath: EDGE_PATH
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
      it(`should load ${url} and validate as NOT a PWA`, async () => {
        await page.fill('#getStartedInput', url);
        await page.click('button#getStartedButton');

        await expect(page).toHaveSelector('#infoSection', { timeout: timeout });
      }, timeout);
    });
  },
  timeout
)
