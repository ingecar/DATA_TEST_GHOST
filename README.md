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

Para la generación de este tipo de datos se utilizó la libreria faker. Por medio de esta libraría se construyó una función que genera de forma dinámica y  aleatoria un pool de datos con un rango de entre 10 y 20 registros, los cuales se almacenan en un array para después ser accedido durante la prueba mediante la selección nuevamente aleatoria de uno de sus registros, utilizando el indice del array para tomar sus valores.

## C. Estrategia escenario aleatorio

La generación de datos de esta estrategia se realizó en algunos casos con Kraken faker y en otros casos con la libraría Faker de la anterior estrategia, haciendo uso de los métodos que la libraría dispone para cada tipo de dato requerido.

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

## Distribución de las pruebas y técnicas utilizadas

| **Escenario** | **Estrategia** |
| ----- | ----- | 
| 001_create_member_negative_invalid_mail.feature| A-priori |  
| 002_create_member_negative_name_to_long.feature| A-priori |  
| 003_create_member_positive.feature| A-priori |  
| 004_create_member_negative_mail_duplicado.feature| A-priori |  
| 005_update_member_negative_invalid_mail.feature| A-priori |  
| 006_update_member_negative_name_to_long.feature| A-priori |  
| 007_update_member_positive.feature| A-priori |  
| 008_update_member_positive_name.feature| A-priori |  
| 009_update_member_positive_add_note.feature| A-priori |  
| 010_update_member_positive_unsubscribe.feature| A-priori |  
| 011_tag_create_negative_no_name.feature| A-priori |  
| 012_tag_create_negative_descr_to_long.feature| A-priori |  
| 013_tag_create_negative_invalid_color.feature| A-priori |  
| 014_tag_create_positive.feature| A-priori |  
| 015_tag_create_negative_duplicate_name.feature| A-priori |  
| 016_tag_update_negative_invalid_color.feature| Aleatorio (Faker) |  
| 017_tag_update_negative_invalid_desc_to_long.feature| Aleatorio (Faker) |  
| 018_tag_update_negative_invalid_facebook_desc_to_long.feature| Aleatorio (Faker) |  
| 019_tag_update_negative_invalid_twitter_desc_to_long.feature| Aleatorio (Faker) |  
| 020_tag_update_negative_invalid_meta_desc_to_long.feature| Aleatorio (Faker) |  
| 021_tag_update_positive_color.feature| Aleatorio (Faker) |  
| 022_tag_update_positive_desc.feature| Aleatorio (Faker) |  
| 023_tag_update_positive_facebook_desc.feature| Aleatorio (Faker) |  
| 024_tag_update_positive_twitter_desc.feature| Aleatorio (Faker) |  
| 025_tag_update_positive_meta_desc.feature| Aleatorio (Faker) |  
| 031_edit_profile_positive.feature| Aleatorio (kraken-faker) |  
| 032_edit_profile_positive_too_short.feature| A-priori |  
| 033_edit_profile_positive_too_long.feature| A-priori |  
| 034_edit_profile_negative_empty.feature| A-priori |  
| 035_edit_profile_negative_too_long.feature| A-priori |  
| 036_edit_profile_fullname_negative_empty_value.feature| A-priori |  
| 037_edit_profile_fullname_negative_too_long.feature| A-priori |  
| 038_edit_profile_slug_positive_too_long.feature| A-priori |  
| 039_edit_profile_email_negative_too_long.feature| A-priori |  
| 040_edit_profile_location_negative_too_long.feature| A-priori |  
| 041_edit_profile_website_positive_too_long.feature| A-priori |  
| 042_edit_profile_website_negative_too_long.feature| A-priori |  
| 043_edit_profile_website_negative_invalid_data.feature| A-priori |  
| 044_edit_profile_bio_negative_too_long.feature| A-priori |  
| 045_change_general_settings_positive.feature| Aleatorio (kraken-faker) |  
| 046_change_general_settings_positive_empty.feature| Aleatorio (Faker) |  
| 047_change_general_settings_positive_too_short.feature| Aleatorio (Faker) |  
| 048_change_general_settings_positive_too_long.feature| Aleatorio (Faker) |  
| 049_change_general_settings_title_negative_too_long.feature| Aleatorio (Faker) |  
| 050_change_general_settings_description_negative_too_long.feature| Aleatorio (Faker) |  
| 051_change_general_settings_language_negative_too_long.feature|Aleatorio (Faker)  |  
| 052_create_page_positive.feature| Aleatorio (kraken-faker) |  
| 053_create_page_positive_empty.feature| Aleatorio (Faker) |  
| 054_create_page_positive_too_short.feature| Aleatorio (Faker) |  
| 055_create_page_positive_too_long.feature| Aleatorio (Faker) |  
| 056_create_page_negative_title_too_long.feature| Pseudo aleatorio dinámico (Faker) |  
| 057_create_page_positive_with_excerpt.feature| Pseudo aleatorio dinámico (Faker) |  
| 058_create_page_negative_excerpt_too_long.feature| Pseudo aleatorio dinámico (Faker) |  
| 059_create_draft_page_positive.feature| Pseudo aleatorio dinámico (Faker) |  
| 060_login_feature_negative.feature| Pseudo aleatorio dinámico (Faker) |  




