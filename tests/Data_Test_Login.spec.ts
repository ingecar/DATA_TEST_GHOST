import { test, expect } from '@playwright/test';
import { environment } from '../environment';
import { scenario_1_1, scenario_1_2, scenario_1_3, scenario_1_4, scenario_1_5, scenario_1_7 } from '../data';
import { scenario_1_6, } from '../data';
import { faker } from '@faker-js/faker';

const MemberName = faker.name.findName(); // Rowan Nikolaus
const MemberEmail = faker.internet.email(); // Kassandra.Haley@erich.biz

test.beforeEach(async ({ page }) => {
    await page.goto(environment.urlGhost);          
});

test.describe('Ghost Data Faker Test', () => {

    //Negative Testing pool de datos a-priori
    test('Login', async ({ page }) => {
        //usuario y contraseña vacio
        for(let a = 0; a < scenario_1_1.length ; a++){
            await page.type('input[name=identification]', scenario_1_1[a].email)
            await page.type('input[name=password]', scenario_1_1[a].Pass)
            await page.click('button[type=submit]')
            await page.locator('input[name=identification]').fill('');
            await page.locator('input[name=password]').fill('');
        }

        //usuario valido sin contraseña
        for(let a = 0; a < scenario_1_2.length ; a++){
            await page.type('input[name=identification]', scenario_1_2[a].email)
            await page.type('input[name=password]', scenario_1_2[a].Pass)
            await page.click('button[type=submit]')
            await page.locator('input[name=identification]').fill('');
            await page.locator('input[name=password]').fill('');
        }

        //usuario valido y contraseña errada
        for(let a = 0; a < scenario_1_3.length ; a++){
            await page.type('input[name=identification]', scenario_1_3[a].email)
            await page.type('input[name=password]', scenario_1_3[a].Pass)
            await page.click('button[type=submit]')
            await page.locator('input[name=identification]').fill('');
            await page.locator('input[name=password]').fill('');
        }

        //usuario invalido y sin contraseña
        for(let a = 0; a < scenario_1_4.length ; a++){
            await page.type('input[name=identification]', scenario_1_4[a].email)
            await page.type('input[name=password]', scenario_1_4[a].Pass)
            await page.click('button[type=submit]')
            await page.locator('input[name=identification]').fill('');
            await page.locator('input[name=password]').fill('');
        }

        //usuario invalido y contraseña invalida
        for(let a = 0; a < scenario_1_5.length ; a++){
            await page.type('input[name=identification]', scenario_1_5[a].email)
            await page.type('input[name=password]', scenario_1_5[a].Pass)
            await page.click('button[type=submit]')
            await page.locator('input[name=identification]').fill('');
            await page.locator('input[name=password]').fill('');
        }
    })
})