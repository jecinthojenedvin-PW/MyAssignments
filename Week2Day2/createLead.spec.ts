import {test} from "@playwright/test" 

// tests to login and create lead
test('Create a Lead ',async({page})=>{

    await page.goto('http://leaftaps.com/opentaps/control/main')
    await page.locator('//input[@id="username"]').fill('demosalesmanager')
    await page.locator('//input[@id="password"]').fill('crmsfa')
    await page.click('//input[@class="decorativeSubmit"]')
    await page.locator('//a[contains(text(),"CRM")]').click()
    await page.click('//a[text()="Leads"]')
    await page.locator('//a[text()="Create Lead"]').click()
    await page.locator('//input[@id="createLeadForm_companyName"]').fill('Testleaf')
    await page.locator('//input[@id="createLeadForm_firstName"]').fill('Gauthami')
    await page.locator('//input[@id="createLeadForm_lastName"]').fill('VN')
    await page.locator('//input[@id="createLeadForm_personalTitle"]').fill('Mrs.')
    await page.locator('//input[@id="createLeadForm_generalProfTitle"]').fill('Program Manager')
    await page.locator('//input[@id="createLeadForm_departmentName"]').fill('IT Academy')
    await page.locator('//input[@id="createLeadForm_annualRevenue"]').fill('150K')
    await page.locator('//input[@id="createLeadForm_primaryPhoneNumber"]').fill('8989898989')
  

    // Print values from Source dropdown
    console.log("*******Source Dropdown****")
    const dropDown=page.locator('//select[@id="createLeadForm_dataSourceId"]/option') //no of elements=13
    const dropDowncount=await dropDown.count()
    console.log(`no of values in the dropDown is ${dropDowncount}`);
    console.log(await dropDown.nth(0).innerText())  
    console.log(await dropDown.nth(1).innerText()) 

    for(let index=0;index<dropDowncount;index++){
        console.log(await dropDown.nth(index).innerText());
        
    }

     // Select values from Industry dropdown
    console.log("*****Industry Dropdown******")
    const dropDownInd=page.locator('//select[@id="createLeadForm_industryEnumId"]/option') 
    const dropDownIndcount=await dropDownInd.count()
    console.log(`no of values in the dropDown is ${dropDownIndcount}`);

    console.log(await dropDownInd.nth(0).innerText()) 
    console.log(await dropDownInd.nth(1).innerText()) 

    for(let indexInd=0;indexInd<dropDownIndcount;indexInd++){
        console.log(await dropDownInd.nth(indexInd).innerText());
        
    }

    //Click create button

    await page.locator('//input[@class="smallSubmit"]').click()


})