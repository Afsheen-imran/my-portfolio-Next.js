import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-red-700 h-14'>
      <div className='text-yellow-400 flex justify-between items-center'>

       
          <a className="flex title-font font-medium items-center text-yellow-500 mb-4 md:mb-0">
            <Image
              src={("../app/public/Assests/portfolio-image.jpeg")}
              alt="my logo"
              width={100}
              height={100}
              className="w-[50px]"
            />
            <span className="ml-3 text-xl">My Portfolio</span>
          </a>
    
     <ul className='flex gap-4 mr-4 cursor-pointer '>
    
     <li><Link className='decoration-blue-500 underline text-yellow-400 hover:text-blue-600 'href = "/">Home</Link></li>
    
     <li><Link className= 'decoration-blue-500 underline text-yellow-400 hover:text-blue-600 'href = "/about">About </Link></li>
    
     <li><Link className= 'decoration-blue-500 underline text-yellow-400 hover:text-blue-600 'href = "/skills">Skills </Link></li>
    
     <li><Link className=  'decoration-blue-500 underline text-yellow-400 hover:text-blue-600 'href= "/projects">Projects </Link></li>
    
     <li><Link className=  'decoration-blue-500 underline text-yellow-400 hover:text-blue-600 'href= "/contact">Contact </Link></li>

     </ul>
      </div>
    </div>
  )
}

export default Navbar
