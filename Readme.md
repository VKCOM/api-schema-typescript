# VK API Schema Typescript

This repository contains prebuilt TypeScript typings for [VK API Schema](https://github.com/VKCOM/vk-api-schema).
The generation is performed with [VKCOM/api-schema-typescript-generator](https://github.com/VKCOM/api-schema-typescript-generator).

## Current API version – **5.126**

The package versions will follow API versions. It means that for **5.126** API version the package version will be **5.126.\***.

## Install

```
yarn add @vkontakte/api-schema-typescript
```

```
npm i --save @vkontakte/api-schema-typescript
```

## Usage

You can import params, responses, and objects from the library.

```typescript
import {
  MessagesGetByIdParams,           // Method params
  MessagesGetByIdExtendedResponse, // Response interface
  MessagesMessage,                 // Any object
} from '@vkontakte/api-schema-typescript';

const params: MessagesGetByIdParams = {
  message_ids: [1, 2, 3].join(','),
  extended: 1,
};

apiRequest('messages.getById', params).then((response: MessagesGetByIdExtendedResponse) => {
  response.items.forEach((message) => {
    if (message.out) {

    }
  });
});
```
