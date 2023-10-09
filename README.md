# Mega TV Service - API 💻

MEGA Services is a new platform to contract television services in a building. The main objective is to help users contract a cable TV service for their home.

This is the Mega TV API, and here you can see its main features and how it works:

- Built with Node.js and Express
- Typescript
- Mongoose
- REST API

## Desploy url

[https://honest-server.onrender.com](https://honest-server.onrender.com)

### WARNING:

This API is deployed on a free host, which is typically subject to automatic shutdown due to inactivity. This may cause a delay in the response to the first request.

## Prerequisites

- [Git](https://git-scm.com/downloads)
- [Node.js and npm](https://nodejs.org) Node >= 18.15 LTS, npm >= 9.5.x

## Express Router and Routes

| Route            | HTTP Verb | Route Middleware | Description           |
| ---------------- | --------- | ---------------- | --------------------- |
| /api/healthcheck | GET       |                  | Show a simple message |
| /api/users       | GET       |                  | Get list of users     |
| /api/users       | POST      |                  | Creates a new users   |
| /api/address     | GET       |                  | Get list of address   |

## Usage

The use of endpoints is very simple, previously you could see a table of endpoints that you can call, if you need to create a note, here we have some examples.

### Basic example **Create User** `/api/users` (POST)

Request Body:

```json
{
  "firstname": "jhon",
  "lastname": "Doe",
  "address": "135 York Street, Brooklyn, NY, 11201",
  "apt": "401",
  "plan": {
    "monthsFree": 1,
    "label": "Premium",
    "price": "50"
  },
  "email": "jd@test.com",
  "phone": "3001234567"
}
```

Response:

```json
{
  "message": "user created",
  "data": {
    "firstname": "jhon",
    "lastname": "Doe",
    "address": "135 York Street, Brooklyn, NY, 11201",
    "apt": "401",
    "email": "jd@test.com",
    "phone": "3001234567",
    "plan": {
      "monthsFree": 1,
      "label": "Premium",
      "price": "50"
    },
    "_id": "6523eff8504c95369858099a",
    "createdAt": "2023-10-09T12:20:08.457Z",
    "updatedAt": "2023-10-09T12:20:08.457Z"
  }
}
```

### Basic example **Get address** `/api/address?search=` (GET)

Request query:

`?search=11` Search query to find matches in all items of each stored address, for example: `name`, `city`, `address`, `postal`, `state`.

Response

```json
[
  {
    "_id": "624ce52fbf9bc46da7ab3895",
    "name": "One Ten Third",
    "address": "110 3rd Avenue",
    "city": "New York",
    "state": "NY",
    "postal": "10003",
    "plans": [
      {
        "monthsFree": 1,
        "label": "Premium",
        "price": "50"
      }
    ]
  },
  {
    "_id": "624ce52fbf9bc46da7ab38d5",
    "name": "The Jefferson",
    "address": "211 East 13th Street",
    "city": "New York",
    "state": "NY",
    "postal": "10003",
    "plans": [
      {
        "monthsFree": 1,
        "label": "Premium",
        "price": "50"
      },
      {
        "monthsFree": 0,
        "label": "Basic",
        "price": "30"
      }
    ]
  },
  {
    "_id": "624ce52fbf9bc46da7ab3909",
    "name": "133 W 22nd",
    "address": "133 West 22nd Street",
    "city": "New York",
    "state": "NY",
    "postal": "10011",
    "plans": [
      {
        "monthsFree": 1,
        "label": "Premium",
        "price": "50"
      },
      {
        "monthsFree": 0,
        "label": "Basic",
        "price": "30"
      }
    ]
  }
]
```

### Developing

1. Clone the repository

2. Run `npm install` to install server dependencies.

3. Configure the env running `cp .env.example .env`

4. Update `.env` with the required info

5. Run `npm run dev` to start the development server.
