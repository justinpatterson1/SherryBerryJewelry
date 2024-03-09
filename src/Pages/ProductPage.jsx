import React from 'react'
import Navbar from '../Components/Navbar'
import ProductHero from '../Components/ProductHero'
import Footer from '../Components/Footer'
import Product from '../Components/Product'


function ProductPage() {
  return (
    <>
        <Navbar/>
        <ProductHero/>
        <Product/>
        <Footer/>
    </>
  )
}

export default ProductPage