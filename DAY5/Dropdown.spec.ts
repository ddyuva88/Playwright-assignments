import { test } from '@playwright/test'

test('01-Create Lead', async ({ page }) => {

    await page.goto("http://leaftaps.com/opentaps/control/main");

    await page.fill(`//input[@id='username']`, `democsr`);

    await page.fill(`//input[@id='password']`, `crmsfa`);

    await page.click(`//input[@class='decorativeSubmit']`);

    console.log(await page.title());

    await page.click(`//a[contains(text(),'CRM')]`);

    await page.click(`//a[text()='Create Lead']`);

    await page.fill(`//input[@id='createLeadForm_companyName']`, 'TCS');

    await page.fill(`//input[@id='createLeadForm_firstName']`, 'Dinesh');

    await page.fill(`//input[@id='createLeadForm_lastName']`, 'D');

    //Print the value of USD dropdown

    await page.selectOption(`#createLeadForm_currencyUomId`,{value:"USD"});
    await page.waitForTimeout(2000);
    const sourceValue=await page.locator(`#createLeadForm_currencyUomId option:checked`).innerText();
    console.log(`The value of source ${sourceValue}`);

    //Print the currencies in the dropdown
    const dropdown=page.locator(`#createLeadForm_currencyUomId>option`);
    const count=await dropdown.count();
    console.log(`Total No.of Currencies:${count}`);

    for (let index = 0; index < count; index++) {
        console.log(await dropdown.nth(index).innerText());
        
    }



    await page.locator("//input[@name='submitButton']").click();

    await page.waitForTimeout(5000); // Wait for 5 seconds

    console.log(await page.title());


}
)