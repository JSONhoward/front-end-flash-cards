# Front-End Developer flash cards

<img src='./src/images/main-image.png' alt='front-end developer flash cards screenshot' width='600px' height='300px'>

Flash cards with many front-end develope interview questions. The questions are stored in Firebase firestore database.

[VIEW](https://front-end-dev-flash-cards.web.app) (hosted with Firebase hosting)

## Setup

To use/clone this repo as is you will have to provide your own API.

Currently this project uses GraphQL via Firebase cloud functions.

Simply create an ```.env``` file with the following variable.

```javascript
REACT_APP_GRAPHQL_URL= // api url here
```

The expected GraphQL schema is...

```javascript
const typeDefs = gql`
    type Card {
        id: String
        Category: String
        q: String
        code: String
        a: String
    }
    type Query {
        cards: [Card]
    }
`

const resolvers = {
    Query: {
        cards: () => // your database call
    }
}
```

## Installation

```bash
yarn install
```

or

```bash
npm install
```

## Built With

* [React](https://reactjs.org/)
* [Typescript](https://www.typescriptlang.org/)
* [Styled-Components](https://styled-components.com/) (_styles_)
* [Recoil](https://recoiljs.org/) (_state management_)
* [Firebase](https://console.firebase.google.com/)

## License

[MIT](https://choosealicense.com/license/mit/)