import  Login  from "./pages/login/login";
import Register from "./pages/register/register";
import Home from "./pages/home/home";
import Profile from "./pages/profile/profile";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Leftbar from "./components/leftbar/leftbar";
import Rightbar from "./components/rightbar/rightbar";

function App() {


  //fake functionality to check if user loggrd in or not
  const currentuser = true;
  //maintain layout of home page using react-router-dom outlet
  const Layout=()=>{
    return(
      <div>
        <Navbar/>
        <div style={{display:"flex"}}>
          <Leftbar/>
          <Outlet/>
          <Rightbar/>
        </div>
      </div>
    );
  };

  //User Authentication for home page
  const ProtectedRoute=({children})=>{
    if(!currentuser){
      return <Navigate to="/login"/>
    }
    return children
  }


  //router dom sets the links between two pages
  const router = createBrowserRouter([
    {
      path:"/",
      element: <ProtectedRoute><Layout/></ProtectedRoute>, //this protected route will check if there is a user then it will show the home page else redirect it to login pge
      children:[
        {
          path:"/",
           element: <Home/>
        },
        {
          path:"/profile/:id",
           element: <Profile/>
        },
      ]
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/register",
      element: <Register/>,
    },
  ]);


  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
