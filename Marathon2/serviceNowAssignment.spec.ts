import { test, expect } from "@playwright/test"

test('ServiceNow Order Testing', async ({ page }) => {

    //Launching the webpage and logging in using credentials

    await page.goto("https://dev280319.service-now.com/");
    await page.getByRole('textbox', { name: 'User name' }).fill("admin");
    await page.getByRole('textbox', { name: 'Password' }).fill("YApVc0-vyN5-");
    await page.getByRole('button', { name: 'Log in' }).click();
    await page.getByText("All").first().click();
    await page.getByText("Service Catalog").click();

    // Handling frames
    const frames = page.frames();
    const framescount = frames.length;
    console.log(`Total No of Frames:${framescount}`)
    const mobileframe = page.frameLocator("iframe")
    await mobileframe?.getByAltText("Mobiles", { exact: true }).click();
    // Handling frames in next page
    const appleframe = page.frameLocator("iframe[name='gsft_main']")
    await appleframe?.getByAltText("Request for Apple iPhone 13 pro").nth(1).click();
    await appleframe.locator("//label[text()='Yes']").click()
    await appleframe.locator("//input[@class='cat_item_option sc-content-pad form-control']").fill('99')
    await appleframe.getByRole('combobox', { name: /Monthly data allowance/i }).selectOption({ value: 'unlimited' });
    await appleframe.locator("//label[text()='Alpine Green']").click()
    await appleframe.getByRole('button', { name: 'Order Now' }).click()

    //Asserting inner messages
    const innermsg = await appleframe.locator('//span[text()="Thank you, your request has been submitted"]').innerText();
    expect(innermsg).toBe("Thank you, your request has been submitted");
    //Full page Screenshot
    await page.screenshot({ path: 'data/OrderPage.png', fullPage: true });

})