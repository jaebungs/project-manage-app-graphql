const express = require('express')
require('dotenv').config()
const colors = require('colors')
const cors = require('cors')

const connectDB = require('./config/db')
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema/schema.js')

const port = process.env.PORT || 7000
const app = express()

connectDB()

app.use(cors())
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(port, console.log(`Server running on port: ${port} --- http://localhost:${port}/graphql`))