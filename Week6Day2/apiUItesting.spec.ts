import { test, expect } from "@playwright/test"

//declaring the required variables

const username = "admin"
const password = "sooM+H@w1P2P"
const login = `${username}:${password}`
const value = btoa(login)
console.log(value);
let ID: any

//serial execution
test.describe.serial("Execute in serial mode", async () => {


    //Create 
    test("Create a Test API", async ({ request }) => {

        let responsebody = await request.post("https://dev231684.service-now.com/api/now/table/problem",

            {
                headers: {
                    "Content-Type": "application/json",
                    //"Authorization": "YWRtaW46c29vTStIQHcxUDJQ"
                    "Authorization": `Basic ${value}`
                },
                data: {
                    "description": "CreateProblem in Service Now"
                }
            })

        let res = await responsebody.json()  //converting json-object format is called as "Deserialiazation"
        console.log(res);

        let resstatus = responsebody.status()
        console.log(resstatus);

        expect(resstatus).toBe(201)

        let resstatusText = responsebody.statusText()

        console.log(resstatusText);
        expect(resstatusText).toBe("Created")

        ID = res.result.sys_id
        console.log(ID);


    })

    // Fetch
    test('Fetch using PW API', async ({ request }) => {
        //test('Fetch a Test API', async ({request}) => {


        let responsebody = await request.get(`https://dev231684.service-now.com/api/now/table/problem/${ID}`,



            {
                headers: {
                    "Content-Type": "application/json",
                    //"Authorization": "YWRtaW46c29vTStIQHcxUDJQ"
                    "Authorization": `Basic ${value}`
                }

            })
        let res = await responsebody.json()  //converting json-object format is called as "Deserialiazation"
        console.log(res);

        let resstatus = responsebody.status()
        console.log(resstatus);

        expect(resstatus).toBe(200)

        let resstatusText = responsebody.statusText()

        console.log(resstatusText);
        expect(resstatusText).toBe("OK")

        ID = res.result.sys_id
        console.log(ID);


    })

    //patch request
    test('Update change request using PW API', async ({ request }) => {

        let responsebody = await request.patch(`https://dev231684.service-now.com/api/now/table/problem/${ID}`,
            {
                headers: {
                    "Content-Type": "application/json",
                    //"Authorization": "YWRtaW46c29vTStIQHcxUDJQ"
                    "Authorization": `Basic ${value}`
                },
                data: {

                    "short_description": "Update the details of the problem"
                }
            })

        let res = await responsebody.json()  //converting json-object format is called as "Deserialiazation"
        console.log(res);

        let resstatus = responsebody.status()
        console.log(resstatus);

        expect(resstatus).toBe(200)

        let resstatusText = responsebody.statusText()

        console.log(resstatusText);
        expect(resstatusText).toBe("OK")


    })

    //delete
    test('Delete the problem using PW API', async ({ request }) => {

        let responsebody = await request.delete(`https://dev231684.service-now.com/api/now/table/problem/${ID}`,
            {
                headers: {
                    "Content-Type": "application/json",
                    //"Authorization": "YWRtaW46c29vTStIQHcxUDJQ"
                    "Authorization": `Basic ${value}`
                }
            })

        console.log(responsebody.status());
        expect(responsebody.status()).toBe(204)



    })

    //UI validation

    test('UI validation', async ({ page }) => {

   
        await page.goto("https://dev231684.service-now.com")
        await page.getByRole('textbox', { name: "User name" }).fill('admin')
        await page.getByRole('textbox', { name: "Password" }).fill('sooM+H@w1P2P')
        await page.getByRole('button', { name: "Log in" }).click()

        await page.getByRole('menuitem', { name: "All" }).click()
        await page.getByPlaceholder('Filter').fill('Problem')
        await page.getByPlaceholder('Filter').press("Enter")
        await page.getByText("Problem").nth(1).click()
        await page.getByText("Problem").nth(1).press("Enter")
        await page.getByLabel("All 8 of 11").click()


        const clickmeframe = page.frame({ name: 'gsft_main' })
        await clickmeframe?.getByPlaceholder("Search").nth(0).fill("PRB0040001")
        await clickmeframe?.getByPlaceholder("Search").nth(0).press("Enter")
        console.log("UI Validation Completed")

        //const value = await page.locator('//td[@class = "vt list_edit_cursor_cell"]/a').innerText()
        //console.log(value);
        //await page.getByRole('link',{name:"Open record: PRB0040001"}).click()



    })


})