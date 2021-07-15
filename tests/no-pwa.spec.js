const timeout = 120000;
const { test, expect } = require('@playwright/test');

const testURLs = [
  'https://webboard.app',
  'https://urzagatherer.app',
  'https://app.starbucks.com',
  'https://m.aliexpress.com/',
  'https://pinterest.com',
  'https://twitter.com'
]

test('basic test', async ({ page }) => {
  /*await page.goto('https://www.pwabuilder.com/', {waitUntil: 'networkidle'});
  const input = await page.evaluateHandle(`document.querySelector("body > fast-design-system-provider > app-index").shadowRoot.querySelector("#router-outlet > app-home").shadowRoot.querySelector("#input-block > fast-text-field").shadowRoot.querySelector("#control")`);*/

  await page.goto('https://www.pwabuilder.com/', {waitUntil: 'networkidle'});
  const input = await page.evaluateHandle(`document.querySelector("body > fast-design-system-provider > app-index").shadowRoot.querySelector("#router-outlet > app-home").shadowRoot.querySelector("#input-block > fast-text-field").shadowRoot.querySelector("#control")`);
  await input.focus();

  await input.type("https://webboard.app");

  const start_button = await page.evaluateHandle(`document.querySelector("body > fast-design-system-provider > app-index").shadowRoot.querySelector("#router-outlet > app-home").shadowRoot.querySelector("#start-button")`);

  await start_button.click();

  await page.waitForNavigation({
    url: (url) => url.href.includes("reportcard")
  });

  const test = await page.evaluate(() => location.href);

  console.log(test);
});