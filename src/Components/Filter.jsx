import React,{useContext,useEffect,useState} from 'react'
import JewelryContext from '../Context/JewelryContext'

function Filter() {
    const {color,setCategoryFilter,setColorFilter,setSizeFilter,jewelry,setJewelry,setFilter,filter,filterOptions,setFilterOptions} = useContext(JewelryContext)
    const [test,setTest] = useState([])
    const arr  =  []

    
    
    
    //   const filterProducts = () =>{
    //     //const filteredJewelry = jewelry;
    //     const filtersApplied = jewelry.filter((product)=> {
           
    //          return filter.every((f)=>
    //          {
    //            return  Object.values(product).includes(f)
    //     })
        
    // })
    // setJewelry(filtersApplied)
    // return filtersApplied
    // }
    

    // useEffect(()=>{
    //     const filtersApplied = jewelry.filter((product)=> {
           
    //         return filter.every((f)=>
    //         {
    //           return  Object.values(product).includes(f)
    //    })
    // })
    //    setTest(filtersApplied)
    //    //console.log(test)
    // },[filter])

   
   
    
   


      
    

       //setColorFilter(Array.from(Colors))

    //    const Size = new Set(jewelry.map((j)=>{
    //      return j['size']
    //    }))
    //    setSizeFilter(Size)

    //    const Category = new Set(jewelry.map((j)=>{
    //      return j['catergory']
    //    }))
    //    setCategoryFilter(Category)

    console.log(filter)
  
//console.log(jewelry)
    
// console.log(filterProducts())

if(filterOptions.length === 0){return <h2>Loading....</h2>}

  return (
    <div className=' flex flex-col w-full h-full relative mt-20 '>
        <div className='h-1/2 flex flex-col justify-center space-y-10 static'>
         
        <div className='h-1/3'>
            <div className='flex flex-col '>
                <h3 className='text-center mb-5'>Color</h3>
                <div className='flex flex-col items-center justify-center mt-3'>
            {
                
                filterOptions.colors.map((color)=>(
                <>
                    
                    <input type='color' name='color' id='color' value={color} onClick={(evt)=>{setFilter([...filter,evt.target.value.toUpperCase()])}}/>
                </>
                
                
                ))
            
            }
            </div>
            </div>
        
       
        </div>
        <div className='h-1/3'>
            <div>
            <div className='flex flex-col'>
                <h3 className='text-center mb-5'>Size</h3>
                <div className='flex flex-col items-center justify-center mt-3'>

                
            {
                
                filterOptions.size.map((size)=>(
                <div className='flex flex-col space-x-5'>
                    <div className='grid grid-cols-2 w-[12rem]'>

                 
                    <input type='checkbox' name='size' id='size' value={size} onClick={(evt)=>{
                            setFilter([...filter,evt.target.value])
                            //filterProducts()
                           
                        }}/>
                    <label htmlFor="size" className='text-center'>{size}</label>
                </div>
                </div>
                
                ))
            
            }
            </div>
            </div>
            </div>    
        </div>
        <div>
            <div>
                <div className='flex flex-col w-full'>
                    <h3 className='text-center mb-5'>Category</h3>
                    <div className='flex flex-col items-center justify-center mt-3'>

                    
                {
                    
                    filterOptions.category.map((category)=>(
                    <div className='flex flex-col space-x-5'>
                        
                        <div className='grid grid-cols-2 w-[15rem]'>
                        <input type='checkbox' name='size' id='size' value={category} onClick={(evt)=>{
                            setFilter([...filter,evt.target.value])
                            //filterProducts()
                           
                        }}/>
                        
                      
                        <label htmlFor="size" className='text-center'>{category}</label>
                        </div>
                    </div>
                    
                    
                    ))
                
                }
                </div>
                </div>
            </div>
        </div> 
            <button className='hover:text-red-600' onClick={()=>{setFilter([])}}>Clear Filter</button>
        </div>
    </div>
  )
}

export default Filter