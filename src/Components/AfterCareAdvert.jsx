import React from 'react'
import AfterCare from '../assets/img/aftercare.png'

function AfterCareAdvert() {
  return (
    <div className='container grid md:grid-cols-2 sm:grid sm:grid-cols-1 sm:gap-y-5 h-screen justify-items-center place-content-center '>
    <img src={AfterCare} alt="image of sherry berries after"  
    className='w-[30rem] h-[20rem]  px-2 rounded-xl'/>
    <div className='grid grid-cols-1 py-5 '>
        <h1 className='md:text-[2rem] md:font-700 md:mb-3 md:px-10 text-center sm:place-self-center '>After Care</h1>
        <p className='text-wrap px-10 leading-loose text-center '> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique cum molestiae assumenda nulla at harum, accusamus quas. Error laudantium ratione recusandae quisquam cum impedit velit expedita, atque ducimus ipsam quos!
        Molestiae minus ipsa facilis deserunt dolore? Nostrum neque amet commodi, culpa dolore laborum id. Explicabo dolorum ipsa accusamus tempora, dolores praesentium illum sit aut totam dolore esse earum est reiciendis?</p>
        <div className='text-center bg-[#EA4492] py-3 w-1/2 place-self-center cursor-pointer hover:text-white mt-5'>
            <h1 className='text-[.7rem]'>SHOP NOW</h1>
        </div>
    </div>
</div>
  )
}

export default AfterCareAdvert