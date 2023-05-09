import { gql } from '@apollo/client';


export const ADD_USER = gql`
mutation Mutation($username: String!, $email: String!, $password: String!) {
  addUser(username: $username, email: $email, password: $password) {
    token
    user {
      username
    }
  }
}
`;

export const LOGIN_USER = gql`
mutation loginUser($email: String! , $password: String!){
  loginUser(email: $email , password: $password){
    token 
    user {
      _id
      username
    }
  }
}
`
