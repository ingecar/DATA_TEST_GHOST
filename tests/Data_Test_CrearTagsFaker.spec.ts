
import { test, expect } from '@playwright/test';
import { environment } from '../environment';
import { faker } from '@faker-js/faker';

const EmptyName = '';
const EmptyDescription = '';

test.beforeEach(async ({ page }) => {
    await page.goto(environment.urlGhost);           
    await page.type('input[name=identification]', environment.email1)
    await page.type('input[name=password]', environment.pass1)
    await page.click('button[type=submit]')
    await page.locator('li', { hasText: 'Tags' }).click();
    page.locator('a:has-text("New tag")').click()
    await expect(page).toHaveURL('http://localhost:2368/ghost/#/tags/new'); 
});

test.describe('Ghost Data Faker Test', () => {

    test('Crear tag nombre vacio', async ({ page }) => {
        await page.type('input[name=name]', EmptyName)
        await Promise.all([
            page.locator('button:has-text("Save")').click(),
        ])
        await Promise.all([
            await page.locator('h2 a', { hasText: 'Tags'}).click(),          
        ]) 
    })
    test('Crear tag nombre invalido', async ({ page }) => {
        for (let a = 0; a < 5; a++){
            await page.type('input[name=name]', faker.git.commitSha())
            await Promise.all([
                page.locator('button:has-text("Save")').click(),
            ])    
        }
        await Promise.all([
            await page.locator('h2 a', { hasText: 'Tags'}).click(),          
        ]) 
    })
    test('Crear tag nombre invalido descripcion vacia', async ({ page }) => {
        for (let a = 0; a < 5; a++){
            await page.type('input[name=name]', faker.git.commitSha())
            await page.locator('textarea').fill(EmptyDescription); 
            await Promise.all([
                page.locator('button:has-text("Save")').click(),
            ])    
        }
        await Promise.all([
            await page.locator('h2 a', { hasText: 'Tags'}).click(),          
        ]) 
    })
    test('Crear tag nombre invalido - slug vacio', async ({ page }) => {
        await page.type('input[name=name]', faker.commerce.product())
        await page.type('input[name=slug]', EmptyName)
        await Promise.all([
            page.locator('button:has-text("Save")').click(),
        ])    

        await Promise.all([
            await page.locator('h2 a', { hasText: 'Tags'}).click(),          
        ]) 
    })
    test('Crear tag color invalido', async ({ page }) => {
        await page.type('input[name=accent-color]', faker.git.commitSha())
        await Promise.all([
            page.locator('button:has-text("Save")').click(),
        ])    
        await Promise.all([
            await page.locator('h2 a', { hasText: 'Tags'}).click(),          
        ]) 
    })
    test('Crear tag description invalido', async ({ page }) => {
        await page.type('input[name=name]', faker.commerce.product())
        await page.locator('textarea').fill(faker.lorem.words(501)); 
        await Promise.all([
            page.locator('button:has-text("Save")').click(),
        ])    
        await Promise.all([
            await page.locator('h2 a', { hasText: 'Tags'}).click(),          
        ]) 
    })
})