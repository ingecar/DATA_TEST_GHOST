# DATA_TEST_GHOST

***
## Escenarios de pruebas con datos generados Playwright-Faker-Mockaroo:

### 1. Clonar el proyecto
### 2. instalar playwright en ruta local con Typescript
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
### 3. Actualizar Dependencias
```
npx playwright install  
```
### 4. Ejecutar los tests
Ejecutar todos los test
```
npx playwright test
```
Ejecutar un test específico
```
npx playwright test tests/nombreTest.spec.ts
```
### NOTA:
1. La versión de Ghost usada es: 
`Ghost-CLI version: 1.19.3` - `Ghost version: 4.46.0`
2. Tener en cuenta que para la correcta ejecución de los test, es necesario cambiar en el archivo `environment.ts`, los atributos de `email` y `pass`, con los del usuario local de Ghost. Esto teniendo en cuenta que son diferentes para cada usuario.

# Pruebas realizadas con Kraken

**Aplicación bajo pruebas**: Ghost 4.41.3

Mediante la herramienta Kraken se generaron 60 escenarios utilizando las estrategias de generación de datos que se enuncian a continuación:

## A. Data pool a-priori

Para la generación de este tipo de datos se utilizó la herramienta Mockaroo mediante la ejecución de un script de generación ubicado en el directorio `data_generators` el cual después de ser ejecutado mediante el comando `node data_generator_file.js`, genera un archivo JSON en el directorio `data_pools`, con los datos requeridos para la prueba, generándose con el mismo nombre del archivo generador pero con la extensión .json; Para cada escenario de pruebas implementado, se importa este archivo teniendo en cuenta que el nombre del feature debe ser igual al nombre del data pool. La selección de los datos del archivo data pool durante la prueba, se realiza de forma aletaria mediante una función random.

## B. Data pool (pseudo) aleatorio dinámico

Para la generación de este tipo de datos se utilizó la libreria faker. Por medio de esta libraría se construyó una función que genera de forma aleatoria un pool de datos con un rango de entre 10 y 20 registros, los cuales se almacenan en un array para después ser accedido durante la prueba mediante la selección nuevamente aleatoria de uno de sus registros, utilizando el indice del array para tomar sus valores.

## C. Estrategia escenario aleatorio

La generación de datos de esta estrategia se realizó en algunos casos con Kraken faker y en otros casos con la libraría Faker de la anterior estrategia.

## Instalación del proyecto y ejecución de las pruebas

### 1. Clonar el proyecto

git clone https://github.com/criverao/E2E_Ghost_Kraken.git

### 2. Instalar Kraken según el turorial

Para instalar Kraken siga las intrucciones de la página oficial de la herramienta:

https://thesoftwaredesignlab.github.io/Kraken/#installation

### 3. Instalar Faker para Node

Ejecutar `npm install @faker-js/faker --save-dev` para instalar la librería que nos permitirá generar datos a-priori. A continuación el repositorio de la librería con las instrucciones de instalación:

https://github.com/faker-js/faker

### 4. Actualizar el archivo properties.json

Configure el archivo properties.json con las variables de su instalación y las credencciales de acceso a Ghost:
- Cambiar la propiedad `USER` por el usuario del `GHOST` local que se utilizará para las pruebas, debe ser un usuario administrador. 
- Cambiar la propiedad `PASSWORD` por el password del usuario del `GHOST` local que se utilizará para las pruebas. 
- Cambiar la propiedad `RUTA` por la ruta del `GHOST` loca que será usado para pruebas. 
- Cambiar la propiedad `appVersion` para indicar la versión de Ghost bajo pruebas. Se debe tener en cuenta que las pruebas únicamente son compatibles con la versión de Ghost enunciada anteriormente.

### 5. Generación de Data pool A-priori

1. Si desea actualizar alguno de los archivos data pool, puede hacerlo ejecutando en el directorio principal del proyecto el comando ` node ./data_generators/nombre_del_archivo_generator_data_pool.js`.
2. El comando anterior le debe generar un nuevo archivo .json con el mismo nombre del archivo generador y ubicado en el directorio `data_pools` del proyecto.

### 6. Ejecutar cada archivo feature

Los escenarios de prueba se encuentran en el directorio principal. Para correr una prueba debe mover el archivo correspondiente a la carpeta features. Tenga en cuenta que solo debe existir un archivo .feature en esta ruta.

Se debe ejecutar cada archivo de forma independiente siguiendo el orden del numeral asociado al archivo para que las pruebas corran de forma correcta.

Para correr la prueba, ejecute el comando `./node_modules/kraken-node/bin/kraken-node run` en la ruta principal del proyecto.


