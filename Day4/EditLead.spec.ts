import test from '@playwright/test'

test('02-EditLead', async ({ page }) => {

  await page.goto("http://leaftaps.com/opentaps/control/main");

  await page.fill("//input[@id='username']", 'Demosalesmanager');

  await page.fill("//input[@id='password']", 'crmsfa');

  await page.click("//input[@type='submit']");

  await page.click("(//a[contains(@href,'crmsfa')])[2]");

  await page.click("//a[text()='Leads']");

  await page.click("//a[contains(text(),'Find')]");

  await page.waitForTimeout(2000); 

  await page.click("//table[@class='x-grid3-row-table']/tbody[1]/tr[1]/td[1]/div[1]/a[1]");

  await page.click('text=Edit');
  await page.locator("#updateLeadForm_companyName").fill("TCS");

  await page.locator("#updateLeadForm_departmentName").fill("IT");

  await page.locator("#updateLeadForm_annualRevenue").fill("1000");

  await page.locator("#updateLeadForm_description").fill("edit lead");

  await page.click('.smallSubmit');
  await page.waitForTimeout(5000); // Wait for 5 seconds


  await page.waitForSelector('span[id="viewLead_companyName_sp"]');
  
  const updatedCompanyName = await page.textContent('#viewLead_companyName_sp');
  const updatedAnnualRevenue = await page.textContent('#viewLead_annualRevenue_sp');
  const updatedDepartment = await page.textContent('#viewLead_departmentName_sp');
  const updatedDescription = await page.textContent('#viewLead_description_sp');

  console.log('Fields updated successfully!');
  console.log(`Company Name: ${updatedCompanyName}`);
  console.log(`Annual Revenue: ${updatedAnnualRevenue}`);
  console.log(`Department: ${updatedDepartment}`);
  console.log(`Description: ${updatedDescription}`);
  // Assertions
  if (updatedCompanyName && updatedCompanyName.includes ('TCS') && updatedDescription && updatedDescription.includes('edit') &&
  updatedAnnualRevenue === '$1,000.00' && updatedDepartment === 'IT') {
    console.log('Verification Passed!');
  } else {
    console.error('Verification Failed!');
  }

})