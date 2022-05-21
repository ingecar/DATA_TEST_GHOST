import { test, expect } from "@playwright/test";
import { environment } from '../environment'
import data from '../datapool.json'
import { faker } from '@faker-js/faker'

test.beforeEach(async({ page }) => {
    await page.goto(environment.urlGhost);
    await page.type('input[name=identification]', environment.email)
    await page.type('input[name=password]', environment.pass)
    await page.click('button[type=submit]')
    await new Promise(r => setTimeout(r, 1000));
    await page.locator('ul li span a', {hasText: 'View site'}).click()
})

test.describe('Tests Settings', () => {
    
    test('Cambiar nombre (limite - 1)', async ({ page }) => {
        await page.locator('a[href="#/settings/"]').click()
        await page.locator('span', {hasText: 'Staff'}).click()
        await page.locator('h3[class="apps-card-app-title"]').nth(0).click()
        await page.locator('#user-name').fill(faker.datatype.string(190))
        await page.locator('span', {hasText: 'Save'}).click()
    })
    test('Cambiar nombre (limite)', async ({ page }) => {
        await page.locator('a[href="#/settings/"]').click()
        await page.locator('span', {hasText: 'Staff'}).click()
        await page.locator('h3[class="apps-card-app-title"]').nth(0).click()
        await page.locator('#user-name').fill(faker.datatype.string(191))
        await page.locator('span', {hasText: 'Save'}).click()
    })
    test('Cambiar nombre (limite + 1)', async ({ page }) => {
        await page.locator('a[href="#/settings/"]').click()
        await page.locator('span', {hasText: 'Staff'}).click()
        await page.locator('h3[class="apps-card-app-title"]').nth(0).click()
        await page.locator('#user-name').fill(faker.datatype.string(192))
        await page.locator('span', {hasText: 'Save'}).click()
    })
    test('Cambiar nombre', async ({ page }) => {
        await page.locator('a[href="#/settings/"]').click()
        await page.locator('span', {hasText: 'Staff'}).click()
        await page.locator('h3[class="apps-card-app-title"]').nth(0).click()
        await page.locator('#user-name').fill(faker.name.findName())
        await page.locator('span', {hasText: 'Save'}).click()
    })
    test('Cambiar email (solo caracteres especiales)', async ({ page }) => {
        await page.locator('a[href="#/settings/"]').click()
        await page.locator('span', {hasText: 'Staff'}).click()
        await page.locator('h3[class="apps-card-app-title"]').nth(0).click()
        await page.locator('#user-email').fill(faker.datatype.string(15))
        await page.locator('span', {hasText: 'Save'}).click()
    })
    test('Cambiar email (con "@" y ".")', async ({ page }) => {
        await page.locator('a[href="#/settings/"]').click()
        await page.locator('span', {hasText: 'Staff'}).click()
        await page.locator('h3[class="apps-card-app-title"]').nth(0).click()
        await page.locator('#user-email').fill(faker.name.firstName()+'@x.x')
        await page.locator('span', {hasText: 'Save'}).click()
    })
    test('Cambiar Website (sin ".")', async ({ page }) => {
        await page.locator('a[href="#/settings/"]').click()
        await page.locator('span', {hasText: 'Staff'}).click()
        await page.locator('h3[class="apps-card-app-title"]').nth(0).click()
        await page.locator('#user-website').fill(faker.lorem.slug())
        await page.locator('span', {hasText: 'Save'}).click()
    })
    test('Cambiar Website (valida)', async ({ page }) => {
        await page.locator('a[href="#/settings/"]').click()
        await page.locator('span', {hasText: 'Staff'}).click()
        await page.locator('h3[class="apps-card-app-title"]').nth(0).click()
        await page.locator('#user-website').fill(faker.internet.url())
        await page.locator('span', {hasText: 'Save'}).click()
    })
    test('Agregar Bio (limite - 1)', async ({ page }) => {
        await page.locator('a[href="#/settings/"]').click()
        await page.locator('span', {hasText: 'Staff'}).click()
        await page.locator('h3[class="apps-card-app-title"]').nth(0).click()
        await page.locator('#user-bio').fill(faker.datatype.string(199))
        await page.locator('span', {hasText: 'Save'}).click()
    })
    test('Agregar Bio (limite)', async ({ page }) => {
        await page.locator('a[href="#/settings/"]').click()
        await page.locator('span', {hasText: 'Staff'}).click()
        await page.locator('h3[class="apps-card-app-title"]').nth(0).click()
        await page.locator('#user-bio').fill(faker.datatype.string(200))
        await page.locator('span', {hasText: 'Save'}).click()
    })
    test('Agregar Bio (limite + 1)', async ({ page }) => {
        await page.locator('a[href="#/settings/"]').click()
        await page.locator('span', {hasText: 'Staff'}).click()
        await page.locator('h3[class="apps-card-app-title"]').nth(0).click()
        await page.locator('#user-bio').fill(faker.datatype.string(201))
        await page.locator('span', {hasText: 'Save'}).click()
    })
    test('Agregar Bio (valida)', async ({ page }) => {
        await page.locator('a[href="#/settings/"]').click()
        await page.locator('span', {hasText: 'Staff'}).click()
        await page.locator('h3[class="apps-card-app-title"]').nth(0).click()
        await page.locator('#user-bio').fill(faker.lorem.paragraph(2))
        await page.locator('span', {hasText: 'Save'}).click()
    })
})