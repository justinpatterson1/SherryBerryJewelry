import React,{useContext,useState} from 'react'
import { useNavigate, Outlet } from 'react-router-dom';
import {jwtDecode} from "jwt-decode"
import { CiMail } from "react-icons/ci";
import JewelryContext from '../Context/JewelryContext';
import { toast} from 'react-toastify';

function LoginForm() {
    const image2 = require(`../assets/img/loginBG.png`)
    const LoginBG=
    {
        backgroundImage:`url(${image2})`,
        backgroundPosition:`center`,
        backgroundSize:`cover`,
        backgroundRepeat:`no-repeat`,
        backgroundAttachment:`local`,
        backgroundOrigin:'border-box',
        
  
    }

    const {isLoggedIn,setIsLoggedIn,setLoginState} = useContext(JewelryContext)
    const [loginDetails,setLoginDetails] = useState({email:'',password:''})
    const [error,setError] = useState({message:''})

    const notify = () => toast("login Successful!",{
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      
        });

    const navigate = useNavigate();
    const loginUser = (evt)=>{
        evt.preventDefault();

            fetch("http://localhost:4000/user/auth",{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(loginDetails)
            })
            .then(res => res.json())
            .then((json)=>{
                const expirationDate = Date.now() + ((1000 * 60) * 60)
                localStorage.setItem("token",json.jwt);

                //console.log(`Expiration Date:${expirationDate}`)
                localStorage.setItem("token_expiration",expirationDate)
                //const token = localStorage.getItem("token");
                const userInfo = jwtDecode(json.jwt);
                if (userInfo){
                    notify();
                    setIsLoggedIn({status:true, user:userInfo});
                    setLoginState(true)
                    navigate("/");
                    
                } 
              
            
                console.log(isLoggedIn)
                setError({message:''})

                if(userInfo) ;
                
            })
            .catch((err)=>{
                setError({message:'Incorrect Email / Password'})
                console.log(err)
            })
           
            console.log(loginDetails)
            

            

        }

  return (

         <div className=' md:h-[75%] md:w-[35%] w-full h-full mx-2 ' style={LoginBG}>
        <div className='h-full flex flex-col justify-center items-center'>

            <h2 className='text-2xl'>Login</h2>
            <p className='mt-3 text-sm'>Enter your login credentials.</p>
            <p className='text-red-500 text-sm mt-3'>{error.message}</p>
            <form action="" className=' w-2/3'>
                <div className='flex flex-col'>
                    <input type="email"  placeholder='Email Address' className='my-4 w-full py-2 border-b-2 border-white bg-transparent focus:outline-none placeholder:italic'
                        value={loginDetails.email}
                        onChange={(evt)=>{setLoginDetails({...loginDetails,email:evt.target.value})}}
                    />
                    <input type="password" placeholder='Password' className='my-4 w-full py-2 border-b-2 border-white bg-transparent focus:outline-none placeholder:italic'
                        value={loginDetails.password}
                        onChange={(evt)=>{setLoginDetails({...loginDetails,password:evt.target.value})}}
                    />
                    <button className='py-2 bg-[#EA4492] text-white' onClick={loginUser}>Login</button>
                    <p className='text-center mt-2 hover:text-blue-700'>Forgot Password?</p>
                    <p className='text-center mt-2 hover:text-blue-700'>Sign Up</p>
                </div>
            </form>
        </div>
        </div>
    
  )
}

export default LoginForm