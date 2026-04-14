import { test } from "@playwright/test"

//importing parameters from a json file
import data from "../../data/inputParam.json"

for (let login of data) {
    test(`Reading Data from json ${login.TestcaseID}`, async ({ page }) => {

        await page.goto('http://leaftaps.com/opentaps/control/main')
        await page.locator('#username').fill(login.userName)
        await page.locator('input[id="password"]').fill(login.passWord)
        await page.locator('.decorativeSubmit').click()
        await page.locator('text=CRM/SFA').click()
        await page.getByRole('link', { name: "Create Lead" }).click()


        // receiving input from jsonfile for the required fields.

        await page.locator('//input[@id="createLeadForm_companyName"]').fill(login.companyName)
        await page.locator('//input[@id="createLeadForm_firstName"]').fill(login.FirstName)
        await page.locator('//input[@id="createLeadForm_lastName"]').fill(login.lastName)
        await page.locator('//input[@id="createLeadForm_personalTitle"]').fill(login.personalTitle)
        await page.locator('//input[@id="createLeadForm_generalProfTitle"]').fill(login.ProfTitle)
        await page.locator('//input[@id="createLeadForm_departmentName"]').fill(login.departmentName)
        await page.locator('//input[@id="createLeadForm_annualRevenue"]').fill(login.annualRevenue)
        await page.locator('//input[@id="createLeadForm_primaryPhoneNumber"]').fill(login.primaryPhone)

        //selecting values from dropdown
        await page.locator("//select[@id='createLeadForm_dataSourceId']").selectOption("Direct Mail")
        await page.locator("//select[@id='createLeadForm_marketingCampaignId']").selectOption("Demo Marketing Campaign")

        const mktdropDown = page.locator("//select[@id='createLeadForm_marketingCampaignId']/option") //no of elements=13
        const mktdropDowncount = await mktdropDown.count()
        console.log(`no of values in the dropDown is ${mktdropDowncount}`);

        for (let index = 0; index < mktdropDowncount; index++) {
            console.log(await mktdropDown.nth(index).innerText());

        }

        await page.locator("//select[@id='createLeadForm_industryEnumId']").selectOption("General Services")
        await page.locator("//select[@id='createLeadForm_currencyUomId']").selectOption("INR - Indian Rupee")
        await page.locator("//select[@id='createLeadForm_generalCountryGeoId']").selectOption({ value: 'IND' })
        await page.locator("//select[@id='createLeadForm_generalStateProvinceGeoId']").selectOption({ value: 'IN-TN' })

        const statedropDown = page.locator("//select[@id='createLeadForm_marketingCampaignId']/option") //no of elements=13
        const statedropDowncount = await statedropDown.count()
        console.log(`no of values in the dropDown is ${statedropDowncount}`);

        for (let index = 0; index < statedropDowncount; index++) {
            console.log(await statedropDown.nth(index).innerText());

        }
        await page.waitForTimeout(5000)


        await page.getByRole('button', { name: "Create Lead" }).first().click()



    })
}