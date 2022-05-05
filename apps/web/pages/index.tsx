import { useState, useEffect } from "react";
import { gql, useQuery } from "@apollo/client";

import Table from "../components/posts/table";
import Create from "../components/posts/create";
import { GetPostsResult } from "../interface/post";
import Spinner from "../components/Spinner";

const GET_POSTS = gql`
  query GetPosts {
    getPosts {
      id
      content
    }
  }
`;

const Home = () => {
  const { loading, error, data } = useQuery<GetPostsResult>(GET_POSTS);
  const [displayForm, setForm] = useState(false);

  if (loading) {
    return <Spinner />;
  }

  const handleSetForm = () => {
	setForm(!displayForm);
  }

  return (
    <div className="mx-4 sm:mx-6 lg:mx-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="my-4 text-bold text-2xl">Welcome to Otto! 👋</h1>
          <h1 className="text-xl font-semibold text-gray-900">Posts</h1>
          <p className="mt-2 text-sm text-gray-700">A list of all the posts</p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          {!displayForm && <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
            onClick={handleSetForm}
          >
            Create Post
          </button>}
        </div>
      </div>
      {displayForm && <div>
		<Create handleSetForm={handleSetForm} GET_POSTS={GET_POSTS}/>
		<button
		  type="button"
		  className="float-none mr-5 inline-flex items-center justify-center rounded-md border border-transparent bg-gray-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 sm:w-auto"
		  onClick={handleSetForm}
	    >
		  Cancel
	    </button>
	  </div>}
	  {data.getPosts && <Table posts={data.getPosts} GET_POSTS={GET_POSTS} />}
    </div>
  );
};

export default Home;
