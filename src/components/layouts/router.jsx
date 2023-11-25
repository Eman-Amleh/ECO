import {createBrowserRouter,} from "react-router-dom";

import Layout from './Layout.jsx';
import Home from '../web/home/Home.jsx';
import HomeDeshborad from '../deshborad/home/Home.jsx';
import Categories from '../web/catedoirs/Categories.jsx';
import CategoriesDeshborad from '../deshborad/catehoires/Categoires.jsx'
import DeshboradLayout from './DeshboradLayout.jsx';
import Regeister from "../web/regeister/Regeister.jsx";



export const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout/>,
      errorElement: <h2>404 page not found </h2>,
      children :[
        {
          path:'regeister',
          element: <Regeister/>
        },
        {
          path:'/home',
          element: <Home/>
        },
        {
          path:'categoires',
          element:<Categories/>
        },
        {
          path: '*',
            
            element: <h2>404 page not found  web</h2>
        }
      ]
    },
    {
      path:'/deshborad',
      element:<DeshboradLayout/>,
      errorElement:<h2>404 page not found </h2>,
      children:[{
        path:'home',
        element:<HomeDeshborad/>
      },
    {
      path: 'categoires',
      element: <CategoriesDeshborad/>
    },
  {
    path: '*',
      
      element: <h2>404 page not found  deshborad</h2>
  }]
    }
   
  ]);