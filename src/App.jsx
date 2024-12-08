
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Register from "./pages/Register";
import Login from "./pages/Login";
import Feed from "./pages/Feed";
import NotFound from "./pages/NotFound";

function App() {

  return (
    
  <Router>
    <Routes>
      <Route path='/' element={<Feed />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='*' element={<NotFound />} />
      
    </Routes>
  </Router>
  )
}

export default App
