import React, { useContext, useEffect, useState } from 'react'
import CartList from './CartList'
import { useParams } from 'react-router-dom'
import JewelryContext from '../Context/JewelryContext'

function Cart() {

    let {userid} = useParams();

    const {user,setUser,cart,setCart,quantity,setQuantity,subtotal,setSubtotal} =  useContext(JewelryContext)
    
    const [isLoading,setIsLoading] = useState(true)
   
  
    console.log(userid)
  
   
    useEffect(()=>{
      sumItems()
    },[cart])


    useEffect(()=>{
        fetch('http://localhost:4000/user/cart/'+user._id)
        .then(res=>res.json())
        .then((json)=>{setCart(json.data.cart)})
        .catch(err=>console.log(err))
    },[])


    const sumItems = () =>{
        let sum = 0;
        cart.map((c)=>{
            return sum = sum + (c.quantity * c.price)
        })

        setSubtotal(sum.toFixed(2))
    }


    const removeItem = (id) =>{
         let userCart = [...user.cart];

        // let filteredResult = userCart.cart.filter((u)=>{return u._id != id})
        const remainder = userCart.filter((c)=>c._id !== id)
        
        // if(cart){
        //     for(let i=0;i<cart.length;i++){
        //         if(cart[i]._id=== id){
        //             cart.splice(i,1)
        //         }
        //     }
            
        // }
        user.cart = remainder
        setCart(remainder)

        fetch(`http://localhost:4000/user/${userid}`,{
            method:'PUT',
            headers:{'Content-Type': 'application/json; charset=UTF-8'},
            body:JSON.stringify(user)
        })
        
        sumItems();

        console.log(remainder)
      
         console.log(user)
    }



   // if(isLoading && cart.length === 0 ){return( <div className='h-screen flex items-center justify-center '><h2>Loading...</h2></div>)}
    
  return (
    <div className='bg-[#ffeeee] py-4 relative'>
        <div className='flex '>

       
       <div className='w-[75%]'>
        {/* <div className={user.cart.length > 0 ?'' : 'hidden'}> */}
            {
            
                cart.length !== 0
                ?
                    cart.map((c)=>(<CartList key={c._id} id={c._id} name={c.name} color={c.color} size={c.size}  img={c.img} price={c.price} quantity={c.quantity} sumItems={sumItems} removeItem={removeItem} />))
                :
                
                    <div className='h-[40rem] flex justify-center items-center'>
                           <h2 className='pl-5'> Cart is empty</h2>
                    </div>
                
                    //<div> hi </div>
            }
        {/* </div>
        <div className={user.cart.length === 0 ?'':'hidden'}>
            <h1>Your SherryBerries Cart is empty.</h1>
        </div> */}
        </div>
        <hr/>
        <div className='py-20 w-[20%]'>
        <div className='  fixed   '>
                    <div className='flex justify-center space-x-10 ' >
                        <p>Subtotal</p>
                            <p>${subtotal}</p>
                        </div>
                        

                <div className='flex justify-center mt-5'>
                  <button className=' bg-[#EA4492] text-white p-3'>CHECKOUT</button>
            </div>
            
            </div>
          
        </div>
            
        </div>
    </div>
  )
}

export default Cart