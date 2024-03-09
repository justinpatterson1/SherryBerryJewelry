import { useState,useEffect } from "react";
import JewelryContext from "./Context/JewelryContext";
import Login from "./Components/Login";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import ProductPage from "./Pages/ProductPage";
import ProductDescription from "./Pages/ProductDescription";
import CartPage from "./Pages/CartPage";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import {QueryClientProvider,QueryClient} from '@tanstack/react-query'
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const queryClient = new QueryClient() 


function App() {
  const [jewelry,setJewelry] = useState([])
  const [featuredProducts,setFeaturedProducts] = useState([])
  const [colorFilter,setColorFilter] = useState([])
  const [sizeFilter,setSizeFilter] = useState([])
  const [categoryFilter,setCategoryFilter] = useState([])
  const [filter,setFilter] = useState([])
  const [filterOptions,setFilterOptions] = useState([])
  const [accountMenu,setAccountMenu] = useState(false)
  const [user,setUser] = useState([])
  const [cart,setCart] = useState([])
  const [isLoggedIn,setIsLoggedIn] = useState({status:false,user:{}})
  const [quantity,setQuantity] = useState(1)
  const [loginState,setLoginState] = useState(false)
  const [subtotal,setSubtotal] = useState(0)
  const [limit,setLimit] = useState(8)

  useEffect(()=>{
    fetch('http://localhost:4000/jewelry/featured?limit='+limit)
    .then(res => res.json())
    .then(json => {

     
      setFeaturedProducts(json.data)
     
 
    })
  },[limit])

  useEffect(()=>{
    if(isLoggedIn.status){
      fetch(`http://localhost:4000/user/${isLoggedIn.user._id}`)
      .then(res => res.json())
      .then(json =>{
        setUser(json.data)
        //setCart(json.data.cart)
        //setCart(json.data.cart)
        console.log(json.data)
        console.log(isLoggedIn)
      }) 
      .catch(err=>console.log(err)) 
    }
  
  },[isLoggedIn])

  useEffect(()=>{
    if(localStorage.getItem("token")){
      try{
        const token = localStorage.getItem("token")
        const loggedInUser = jwtDecode(token)
        setIsLoggedIn({status:true, user:loggedInUser})
      } catch (err){console.log(err)}
    }
  },[])

         

  return (
    // <QueryClientProvider client = {queryClient}>
    <JewelryContext.Provider value={({jewelry,setJewelry,featuredProducts,colorFilter,sizeFilter,categoryFilter,setFilter,filter,filterOptions,setFilterOptions,isLoggedIn,setIsLoggedIn,accountMenu,setAccountMenu,user,setUser,cart,setCart,quantity,setQuantity,loginState,setLoginState,subtotal,setSubtotal,limit,setLimit})}>
      <div onClick={()=>{
          if (accountMenu){ setAccountMenu(!accountMenu)}
        
        }}>
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedRoutes/>}>
              
              <Route path='/cart/:userid' element={<CartPage/>} />
           </Route>
             <Route path="/login" element={<LoginPage/>}/>
            <Route path="/" element={<HomePage/>} />
            <Route path="/Product" element={<ProductPage/>}/> 
            <Route path='/Product/:id' element={<ProductDescription/>} />
           
        </Routes>
      </BrowserRouter>
      </div>
    </JewelryContext.Provider>
    //<ReactQueryDevtools initialIsOpen={true} buttonPosition="bottom-right"/>
    //</QueryClientProvider>
    
  );
}

export default App;
