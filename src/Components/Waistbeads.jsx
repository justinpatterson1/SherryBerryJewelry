import React, { useEffect,useState } from 'react'
import heroImg from '../assets/img/sherry-Berries-hero.jpg'
import FeaturedProductsList from './FeaturedProductsList'

const Waistbeads = () => {
    const[loading,setLoading] = useState(false);
    const [result,setResult] = useState([])

    useEffect(()=>{
        fetch('http://localhost:4000/jewelry?category=Waistbead')
        .then((res)=>res.json())
        .then(json => setResult(json.data))
        .catch(err=>console.log(err))
    },[])
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

    if(loading){return( <div className='h-screen flex items-center justify-center '><h2>Loading...{console.log(result)}</h2></div>)}
  return (
    <div className='bg-[#fef7f7] '>
    <div style={BG}>

    </div>

    <div className='container my-96 flex items-center justify-center space-x-5 bg-[#fef7f7]'>
        <div className='grid grid-cols-4 gap-5 py-10'>
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
    </div>
    </div>
  )
}

export default Waistbeads