import { test, expect } from '@playwright/test';
import { environment } from '../environment';
import { scenario_1_10, scenario_1_11, scenario_1_12, scenario_1_13, scenario_1_14, scenario_1_15, scenario_1_6, scenario_1_7, scenario_1_8, scenario_1_9 } from '../data';
import { faker } from '@faker-js/faker';

const MemberName = faker.name.findName(); // Rowan Nikolaus
const MemberEmail = faker.internet.email(); // Kassandra.Haley@erich.biz

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
        //crear miembro sin email
        for(let a = 0; a < scenario_1_6.length ; a++){
            await page.type('input[name=email]', scenario_1_6[a].email)
            await Promise.all([
                page.locator('button:has-text("Save")').click()
            ])
            
        }
        await Promise.all([
            await page.locator('h2 a', { hasText: 'Members'}).click(),            
        ])
    })

    test('Crear miembro email vacio - nombre valido', async ({ page }) => {
        //crear miembro sin email 
        for(let a = 0; a < scenario_1_7.length ; a++){
            await page.type('input[name=email]', scenario_1_7[a].email)
            await Promise.all([
                page.locator('button:has-text("Save")').click()
            ])
            
        }
        await Promise.all([
            await page.locator('h2 a', { hasText: 'Members'}).click(),            
        ])
    })

    test('Crear miembro sin nombre email ', async ({ page }) => {
        for(let a = 0; a < scenario_1_8.length ; a++){
            await page.type('input[name=email]', scenario_1_8[a].email)
            await Promise.all([
                page.locator('button:has-text("Save")').click(),
            ])  
            await page.locator('input[name=email]').fill(' ');
        }
        await Promise.all([
            await page.locator('h2 a', { hasText: 'Members'}).click(),            
        ])
    })

    test('Crear miembro email vacio - nombre - nota', async ({ page }) => { 
        for(let a = 0; a < scenario_1_9.length ; a++){
            await page.type('input[name=email]', scenario_1_9[a].email)
            await page.type('input[name=email]', scenario_1_9[a].nombre)
            await page.type('input[name=email]', scenario_1_9[a].nota)
            
            await Promise.all([
                page.locator('button:has-text("Save")').click(),
            ])  
            await page.locator('input[name=email]').fill(' ');
        }
        await Promise.all([
            await page.locator('h2 a', { hasText: 'Members'}).click(),            
        ])
    })

    test('Crear miembro email vacio - nota', async ({ page }) => {
        for(let a = 0; a < scenario_1_10.length ; a++){
            await page.type('input[name=email]', scenario_1_10[a].email)
            await page.type('input[name=email]', scenario_1_10[a].nota)
            await Promise.all([
                page.locator('button:has-text("Save")').click(),
            ])  
            await page.locator('input[name=email]').fill(' ');
        }
        await Promise.all([
            await page.locator('h2 a', { hasText: 'Members'}).click(),            
        ])
    })

    test('Crear miembro email sin dominio', async ({ page }) => {
        for(let a = 0; a < scenario_1_11.length ; a++){
            await page.type('input[name=email]', scenario_1_11[a].email)
            await Promise.all([
                page.locator('button:has-text("Save")').click(),
            ])  
            await page.locator('input[name=email]').fill(' ');
        }
        await Promise.all([
            await page.locator('h2 a', { hasText: 'Members'}).click(),            
        ])
    })

    test('Crear miembro email vacio nota - label', async ({ page }) => {

        for(let a = 0; a < scenario_1_13.length ; a++){
            await page.type('input[name=email]', scenario_1_13[a].email)
            await page.type('input[name=email]', scenario_1_13[a].nota)
            await page.locator('input[type="search"]').fill(scenario_1_13[a].tags);
            await page.locator('input[type="search"]').press('Enter');
            await Promise.all([
                page.locator('button:has-text("Save")').click(),
            ])  
            await page.locator('input[name=email]').fill(' ');
        }
        await Promise.all([
            await page.locator('h2 a', { hasText: 'Members'}).click(),            
        ])
    })

    test('Crear miembro email vacio - label', async ({ page }) => {
        
        for(let a = 0; a < scenario_1_12.length ; a++){
            await page.type('input[name=email]', scenario_1_12[a].email)
            await page.locator('input[type="search"]').fill(scenario_1_12[a].tags);
            await page.locator('input[type="search"]').press('Enter');
            await Promise.all([
                page.locator('button:has-text("Save")').click(),
            ])  
            await page.locator('input[name=email]').fill(' ');
        }
        await Promise.all([
            await page.locator('h2 a', { hasText: 'Members'}).click(),            
        ])
    })

    test('Crear miembro email invalido nota vacia - label', async ({ page }) => {
        for(let a = 0; a < scenario_1_14.length ; a++){
            await page.type('input[name=email]', scenario_1_14[a].email)
            await page.type('input[name=email]', scenario_1_14[a].nota)
            await page.locator('input[type="search"]').fill(scenario_1_14[a].tags);
            await page.locator('input[type="search"]').press('Enter');
            await Promise.all([
                page.locator('button:has-text("Save")').click(),
            ])  
            await page.locator('input[name=email]').fill(' ');
        }
        await Promise.all([
            await page.locator('h2 a', { hasText: 'Members'}).click(),            
        ])
    })

    test('Crear miembro email invalido nota vacia - label vacio', async ({ page }) => {
        for(let a = 0; a < scenario_1_15.length ; a++){
            await page.type('input[name=email]', scenario_1_15[a].email)
            await page.type('input[name=email]', scenario_1_15[a].nota)
            await page.locator('input[type="search"]').fill(scenario_1_15[a].tags);
            await page.locator('input[type="search"]').press('Enter');
            await Promise.all([
                page.locator('button:has-text("Save")').click(),
            ])  
            await page.locator('input[name=email]').fill(' ');
        }
        await Promise.all([
            await page.locator('h2 a', { hasText: 'Members'}).click(),            
        ])
    })
})