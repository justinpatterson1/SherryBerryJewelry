import React from 'react'

function EmailSubscription() {
  return (
    <div className='bg-[#218D42] py-32 w-full '>
        <div className='flex text-white container items-center justify-center h-full w-full ml-4'>
            <div className='ml-5 hidden md:block'>
                <p className=''>Subscribe <br/> to get updated on new<br/> inventory</p>
            </div>
            <div className='md:border-l-8 border-white  h-32 flex items-center px-10 ml-5'>
                <h1 className='text-[2rem]'>Subscribe for Our Newsletter</h1>
            </div>
        </div>
        <div className=' flex justify-center w-full mt-14'>
            <form action="" className='w-full flex justify-center'>
                <div className=' w-full  flex justify-center space-x-5 '>
                    <input type="text" placeholder='Enter Email Here' className='py-5 placeholder:text-white bg-[#218D42] w-1/3 border-b-2 border-white focus:outline-none'/>
                    <button className=' text-black px-10 py-2 bg-white'> Submit </button>
                </div>
                

                
            </form>
        </div>
    </div>
  )
}

export default EmailSubscription