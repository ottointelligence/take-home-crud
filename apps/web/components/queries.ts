import { gql } from "@apollo/client";

export const GET_POSTS = gql`
  query getPosts {
    getPosts {
      id
      content
    }
  }
`;

// createPost Function from GQL
export const CREATE_POST = gql`
    mutation CreatePost($content: String!) {
        createPost(content: $content) {
            content
            id
        }
    }`;


// UPDATED DELETE POST PAGE; error here was that I was passing in ID and CONTENT when ID! had no subfields. FIXED
export const DELETE_POST = gql`
    mutation DeletePost($id: ID!) {
        deletePost(id: $id)
    }`;

export const GET_POST_BY_ID = gql`
    query GetPostById($getPostId: ID!) {
        getPostById(id: $getPostId) {
            id
            content
        }
    }`;
