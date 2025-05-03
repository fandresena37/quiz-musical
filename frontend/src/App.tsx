import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Login from "./components/authentification/Login";
import Accueil from "./components/accueil/AccueilMain";
import Inscription from "./components/authentification/Inscription";
// import Classement from "./components/accueil/Classement";
import ClassementMain from "./components/classement/ClassementMain";

const route = createBrowserRouter([
    {path:"/",element:<Accueil/>},
    {path:"/login",element:<Login/>},
    {path:"/inscription",element:<Inscription/>},
    {path:"/classement",element:<ClassementMain/>}
]);
function App() {

  return (
    <>
      <RouterProvider router={route}/>  
    </>
  )
}

export default App
