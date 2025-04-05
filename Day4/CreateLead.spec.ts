import test from '@playwright/test'
test('01-Create Lead', async ({ page }) => {

  await page.goto("http://leaftaps.com/opentaps/control/main");

  await page.fill("//input[@id='username']", 'Demosalesmanager');

  await page.fill("//input[@id='password']", 'crmsfa');

  await page.locator("//input[@type='submit']").click();

  await page.locator("(//a[contains(@href,'crmsfa')])[2]").click();

  await page.locator("//a[text()='Leads']").click();

  await page.locator("//a[contains(text(),'Create')]").click();

  await page.locator("#createLeadForm_companyName").fill("TCS");

  await page.locator("#createLeadForm_firstName").fill("Dinesh6");

  await page.locator("#createLeadForm_lastName").fill("Deena6");

  await page.locator("#createLeadForm_personalTitle").fill("DD2");

  await page.locator("#createLeadForm_generalProfTitle").fill("Mr");

  await page.locator("[name='annualRevenue']").fill("1100000");

  await page.locator("[name='departmentName']").fill("IT");
  //await page.locator("[name='primaryPhoneNumber']").fill("9999999");

  await page.locator("//input[@name='submitButton']").click();

  await page.waitForTimeout(5000); // Wait for 5 seconds


  await page.waitForSelector('span[id="viewLead_companyName_sp"]');
  const companyName = await page.textContent('span[id="viewLead_companyName_sp"]');
  const firstName = await page.textContent('span[id="viewLead_firstName_sp"]');
  const lastName = await page.textContent('span[id="viewLead_lastName_sp"]');

  console.log(companyName);
  console.log(firstName);
  console.log(lastName);

  // Assertions
  if (companyName && companyName.includes ('TCS') && firstName === 'Dinesh6' && lastName === 'Deena6') {
    console.log('Verification Passed!');
  } else {
    console.error('Verification Failed!');
  }

})