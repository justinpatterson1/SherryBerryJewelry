import React from 'react'
import heroImg from "../assets/img/sherry-Berries-hero.jpg"
import ImageOfOwner from "../assets/img/sherryImage.jpeg"
import AboutUsImage from './AboutUsImage'

function AboutUs() {
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
    <div className='bg-[#fef7f7]'>
      <div style={BG}>

      </div>
      <div className='flex container'>
        <div className='flex items-center flex-col justify-center' >
          <h1 className='mb-5'>Meet The Owner</h1>
          <p className='leading-[2.5rem] tracking-widest'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, deleniti odio? Ad ipsum pariatur maiores facilis at, vel obcaecati! Optio quis sequi nulla, nam atque obcaecati a dignissimos minus inventore.
          Facere reiciendis quaerat esse. Iusto vitae dignissimos laboriosam eaque placeat fuga amet, sunt culpa? Esse ducimus eius quas pariatur neque natus quidem veniam nobis, quia praesentium, at, obcaecati maxime error.</p>
        </div>
        <div>
        <svg id="10015.io" viewBox="0 0 480 480"   width="40rem" height="40rem" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" >
            <defs>
              <clipPath id="blob">
                <path fill="#474bff" d="M365,326.5Q340,413,246.5,401.5Q153,390,114,315Q75,240,120.5,176Q166,112,244.5,104.5Q323,97,356.5,168.5Q390,240,365,326.5Z" />
              </clipPath>
            </defs>
            <image x="55" y="55" width="100%" height="100%" clipPath="url(#blob)" xlinkHref={ImageOfOwner} preserveAspectRatio="xMidYMid slice"></image>
          </svg>
        </div>
      </div>
      <div className='container'>
        <div>
          <h1 className='text-center mb-5'>Our Mission</h1>
          <p className='leading-[2.5rem] tracking-widest'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta unde omnis, ex repellendus doloribus voluptatibus fugit iusto ipsa atque incidunt laborum corrupti obcaecati, quis sapiente repellat, veritatis saepe. Necessitatibus, eius!
          Maiores beatae, excepturi adipisci velit est animi praesentium delectus placeat molestias dolorum vitae ullam itaque obcaecati rerum nemo. Nulla assumenda reiciendis nam non accusantium quia laudantium at sit necessitatibus odio?
          Unde, qui voluptates? Iusto adipisci enim amet perferendis recusandae maxime est nemo? Aperiam, dignissimos modi ipsam eaque illo molestias placeat impedit pariatur consequatur cumque vel nobis doloremque? Ab, iure natus.</p>
        </div>
      </div>
      
    </div>
  )
}

export default AboutUs