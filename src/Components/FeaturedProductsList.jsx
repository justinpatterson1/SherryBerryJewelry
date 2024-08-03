import React,{useState , useContext} from 'react'
import { Link } from 'react-router-dom'
import JewelryContext from '../Context/JewelryContext'
import addToCart from '../utils/addToCart'
import { toast} from 'react-toastify';


function FeaturedProductsList({id,price,img,name,category,size}) {
    const [hide,setHide] = useState(true)

    const {isLoggedIn,user,setUser,quantity,loginState}= useContext(JewelryContext)
  
 
    const notify = () => toast("Item Added to Cart!",{
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    
      });

    const addToCart = (id,price,img,name,category,size,quantity,user,setUser) =>{
      if(loginState){
      const update = user
      const item = {
          id,
          name,
          img,
          category,
          quantity,
          price,
          size
      }

    let cart =  update.cart.find((c)=>{return c.name === name })
    
    if(!cart){
      update.cart.push(item)
      setUser(update)
    }
    
      

      // axios.put(`http://localhost:4000/user/${isLoggedIn.user._id}`,user)
      // .catch(err=>console.log(err))

        fetch(`http://localhost:4000/user/${isLoggedIn.user._id}`,{
          method:'PUT',
          headers:{'Content-Type': 'application/json; charset=UTF-8'},
          body:JSON.stringify(user)
        })
        .then(res => res.json())
        .catch(err=>console.log(err))

        notify()
      } else {
        alert("Not logged in")
      }
      }
     console.log(user)
    
  return (
    <div className='flex flex-col items-center lg:w-[15rem] lg:h-[25rem] mt-5 mb-5   md:w-[15rem] border-2 border-black  '
    onMouseOver={()=>{setHide(false)}}
    onMouseOut={()=>{setHide(true)}}>
        <div className='h-full w-full relative'>
         <img src={img} alt="" srcset="" className='h-full' />
           <div className={
                hide ?
                'hidden' : 
                'h-full w-full bg-[#0d120e] absolute top-0 left-0 opacity-90 flex items-center justify-center z-[0]'
            }
             >
              <div className='h-full flex items-center justify-center'>
                 <button className="text-green-400 w-40 h-10 z-[0] bg-white" onClick={()=>{
                  addToCart(id,price,img,name,category,size,quantity,user,setUser)
                 
                 }}>Add To Cart</button>
              </div>
                    
            </div>
        </div>

            <div className='bg-white w-full text-start pl-2 py-2 border-t-2 border-black '>
                <Link to={`/Product/${id}`}><p className='mt-5 font-bold text-2xl hover:text-[#EA4492]'>{name}</p></Link>
                <p>{category}</p>
                <p className='mt-5 font-bold'>${price}</p>
            </div>
            
    </div>
  )
}

export default FeaturedProductsList