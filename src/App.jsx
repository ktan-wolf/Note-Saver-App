import './App.css'
import Navbar from './components/Navbar';
import Pastes from './components/pastes';
import Home from './components/Home';
import Viewpaste from './components/Viewpaste';
import {createBrowserRouter , RouterProvider} from 'react-router-dom' ;

const router = createBrowserRouter(
  [
    {
      path : '/',
      element :
      <div>
        <Navbar />
        <Home/>
      </div>
    } , 
    {
      path : '/pastes',
      element :
      <div>
        <Navbar />
        <Pastes/>
      </div>
    } , 
    {
      path : '/pastes/:id',
      element :
      <div>
        <Navbar />
        <Viewpaste/>
      </div>
    } , 
  ]
);

function App() {

  return (
    <div className='flex '>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App

