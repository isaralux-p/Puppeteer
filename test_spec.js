const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  
  const navigationPromise = page.waitForNavigation()
  
  await navigationPromise
  
  await page.goto('https://sfcinemacity.com/')
  
  await page.setViewport({ width: 1920, height: 937 })
  
  await page.waitForSelector('.container > .showtime-dropdown > .container > .button-wrapper > .button:nth-child(2)')
  await page.click('.container > .showtime-dropdown > .container > .button-wrapper > .button:nth-child(2)')
  await page.screenshot({picshowtime.png})
  await page.waitForSelector('.cinema-list-wrapper > .list-item:nth-child(1) > .cinema-list > .cinema-item:nth-child(3) > a')
  await page.click('.cinema-list-wrapper > .list-item:nth-child(1) > .cinema-list > .cinema-item:nth-child(3) > a')
  
  await page.waitForSelector('.showtime-dropdown > .container > .button-wrapper > .button:nth-child(3) > span')
  await page.click('.showtime-dropdown > .container > .button-wrapper > .button:nth-child(3) > span')
  
  await page.waitForSelector('.movie-list-wrapper > .movie-item:nth-child(1) > a > .poster > .image')
  await page.click('.movie-list-wrapper > .movie-item:nth-child(1) > a > .poster > .image')
  
  await page.waitForSelector('.container > .showtime-dropdown > .container > .button-wrapper > .showtime-button')
  await page.click('.container > .showtime-dropdown > .container > .button-wrapper > .showtime-button')
  
  await page.waitForSelector('.col-sm-10 > .right-section > .time-list > .time-item > .active')
  await page.click('.col-sm-10 > .right-section > .time-list > .time-item > .active')
  
  await page.waitForSelector('tbody > tr > .F16 > .button-seat > .seat')
  await page.click('tbody > tr > .F16 > .button-seat > .seat')
  
  await page.waitForSelector('.summary-selected > .inner > .action > .col > .button-blue')
  await page.click('.summary-selected > .inner > .action > .col > .button-blue')
  
  await page.waitForSelector('.box-wrapper > .btn-wrapper > .payment-method > .inner:nth-child(3) > .method')
  await page.click('.box-wrapper > .btn-wrapper > .payment-method > .inner:nth-child(3) > .method')
  
  await page.waitForSelector('.box-wrapper > .btn-wrapper > .payment-method > .inner > .k-plus')
  await page.click('.box-wrapper > .btn-wrapper > .payment-method > .inner > .k-plus')
  
  await browser.close()
})()