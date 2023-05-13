import { gql } from '@apollo/client';


export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!) {
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
export const SAVE_BOOK = gql `
mutation saveBook($authors: String!, $bookId: String!, $image: String!, $link: String!, $title: String!) {
  saveBook(authors: $authors, bookId: $bookId, image: $image, link: $link, title: $title) {
    _id
    savedBooks {
      bookId
    }
  }
} `

export const REMOVE_BOOK = gql `
mutation RemoveBook($bookId: String!) {
  removeBook(bookId: $bookId) {
    _id
    savedBooks {
      bookId
    }
  }
}
`
