import React, { Fragment } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Components/Screens/Home'
import CreatePost from './Components/Screens/CreatePost'
import EditPost from './Components/Screens/EditPost'
import PostDetails from './Components/Screens/PostDetails'
import Navbar from './Components/userComponents/Navbar'
import Footer from './Components/userComponents/Footer'

const App = () => {
  return (
    <div>
      <Fragment>
        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/'element={<Home/>}/>
          <Route path='/create-post'element={<CreatePost/>}/>
          <Route path='/edit-post'element={<EditPost/>}/>
          <Route path='/post-details'element={<PostDetails/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
      </Fragment>
    </div>
  )
}

export default App