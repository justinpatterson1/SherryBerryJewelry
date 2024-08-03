import React,{useContext, useState} from 'react'
import { FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import {HiOutlineShoppingCart} from 'react-icons/hi2'
import { PiUserThin } from "react-icons/pi";

import { Link, useNavigate } from 'react-router-dom';
import JewelryContext from '../Context/JewelryContext';

function Navbar() {
    const {isLoggedIn,setIsLoggedIn,accountMenu,setAccountMenu,setLoginStatus} = useContext(JewelryContext)
    const [hideNavbar,setHideNavbar] = useState(false)
   
    const navigate = useNavigate()
  return (
    <div className='py-4 bg-white sticky top-0 bg-teal-400 z-50 '>
        <nav className='md:flex container justify-between '>
         
            <p className='pl-2 self-center' >
                <Link to='/'><span className='bg-[#EA4492] w-2 p-2 rounded-full text-white '>Sherry</span>Berries</Link>
                </p>

                <div className='text-xl absolute top-3 right-10 md:hidden pt-2' onClick={()=>{
                    setHideNavbar(!hideNavbar)
                }}>
                    
                    {
                        hideNavbar ? <RxCross2/> : <FaBars/> 
                    }
                    
             </div>
             <div className={`bg-white absolute w-full transition-all duration-500 ease-in ${hideNavbar ? 'top-[55px]' : 'top-[-200px]'} md:flex md:items-center md:w-full md:justify-center md:z-auto z-[-1] md:static `}>
             <div className='md:flex md:w-full md:items-center '>
            <ul className={`md:flex w-full md:space-x-8 justify-center md:items-center text-center  ${hideNavbar ? 'space-y-4':''}`}>
                <li className='hover:border-b-2 border-[#EA4492]'>
                    <Link to="/" >Home </Link>
                </li>
                <li className='hover:border-b-2 border-[#EA4492]'>
                    <Link to="/product"> Jewelry </Link>
                    </li>
               
                <li className='hover:border-b-2 border-[#EA4492]'>After-Care</li>
                <li className='hover:border-b-2 border-[#EA4492]'>
                    <Link to="/Waistbeads"> Waist-Beads </Link>
                </li>
                <li className='hover:border-b-2 border-[#EA4492]'>
                  <Link to="/About-Us">About</Link>  
                </li>
                <li className='hover:border-b-2 border-[#EA4492]'>
                    <Link to='/Contact'>Contact</Link>
                    </li>
            </ul>
            </div>
        <div className=' md:w-1/2 flex justify-center md:space-x-10  space-x-5 items-center md:m-0 my-8'>
               <Link to = {`/cart/${isLoggedIn.user._id}`}>
                 <button className='bg-slate-200 px-5 py-[8px] flex justify-center items-center rounded-sm' >
                    <HiOutlineShoppingCart className='mr-2'/>
                   My Cart
                </button>
                </Link>
            {
                isLoggedIn.status === false
                
                ? 
            
                <button className='px-5 py-[8px] bg-[#218D42] text-white rounded-sm'>
                  <Link to="/login">login</Link>  
                </button>
                :
                <div className='relative'>
                    <PiUserThin  className='text-[2rem] ' onClick={()=>setAccountMenu(!accountMenu)} />                        
                        <div className={accountMenu ? 'absolute bg-white top-16 w-[12rem] p-4': 'hidden'}  >
                        <ul className='w-full flex flex-col space-y-2'>
                            <li className='hover:text-[#EA4492] '>
                                <Link to='/login'>Change Password</Link>
                            </li>
                            <li>
                                <p className='hover:text-[#EA4492] cursor-pointer' onClick={(()=>{
                                    localStorage.removeItem('token')
                                    localStorage.removeItem("token_expiration")
                                    setIsLoggedIn({...isLoggedIn,status:false})
                                    setLoginState(false)
                                    navigate("/")
                                    
                                })}>Sign Out</p>
                            </li>
                        </ul>
                    </div>
              
                </div>
            }
        </div>
        </div>

        </nav>
        
    </div>
  )
}

export default Navbar