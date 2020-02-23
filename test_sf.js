const puppeteer = require('puppeteer');
const FB = 'https://www.facebook.com/';

(async () => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
  
    const navigationPromise = page.waitForNavigation()
  
    await page.goto(FB)
  
    await page.setViewport({ width: 1745, height: 852 })
    await page.screenshot({path: 'testingLogIn_pics/example1.png'});
  
    await page.click('table #email')
    await page.waitForSelector('table #email')
    await page.keyboard.type('testUsername');
    await page.screenshot({path: 'testingLogIn_pics/example2.png'});

    await page.click('table #pass')
    await page.waitForSelector('table #pass')
    await page.screenshot({path: 'testingLogIn_pics/example3.png'});
    await page.keyboard.type('testPassword');

    await page.click('tbody #u_0_4')
    await page.waitForSelector('tbody #u_0_4')
    await page.screenshot({path: 'testingLogIn_pics/example3.png'});
    
    await navigationPromise
    await browser.close()
})()

