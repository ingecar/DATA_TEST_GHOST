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

test.describe('Tests Pages', () => {
    test('Crear Page', async ({ page }) => {
        let id = Math.floor(Math.random()*data.length)
        let pag = {
            title: data[id].title,
            description: data[id].description
        }
        await page.locator('li a', {hasText: 'Pages'}).click();
        await expect(page).toHaveURL('http://localhost:2368/ghost/#/pages');
        await page.locator('text=New page').nth(0).click();
        await expect(page).toHaveURL('http://localhost:2368/ghost/#/editor/page');
        await page.type('textarea[placeholder="Page title"]', pag.title);
        await page.locator('div[data-placeholder="Begin writing your page..."]').fill(pag.description);
        await Promise.all([
            page.waitForNavigation(/*{ url: 'http://localhost:2368/ghost/#/editor/page/6277f1546609b10a183d8a99' }*/),
            page.locator('.koenig-editor__editor').click()
        ]);
        await page.locator('div[role="button"]:has-text("Publish")').click();
        await page.locator('button:has-text("Publish")').click();
        await page.locator('button:has-text("Published")').click();
        await page.locator('text=Pages').click();
    })
    test('Editar Page', async ({ page }) => {
        let id = Math.floor(Math.random()*data.length)
        let pag = {
            title: data[id].title,
            description: data[id].description
        }
        await page.locator('li a', {hasText: 'Pages'}).click();
        await expect(page).toHaveURL('http://localhost:2368/ghost/#/pages');
        await page.locator('li[class="gh-list-row gh-posts-list-item"]').nth(0).click();
        await page.type('textarea[placeholder="Page title"]', pag.title);
        await page.locator('div[data-placeholder="Begin writing your page..."]').fill(pag.description);
        await Promise.all([
            page.locator('.koenig-editor__editor').click()
        ]);
        await page.locator('div[role="button"]:has-text("Update")').click();
        await page.locator('button:has-text("Update")').click();
    })
    test('Page sin titulo', async ({ page }) => {
        let id = Math.floor(Math.random()*data.length)
        let pag = {
            title: data[id].title,
            description: data[id].description
        }
        await page.locator('li a', {hasText: 'Posts'}).click();
        await page.locator('li a', {hasText: 'Pages'}).click();
        await expect(page).toHaveURL('http://localhost:2368/ghost/#/pages');
        await page.locator('li[class="gh-list-row gh-posts-list-item"]').nth(0).click();
        await page.type('textarea[placeholder="Page title"]', '');
        await page.locator('div[data-placeholder="Begin writing your page..."]').fill(pag.description);
        await Promise.all([
            page.locator('.koenig-editor__editor').click()
        ]);
        await page.locator('div[role="button"]:has-text("Update")').click();
        await page.locator('button:has-text("Update")').click();
    })
    test('Page sin descripcion', async ({ page }) => {
        let id = Math.floor(Math.random()*data.length)
        let pag = {
            title: data[id].title,
            description: data[id].description
        }
        await page.locator('li a', {hasText: 'Pages'}).click();
        await expect(page).toHaveURL('http://localhost:2368/ghost/#/pages');
        await page.locator('li[class="gh-list-row gh-posts-list-item"]').nth(0).click();
        await page.type('textarea[placeholder="Page title"]', pag.title);
        await page.locator('div[data-placeholder="Begin writing your page..."]').fill('');
        await Promise.all([
            page.locator('.koenig-editor__editor').click()
        ]);
        await page.locator('div[role="button"]:has-text("Update")').click();
        await page.locator('button:has-text("Update")').click();
    })
    test('Page sin titulo ni descripcion', async ({ page }) => {
        let id = Math.floor(Math.random()*data.length)
        let pag = {
            title: data[id].title,
            description: data[id].description
        }
        await page.locator('li a', {hasText: 'Pages'}).click();
        await expect(page).toHaveURL('http://localhost:2368/ghost/#/pages');
        await page.locator('li[class="gh-list-row gh-posts-list-item"]').nth(0).click();
        await page.type('textarea[placeholder="Page title"]', '');
        await page.locator('div[data-placeholder="Begin writing your page..."]').fill('');
        await Promise.all([
            page.locator('.koenig-editor__editor').click()
        ]);
        await page.locator('div[role="button"]:has-text("Update")').click();
        await page.locator('button:has-text("Update")').click();
    })
    test('Page con titulo extenso (limite - 1)', async ({ page }) => {
        let id = Math.floor(Math.random()*data.length)
        let pag = {
            title: data[id].title,
            description: data[id].description
        }
        await page.locator('li a', {hasText: 'Pages'}).click();
        await expect(page).toHaveURL('http://localhost:2368/ghost/#/pages');
        await page.locator('li[class="gh-list-row gh-posts-list-item"]').nth(0).click();
        await page.locator('textarea[placeholder="Page title"]').fill(faker.datatype.string(254));
        await page.locator('div[data-placeholder="Begin writing your page..."]').fill('');
        await Promise.all([
            page.locator('.koenig-editor__editor').click()
        ]);
        await page.locator('div[role="button"]:has-text("Update")').click();
        await page.locator('button:has-text("Update")').click();
    })
    test('Page con titulo extenso (limite)', async ({ page }) => {
        let id = Math.floor(Math.random()*data.length)
        let pag = {
            title: data[id].title,
            description: data[id].description
        }
        await page.locator('li a', {hasText: 'Pages'}).click();
        await expect(page).toHaveURL('http://localhost:2368/ghost/#/pages');
        await page.locator('li[class="gh-list-row gh-posts-list-item"]').nth(0).click();
        await page.locator('textarea[placeholder="Page title"]').fill(faker.datatype.string(255));
        await page.locator('div[data-placeholder="Begin writing your page..."]').fill('');
        await Promise.all([
            page.locator('.koenig-editor__editor').click()
        ]);
        await page.locator('div[role="button"]:has-text("Update")').click();
        await page.locator('button:has-text("Update")').click();
    })
    test('Page con titulo extenso (limite + 1)', async ({ page }) => {
        let id = Math.floor(Math.random()*data.length)
        let pag = {
            title: data[id].title,
            description: data[id].description
        }
        await page.locator('li a', {hasText: 'Pages'}).click();
        await expect(page).toHaveURL('http://localhost:2368/ghost/#/pages');
        await page.locator('li[class="gh-list-row gh-posts-list-item"]').nth(0).click();
        await page.locator('textarea[placeholder="Page title"]').fill(faker.datatype.string(256));
        await page.locator('div[data-placeholder="Begin writing your page..."]').fill('');
        await Promise.all([
            page.locator('.koenig-editor__editor').click()
        ]);
        await page.locator('div[role="button"]:has-text("Update")').click();
        await page.locator('button:has-text("Update")').click();
    })
    test('Page con descripcion extensa', async ({ page }) => {
        let id = Math.floor(Math.random()*data.length)
        let pag = {
            title: data[id].title,
            description: data[id].description
        }
        await page.locator('li a', {hasText: 'Pages'}).click();
        await expect(page).toHaveURL('http://localhost:2368/ghost/#/pages');
        await page.locator('li[class="gh-list-row gh-posts-list-item"]').nth(0).click();
        await page.type('textarea[placeholder="Page title"]', pag.title);
        await page.locator('div[data-placeholder="Begin writing your page..."]').fill(faker.lorem.paragraphs(200));
        await Promise.all([
            page.locator('.koenig-editor__editor').click()
        ]);
        await page.locator('div[role="button"]:has-text("Update")').click();
        await page.locator('button:has-text("Update")').click();
    })
    test('afterAll' ,async ({ page }) => {
        await page.locator('li', { hasText: 'Pages' }).click();
        await page.locator('li[class="gh-list-row gh-posts-list-item"]').nth(0).click();
        await page.locator('button[title=Settings]').click();
        await page.locator('div form button', {hasText: 'Delete page'}).click();
        await new Promise(r => setTimeout(r, 1000));
        await page.locator('h1').press('Enter');
    })
})
