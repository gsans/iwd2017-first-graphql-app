# iwd2017-first-graphql-app

In this hands-on workshop we are going to learn about GraphQL and how to build a basic application using the latest version of Angular, the Apollo Client and graphcool, a GraphQL backend as a service.

## Getting Started

After [downloading this example](https://github.com/graphcool-examples/angular-apollo-instagram-example/archive/master.zip) please follow these steps.

### 1. Create an account

To run this example, please create a [graph.cool](http://graph.cool) account and **copy your endpoint**. This shouldn't take longer than a minute. We promise!

![](http://i.imgur.com/ytXDR4B.gif)

This is how our GraphQL data model looks like:

```graphql
type Post {
  description: String!
  imageUrl: String!
}
```

### 2. Configure app data endpoint

Open `src/app/client.ts` and paste your endpoint to the following line:

```js
const networkInterface = createNetworkInterface('https://api.graph.cool/simple/v1/__PROJECT_ID__')
```


### 3. Run the example

You're done configuring the example application. Please run the following command and open [localhost:3000](http://localhost:3000) in your browser. Have fun exploring! 🎉

```sh
npm install
npm start
```


## Instructions

The goal is to build a basic instagram clone. We start out pretty simple and extend it step by step. By the end of the workshop we will do a showcase. Show us how you implemented your instagram clone and especially the aha-moments while building it.

### Steps

- Fetch the list of posts (description and imageUrl)
- Add a new post feature (description and imageUrl)
- Add delete post feature
