# Shepa

## Table of Contents

- [Install](#install)
- [Introduction](#introduction)
- [HowToUse](#howtouse)
- [ChangeLog](#changelog)

## Install

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).

Before installing, [download and install Node.js](https://nodejs.org/en/download/). Node.js 0.6 or higher is required.

Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```sh
$ npm i shepa
```

## Introduction

A very simple tool to send and verify shepa payment gateway.

## HowToUse

### Merchant

Write this code in js file:

#### Send

```js
import Shepa from "shepa";

let shepa = new Shepa('Merchant');
shepa.send(apiKey, amount);
```

#### Verify

```js
import Shepa from "shepa";

let shepa = new Shepa('Merchant');
shepa.send(apiKey, token, amount);


```
### Sandbox

Write this code in js file:

#### Send

```js
import Shepa from "shepa";

let shepa = new Shepa('Sandbox');
shepa.send(apiKey, amount);
```

#### Verify

```js
import Shepa from "shepa";

let shepa = new Shepa('Sandbox');
shepa.send(apiKey, token, amount);
```

## ChangeLog

[Change Log](https://github.com/treegex/shepa/blob/master/CHANGELOG.md)
