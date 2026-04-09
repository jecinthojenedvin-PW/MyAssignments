import { test, expect } from "@playwright/test"

//Handling Multiple Windows in leads merge
test('Multiple Windows Handling', async ({ page, context }) => {

    //login yo leaftaps
    await page.goto("http://leaftaps.com/opentaps/control/main");
    await page.locator("//input[@id='username']").fill('demosalesmanager');
    await page.locator("//input[@id='password']").fill('crmsfa');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.locator("//div[@class='crmsfa']").click();

    await page.locator("//a[text()='Leads']").click();
    await page.locator("//a[text()='Merge Leads']").click();
    let title = await page.title();

    //first window handling

    let parentWindow = context.waitForEvent('page');
    await page.locator("//img[@src='/images/fieldlookup.gif']").nth(0).click();
    let childWindow = await parentWindow
    await childWindow.locator('//div[contains(@class,"x-grid3-row")][1]//a[text()="10033"]').click()

    //second window handling

    let parentWindow2 = context.waitForEvent('page');
    await page.locator("//img[@src='/images/fieldlookup.gif']").nth(1).click();
    let childWindow2 = await parentWindow2
    await childWindow2.locator('//td[contains(@class,"x-grid3-col")]//a[text()="10041"]').click();

    //Handling Alerts

    page.on("dialog", async (alert) => {

        const alertmsg = alert.message();
        console.log(alertmsg);
        await alert.accept();

    })

    await page.locator('//a[text()="Merge"]').click()
    //Assertions
    await expect(page).toHaveTitle(/View Lead/)



})