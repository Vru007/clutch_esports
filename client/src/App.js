import logo from './logo.svg';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import HomePage from "./pages/home";
import AboutPage from './pages/aboutus';
import TournamentPage from"./pages/tournament";
import PreLoader from './components/preloader';
import { useEffect, useState } from 'react';
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <HomePage/>
    ),
  },
  {
    path: "/about",
    element: <AboutPage/>,
  },
  {
    path:"/tournaments",
    element:<TournamentPage/>
  },
]);


function App() {

  const [isLoading,setIsLoading]= useState(true);

  useEffect(()=>{
    const datafetch=()=>{
         setTimeout(() => {
           setIsLoading(false);
         }, 2000);
    }

    datafetch();
  },[]);
  return isLoading ? (<PreLoader/>) : (
    <div className="App">
      
    <RouterProvider router={router} />
    </div>
  );
}

export default App;
