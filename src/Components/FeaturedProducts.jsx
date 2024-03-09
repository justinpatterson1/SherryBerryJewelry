import React, { useCallback, useContext } from 'react'
import JewelryContext from '../Context/JewelryContext'
import FeaturedProductsList from './FeaturedProductsList'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function FeaturedProducts() {
const {jewelry,featuredProducts,limit,setLimit} = useContext(JewelryContext);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive:[
            {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  initialSlide: 1
                }
              },
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow:3 ,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              }
       
       ]};

  return (
    <div>
         <div className='bg-[#fef7f7] md:flex md:flex-col md:items-center h-auto '>
        <h1 className='text-center pt-10 '>Featured Products</h1>
        <div className=' hidden md:block  md:grid md:grid-cols-3 lg:grid lg:grid-cols-4 md:pt-10 md:place-items-center lg: place-items-center md:gap-5  '>
         {
                featuredProducts.map((j)=>(
                   < FeaturedProductsList key={j._id} id={j._id} name={j.name} price={j.price} img={j.img} category={j.catergory} size={j.size}/>
                ))
            }
        
        </div>
        <div className='md:hidden w-2/3 ml-20 '>
           <Slider {...settings}> 
            {
                featuredProducts.map((j)=>(
                   < FeaturedProductsList key={j._id} id={j._id}  name={j.name} price={j.price} img={j.img} category={j.catergory} size={j.size}/>
                ))
            } 
          </Slider>
          
        </div>
        <div className='flex items-center justify-center bg-[#fef7f7] pb-10 pt-10'>
        <button className='w-60 h-8 bg-white text-[#EA4492] shadow-lg shadow-pink-500/50  hover:shadow-pink-500/50  cursor-pointer hover:shadow-inner'
        onClick={()=>{
          limit!==16 ?   setLimit(limit + 4 ) : setLimit(16)
        
        }}>Load More</button>
        </div>
        
    </div>
    </div>
  )
}

export default FeaturedProducts