import { useRouter } from "next/router";

const Post = () => {
  const { query } = useRouter()
  const { id } = query
  const { content } = query

  const router = useRouter()

  return (
    <div className="mx-4 sm:mx-6 lg:mx-8 my-4">
      <h1 className="text-2xl font-bold my-4 rounded-xl bg-slate-200 text-slate-900 text-center px-px py-2">Post ID Number: { id }</h1>
      <div className="flex flex-row gap-1.5">
        <div className=" basis-1/16 mb-4 py-2 font-mono text-lg font-semibold border-2 border-gray-500 rounded-xl py-7 px-5">Contents:</div>
        <p className=" mb-4 py-2 font-mono text-lg font-semibold border-2 border-gray-500 rounded-xl py-7 px-5">{ content }</p>
      </div>
      
      <button
        type="button"
        className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
        onClick={() => router.back()}
      >
        Back
      </button>
    </div>
  );
};

export default Post;

// THis is what happens when you click the CREATE-POST BUTTON
