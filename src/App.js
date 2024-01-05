// import './App.css';
import Navbar from "./Navbar";
import Home from './Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Create from "./Create";
import BlogDetails from "./BlogDetails";
import NotFound from "./NotFound";
import EditBlogDetails from "./EditBlogDetails.js";

function App() {


  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className='content'>
          <Routes>
            <Route path="/" exact element={<Home />}/>
            <Route path="/create" exact element={<Create />}/>              
            <Route path="/blogs/:id" element={<BlogDetails />}/>  
            <Route path="/editblogs/:id" element={<EditBlogDetails />}/> 
            <Route path="*" element={<NotFound />}/> 
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
