import './App.scss';
import Home from './pages/home/Home';
// import { useSelector, useDispatch } from 'react-redux';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Navbar from './component/navbar/Navbar';
import MyGigs from './pages/myGigs/MyGigs';
import Gigs from './pages/gigs/Gigs';
import Orders from './pages/orders/Orders';
import Messages from './pages/messages/Messages';
import Message from './pages/message/Message';
import Add from './pages/add/Add';
import Gig from './pages/gig/Gig';

function App() {
  // const count = useSelector((state) => state.counter.value)
  // const dispatch = useDispatch()

  const Loyaut =()=>{
    return(
      <div className="App">
          <Navbar/>
          <Outlet/>
      </div>
    )
  }
  const  router = createBrowserRouter([
    {
      path:'/',
      element:<Loyaut/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/gigs',
          element:<Gigs/>
        },
        {
          path:'/myGigs',
          element:<MyGigs/>
        },
        {
          path:'/orders',
          element:<Orders/>
        },
        {
          path:'/messages',
          element:<Messages/>
        },
        {
          path:'/message/:id',
          element:<Message/>
        },
        {
          path:'/add',
          element:<Add/>
        },
        {
          path:'/gig/:id',
          element:<Gig/>
        },
      ]
    }
  ])
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
