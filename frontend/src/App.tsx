import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Login from "./components/authentification/Login";
import Accueil from "./components/accueil/Accueil";
import Inscription from "./components/authentification/Inscription";

const route = createBrowserRouter([
    {path:"/",element:<Accueil/>},
    {path:"/login",element:<Login/>},
    {path:"/inscription",element:<Inscription/>},
]);
function App() {

  return (
    <>
      <RouterProvider router={route}/>  
    </>
  )
}

export default App
