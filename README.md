# Node logger

A light abstraction over [Pino](https://github.com/pinojs/pino).

## Installation

```bash
npm install @subgeniuscorp/logger
```

## Usage

```js
logger.info('some information')
logger.info({ requestId: '12345', userId: '12345', environment: process.ENV })
```
