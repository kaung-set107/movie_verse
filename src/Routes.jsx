import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login/login'
import Nav from './components/Navbar/index'
import Sidebar from './components/Sidebar/index'
import Dashboard from './pages/Dashboard/index.jsx'
import Movie from './pages/Movie/movieList'
import MovieDetail from './pages/Detail/detail'

export default function RouteFile () {
  return (
    <>
      <BrowserRouter>
        <Routes>
         
          <Route path='/' element={<Dashboard />}></Route>
  
          
   <Route path='/movie' element={<Movie/>}></Route>
   <Route path='/detail/:id' element={<MovieDetail/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
