const admin = require('firebase-admin')
const functions = require('firebase-functions')
const express = require('express')
const app = express()
admin.initializeApp()

import { ApolloServer, gql } from 'apollo-server-express'

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
        cards: () =>
        admin
        .firestore()
        .collection('cards')
        .get()
        .then((data: any) => {
            let docArray: FirebaseDocArray = []
            data.forEach((doc: any) => {
                docArray.push({
                    id: doc.id,
                    Category: doc.data().Category,
                    code: doc.data().code || '',
                    q: doc.data().q,
                    a: doc.data().a
                })
            })
            return docArray
        })
    }
}


const server = new ApolloServer({typeDefs, resolvers})
server.applyMiddleware({app, path: '/', cors: true})

exports.graphql = functions.https.onRequest(app)