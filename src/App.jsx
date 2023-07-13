
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { About, Cocktail, Error, HomeLayout, Landing, Newsletter, ErrorElement} from "./pages";

import {Loader as LandingLoader} from '../src/pages/Landing'

const route = createBrowserRouter([
  {
    path : '/',
    element : <HomeLayout />,
    errorElement : <Error />,

    children : [
      {
        index : true,
        element : (
          <Landing />
        ),
        loader : LandingLoader,
        errorElement : <ErrorElement />,
      },

      {
        path : '/cocktail/:id',
        element : <Cocktail />
      },

      {
        path : 'about',
        element : <About />,
        children : [

          {
            index : true,
            element : <h1>Our Company</h1>
          },

          {
            path : 'person',
            element : <h1>the Person</h1>
          }
        ]
      },

      {
        path : 'Error',
        element : <Error />
      },

      {
        path : 'Newsletter',
        element : <Newsletter />
      },

      {
        path : 'Cocktail',
        element : <Cocktail />
      },

     
    ]
  },

  
])

const App = () => {

  return <RouterProvider router={route} />
}

export default App