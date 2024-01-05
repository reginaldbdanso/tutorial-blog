// import { useState, useEffect } from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';


const Home = () => {
   const { data: blogs, isPending, error } = useFetch();


    return (
        <div className="home">
            {/* <h2>Home Page</h2> */}
            <div className="home">
                {error && <div>{error}</div>}
                { isPending && <div>Loading...</div> }
                {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
            </div>

        </div>
    );
}
 
export default Home;