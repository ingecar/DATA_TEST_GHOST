# DATA_TEST_GHOST

***
### Escenarios de pruebas con datos generados Playwright-Faker-Mockaroo:

#### 1. Clonar el proyecto
#### 2. instalar playwright en ruta local con Typescript
```
cd DATA_TEST_GHOST 
npm init playwright@latest
```
#### 3. Actualizar Dependencias
```
npx playwright install  
```
#### 5. Ejecutar los tests
```
npx playwright test
```
#### NOTA:
Tener en cuenta que para la correcta ejecución de los test, es necesario cambiar en el archivo `environment.ts`, los atributos de `email` y `pass`, con los del usuario local de Ghost. Esto teniendo en cuenta que son diferentes para cada usuario.
