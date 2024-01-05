import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

const EditBlogDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [isPending, setIsPending] = useState(false);
    const { data: blog } = useFetch('http://localhost:8000/blogs/' + id);

    useEffect(() => {
        if (blog) {
            setTitle(blog.title);
            setBody(blog.body);
            setAuthor(blog.author);
        }}, [blog])

    
    const handleSave = (e) => {
        e.preventDefault();
        const blog = { title, body, author };
        setIsPending(true);


        fetch('http://localhost:8000/blogs/' + id, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(blog)
        }).then((res) => {
            if (!res.ok) {
                setIsPending(false);
                throw Error('Could not update the data for that resource');
                
            }
            console.log('New blog added');
            setIsPending(false);
            navigate('/')
        }).catch(err => {
            console.log(err.message);
        })
    }

    return (
        <div className="edit-blog-details">
            <h2>Edit Blog Details</h2>
            {!blog && <div>Loading...</div>}
           {blog && <form onSubmit={handleSave}>
                <label>Blog title:</label>
                <input
                    type=""
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog author</label>
                {/* <select
                    placeholder={blog.author}
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                    <option value="peach">peach</option>
                </select> */}
                <input
                    type=""
                    required
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
                {!isPending && <button>Save</button>}
                {isPending && <button disabled>Saving Changes</button>}
                
            </form> }
        </div>
    );
}
 
export default EditBlogDetails;