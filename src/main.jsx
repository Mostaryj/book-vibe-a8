import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayOut from './layouts/MainLayOut';
import ListedBooks from './pages/ListedBooks';
import PagesToRead from './pages/PagesToRead';
import WantToBuy from './pages/WantToBuy';
import SpecialBook from './pages/SpecialBook';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import Details from './pages/Details';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: "/listed",
        element: <ListedBooks></ListedBooks>,
        loader: ()=>fetch('../fakeData.json'),
      },

             

      {
         path:"/details/:id",
         element: <Details></Details>,
        loader: ()=>fetch('../fakeData.json'),
        
      },
   
      {
        path: "/pages",
        element: <PagesToRead></PagesToRead>,
        loader: ()=>fetch('../fakeData.json'),
      },
      {
        path: "/want",
        element: <WantToBuy></WantToBuy>,
      },
      {
        path: "/special",
        element: <SpecialBook></SpecialBook>,
      }
    ]
  },
 
  
 
 
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />
  {/* <App></App> */}
  </React.StrictMode>,
)
