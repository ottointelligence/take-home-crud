export interface Post {
  id: String;
  content: String;
}

export interface GetPostsResult {
  getPosts: Post[];
}

export interface GetPostByIdResult {
	getPostById: Post
}

export interface DeletePostResult {
	deletePost: number
}

export interface CreatePostResult {
	createPost: Post
}
