# pwabuilder-integration-tests

Based on https://github.com/xfumihiro/jest-puppeteer-example

This tool loads https://pwabuilder.com and runs both sites that are and aren't PWAs. For each URL that is run, it looks at the site and ensures
that we have validated the site correctly. These tests are done with Playwright, so we are testing the ACTUAL site and are running tests through it just like we would manually.

# Instructions
Run the following commands in your preferred terminal

- git clone https://github.com/pwa-builder/integration-tests.git
- npm install
- npm run test

The output will show if a test has passed or failed. If a failure happens, you will also see which URL has failed.
