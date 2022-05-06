import { useState, SetStateAction } from "react";
import { gql, useQuery, useMutation } from "@apollo/client";

import Table from "../components/posts/table";
import { GetPostsResult, Post } from "../interface/post";
import Spinner from "../components/Spinner";
import { GET_POSTS, CREATE_POST } from "../components/queries"; // to obtain the create_post and get_post function

import CreatePostForm from "../components/posts/create"; 
import { create } from "domain";



const Home = () => {
  const { data, loading } = useQuery<GetPostsResult>(GET_POSTS);


  const [displayForm, setForm] = useState(false); // the "ADD POST" will not be shown on default

  const DisplayFunc = () => {
    setForm(!displayForm);
  }

  if (loading) { // the ERROR SPINNER
    return <Spinner />;
  }

  //console.log(data.getPosts)

  return (
    <div className="mx-4 sm:mx-6 lg:mx-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="my-4 text-bold text-2xl">Welcome to Otto! 👋</h1>
          <h1 className="text-xl font-semibold text-gray-900">Posts</h1>
          <p className="mt-2 text-sm text-gray-700">A list of all the posts</p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
            onClick={() => {
              setForm(!displayForm); //this will change the true or false statement, thus determining if there will be a new info display
            }}
          >
            Create/Cancel Post
          </button>
        </div>
      </div>
      {data.getPosts && <Table posts={data.getPosts} />}
      {displayForm && <div>
        <CreatePostForm setDisplayForm={DisplayFunc} /> 
        </div>
        } 
    </div>
  );
};
// the line {displayForm && <div><CreatePostForm setDisplayForm={DisplayFunc} />  </div> is what DISPLAYS THE CREAT POST INTERFACE
// uses displayForm and checks if it is either true or false
export default Home;

/*
README FILE COMMENTS AND TASKS FOR THIS ASSIGNMENT


At the initial page implement:

- Create Post
- Delete Post
In both cases, the table should always display up-to-date information.

Each row of the table should be clickable and when clicked navigate the user to the page:

/post/[id]

where Post ID and Content should be displayed back to the user.

User should be able to navigate back to the initial page.

*/
