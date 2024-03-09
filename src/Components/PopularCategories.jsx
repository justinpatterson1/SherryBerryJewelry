import React,{useState} from 'react'
import PopularCategorylist from './PopularCategorylist.jsx';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function PopularCategories() {

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
       
       ]
      };

    const [catergory,setCatergory] = useState([
        {
         id:1,
         img:"waist-bead-pic.jpg",
         name:"Waist-Bead"
        },
        {
         id:2,
         img:'jewelry-girl-pic.jpg',
         name:'Jewelry'
        },
        {
         id:3,
         img:'merch-pic.jpg',
         name:'After-Care'
        },
      
     ])
  return (
    <div className='container h-auto p-5 mb-5 md:h-auto sm:h-screen sm:w-full'>

    <div className=' h-full '>
    <div className=''>
      <h1 className='text-center py-5 '>Popular Category</h1>
      <p></p>
      </div>

     
      
   
     <div id="catergory" className=" h-full flex items-center ">
        
     
        <div className='hidden md:block  md:flex md:space-x-20 md:justify-center md:items-end md:place-items-center md:mb-10  w-full '>
        {
            catergory.map((catergory) => (<PopularCategorylist key={catergory.id} id={catergory.id} img={catergory.img}  name={catergory.name}/>))
        }
      
        </div>

          <div className='md:hidden ml-4 w-80 py-4'>
        <Slider {...settings}>
        
          {
                catergory.map((catergory) => (
                <PopularCategorylist key={catergory.id} id={catergory.id} img={catergory.img}  name={catergory.name}/>
                ))
              }  

      
             
       
    </Slider>   
      </div>  
    </div>
    </div>
    </div>
  )
}

export default PopularCategories