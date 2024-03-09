import React from 'react'
import productImg from '../assets/img/spiritual.jpg'

function ProductHero() {

    const BG=
    {
        backgroundImage:`url(${productImg})`,
        backgroundPosition:`top center`,
        backgroundSize:`cover`,
        backgroundRepeat:`no-repeat`,
        backgroundAttachment:`fixed`,
        height:'70vh',
        width:'100%',
        marginTop:''
    }

  return (
    <div style={BG}>

    </div>
  )
}

export default ProductHero