# Soil Correction

This project is part of a joint effort with [Instituto de Desenvolvimento Rural do Paraná - IDR](http://www.idrparana.pr.gov.br). 

This project is a case study for undergraduates enrolled in the Software Architecture course at [Universidade Tecnológica Federal do Paraná - Cornélio Procópio](http://www.utfpr.edu.br/campus/cornelioprocopio). We use project based learning to build the software architecture. 

## PROJECT OVERVIEW

The project consists of determining: (i) ideal nutrient values for two soil types; (ii) the needed quantity of phosphor, potassium, calcium & magnesium; (iv) the total cost of each nutrient needed; (v) additional nutrients necessary, based on the nutrient source used. 

Current nutrient values are identified from a laboratory analysis of soil samples. These values are used as input for determining the elements aforementioned.

Currently, IDR uses a spreadsheet to determining the values they need. The goal is to replace the spreadsheet with a cloud native software system.

## API REST

The project has a communication interface (API) to perform correction calculations from HTTP or HTTPS requests.

### How to run

To run the project you should make a clone from this repository, add the Maven dependencies described in the `pom.xml` file and then run the `Main.java`.
Below are described how each of the Rest API resources should be used.

### Resources

| Action | HTTP Verb | Description |
|-------|---------|--------|
| __Phosphorus Correction__ | **GET** | The Phosphorus feature aims to return correction values, quantity and other information from parameters sent by the request.|
|__Potassium Correction__| **GET**|Resource that calculates the need to add potassium to the soil from the parameters sent by the request.|
|__Correction of Calcium and Magnesium__| **GET**|Resource that returns the amount of calcium and magnesium to be applied.|

The Base url to test project in development mode is `http://localhost:8080/`.
#### Phosporus Correction

Resource: `/fosforo`

URL preview: `http://localhost:8080/fosforo?teor_fosforo=9&fonte_fosforo=1`

|Params|Values|Description|
|-------|-------|-----|
|teor_fosforo|Number|current phosphorus content in the soil|
|fonte_fosforo|Integer| Element that will be the source of phosphorus for correction.|

Response preview:
```json
{
  "eficiencia_nutriente": 12.857142857142858,
  "quantidade_aplicar": 50.0
}
```

#### Potassium Correction

Resource: `/potassio`

URL preview: `http://localhost:8080/potassio?teor_solo=0.15&participacao_ctc_existente=1.1&participacao_ctc_desejada=3&fonte_potassio=1`

|Params|Values|Description|
|-------|-------|-----|
|teor_solo|Number|current phosphorus content in the soil.|
|participacao_ctc_existente|Number|Element participation in current CTC.|
|participacao_ctc_desejada|Number|Participation of the element in the CTC that you want to achieve.|
|fonte_potassio|Integet|Element that will be the source of potassium for correction.|

Response preview:
```json
{
  "necessidade_adicionar_CMolcDm3": 0.25909090909090904,
  "necessidade_adicionar_MgDm3": 101.30454545454543,
  "necessidade_adicionar_KgHa": 202.60909090909087,
  "eficiencia_nutriente": 286.03636363636355,
  "quantidade_aplicar": 493.16614420062683
}
```
#### Correction of Calcium and Magnesium

Resource: `/calcio_magnesio`

URL preview: `http://localhost:8080/calcio_magnesio?prnt_percentagem=70&quantidade_fonte=129&fonte_corretivo=1`

|Params|Values|Description|
|-------|-------|-----|
|prnt_percentagem|Number|PRNT percentage.|
|fonte_corretivo|Integet|Element that will be the source of calcium and magnesium for correction.|
|quantidade_fonte|Number|Amount of source that will be added to the ground.|

Response preview:
```json
{
  "quantidade_aplicar": 1.842857142857143
}
```

## User Interface

The user interface was made in Next Js, an React Js framework.

Here are some examples of use:

> Using Phosphorus interface

<img src="docs/exemplo-fosforo.gif"/>

> Using Potassium interface

<img src="docs/exemplo-potassio.gif"/>

> Using Magnesium and Calcium interface

<img src="docs/exemplo-calciomagnesio.gif"/>

## Folder structure

**The frontend of the application was made inside the folder called `interface/`**.

The project is organized respecting the framework folder structure pattern **Next js**. In the `/pages` folder are the files that define a page. The name of the folder that holds this file defines a route. For example, inside the `/pages` directory we have the folder `/Phosphorus`, and inside this folder we have an `index.js` file, the route to access the page in the browser will then be `https://site_domain/Phosphorus` . Pages outside the `/pages` directory are not found by the Next Js engine.

<img src="docs/estrutura_paginas.png" />

The `_app.js` file is responsible for storing the code that will be read at render time by Next Js. It is possible to define information that will be used within all other pages of the site. The `index.js` file is the starting point of the site and is represented by the root route `https://site_domain/`.

Inside the `/components` folder are stored codes related to user interface (UI) components that can be used in different parts by different page files. Components are defined using the `styled-components` styling and componentization library.

<img src="docs/relacao_componente_pagina.png" />

## Assets and public files

Next JS understands that the `public` folder holds files that can be referenced within any page, regardless of the nesting routes they are on. So it is possible to declare the use of an image just using the name of the image itself:

```html
<!-- Sem public -->
<img src="caminho/ate/a/imagem/nome_da_imagem.png" />

<!-- com public -->
<img src="nome_da_imagem_que_esta_na_pasta_public.png" />

```
### Usage and build

To use the project, the computer must have a version of NodeJs installed. After cloning the repository, navigate to the project's root folder and run the following command to install the dependencies:

```bash
npm install
# or
yarn install
```
After installing the dependencies, it will be possible to run the project in development mode, just use the following commands:
```bash
npm run dev
# or
yarn dev
```

To `build` the application, just use the command:

```bash 
yarn build
# or
npm run build
```

And to run the application in production:
```bash 
yarn start
# or
npm start
```
The project's default url is [http://localhost:3000](http://localhost:3000), you can access it by browser and start using the application.
### Tests

The project uses the open source library `Cypress` to perform interface testing, integration, among others. The library can be found at [https://docs.cypress.io/guides/overview/why-cypress/](https://docs.cypress.io/guides/overview/why-cypress/).

To run the tests in a local environment, you need to run the following commands in the terminal:
```bash
yarn run test
```
This command `build` the project and after that executes it. Right after that, the same command runs the native cypress command `cypress open` which in turn opens the Cypress development environment to perform the tests on url `http://localhost:8080`.

When opening the URL, a window with written tests will be shown, the user can click on one of them to see the test results.

## PROGRESS

Checkout published releases to follow the project progress.

### As of June, 2021

About 30 students worked on this project in its first cycle, started in March, 2021. During this period, students learned on the impact of development principles on software architecture. They mainly practiced DRY and SOLID principles. They understood how modern programming language constructs can facilitate the archicture maintenance. They used UML to understand each other's architectural structures, focusing on classes (static structure) and message exchange (dynamic structure).

In addition, they practiced software testing, TDD, VCS with Git/Github, and software development with Java.

### As of September, 2021

Less than 15 students actively worked on this project in its second cycle, started in June, 2021. Students learned to visualise static and dynamic components of the architecture by using UML class and sequence diagrams. They exercised Object-Oriented principles, like polymorphism and inheritance by examining the existent architecture. They practiced software reuse by adopting a common Java library. Finally, they used architectural principles to encapsulate classes into layers.