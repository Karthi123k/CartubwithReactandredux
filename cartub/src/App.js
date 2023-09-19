import './App.css';
import Head from "./components/Head";
import Body from "./components/Body";
import { Provider } from 'react-redux';
import store from './components/utils/Store';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import { MainContainer } from './components/MainContainer';
import Watch from './components/Watch';

const appRouter=createBrowserRouter([{

  path:"/",
  element:<Body/>,
  children:[
    {
      path:"/",
      element:<MainContainer/>
    },
    {
      path:"watch",
      element:<Watch/>
    },
   
  ],
},]);


function App() {
  return (
   <Provider store= {store}>
    <div>   
   <Head/>
 <RouterProvider router={appRouter}/>

   {
  /**
   * head
   * body
   *  sidebar
   *     menu items
   *  Main container
   *    button list
   *    video container
   *       video
   * 
   * 
   */
}
    </div>
    </Provider>
  
  );
}


export default App;
