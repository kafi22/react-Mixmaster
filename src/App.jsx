
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { About, Cocktail, Error, HomeLayout, Landing, Newsletter, ErrorElement} from "./pages";
import {loader as LandingLoader} from '../src/pages/Landing';
import {loader as CocktailLoader} from '../src/pages/Cocktail';
import {action as NewsletterAction} from '../src/pages/Newsletter';
import { QueryClient } from "@tanstack/react-query";
import { QueryClientProvider } from "@tanstack/react-query";


const queryClient = new QueryClient({
defaultOptions : {
  queries : {
    staleTime : 1000 * 60 * 5
  }
}
})


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
        loader : LandingLoader(queryClient),
        errorElement : <ErrorElement />,
      },

      {
        path : 'cocktail/:id',
        element : <Cocktail />,
        loader : CocktailLoader(queryClient),
        errorElement : <ErrorElement />,
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
        element : <Newsletter />,
        action : NewsletterAction,
      },

      

     
    ]
  },

  
])

const App = () => {
  
    return (
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={route} />
      </QueryClientProvider>
    )
  
}

export default App