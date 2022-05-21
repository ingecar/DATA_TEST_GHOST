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
***
### Escenarios 1 a 20: 
(Data_Test_CrearMiembro.spec.ts - Data_Test_Login.spec.ts - Data_Test_EditarMiembro.spec.ts).             
Estos escenarios se desarrollaron mediante una estrategia a-priori, para lo cual se uso Mockaro para generacion aleatoria de datos y posteriormente exportarlos a formato json, estas pruebas consumen los datos del archivo data.ts y estan previamente organzados por escenarios para ser consumidos durante la ejecucion de los escenarios de pruebas. 

### Escenarios 20 a 30:
(Data_Test_CrearTagsFaker.spec.ts - )           
Estos escenarios se desarrollaron mediante una estrategia (ii) pool de datos (pseudo) aleatorio dinámico , para lo cual se uso faker para generar datos en tiempo de ejeucion durante la ejecucion de los escenarios de pruebas. 
