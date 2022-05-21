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

test.describe('Tests Post', () => {
    
    test('Crear Post', async ({ page }) => {
        let id = Math.floor(Math.random()*data.length)
        let post = {
            title: data[id].title,
            description: data[id].description
        }
        await page.locator('li', { hasText: 'Posts' }).click();
        await page.locator('text=New post').click();
        await expect(page).toHaveURL('http://localhost:2368/ghost/#/editor/post');
        await page.type('textarea[placeholder="Post title"]', post.title)
        await page.type('div[data-placeholder="Begin writing your post..."]', post.description)
        await page.locator('.koenig-editor__editor').click()
        await page.locator('div[role="button"]:has-text("Publish")').click();
        await page.locator('button:has-text("Publish")').click();
        await page.locator('button:has-text("Publish")').click(),
        await page.locator('a span', { hasText: 'Posts'}).click(),
        await page.click('a[title=Published]')
    })
    test('Editar Post', async ({ page }) => {
        let id = Math.floor(Math.random()*data.length)
        let post = {
            title: data[id].title,
            description: data[id].description
        }
        await page.locator('li', { hasText: 'Posts' }).click()
        await page.click('a[title=Published]')
        await page.locator('h3[class="gh-content-entry-title"]').nth(0).click()
        await page.locator('textarea[placeholder="Post title"]').fill(post.title)
        await page.locator('div[data-placeholder="Begin writing your post..."]').fill(post.description)
        await page.locator('div[role="button"]:has-text("Update")').click();
        // Click Update
        await page.locator('footer button span', {hasText: 'Update'}).click();
        // Captura de pantalla
        await page.locator('a span', { hasText: 'Posts'}).click()
    })
    test('Post sin titulo', async ({ page }) => {
        let id = Math.floor(Math.random()*data.length)
        let post = {
            title: data[id].title,
            description: data[id].description
        }
        await page.locator('li', { hasText: 'Posts' }).click();
        await page.click('a[title=Published]')
        await page.locator('h3[class="gh-content-entry-title"]').nth(0).click()
        await page.locator('textarea[placeholder="Post title"]').fill('')
        await page.locator('div[data-placeholder="Begin writing your post..."]').fill(post.description)
        await page.locator('div[role="button"]:has-text("Update")').click();
        // Click Update
        await page.locator('footer button span', {hasText: 'Update'}).click();
        // Captura de pantalla
        await page.locator('a span', { hasText: 'Posts'}).click()
    })
    test('Post sin descripcion', async ({ page }) => {
        let id = Math.floor(Math.random()*data.length)
        let post = {
            title: data[id].title,
            description: data[id].description
        }
        await page.locator('li', { hasText: 'Posts' }).click();
        await page.click('a[title=Published]')
        await page.locator('h3[class="gh-content-entry-title"]').nth(0).click()
        await page.locator('textarea[placeholder="Post title"]').fill(post.title)
        await page.locator('div[data-placeholder="Begin writing your post..."]').fill('')
        await page.locator('div[role="button"]:has-text("Update")').click();
        // Click Update
        await page.locator('footer button span', {hasText: 'Update'}).click();
        // Captura de pantalla
        await page.locator('a span', { hasText: 'Posts'}).click()
    })
    test('Post sin titulo ni descripcion', async ({ page }) => {
        let id = Math.floor(Math.random()*data.length)
        let post = {
            title: data[id].title,
            description: data[id].description
        }
        await page.locator('li', { hasText: 'Posts' }).click();
        await page.click('a[title=Published]')
        await page.locator('h3[class="gh-content-entry-title"]').nth(0).click()
        await page.locator('textarea[placeholder="Post title"]').fill('')
        await page.locator('div[data-placeholder="Begin writing your post..."]').fill('')
        await page.locator('div[role="button"]:has-text("Update")').click();
        // Click Update
        await page.locator('footer button span', {hasText: 'Update'}).click();
        // Captura de pantalla
        await page.locator('a span', { hasText: 'Posts'}).click()
    })
    test('Post con titulo extenso (limite - 1)', async ({ page }) => {
        let id = Math.floor(Math.random()*data.length)
        let post = {
            title: data[id].title,
            description: data[id].description
        }
        await page.locator('li', { hasText: 'Posts' }).click();
        await page.click('a[title=Published]')
        await page.locator('h3[class="gh-content-entry-title"]').nth(0).click()
        await page.locator('textarea[placeholder="Post title"]').fill('Sed eu purus non magna ullamcorper euismod. Vestibulum fermentum semper eleifend. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi varius aliquet tellus, vitae laoreet orci blandit sit amet. Nulla convallis porttitor ante, a lacinia sem est')
        await page.locator('div[data-placeholder="Begin writing your post..."]').fill(post.description)
        await page.locator('div[role="button"]:has-text("Update")').click();
        // Click Update
        await page.locator('footer button span', {hasText: 'Update'}).click();
        // Captura de pantalla
        await page.locator('a span', { hasText: 'Posts'}).click()
    })
    test('Post con titulo extenso (limite)', async ({ page }) => {
        let id = Math.floor(Math.random()*data.length)
        let post = {
            title: data[id].title,
            description: data[id].description
        }
        await page.locator('li', { hasText: 'Posts' }).click();
        await page.click('a[title=Published]')
        await page.locator('h3[class="gh-content-entry-title"]').nth(0).click()
        await page.locator('textarea[placeholder="Post title"]').fill('Sed eu purus non magna ullamcorper euismod. Vestibulum fermentum semper eleifend. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi varius aliquet tellus, vitae laoreet orci blandit sit amet. Nulla convallis porttitor ante, a lacinia sem esta')
        await page.locator('div[data-placeholder="Begin writing your post..."]').fill(post.description)
        await page.locator('div[role="button"]:has-text("Update")').click();
        // Click Update
        await page.locator('footer button span', {hasText: 'Update'}).click();
        // Captura de pantalla
        await page.locator('a span', { hasText: 'Posts'}).click()
    })
    test('Post con titulo extenso (limite + 1)', async ({ page }) => {
        let id = Math.floor(Math.random()*data.length)
        let post = {
            title: data[id].title,
            description: data[id].description
        }
        await page.locator('li', { hasText: 'Posts' }).click();
        await page.click('a[title=Published]')
        await page.locator('h3[class="gh-content-entry-title"]').nth(0).click()
        await page.locator('textarea[placeholder="Post title"]').fill('Sed eu purus non magna ullamcorper euismod. Vestibulum fermentum semper eleifend. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi varius aliquet tellus, vitae laoreet orci blandit sit amet. Nulla convallis porttitor ante, a lacinia sem estrd')
        await page.locator('div[data-placeholder="Begin writing your post..."]').fill(post.description)
        await page.locator('div[role="button"]:has-text("Update")').click();
        // Click Update
        await page.locator('footer button span', {hasText: 'Update'}).click();
        // Captura de pantalla
        await page.locator('a span', { hasText: 'Posts'}).click()
    })
    test('Post con descripcion extensa', async ({ page }) => {
        let id = Math.floor(Math.random()*data.length)
        let post = {
            title: data[id].title,
            description: data[id].description
        }
        await page.locator('li', { hasText: 'Posts' }).click();
        await page.click('a[title=Published]')
        await page.locator('h3[class="gh-content-entry-title"]').nth(0).click()
        await page.locator('textarea[placeholder="Post title"]').fill(post.title)
        await page.locator('div[data-placeholder="Begin writing your post..."]').fill(faker.lorem.paragraphs(200))
        await page.locator('div[role="button"]:has-text("Update")').click();
        // Click Update
        await page.locator('footer button span', {hasText: 'Update'}).click();
        // Captura de pantalla
        await page.locator('a span', { hasText: 'Posts'}).click()
    })
    test('AfterAll', async({ page }) =>{
        await page.locator('li', { hasText: 'Posts' }).click();
        await page.click('a[title=Published]')
        await page.locator('h3[class="gh-content-entry-title"]').nth(0).click()
        await page.click('button[title="Settings"]')
        await page.locator('text= Delete post').click()
        // await new Promise(r => setTimeout(r, 1000));
        await page.locator('h1').press('Enter');
    })
})