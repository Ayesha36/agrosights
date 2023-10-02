'use client';

import { Footer } from 'flowbite-react';

export default function DefaultFooter() {
  return (
    <Footer container className=' font-bold font-semibold bg-green-500 rounded-[0] '>
      <Footer.Copyright className='text-white'
        by="AGROSIGHTS™"
        href="#"
        year={2023}
      />
      <Footer.LinkGroup className='hover:text-gray-900 text-white justify-center'>
        <Footer.Link href="#">
        Home
        </Footer.Link>
        <Footer.Link href="#">
          About
        </Footer.Link>
        <Footer.Link href="#">
          Services
        </Footer.Link>
        <Footer.Link href="#" >
          Pricing
        </Footer.Link>
        <Footer.Link href="#" >
          Contact
        </Footer.Link>
      </Footer.LinkGroup>
      <button className="appearance-none " class="bg-green-300 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-3xl ">
      Get Started
      </button>
    </Footer>
  )
}


