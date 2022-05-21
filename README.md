# DATA_TEST_GHOST

***
### Escenarios de pruebas con datos generados Playwright-Faker-Mockaroo:

#### 1. Clonar el proyecto
#### 2. instalar playwright en ruta local con Typescript
```
cd DATA_TEST_GHOST 
npm init playwright@latest

√ Do you want to use TypeScript or JavaScript? · TypeScript
√ Where to put your end-to-end tests? · e2e
√ Add a GitHub Actions workflow? (y/N) · false
Installing Playwright Test (npm install --save-dev @playwright/test)…
added 5 packages, and audited 6 packages in 19s
found 0 vulnerabilities
```
#### 3. Actualizar Dependencias
```
npx playwright install  
```
#### 4. Ejecutar los tests
```
npx playwright test
```
#### NOTA:
1. La versión de Ghost usada es: 
`Ghost-CLI version: 1.19.3` - `Ghost version: 4.46.0`
2. Tener en cuenta que para la correcta ejecución de los test, es necesario cambiar en el archivo `environment.ts`, los atributos de `email` y `pass`, con los del usuario local de Ghost. Esto teniendo en cuenta que son diferentes para cada usuario.
