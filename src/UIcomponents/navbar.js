'use client';

import { Button, Navbar,  } from 'flowbite-react';
import LogoImage from '../assets/colorlogo.png';

export default function NavbarWithCTAButton() {
  return (
    <Navbar className='bg-white  top-0 w-full shadow-md '
      fluid 
      rounded
    >
      <Navbar.Brand href="">
        <img
          alt=" Logo"
          className="mr-3 rounded-[100px] "
          height={"60"}
          width={"160"}
          src={LogoImage}
        />
       
      </Navbar.Brand>
      <div className="flex md:order-2  ">
        <Button className="appearance-none " class="bg-green-500 hover:bg-green-300 text-white font-bold py-2 px-4 rounded-3xl ">
          Get Started
        </Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link
          active
          href="#"
        >
          <p className='text-green-500 hover:text-green-300 text-lg'>
            Home
          </p>
        </Navbar.Link>
        <Navbar.Link href="#" >
          <p className='text-green-500 hover:text-green-300 text-lg'>
          About
          </p>
        </Navbar.Link>
        <Navbar.Link href="#">
          <p className='text-green-500 hover:text-green-300 text-lg'>
          Services
          </p>
        </Navbar.Link>
        <Navbar.Link href="#">
          <p className='text-green-500 hover:text-green-300 text-lg'>
          Pricing
          </p>
          
        </Navbar.Link>
        <Navbar.Link href="#">
          <p className='text-green-500 hover:text-green-300 text-lg'>
          Contact
          </p>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}


