const { chromium } = require('./node_modules/playwright');
(async () => {
  const browser = await chromium.launch({
    executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('http://localhost:4321/', { waitUntil: 'networkidle' });
  const height = await page.evaluate(() => document.body.scrollHeight);
  for (let y = 0; y <= height; y += 500) {
    await page.evaluate(y => window.scrollTo(0, y), y);
    await page.waitForTimeout(150);
  }
  await page.waitForTimeout(600);
  await page.screenshot({ path: '/tmp/site-full.png', fullPage: true });
  await browser.close();
  console.log('done height=' + height);
})().catch(e => { console.error(e.message); process.exit(1); });
