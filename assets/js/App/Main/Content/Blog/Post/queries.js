import gql from 'graphql-tag';

export const GET_POST = gql`
  query getPost($id: Int!) {
    post(id: $id) {
      id
      header
      headImage
      summary
      tags
      short
      mainPart
      insertedAt
    }
  }
`

export const CREATE_POST = gql`
  mutation createPost($header: String!, $mainPart: String!, $short:Boolean!, $summary: String!, $headImage: String!, $tags: [String!]) {
    createPost(header: $header, mainPart: $mainPart, summary: $summary, short: $short, headImage: $headImage, tags: $tags) {
        id
        header
        headImage
        tags
        short
        summary
        mainPart
    }
  }
`

export const UPDATE_POST = gql`
  mutation updatePost($id: Int!, $mainPart: String!, $header: String!, $headImage: String!, $short:Boolean!, $summary: String!, $tags: [String!]) {
    updatePost(id: $id, header: $header, mainPart: $mainPart, summary: $summary, short: $short, headImage: $headImage, tags: $tags) {
        id
        header
        headImage
        tags
        short
        summary
        mainPart
    }
  }
`
