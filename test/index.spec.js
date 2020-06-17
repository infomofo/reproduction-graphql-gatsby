const puppeteer = require('puppeteer');
const { port } = require('../jest-puppeteer.config').server;

const siteRoot = `http://localhost:${port}`;

describe('Homepage', () => {
  let browser = '';
  let page = '';

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();

    page.emulate({
      viewport: {
        width: 500,
        height: 2400,
      },
      userAgent: '',
    });

    await page.goto(`${siteRoot}/`);
  });

  afterAll(async () => {
    browser.close();
  });

  test('Site title is visible', async () => {
    await page.waitForSelector('h2');

    const html = await page.$eval('a h2', e => e.innerHTML);
    expect(html).toBe('Food I Made');
  });

});