import {test,expect} from "@playwright/test" 

test('Code Marathon Test2', async({page}) =>{

//Launching decathlon website and performing initial set of operations..

 await page.goto('https://www.decathlon.in/')
 await page.waitForLoadState("domcontentloaded")
 const titleHome = await page.title()
 console.log(titleHome)
 await page.locator("//span[text()='Search for  ']").first().click()
 let search = page.getByPlaceholder("Search For 60+ Sports and 6000+ Products")
 await expect(search).toBeEnabled()
 await search.fill("shoes")
 await search.press("Enter")
 const title = await page.title()
 console.log(title)



 await page.locator("//span[text()='Men (331)	']").click()
 await page.locator("//span[text()='Running (66)	']").click()
 await page.locator("//span[contains(text(),'Uk 10.5 - eu 45')]").click()
 await page.locator("//span[text()='Most Relevant']").click()
 await page.locator("//a[text()='Price: High to Low']").click()


 await page.locator("//p[text()='Men Running Shoes Superior Grip Cushioned Upto 20km/week, Jogflow 190.1 - Blue']").first().click()
 await page.locator("//div[text()='UK 10.5 - EU 45']").click()
 await page.getByRole('button',{name:"addToCart"}).click()
 await expect(page.locator("//h3[text()='Product added to cart']")).toContainText("Product added to cart")
 await page.locator("//p[text()='Cart']").click()

 //calculating and displayng the total amount
 let total= await page.locator("//p[text()='₹2,499']").innerText()
 console.log('TOTAL CART AMOUNT',total)


 })



 
 


