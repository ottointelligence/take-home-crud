export interface Post {
  id: String;
  content: String;
}

export interface GetPostsResult {
  getPosts: Post[];
}

export interface CreatePostNew {
  createPost: Post
}

export interface DeletePostNew {
  deletePost: number
}
