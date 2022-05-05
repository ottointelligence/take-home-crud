import { getAllPosts, getPostById, deletePost, createPost } from "./services/post"

interface PassIdArgs {
	id: string;
}

interface PassContentArgs {
	content: string;
}

export const resolvers = {
	Query: {
		getPosts: async () => await getAllPosts(),
		getPostById: async (_parents:undefined, { id }:PassIdArgs) => await getPostById(Number(id))
	},
	Mutation: {
		deletePost: async (_parents:undefined, { id }:PassIdArgs) => await deletePost(Number(id)),
		createPost: async (_parents:undefined, { content }:PassContentArgs) => await createPost(content)
	},
};

export const Query = {
	getPosts: async () => await getAllPosts(),
	getPostById: async (_parents:undefined, { id }:PassIdArgs) => await getPostById(Number(id))
};

export const Mutation = {
	deletePost: async (_parents:undefined, { id }:PassIdArgs) => await deletePost(Number(id)),
	createPost: async (_parents:undefined, { content }:PassContentArgs) => await createPost(content)
};

