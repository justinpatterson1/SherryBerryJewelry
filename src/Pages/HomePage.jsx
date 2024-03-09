import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import PopularCategories from '../Components/PopularCategories'
import FeaturedProducts from '../Components/FeaturedProducts'
import AfterCareAdvert from '../Components/AfterCareAdvert'
import EmailSubscription from '../Components/EmailSubscription'
import Footer from '../Components/Footer'

function HomePage() {
  return (
    <>
        
            <Navbar/>
            <Hero/>
            <PopularCategories/>
            <FeaturedProducts/>
            <AfterCareAdvert/>
            <EmailSubscription/>
             <Footer/> 
    </>
  )
}

export default HomePage