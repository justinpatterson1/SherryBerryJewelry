import React from 'react'
import {Link} from 'react-router-dom'

function PopularCategorylist({img,name,link}) {
    const image = require(`../assets/img/${img}`)
  const catergoryBG=
  {
      backgroundImage:`url(${image})`,
      backgroundPosition:`center`,
      backgroundSize:`cover`,
      backgroundRepeat:`no-repeat`,
      backgroundAttachment:`local`,
      backgroundOrigin:'border-box',
      

  }
 
  return (
    
    <div className=' flex flex-col items-center h-full'>
   
   <Link to={link}> 
    <div className='lg:w-[18rem] lg:h-[25rem] w-[14rem] h-[12rem] md:rounded-md grid grid-cols-1 md:items-center md:justify-center 
                   sm:mt-5 sm:w-[9rem] sm:h-[0px]border-solid border-2  text-center mb-10 relative hover:border-lime-500' style={catergoryBG} >
         
        
            
             
    </div>
    </Link>
     <div className='text-center'>
       <h3 className='text-[10px]'>
        <Link to={link}> {name} </Link>
       </h3>
     </div>
    </div>
  )
}

export default PopularCategorylist