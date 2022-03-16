const { ApolloServer } = require('apollo-server')
const schema = require('./graphql/schemas')

const server = new ApolloServer({
  schema
})

server
  .listen()
  .then(({url}) => console.log(`Server running in ${url}`))
