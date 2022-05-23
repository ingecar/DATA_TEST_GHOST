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
Ejecutar todos los test
```
npx playwright test
```
Ejecutar un test específico
```
npx playwright test tests/nombreTest.spec.ts
```
#### NOTA:
1. La versión de Ghost usada es: 
`Ghost-CLI version: 1.19.3` - `Ghost version: 4.46.0`
2. Tener en cuenta que para la correcta ejecución de los test, es necesario cambiar en el archivo `environment.ts`, los atributos de `email` y `pass`, con los del usuario local de Ghost. Esto teniendo en cuenta que son diferentes para cada usuario.


### Pruebas E2E con Kraken:

**Aplicación bajo pruebas**: Ghost 4.41.3

#### 1. Clonar el proyecto

git clone https://github.com/criverao/E2E_Ghost_Kraken.git

#### 2. Instalar Kraken según el turorial

Para instalar Kraken siga las intrucciones de la página oficial de la herramienta:

https://thesoftwaredesignlab.github.io/Kraken/#installation

#### 3. Instalar Faker para Node

Ejecutar `npm install @faker-js/faker --save-dev` para instalar la librería que nos permitirá generar datos a-priori. A continuación el repositorio de la librería con las instrucciones de instalación:

https://github.com/faker-js/faker

#### 4. Actualizar el archivo properties.json

Configure el archivo properties.json con las variables de su instalación y las credencciales de acceso a Ghost:
- Cambiar la propiedad `USER` por el usuario del `GHOST` local que se utilizará para las pruebas, debe ser un usuario administrador. 
- Cambiar la propiedad `PASSWORD` por el password del usuario del `GHOST` local que se utilizará para las pruebas. 
- Cambiar la propiedad `RUTA` por la ruta del `GHOST` loca que será usado para pruebas. 
- Cambiar la propiedad `appVersion` para indicar la versión de Ghost bajo pruebas. Se debe tener en cuenta que las pruebas únicamente son compatibles con la versión de Ghost enunciada anteriormente.

#### 5. Ejecutar cada archivo feature

Los escenarios de prueba se encuentran en el directorio principal. Para correr una prueba debe mover el archivo correspondiente a la carpeta features. Tenga en cuenta que solo debe existir un archivo .feature en esta ruta.

Se debe ejecutar cada archivo de forma independiente siguiendo el orden del numeral asociado al archivo para que las pruebas corran de forma correcta.

Para correr la prueba, ejecute el comando `./node_modules/kraken-node/bin/kraken-node run` en la ruta principal del proyecto.

#### 6. Generación de Reporte VRT

Una vez se hayan ejecutado una prueba en las dos versiones de la aplicación, podemos generar el reporte de la prueba de regresión visual de la siguiente manera:

1. En el archivo `config.json` ubicado en el directorio _root_ del proyecto, modifique las variables `folder1`, `folder2` y `resultsFolder`, de acuerdo con las siguiente descripciones:
    - **folder1**: directorio donde se encuentran las capturas de pantalla de la versión de referencia de la aplicación (para nuestro caso la versión v4.41.3)
    - **folder2**: directorio donde se encuentran las captura de pantalla de la versión bajo prueba de la aplicación (para nuestro caso la version v3.42)
    - **resultsFolder**: directorio donde se generará el reporte HTML.

2. Ejecute el comando `node index.js`, el cual generará el reporte con la comparación de las imágenes utilizando la ResembleJs.
3. Abra en un navegador, el archivo `report.html` ubicado en la ruta que configuró en `resultsFolder`.


