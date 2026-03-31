import {test} from "@playwright/test" 

// tests to login and create lead using playwright locators

test('Create Lead using playwright locators',async({page})=>{   
    
    await page.goto('http://leaftaps.com/opentaps/control/main')
    await page.getByRole('textbox',{name:"Username"}).fill('demosalesmanager')
    await page.getByRole('textbox',{name:"Password"}).fill('crmsfa')
    await page.getByRole('button',{name:"Login"}).click()
    await page.getByText('CRM/SFA',{exact:true}).click()
    await page.getByRole('link',{name:"Create Lead"}).click()

//Entering all the required details

    await page.locator('//input[@id="createLeadForm_companyName"]').fill('Testleaf')
    await page.locator('//input[@id="createLeadForm_firstName"]').fill('Gauthami')
    await page.locator('//input[@id="createLeadForm_lastName"]').fill('VN')
    await page.locator('//input[@id="createLeadForm_personalTitle"]').fill('Mrs.')
    await page.locator('//input[@id="createLeadForm_generalProfTitle"]').fill('Program Manager')
    await page.locator('//input[@id="createLeadForm_departmentName"]').fill('IT Academy')
    await page.locator('//input[@id="createLeadForm_annualRevenue"]').fill('150K')
    await page.locator('//input[@id="createLeadForm_primaryPhoneNumber"]').fill('8989898989')

// Clicking the create lead button

    await page.getByRole('button',{name:"Create Lead"}).click()
  

})