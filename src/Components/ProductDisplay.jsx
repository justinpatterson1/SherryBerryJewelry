import React, { useCallback, useEffect , useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import addToCart from '../utils/addToCart'
import JewelryContext from '../Context/JewelryContext'
import { toast} from 'react-toastify';

function ProductDisplay() {
    const [product,setProduct] = useState([])
    const [isLoading,setIsLoading]  = useState(true)
    const [count,setCount] = useState(1)
    const {id} = useParams();

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

        
    const{quantity,user,setUser} = useContext(JewelryContext)
    useEffect(()=>{
        fetch(`http://localhost:4000/jewelry/${id}`)
            .then(res => res.json())
            .then(json=> setProduct(json.data))
            .catch(err => console.log(err))
            setIsLoading(false)
    },[])

    console.log(product)

    if(isLoading){return( <div className='h-screen flex items-center justify-center bg-green-400'><h2>Loading...</h2></div>)}
  return (
    <div className='bg-[#fef7f7]'>
        <div className='container'>
        <div className='flex space-x-10 py-10 '>
            <img src={product.img} alt="" srcset="" />
            <div className='space-y-5'>
                <h1 className='text-[3rem]'>{product.name}</h1>
                <p className='text-[1.5rem]'>
                     <span className='text-[#EA4492] font-bold'>${product.price}</span>
                </p>
                <div className='flex space-x-5'>
                <p className='text-slate-500'>Size: </p>
                <span className=' flex items-center justify-center h-8 w-[5rem] rounded-lg border border-2 border-slate-200 bg-white p-1'>{product.size}</span>
                </div>
                
                <div className='flex space-x-5'>
                    <p className='text-slate-500'>Color:</p>
                    <input type="color" value={`${product.color}`} />
                 
                </div>
                
                <div className='flex space-x-5 w-auto '>
                <p className='text-slate-500'> Category:</p>
                <span className='flex items-center justify-center h-8 w-[5rem] rounded-lg border border-2 border-slate-200 bg-white p-1'>{product.catergory}</span>
                </div>
                
                <div className='flex space-x-10  items-center'>
                    <p className='text-slate-500'>Quantity:</p>
                    <div className='flex justify-end'>
                        <div className='w-8 h-6 bg-slate-300 text-center flex items-center justify-center hover:cursor-pointer'  onClick={()=>{ count !== 1? setCount(count - 1): setCount(1)}}>-</div>
                        <span className='w-8 h-5 flex items-center justify-center'>{count}</span>
                        <div className='w-8 h-6 bg-slate-300 text-center flex items-center justify-center hover:cursor-pointer'onClick={()=>{setCount(count + 1)}}>+</div>
                    </div>
                </div>
                
                <button className='bg-[#EA4492] w-[15rem] h-[3rem] hover:text-white' onClick={()=>{
                     addToCart(product._id,product.price,product.img,product.name,product.catergory,product.size,count,user,setUser)
                     notify()
                }}>Add to cart</button>
            </div>
        </div>
        </div>
        
    </div>
  )
}

export default ProductDisplay