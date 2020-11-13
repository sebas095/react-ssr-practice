# MLIBRE SIMPLE API

🔎 Search and see the detail of your next product in ML.

## 🚀 Getting Started

To run the project, just follow these steps:

1. Install dependencies `npm install`
2. Make sure you have the requested env vars (`.env` file). You can check the file `.env.example`
3. Run the development command and have fun! `npm run dev`
4. Run in production mode: `npm start`

- Running on http://localhost:5000/v1/api/

## 🔗 API

### Search Items

- GET `/search`

#### Query Params

| Name  | Type   | Description              | Default | Example                  |
| ----- | ------ | ------------------------ | ------- | ------------------------ |
| q     | String | Query you want to search | ''      | q='Telefono inteligente' |
| limit | Number | Quantity of results      | 50      | limit=1                  |

#### Response

```js
{
  categories: [String],
  items: [
    {
      id: String,
      title: String,
      price: {
        currency: String,
        amount: Number,
        decimals: Number,
      },
      picture: String,
      condition: String,
      free_shipping: Boolean,
    }
  ],
}
```

### Get Item Info

- GET `/items/:id`

#### Response

```js
{
  item: {
    id: String,
    title: String,
    price: {
      currency: String,
      amount: Number,
      decimals: Number,
    },
    picture: String,
    condition: String,
    free_shipping: Boolean,
    sold_quantity: Number,
    description: String
  }
}
```

## 🖥 Technologies

- [NodeJS](https://nodejs.org/es/)
- [Express](https://expressjs.com/es/)
- [Husky](https://github.com/typicode/husky)
- [Typescript](https://www.typescriptlang.org/)

## 🧾 License

The MIT License (MIT)
