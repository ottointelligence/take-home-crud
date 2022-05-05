import { useRouter } from "next/router";
import { gql, useQuery } from "@apollo/client";
import Spinner from "../../components/Spinner";
import { GetPostByIdResult } from "../../interface/post"

const GET_POST = gql`
  query Query($page_id: ID!) {
  getPostById(id: $page_id) {
    content
    id
  }
}
`;

const PostDesc = () => {
  const router = useRouter();
  const page_id = router.query.id;
  const { loading, error,  data } = useQuery<GetPostByIdResult>(GET_POST, {
    variables: { page_id: page_id },
  });
  if (loading) {
	return <Spinner />;
  }
  return (
    <div className="mx-4 sm:mx-6 lg:mx-8 my-4">
      <h1 className="text-2xl font-bold my-4">Post {data.getPostById.id}</h1>
      <p className="mb-4"> {data.getPostById.content} </p>
      <button
        type="button"
        className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
		onClick={() => {
		  router.push({pathname: "../"});
		}}
	  >
        Back
      </button>
    </div>
  );
};

export default PostDesc;
