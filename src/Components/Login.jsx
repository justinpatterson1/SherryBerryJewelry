import React,{useState,useContext} from 'react'
import { useNavigate, Outlet } from 'react-router-dom';
import {jwtDecode} from "jwt-decode"
import { CiMail } from "react-icons/ci";
import JewelryContext from '../Context/JewelryContext';
import LoginForm from './LoginForm';
import LoginUpdate from './LoginUpdate';

function Login() {

    const {loginState} = useContext(JewelryContext)
    const image = require(`../assets/img/LoginImage.jpeg`)
    const image2 = require(`../assets/img/loginBG.png`)
    const categoryBG=
    {
        backgroundImage:`url(${image})`,
        backgroundPosition:`center`,
        backgroundSize:`cover`,
        backgroundRepeat:`no-repeat`,
        backgroundAttachment:`local`,
        backgroundOrigin:'border-box',
        
  
    }

    const LoginBG=
    {
        backgroundImage:`url(${image2})`,
        backgroundPosition:`center`,
        backgroundSize:`cover`,
        backgroundRepeat:`no-repeat`,
        backgroundAttachment:`local`,
        backgroundOrigin:'border-box',
        
  
    }


    // const {isLoggedIn,setIsLoggedIn} = useContext(JewelryContext)
    // const [loginDetails,setLoginDetails] = useState({email:'',password:''})
    // const [error,setError] = useState({message:''})

    // const navigate = useNavigate();
    // const loginUser = (evt)=>{
    //     evt.preventDefault();

    //         fetch("http://localhost:4000/user/auth",{
    //             method:'POST',
    //             headers:{
    //                 'Content-Type':'application/json'
    //             },
    //             body:JSON.stringify(loginDetails)
    //         })
    //         .then(res => res.json())
    //         .then((json)=>{
    //             localStorage.setItem("token",json.jwt);
    //             //const token = localStorage.getItem("token");
    //             const userInfo = jwtDecode(json.jwt);
    //             if (userInfo) setIsLoggedIn({status:true, user:userInfo});
              
            
    //             console.log(isLoggedIn)
    //             setError({message:''})

    //             if(userInfo) navigate("/");
                
    //         })
    //         .catch((err)=>{
    //             setError({message:'Incorrect Email / Password'})
    //             console.log(err)
    //         })
           
    //         console.log(loginDetails)
            

            

    //     }

       


  return (
    <div className='flex h-screen items-center bg-slate-100 justify-center '>
        <div style={categoryBG} className='hidden md:block h-[75%] w-[35%]'>
                {/* <p className='md:pl-2 pt-5 text-center mb-2'>
                    <span className='bg-[#EA4492] w-2 p-2 rounded-full text-white '>Sherry</span>Berries
                </p>
                <p className='pt-2'>
                    It's The Cherry On Top 
                </p> */}
        </div>


                {
                    loginState ? <LoginUpdate/> : <LoginForm/>
                }
        {/* <div className=' md:h-[75%] md:w-[35%] w-full h-full mx-2 ' style={LoginBG}>
        <div className='h-full flex flex-col justify-center items-center'>

            <h2 className='text-2xl'>Login</h2>
            <p className='mt-3 text-sm'>Enter your login credentials.</p>
            <p className='text-red-500 text-sm mt-3'>{error.message}</p>
            <form action="" className=' w-2/3'>
                <div className='flex flex-col'>
                    <input type="email"  placeholder='Email Address' className='my-4 w-full py-2 border-b-2 border-white bg-transparent focus:outline-none'
                        value={loginDetails.email}
                        onChange={(evt)=>{setLoginDetails({...loginDetails,email:evt.target.value})}}
                    />
                    <input type="password" placeholder='Password' className='my-4 w-full py-2 border-b-2 border-white bg-transparent focus:outline-none'
                        value={loginDetails.password}
                        onChange={(evt)=>{setLoginDetails({...loginDetails,password:evt.target.value})}}
                    />
                    <button className='py-2 bg-[#EA4492] text-white' onClick={loginUser}>Login</button>
                    <p className='text-center mt-2 hover:text-blue-700'>Forgot Password?</p>
                    <p className='text-center mt-2 hover:text-blue-700'>Sign Up</p>
                </div>
            </form>
        </div>
        </div> */}
    </div>
  )
}

export default Login