import { gql } from '@apollo/client';

const typeDefs = gql`
  type User {
    id: ID!
    name: String
    email: String
    telephone: String
  }


  type AddUser {
    email: String
    name: String
    telephone: String
  }

  # This type specifies the entry points into our API. In this case
  # there is only one - "me" - which returns a current user.
  type Query {
    me: [User]
    # singleUser(email: String, userId: ID): User # returns a current user
  }
  type Mutation {
   addUser(email: String, name: String): User
}
`;

export default typeDefs;
