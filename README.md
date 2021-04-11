<p align="center">
  <a href="" rel="noopener">
 <img width="100%" src="https://user-images.githubusercontent.com/28464939/114286283-baa02880-9a33-11eb-9b1d-a573274b0848.png" alt="Project logo"></a>
</p>

<h3 align="center">in-calc (API2)</h3>

---

<p align="center"> An API for calculating the value of a property according to its size in square meters
    <br> 
</p>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Automated Tests](#tests)
- [Deployment](#deployment)
- [Built Using](#built_using)
- [Authors](#authors)

## 🧐 About <a name = "about"></a>

An API for calculating the value of a property according to its size in square meters

## 🏁 Getting Started <a name = "getting_started"></a>

### Prerequisites

NodeJS and NPM

### Installing

To execute the API locally run

```
npm start
```

### Endpoints to consume

```
/ (Welcome route)
/get-pricing/{squareMeters}
```

More info about the routes on the [Swagger](https://in-calc-api.herokuapp.com/documentation)

## 🔧 Running the tests <a name = "tests"></a>

### This project uses Jest as a framework for integrated tests

<img width="100%" src="https://user-images.githubusercontent.com/28464939/114287205-87619780-9a3b-11eb-926b-b17fa759f19c.png" alt="Project logo">

To execute the tests run

```
npm test
```

IMPORTANT => For the integrated test to work, the [in-square](https://github.com/dev-John/in-square) API also must be running locally...

## 🚀 Deployment <a name = "deployment"></a>

This project uses the Github Actions CI/CD and Docker to deploy automatically to the Heroku Server

<img width="100%" src="https://user-images.githubusercontent.com/28464939/114287517-c2fd6100-9a3d-11eb-9f73-0da6222a0303.png" alt="Project logo">

## ⛏️ Built Using <a name = "built_using"></a>

- [NodeJs](https://nodejs.org/en/) - Server Environment
- [Hapi](https://hapi.dev) - Server Framework
- [Docker](https://www.docker.com) - Image deployment
- [Jest](https://jestjs.io) - Test Framework
- [Joi](https://joi.dev) - Schema description language and data validator

## ✍️ Authors <a name = "authors"></a>

- [@dev-John](https://github.com/dev-John)
