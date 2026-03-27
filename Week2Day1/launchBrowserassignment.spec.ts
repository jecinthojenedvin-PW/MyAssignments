//import both chromium and webkit

import {test,chromium,webkit} from '@playwright/test'

// Creating test to launch two different browsers
test('Launch two different browser',async() => {

    // msedge launch and navigate to redbus website

    const browser = await chromium.launch({channel:"msedge",headless:false})
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("https://www.redbus.in")
    const title = await page.title()
    console.log(title)
    const url = await page.url()
    console.log(url)
    await page.waitForTimeout(5000)

    //webkit launch and navigate to flipkart website
    const browserWebkit = await webkit.launch({headless:false})
    const contextWebkit = await browserWebkit.newContext()
    const pageWebkit = await contextWebkit.newPage()
    await pageWebkit.goto("https://www.flipkart.com")
    const titlewk = await pageWebkit.title()
    console.log(titlewk)
    const urlwk = await pageWebkit.url()
    console.log(urlwk)
    await pageWebkit.waitForTimeout(5000)


});



    

