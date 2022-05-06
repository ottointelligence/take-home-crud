import { useRouter } from "next/router";
import { Post, DeletePostNew } from "../../interface/post";
import { DELETE_POST, GET_POSTS } from "web/components/queries"
import { useMutation } from "@apollo/client";


interface TableProps {
  posts: Post[];
}

const Table = ({ posts }: TableProps) => {
  const { push } = useRouter();

  const [deletePost] = useMutation<DeletePostNew>(DELETE_POST, {refetchQueries: [GET_POSTS]});
  

  return (
    <div className="mt-8 flex flex-col">
      <div className="flex flex-col -my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className=" py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                  >
                    Id
                  </th>
                  <th
                    scope="col"
                    className=" flex flex-col px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Content
                  </th>

                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              
              <tbody className="divide-y divide-gray-200 bg-white">
                {posts.map((post) => (
                  <tr
                    key={post.id.toString()}
                    onClick={() => {
                      push({ pathname: "post/[id]", query: {content: post.content.toString(),  id: post.id.toString() } }); //PATH NAME + ID, CHANGED
                      // what push does is that it allows the user to go to another page when clicked
                    }}
                    className="cursor-pointer"
                  >
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                      {post.id}
                    </td>
                    <td className=" whitespace-nowrap px-3 py-4 text-sm text-gray-500 flex-wrap">
                      {post.content}
                    </td>
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                      <button //Modifications are made below
                        className="text-red-600 hover:text-indigo-900"
                        onClick={() => {
                          //Console.log(post.id.toString())
                          deletePost ({
                            variables: {
                              id : post.id.toString()
                            }
                          })
                        }}
                        >
                        Delete<span className="sr-only">, {post.id}</span> 
                      </button>
                    </td> 
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;

// the strcuture of the first page table you see when opening the website up

// the {post.id} code will bring the user to the default page that says "ID GOES HERE"
