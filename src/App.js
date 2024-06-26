import { useState } from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About"
import Products from "./pages/Products"
import Error from "./pages/Error"
import SharedLayout from "./pages/SharedLayout";
import SingleProducts from"./pages/SingleProduct"
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import ProtectedRoute from "./pages/protectedRoute";
function App() {
  const[user,setUser] =  useState(null)
  return (
    <BrowserRouter>
    {/* different Pages needed should be inside the browser router
    browser router connects the routes to the browser */}
    <Routes> 
      {/* Routes will be the parent of all the routes 
      Route represents the individual pages*/}
      <Route path='/' element={<SharedLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='products' element={<Products/>}/>
        <Route path='/products/:productID' element={<SingleProducts/>}/>
        <Route path="login" element={<Login setUser={setUser}></Login>}/>
        <Route 
        path="dashboard" 
        element= {
        <ProtectedRoute user={user}>
        <Dashboard user={user}></Dashboard>
        </ProtectedRoute>
        }
        />
        <Route path='*' element={<Error/>}/>
      </Route>
  

      {/* all other url not defined the above will go to * eventually goes to error component*/}
    </Routes>
    </BrowserRouter>
  )
}

export default App;
