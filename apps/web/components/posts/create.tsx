import { gql, useMutation, DocumentNode } from "@apollo/client";
import { useState } from "react"
import { CreatePostResult } from "../../interface/post"

const CREATE_POST = gql`
	mutation Create($content: String!) {
		createPost(content: $content) {
			content
			id
		}
	}
`;

interface CreateProps {
	handleSetForm(): void
	GET_POSTS: DocumentNode
}

const Create = ({ handleSetForm, GET_POSTS }: CreateProps) => {
	const [createPost] = useMutation<CreatePostResult>(CREATE_POST, {refetchQueries: [GET_POSTS]});
	const [content, setContent] = useState('')

	const handleOnChange = (event)=> {
		setContent(event.target.value);
	}

	const handleSubmit = ()=> {
		createPost({variables: {content: content}})
		handleSetForm()
	}

	return (
		<div className="my-5">
			<div className="h-96 border-2 rounded-md border-gray-300">
				<textarea
				onChange={handleOnChange}
				className="bg-transparent px-2 py-2 w-full h-full focus:outline-none resize-none"
				id="createpost"
				placeholder="Enter post here"
				>
				</textarea>
			</div>
			<div className="mt-5 sm:flex-none">
				<button
					type="button"
					className="float-left mr-5 inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
					onClick={handleSubmit}
				>
					Add Post
				</button>
			</div>
		</div>
	);
};

export default Create;
