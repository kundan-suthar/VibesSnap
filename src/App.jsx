
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Register from "./pages/Register";
import Login from "./pages/Login";
import Feed from "./pages/Feed";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import NewPost from './pages/NewPost';
import Layout from './pages/Layout';
import Requiredauth from './pages/Requiredauth';
import AuthListener from './components/AuthListener';

function App() {

  return (

    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          {/* protexted route */}
          {/* <Route path='/' element={<Feed />} /> */}
          <Route path='/' element={<Requiredauth ><Feed /></Requiredauth>}></Route>
          <Route path='/profile' element={<Requiredauth ><Profile /></Requiredauth>}></Route>
          {/* <Route path='/profile' element={<Profile />} /> */}
          <Route path='/createPost' element={<NewPost />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
      <AuthListener />
    </Router>
  )
}

export default App
