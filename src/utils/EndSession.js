


const checkExpirationTime  = (setIsLoggedIn,setLoginState)=>{
        const time = localStorage.getItem("token_expiration");

        if(time < Date.now()){
            setIsLoggedIn({user:{},status:false})
            setLoginState(false)
            localStorage.removeItem("token")
            localStorage.removeItem("token_expiration")

             alert("Session Expired")

        }

       console.log(Date.now())
}


const updateExpirationTime = ()=>{

    const expirationDate = Date.now() + ((1000 * 60) * 60)

    localStorage.setItem("token_expiration",expirationDate)
}



export {checkExpirationTime,updateExpirationTime}
