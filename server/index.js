const express = require('express')
require('dotenv').config

const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema/schema.js')

const port = process.env.PORT || 7000
const app = express()

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(port, console.log(`Server running on port: ${port} --- http://localhost:${port}/graphql`))