import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { db } from './Firebase';
import { collection, addDoc } from 'firebase/firestore';

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };
        setIsPending(true);

        addDoc(collection(db, "blogs"), blog).then((docRef) => {
            console.log("Document successfully added!");
            navigate('/');
        })
        // fetch('http://localhost:8000/blogs', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(blog)
        // }).then(() => {
        //     console.log('New blog added');
        //     setIsPending(false);
        //     navigate('/')
        // })
    }
    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
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
                <input
                    type=""
                    required
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding Blog</button>}
                
            </form>
        </div>
    );
}

export default Create;
