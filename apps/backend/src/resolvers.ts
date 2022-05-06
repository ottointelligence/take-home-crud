import { createPost, deletePost, getAllPosts, getPostById } from "./services/post";
import { Config } from "apollo-server";


export const Query: Config["resolvers"] = {
  getPosts: async () => {
    return await getAllPosts();
  },

  getPostById: async (_, id : string) => {
    return await getPostById(id);
  }
};

export const Mutation: Config["resolvers"] = {

  createPost: async (_, content: string) => {
    return await createPost(content);
  },

  deletePost: async (_, id : string) => {
    return await deletePost(Number(id));
  }
};
