# simple-crud REST API

A simple crud rest api using express

## Install

    npm install

## Configure .env.example and ormconfig.json.example

  You need to change these files with your preferences.

## Run migrations

    npm run typeorm migration:run

## Run the app

  runs on port 3333

    npm run start

# REST API

## Users

`POST /users/`

### Request

    {
      "name": "John Doe"
      "email": "johndoe@john.com"
      "password": "john123"
    }

### Response

    {
      "id": "1933g11b-ad28-49e9-b0c5-54e402fe2d09",
      "name": "John Doe",
      "email": "johndoe@john.com",
      "created_at": "2020-12-20T00:21:45.167Z",
      "updated_at": "2020-12-20T00:21:45.167Z"
    }

## Sessions

`POST /sessions/`

### Request

    {
      "email": "johndoe@john.com"
      "password": "john123"
    }

### Response

    {
      "user": {
        "id": "89c0f2b5-8707-4560-948c-480899ba460d",
        "name": "John Doe",
        "email": "johndoe@john.com",
        "created_at": "2020-12-20T00:21:20.846Z",
        "updated_at": "2020-12-20T00:21:20.846Z"
      },
      "token": "eyJhbGciOiJIUzI1NiI1sI3nR5dCI6IkpXVCJ9.eyJpYXQiOjE2MDg0MTfdI4OTcsImV4cCI6MTYwODQ5ONywic3ViIjoiODlgDjMGYyYjUtODcwNy00NTYwLTk0OGMtNDgwODk5YmE0NjBkIn0.uRlIsOEt7ubwBEm0LJIBTO52JKBISY-Jrr_Tc8DjK3ysGk"
}

## Products

### List Products

`GET /products/`

### Request

    no body

### Response

    {
      "products": [
        {
          "id": "6f4e52f1-38ed-40cf-acc4-f2ecec625c73",
          "name": "Cetaphil's Purifying Clay Mask",
          "value": 59.99,
          "created_at": "2020-12-20T00:56:43.146Z",
          "updated_at": "2020-12-20T00:56:43.146Z"
        },
        {
          "id": "96101375-99a6-4af9-9d55-497479610816",
          "name": "Scum Grime Remover",
          "value": 20.99,
          "created_at": "2020-12-20T00:58:00.059Z",
          "updated_at": "2020-12-20T00:58:00.059Z"
        }
      ],
      "page": 1,
      "per_page": 10
    }

### Show Product

`GET /products/:id`

### Request

    no body

### Response

    {
      "id": "6f4e52f1-38ed-40cf-acc4-f2ecec625c73",
      "name": "Cetaphil's Purifying Clay Mask",
      "value": 59.99,
      "created_at": "2020-12-20T00:56:43.146Z",
      "updated_at": "2020-12-20T00:56:43.146Z"
    },

## Products (needs authentication - Bearer Token)

`POST /products/`

### Request

    {
      "name": "Cetaphil's Purifying Clay Mask",
      "value": 59.99,
    }

### Response

    {
      "name": "Cetaphil's Purifying Clay Mask",
      "value": 59.99,
      "id": "96101375-99a6-4af9-9d55-497479610816",
      "created_at": "2020-12-20T00:58:00.059Z",
      "updated_at": "2020-12-20T00:58:00.059Z"
    }

`PUT /products/:id`

### Request

    {
      "name": "Adorable Plushie",
      "value": 29.99,
    }

### Response

    {
      "id": "198d6871-359b-44b8-8db9-0eef0355c82f",
      "name": "Adorable Plushie",
      "value": 29.99,
      "created_at": "2020-12-20T00:04:41.821Z",
      "updated_at": "2020-12-20T00:11:18.476Z"
  }

`DELETE /products/:id`

### Request

    no body

### Response

    no body







