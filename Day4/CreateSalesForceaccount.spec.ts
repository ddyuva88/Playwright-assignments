import test from '@playwright/test'

test('CreateSalesForceAccount',async({page}) =>{

await page.goto("https://login.salesforce.com/");

await page.getByLabel('Username').fill('dinesh@testleaf.com');

await page.getByLabel('Password').fill('Brave@21');

await page.click("#Login");

await page.waitForURL('**/home'); 

const pageTitle=await page.title();

const url= page.url();

console.assert(pageTitle.includes('Lightning'),`Title Mismatch:${pageTitle}`);

console.assert(url.includes('home'),`Url Mismatch:${url}`);

await page.click('.appLauncher');

await page.getByText('View All').click();

await page.getByPlaceholder('Search apps or items...').fill('Service');

await page.click('//p[text()=`Service`]');

await page.click('[title="Accounts"]');

await page.getByRole('button',{name:"New"}).click();


  // Step 12: Enter Account name using attribute based CSS selector
  await page.fill('[data-aura-class="uiInput uiInputText uiInput--default uiInput--input"]', 'New Account Name');

  // Step 13: Click Save button using XPath
  await page.click('//button[@title="Save"]');

  // Step 14: Verify the toast message displayed
  const toastMessage = await page.textContent('.toastMessage');
  console.assert(toastMessage && toastMessage.includes('was created'), `Toast message mismatch: ${toastMessage}`);

  console.log('All steps executed successfully!');

}
)