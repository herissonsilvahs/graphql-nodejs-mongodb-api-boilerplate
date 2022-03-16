const { gql } = require('apollo-server')

exports.types = gql`
  type User {
    id: ID,
    name: String,
    password: String,
    email: String
  }

  type SignIn {
    user: User,
    token: String
  }
`