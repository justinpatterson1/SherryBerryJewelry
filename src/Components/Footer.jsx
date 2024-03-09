import React from 'react'
import { TiSocialFacebook } from "react-icons/ti";
import { RiTiktokFill } from "react-icons/ri";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialInstagramCircular } from "react-icons/ti";


function Footer() {
  return (
    <div className=' py-8 mt-20 '>
        <div className='container   md:flex md:justify-between  h-full'>
            <div> 
                <div>
       
                <p className='md:pl-2 pt-5 text-center mb-2'>
                    <span className='bg-[#EA4492] w-2 p-2 rounded-full text-white '>Sherry</span>Berries
                </p>
                <p className='pt-2'>
                    It's The Cherry On Top 
                </p>
                <div className='flex items-center justify-center space-x-2 my-4'>
                     <TiSocialFacebook className='text-2xl'/>
                     <RiTiktokFill  className='text-2xl' />
                     <TiSocialTwitter  className='text-2xl' />
                     <TiSocialInstagramCircular  className='text-2xl' />

                </div>
                </div>
            </div>
            <div className='md:flex md:justify-center md:space-x-10  md:w-1/2  '>
                <div>
                    <h5 className='mb-2'>About</h5>
                    <div className='flex flex-col space-y-1'>
                       <ul className='flex flex-col space-y-2 text-sm text-center'>
                            <li>Home</li>
                            <li>Get In Touch</li>
                            <li>FAQ</li>
                        </ul> 
                      
                    </div>
                      
                </div>
                <div>
                    <h5 className='mb-2'>
                        Product
                    </h5>
                    <div className='flex flex-col space-y-1'>
                       <ul className='flex flex-col space-y-2 text-sm text-center'>
                       <li>Jewelry</li>
                        <li>Beads</li>
                        <li>AfterCare</li>
                       </ul>
                    
                        
                    </div>
                </div>
                <div>
                    <h5 className='mb-2'>
                        Contact
                    </h5>
                    <div>
                        <ul className='flex flex-col space-y-2 text-sm text-center'>
                            <li>Support</li>
                            <li>Contact</li>
                            <li>Address</li>
                        </ul>
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer