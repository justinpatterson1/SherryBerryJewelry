import React, { useMemo, useContext, useEffect, useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import JewelryContext from '../Context/JewelryContext';


function CartList({id,name,color,size,img,price,quantity,removeItem,sumItems}) {

    const {user,cart,subtotal,setSubtotal} = useContext(JewelryContext)
    const [cartQuantity,setCartQuantity] = useState(quantity)
    const [updateCompleted,setUpdateCompleted] = useState(true)

    // useEffect(()=>{
    //     fetch(`http://localhost:4000/user/${user._id}`)
    //     .then(res => res.json() )
    //     .then(json =>{set})
    // },[])

       // useMemo(()=>sumItems(),[cartQuantity])

    //    useEffect(()=>{
    //     sumItems()
    //    },[cartQuantity])

    console.log(user)
    console.log(cart)
    

    const updateAPI = ()=>{
       setUpdateCompleted(false)
        fetch(`http://localhost:4000/user/${user._id}`,{
            method:'PUT',
            headers:{'Content-Type': 'application/json; charset=UTF-8'},
            body:JSON.stringify(user)
          })
          .then ((res)=>{
            if(res.status === 200){
                setUpdateCompleted(true)
                
            }
          })

          console.log("ji")
          
          
    }

//     // useEffect(()=>{
//     //     updateAPI()
//     // },[cartQuantity])
    
 const setQuantity = () =>{

   
    const cartItems = [...cart];

    let currentItem = cartItems.find((c)=>c._id === id)

     currentItem.quantity = cartQuantity;
 
    console.log(cartItems)

     user.cart = cartItems

     
    console.log(user)

 }



    const SubQuantity = ()=>{
        if(updateCompleted){
            const cartToAdd = [...user.cart]

        const currentItem = cartToAdd.find((c)=>{return c._id === id})
        
        currentItem.quantity = currentItem.quantity - 1
        setCartQuantity(prev => prev - 1)
        const newTotal = ( parseFloat(subtotal) - parseFloat(currentItem.price)).toFixed(2)

        updateAPI()
        setSubtotal(newTotal)
        console.log(user)
    }

    }

const addQuantity = (id)=>{
console.log(id)
     if(updateCompleted){
            const cartToAdd = [...cart]
            let userCart  = [...user.cart]
            userCart = []

            console.log(userCart)

        const currentItem = cartToAdd.find((c)=>{return c._id == id})
        console.log(currentItem)
        currentItem.quantity = currentItem.quantity + 1

        userCart.push(cartToAdd)

        const newTotal = ( parseFloat(subtotal)+ parseFloat(currentItem.price)).toFixed(2)
       
        console.log(newTotal)
        setCartQuantity(prev => prev + 1)

        setSubtotal(newTotal)
        updateAPI()
       
  }

  console.log('hi')
    
}
    
  return (
    <div className=' mb-4'>
        <div className='container grid grid-cols-2 h-44 w-3/4  place-items-center relative bg-white '>
        <RxCross2 
        className='absolute top-4 right-4 text-2xl hover:text-red-400 cursor-pointer'
        onClick={()=>{removeItem(id)}}
        />
        <div className='grid grid-cols-2 '>
            <div className=' w-full'>
            <img src={img} alt="" className='h-auto w-48 object-fill' />
            </div>
            
            <div className=' pl-4 '>
                <h2>{name}</h2>
                <p>{color}</p>
                <p>{size}</p>
            </div>
        </div>
        <div className='flex space-x-10'>
            <p className='text-[#EA4492]'>${price.toFixed(2)}</p>
            <div className='flex space-x-5 items-center justify-center'>
                <button className='w-8 h-6 bg-slate-300 text-center flex items-center justify-center hover:cursor-pointer' disabled={cartQuantity === 1} onClick={()=>{
                    // setCartQuantity(quantity - 1)
                    // setQuantity()
                   setUpdateCompleted(false)
                    SubQuantity()
                }}>-</button>
                    <div> {cartQuantity}</div>   
                <button className='w-8 h-6 bg-slate-300 text-center flex items-center justify-center hover:cursor-pointer'onClick={()=>{
                   setUpdateCompleted(false)
                   addQuantity(id)
                }}>+</button>
            </div>
            
        </div>
        </div>
        
    </div>
  )
}

export default CartList