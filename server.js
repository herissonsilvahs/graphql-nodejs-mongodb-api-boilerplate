const { ApolloServer, gql } = require('apollo-server')
const schema = require('./graphql/schemas')

const typeDefs = gql`
  type User {
    id: ID,
    name: String,
    password: String,
    email: String,
  }

  type Query {
    user ( id: ID! ): User
  }
`

const resolvers = {
  Query: {
    user: (id) => ({
      id: "ddddsdfsdf",
      name: "Herisson Silva",
      password: "String",
      email: "teste@teste.com"
    })
  }
}

const server = new ApolloServer({
  // schema
  typeDefs,
  resolvers
})

server
  .listen()
  .then(({url}) => console.log(`Server running in ${url}`))
