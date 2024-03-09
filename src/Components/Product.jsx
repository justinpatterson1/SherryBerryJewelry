import React,{useContext, useState,useEffect} from 'react'
import { keepPreviousData, useQuery } from '@tanstack/react-query'
import axios from 'axios'
import FeaturedProductsList from './FeaturedProductsList.jsx'
import JewelryContext from '../Context/JewelryContext.jsx'
import Filter from './Filter.jsx'


function Product() {
    const [page,setPage] = useState(1)
    const [archivedJewelry,setArchivedJewelry] = useState([])
    //const [filters,setFilters] = useState([{color:"purple",size:"1mm"}])
    const [currPage,setCurrPage] = useState(1);
    const [state,setState] = useState(false);
    const [isLoading,setIsLoading] = useState(true)
    const NUMBER_OF_ITEMS_PER_PAGE = 12;
    const{jewelry,setJewelry,setFilterOptions,filterOptions,filter} = useContext(JewelryContext)


    useEffect(()=>{
        fetch('http://localhost:4000/jewelry')
        .then(res => res.json())
        .then(json =>{
          
            setJewelry(json.data)

            setArchivedJewelry(json.data)
    
    
            setFilterOptions(filters(json.data))
          
            
           setIsLoading(false)
          
        })
      },[])
    
      const filters = (jewelry) =>{
        const Colors = new Set(jewelry.map((j)=>{
            return j['color']
           }))
    
            const Size = new Set(jewelry.map((j)=>{
            return j['size']
            }))
           
    
            const Category = new Set(jewelry.map((j)=>{
            return j['catergory']
            }))
            
    
           return({
            colors:Array.from(Colors),
            size:Array.from(Size),
            catergory:Array.from(Category)
            })
    }


    useEffect(()=>{
        const filtersApplied = archivedJewelry.filter((product)=> {
           
                     return filter.every((f)=>
                     {
                        console.log(f)
                       return  Object.values(product).includes(f)
                })
                
            })
            setJewelry(filtersApplied)
            console.log(filtersApplied)
    },[filter])
    //    const filterProducts = () =>{
    //     //const filteredJewelry = jewelry;
    //     const filtersApplied = jewelry.filter((product)=> {
           
    //          return filter.every((f)=>
    //          {
    //            return  Object.values(product).includes(f)
    //     })
        
    // })
    // setJewelry(filtersApplied)
    // console.log(filtersApplied)
    // return filtersApplied
    // }

    console.log(archivedJewelry)

    const paginatedArray = (arr, pageNumber, itemsPerPage) =>{

        const startIndex  = (pageNumber - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;

        const paginatedArray = arr.slice(startIndex,endIndex);

        return paginatedArray

    }

    const NextPage = () => {
        setCurrPage(currPage + 1)
    }

    const PrevPage = () => {
        if (currPage !== 1 ) setCurrPage(currPage - 1);
    }
    // const {isPending,data,error,isFetching,isPlaceholderData,isError} = useQuery({
    //     queryKey:['products',page],
    //     queryFn:()=> fetch('http://localhost:4000/jewelry?page='+page).then((res)=>res.json()),
    //     placeholderData: keepPreviousData,    
    // })

    // const {data:filter} = useQuery({
    //     queryKey: ['filter',state],
    //     queryFn:()=> fetch(`http://localhost:4000/jewelry/Products?page=${page}&color=${filters.color}`), 
    //     enabled:!state
    // })

    
 
    const result = paginatedArray(jewelry,currPage,NUMBER_OF_ITEMS_PER_PAGE)
    
console.log(result)

    

    if(isLoading){return( <div className='h-screen flex items-center justify-center '><h2>Loading...</h2></div>)}

    // if(isError){
    //     return<h2>{error.message}</h2>
    // }

    
  return (
<div className='bg-[#fef7f7]'>
   <div className=' container flex'>

   <div className='  w-[20rem]   '>
        <Filter />
   </div>
    
    <div className=' flex items-center justify-center flex-col'>
        
        <div className='grid grid-cols-4 gap-5'>
            {result.map((d)=>{
            return  <FeaturedProductsList 
                key={d._id}
                id={d._id} 
                price={d.price}
                img={d.img}
                name={d.name}
                category={d.catergory}
                />})}
        </div>
        <div className=' flex items-center justify-center space-x-5 text-center w-full  '>
            <button className='w-20 h-8 bg-slate-300 rounded-md' onClick={PrevPage} disabled={currPage===1}>Prev</button>
            <div>
                 {currPage}
            </div>

            <button className='w-20 h-8 bg-slate-300 rounded-md' onClick={NextPage} > Next</button>
        </div>
        {/* {isFetching ? <span> Loading...</span> : null}{' '} */}
    </div>
    </div>   
    </div> 
  )
}

export default Product