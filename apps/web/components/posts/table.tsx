import { useRouter } from "next/router";
import { Post, DeletePostResult } from "../../interface/post";
import { gql, useMutation, DocumentNode } from "@apollo/client";

interface TableProps {
  posts: Post[];
  GET_POSTS: DocumentNode
}

const DEL_POST = gql`
  mutation Delete($id: ID!) {
  	deletePost(id: $id)
  }
`;

const Table = ({ posts, GET_POSTS }: TableProps) => {
  const { push } = useRouter();
  const [deletePost] = useMutation<DeletePostResult>(DEL_POST, {refetchQueries: [GET_POSTS]});
  const handleDelete = (id: string) => {
	deletePost({variables: {id: id}})
  }
  return (
    <div className="mt-8 flex flex-col">
      <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                  >
                    Id
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Content
                  </th>

                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {posts.map((post) =>
                  <tr
                    key={post.id.toString()}
                  >
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                      {post.id}
                    </td>
                    <td className="cursor-pointer whitespace-nowrap px-3 py-4 text-sm text-gray-500"
					  onClick={() => {
						push({pathname: "/post/[id]", query: { id: post.id.toString() }});
					  }}
					>
                      {post.content}
                    </td>
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
					  <button 
						className="text-red-600 hover:text-indigo-900"
						onClick={() => {
							handleDelete(post.id.toString())
						}}
						>
						Delete
					  </button>
					  <span className="sr-only">, {post.id}</span>
                    </td>
                  </tr>
					)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
