const puppeteer = require('puppeteer');

const interactWithInputBox = async () => {
  for (let i = 0; i < 1000; i++) {
    const browser = await puppeteer.launch({ headless: false, slowMo: 1 });
    const page = await browser.newPage();
    console.log('1111');
    await page.goto('http://packqr.com/');
    console.log('sdvdbfbvbd');

    await page.waitForSelector('input[name="firstName"]');

    // Type into the input field
    await page.type('input[name="firstName"]', 'Contact');
    await page.type('input[name="lastName"]', 'Me');
    await page.type('input[name="email"]', 'nainikmehta1999@gmail.com');
    await page.type('input[name="phone"]', '8000460229');
    await page.type('input[name="subject"]', 'Contact Me');
    await page.type(
      'textarea[name="message"]',
      'Contact Me! Fast Else will complait agaist you Fraud! Fraud Fraud Fraud Fraud Fraud Fraud Fraud Fraud Fraud Fraud Fraud Fraud Fraud Fraud Fraud Fraud Fraud Fraud Fraud Fraud Fraud Fraud Fraud Fraud Fraud Fraud Fraud Fraud Fraud Fraud Fraud Fraud Fraud Fraud Fraud Fraud Fraud Fraud  ',
    );

    // Wait for the button to load
    await page.waitForSelector(
      '#contact-us-form > div.ant-row.ant-row-space-between.css-1sw4k6b > div.ant-col.mt8.ant-col-xs-24.css-1sw4k6b > div > button',
    );

    // Click on the button
    await page.click(
      '#contact-us-form > div.ant-row.ant-row-space-between.css-1sw4k6b > div.ant-col.mt8.ant-col-xs-24.css-1sw4k6b > div > button',
    );
    await page.waitForTimeout(3000);

    await browser.close();
  }
};

const cron = require('node-cron');

cron.schedule('* * * * *', interactWithInputBox);

console.log('Cron job started');

