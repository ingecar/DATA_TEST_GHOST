import { test, expect } from '@playwright/test';
import { scenario_1_16, scenario_1_17, scenario_1_18, scenario_1_19, scenario_1_20 } from '../data';
import { environment } from '../environment';

const MemberName = 'Test Member';
const MemberEmail = 'Test@member.com'
// const MemberTags: Array<string>  = ['autos', 'motos'];

test.beforeEach(async ({ page }) => {
    await page.goto(environment.urlGhost);
    await page.type('input[name=identification]', environment.email1)
    await page.type('input[name=password]', environment.pass1)
    await page.click('button[type=submit]')
});

test.describe('Ghost Data Faker Test', () => {

    test('Crear un Miembro', async ({ page }) => {
        await page.locator('li', { hasText: 'Members' }).click();
        await page.locator('text=New member').click();
        await expect(page).toHaveURL('http://localhost:2368/ghost/#/members/new');
        await page.type('input[name=name]', MemberName.toString())
        await page.type('input[name=email]', MemberEmail.toString())
        await Promise.all([
            page.locator('button:has-text("Save")').click()
        ])
        // Cscreenshot capture
        await Promise.all([
            await page.locator('h2 a', { hasText: 'Members'}).click(),        
        ])
    })

    test('Editar un Miembro email vacio',async ({ page }) => {
        await page.locator('li', { hasText: 'Members' }).click();
        await page.locator('div h3', {hasText: MemberName.toString()}).click()
        for(let a = 0; a < scenario_1_16.length ; a++){
            await page.locator('input[name=email]').fill(scenario_1_16[a].email);
            page.locator('button:has-text("Save")').click()
        }
        await new Promise(r => setTimeout(r, 2000));

        // Captura de pantalla
        await Promise.all([
            await page.locator('h2 a', { hasText: 'Members'}).click(),
        ])
    })

    test('Editar un Miembro email vacio -nombre ditado',async ({ page }) => {
        await page.locator('li', { hasText: 'Members' }).click();
        await page.locator('div h3', {hasText: MemberName.toString()}).click()
        for(let a = 0; a < scenario_1_17.length ; a++){
            await page.locator('input[name=name]').fill(scenario_1_17[a].name);
            await page.locator('input[name=email]').fill(scenario_1_17[a].email);
            page.locator('button:has-text("Save")').click()
        }
        await new Promise(r => setTimeout(r, 2000));

        // Captura de pantalla
        await Promise.all([
            await page.locator('h2 a', { hasText: 'Members'}).click(),
        ])
    })
    test('Editar un Miembro email vacio nombre y nota vacio',async ({ page }) => {
        await page.locator('li', { hasText: 'Members' }).click();
        await page.locator('div h3', {hasText: MemberName.toString()}).click()
        for(let a = 0; a < scenario_1_18.length ; a++){
            await page.locator('input[name=name]').fill(scenario_1_18[a].name);
            await page.locator('textarea').fill(scenario_1_18[a].note);
            await page.locator('input[name=email]').fill(scenario_1_18[a].email);
            page.locator('button:has-text("Save")').click()
        }
        await new Promise(r => setTimeout(r, 2000));

        // Captura de pantalla
        await Promise.all([
            await page.locator('h2 a', { hasText: 'Members'}).click(),
        ])
    })
    test('Editar un Miembro email sin nombre nombre y nota vacio',async ({ page }) => {
        await page.locator('li', { hasText: 'Members' }).click();
        await page.locator('div h3', {hasText: MemberName.toString()}).click()
        for(let a = 0; a < scenario_1_19.length ; a++){
            await page.locator('input[name=name]').fill(scenario_1_19[a].name);
            await page.locator('textarea').fill(scenario_1_19[a].note);
            await page.locator('input[name=email]').fill(scenario_1_19[a].email);
            page.locator('button:has-text("Save")').click()
        }
        await new Promise(r => setTimeout(r, 2000));

        // Captura de pantalla
        await Promise.all([
            await page.locator('h2 a', { hasText: 'Members'}).click(),
        ])
    })
    test('Editar un Miembro email sin dominio nombre y nota vacio',async ({ page }) => {
        await page.locator('li', { hasText: 'Members' }).click();
        await page.locator('div h3', {hasText: MemberName.toString()}).click()
        for(let a = 0; a < scenario_1_20.length ; a++){
            await page.locator('input[name=name]').fill(scenario_1_20[a].name);
            await page.locator('textarea').fill(scenario_1_20[a].note);
            await page.locator('input[name=email]').fill(scenario_1_20[a].email);
            page.locator('button:has-text("Save")').click()
        }
        await new Promise(r => setTimeout(r, 2000));

        // Captura de pantalla
        await Promise.all([
            await page.locator('h2 a', { hasText: 'Members'}).click(),
        ])
    })
})