import { gql } from "@apollo/client";

export const GET_POSTS = gql`
  query getPosts {
    getPosts {
      id
      content
    }
  }
`;

export const CREATE_POST = gql`
    mutation CreatePost($content: String!) {
        createPost(content: $content) {
            content
            id
        }
    }`;

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
