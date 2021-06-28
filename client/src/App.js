import './App.css';
import { Router } from '@reach/router';
import { Link, navigate } from '@reach/router';
import AllPosts from './components/AllPosts';
import NewPost from './components/NewPost';
import EditPost from './components/EditPost';
import BlogDetails from './components/BlogDetails';
import Login from './components/Login';
import RegisterUser from './components/RegisterUser';
import Forbidden from './views/Forbidden';
import LoginReg from './views/LoginReg';

function App() {
  return (
      <div>
      <Router>
        <AllPosts path="/blog/all_posts" /> 
        <NewPost path="/blog/new_post" />
        <BlogDetails path='/blog/:post_id'/>
        <EditPost path='/blog/:id/edit'/>
        <Login path="/login" />
        <RegisterUser path="/register" />
        <Forbidden path="/forbidden_page" />
        <LoginReg path="/login_register" />
      </Router>
    </div>
  )}

export default App;
