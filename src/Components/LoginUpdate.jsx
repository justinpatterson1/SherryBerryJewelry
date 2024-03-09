import React, { useContext, useState } from 'react'
import JewelryContext from '../Context/JewelryContext'
import bcrypt from 'bcryptjs'
import { useNavigate } from 'react-router-dom'

function LoginUpdate() {
    const navigate = useNavigate();
    const image2 = require(`../assets/img/loginBG.png`)
    const[currentLoginCredentials,setCurrentLoginCredentials] = useState({password:''})
    const[newLoginCredentials,setNewLoginCredentials] = useState({newPassword:'',confirmPassword:''})
    const [isLoading,setIsLoading] =  useState(false)
    const [error,setError] = useState({message:''})


    const {user,setLoginState,setIsLoggedIn} = useContext(JewelryContext)

    const LoginBG=
    {
        backgroundImage:`url(${image2})`,
        backgroundPosition:`center`,
        backgroundSize:`cover`,
        backgroundRepeat:`no-repeat`,
        backgroundAttachment:`local`,
        backgroundOrigin:'border-box',
        
  
    }

    const updatePassword =()=>{
        setIsLoading(true)
        fetch(`http://localhost:4000/user/update/${user._id}`,{
            method:'POST',
            headers:{'Content-type' : 'application/json'},
            body:JSON.stringify({password:currentLoginCredentials.password})
        })
        .then((res)=>{

            
            if(res.status === 200){
                if(newLoginCredentials.newPassword = newLoginCredentials.confirmPassword){
                      bcrypt.genSalt(10)
                        .then(salt => {
                            bcrypt.hash(newLoginCredentials.newPassword,salt)
                                .then(hash=>{
                                     fetch(`http://localhost:4000/user/${user._id}`,{
                                        method:'PUT',
                                        headers:{'Content-type' : 'application/json'},
                                        body:JSON.stringify({password:hash})
                                    })
                                    .then((res)=>{
                                        if(res.status === 200){
                                            
                                            setIsLoading(false)
                                            setLoginState(false)
                                            setIsLoggedIn({status:false,user:{}})
                                            localStorage.removeItem('token')
                                            navigate("/login")
                                        }
                                    })
                                })                            
                        })
                            
                    
                    
                    // fetch(`http://localhost:4000/user/${user._id}`,{
                    //     method:'PUT',
                    //     headers:{'Content-type' : 'application/json'},
                    //     body:JSON.stringify({password:hash})
                    // })
                    // .then((update)=>{
                    //     if(update){
                    //         setIsLoading(false)
                    //     }
                    // })
                }
            }
        })
        
    }

  return (
    
          <div className=' md:h-[75%] md:w-[35%] w-full h-full mx-2 ' style={LoginBG}>
        <div className='h-full flex flex-col justify-center items-center'>

            <h2 className='text-2xl'>Update</h2>
            <p className='mt-3 text-sm'>Update your Login credentials.</p>
            <p className='text-red-500 text-sm mt-3'>{error.message}</p>
            <form action="" className=' w-2/3'>
                <div className='flex flex-col'>
                    <input type="email"  placeholder='Old Password' className='my-4 w-full py-2 border-b-2 border-white bg-transparent focus:outline-none'
                        value={currentLoginCredentials.password}
                        onChange={(evt)=>{setCurrentLoginCredentials({password:evt.target.value})}}
                    />
                    <input type="password" placeholder='New Password' className='my-4 w-full py-2 border-b-2 border-white bg-transparent focus:outline-none'
                        value={newLoginCredentials.newPassword}
                        onChange={(evt)=>{setNewLoginCredentials({...newLoginCredentials,newPassword:evt.target.value})}}
                    />
                     <input type="password" placeholder='Confirm Password' className='my-4 w-full py-2 border-b-2 border-white bg-transparent focus:outline-none'
                        value={newLoginCredentials.confirmPassword}
                        onChange={(evt)=>{setNewLoginCredentials({...newLoginCredentials,confirmPassword:evt.target.value})}}
                    />
                    <button className='py-2 bg-[#EA4492] text-white' onClick={updatePassword}>Update</button>
                    {/* <p className='text-center mt-2 hover:text-blue-700'>Forgot Password?</p>
                    <p className='text-center mt-2 hover:text-blue-700'>Sign Up</p> */}
                </div>
            </form>
            {isLoading ? <h2>Loading....</h2> : ''}
        </div>
        </div>
   
  )
}

export default LoginUpdate