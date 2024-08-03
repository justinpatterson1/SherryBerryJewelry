import React from 'react'
import heroImg from "../assets/img/sherry-Berries-hero.jpg"
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";

function Contact() {
    const BG=
    {
        backgroundImage:`url(${heroImg})`,
        backgroundPosition:`top center`,
        backgroundSize:`cover`,
        backgroundRepeat:`no-repeat`,
        backgroundAttachment:`fixed`,
        height:'60vh',
        width:'100%',
        marginTop:''
    }
  return (
    <div  className='bg-[#fef7f7]'> 
    
        <div style={BG}>
            
        </div>
        <div className='container w-1/2 '>
            <h1 className='text-center my-[3rem]'>
                Get In Contact...
            </h1>
            <div className='grid grid-cols-2 items-center justify-center'>
                <div className='justify-self-center border-r-2 border-[#EA4492]  w-full h-full  flex  items-center justify-center'>
                    <ul className='space-y-10'>
                        <li className='flex space-x-1  '>
                             < BsFillTelephoneFill className='text-2xl' /> : 1-868-XXX-XXXX

                        </li>
                        <li className='flex space-x-2 '>
                            <IoIosMail className='text-2xl'/> : sherryBerries@gmail.com
                        </li>
                        <li className='flex space-x-2 '>    
                        <AiFillInstagram className='text-2xl'/> : @sherryBerries
                        </li>
                    </ul>
                </div>
                <div className='justify-self-center '>
                    <form action="">
                        <div className='space-y-10'>
                        <div className='flex '>
                           
                            <input type="text" placeholder='Subject'  className='w-full h-10 p-2 bg-slate-300 placeholder:italic placeholder:text-black  border-b-4 border-l-4 border-r-4 focus:outline-none' />
                        </div>
                        <div className='flex'>
                            <textarea cols="40" rows="5" placeholder='Message' className='bg-slate-300  p-2 placeholder:italic placeholder:text-black  border-b-4 border-l-4 border-r-4 focus:outline-none'/>
                        </div>
                       <div>
                            <input type="submit" value="Submit" placeholder='Submit' className='bg-[#218D42] text-white px-5 py-2' />
                       </div>

                        </div>
                     
                       
                    </form>
                </div>
            </div>
        </div>


    </div>
    
    
  )
}

export default Contact