import {test,expect} from  "@playwright/test"

//Handling frames and nested frames

test("Frames and Nested Frames",async({page})=>{

    await page.goto('https://www.leafground.com/frame.xhtml');
    const frames = page.frames();
    const framescount = frames.length;
    console.log(`Total No of Frames:${framescount}`)

    // Frame 1

    const clickmeframe = page.frame({url:'https://www.leafground.com/default.xhtml'})
    await clickmeframe?.locator("//button[@id='Click']").click();
    const textvalue = await clickmeframe?.locator("//button[@id='Click']").textContent();
    console.log(`Text inside Click me button in frame1:${textvalue}`)


    // Nested frame

    const nestedframe = page.frame({url:'https://www.leafground.com/framebutton.xhtml'})
    await nestedframe?.locator("//button[@id='Click']").click();
    const text = await nestedframe?.locator("//button[@id='Click']").innerText()
    console.log(`Text inside Click me button in nested frame:${text}`)



})