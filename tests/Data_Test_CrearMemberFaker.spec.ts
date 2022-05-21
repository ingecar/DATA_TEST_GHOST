
import { test, expect } from '@playwright/test';
import { environment } from '../environment';
import { faker } from '@faker-js/faker';

const EmptyName = '';

test.beforeEach(async ({ page }) => {
    await page.goto(environment.urlGhost);    
    await page.type('input[name=identification]', environment.email1)
    await page.type('input[name=password]', environment.pass1)  
    await page.click('button[type=submit]')   
    await page.locator('li', { hasText: 'Members' }).click();
    await page.locator('text=New member').click();
    await expect(page).toHaveURL('http://localhost:2368/ghost/#/members/new');    
});

test.describe('Ghost Data Faker Test', () => {

    test('Crear miembro email vacio', async ({ page }) => {
        await page.type('input[name=email]', EmptyName)
        await Promise.all([
            page.locator('button:has-text("Save")').click()
        ])
        await Promise.all([
            await page.locator('h2 a', { hasText: 'Members'}).click(),            
        ])
    })

    test('Crear miembro email sha', async ({ page }) => {
        await page.type('input[name=email]', faker.git.commitSha())
        await Promise.all([
            page.locator('button:has-text("Save")').click()
        ])
        await Promise.all([
            await page.locator('h2 a', { hasText: 'Members'}).click(),            
        ])
    })
    test('Crear miembro email emai', async ({ page }) => {
        await page.type('input[name=email]', faker.phone.imei())
        await Promise.all([
            page.locator('button:has-text("Save")').click()
        ])
        await Promise.all([
            await page.locator('h2 a', { hasText: 'Members'}).click(),            
        ])
    })
    test('Crear miembro descripcion larga', async ({ page }) => {
        await page.locator('textarea').fill(faker.lorem.words(501)); 
        await Promise.all([
            page.locator('button:has-text("Save")').click()
        ])
        await Promise.all([
            await page.locator('h2 a', { hasText: 'Members'}).click(),            
        ])
    })
    test('Crear miembro descripcion larga email sha', async ({ page }) => {
        await page.type('input[name=email]', faker.git.commitSha())
        await page.locator('textarea').fill(faker.lorem.words(501)); 
        await Promise.all([
            page.locator('button:has-text("Save")').click()
        ])
        await Promise.all([
            await page.locator('h2 a', { hasText: 'Members'}).click(),            
        ])
    })
})