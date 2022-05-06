import { useMutation } from "@apollo/client";
import { Dispatch, useState, SetStateAction } from "react";
import { GET_POSTS, CREATE_POST } from "web/components/queries"; // to obtain the create_post and get_post function
import { CreatePostNew } from "../../interface/post"

interface PostProps {   
    setDisplayForm(): void
}

const CreatePostForm = ({ setDisplayForm }: PostProps) => {
    const [newContent, setNewContent] = useState ('');
    const [createPost, {data, loading, error}] = useMutation<CreatePostNew>(CREATE_POST, {refetchQueries: [GET_POSTS]})
    // to modifiy the new post content

    const ContentFunc = (e) => {
        setNewContent((e.target.value))
    }

    // returning the create post sheet
    return (
        // this is when you submit the form with the submit button
        <form onSubmit={() => {
            console.log(newContent)
            createPost({variables: {content: newContent}});
            setDisplayForm(); // changing the display
            }}>
            
            <div className="flex flex-col">
                <h1 className="text-2xl font-mono font-bold my-4 border-yellow-800 rounded-lg bg-orange-100 tracking-wide text-center px-px py-1">New Post Info</h1>
                <textarea
                    onChange={ContentFunc}
                    className="bg-indigo-50 rounded-md font-mono"
                    name="new-post-content"
                    id="new-post-content"
                    placeholder="Input Post Content"
                    ></textarea>
                <button type="submit" className=" font-mono my-4 rounded-md border bg-purple-200 px-4 py-3 text-sm font-medium">Submit New Post</button>
            </div>
        </form>
    );
    


}

export default CreatePostForm;

