import { useState } from "react";
import logo from "../assets/icons/logo-primary.png"
import { Link } from "react-router-dom";

export default function Header() {
  const Page = [
    {name: "Home" , link:"/"},
    {name: "Product" ,link:"/product"},
  ]
  const [isOpen , setisOpen] = useState(false)
  
  return (

    <header className="py-2 z-50 px-5 md:px-10 lg:px-14 bg-black bg-opacity-80 shadow-md w-full fixed top-0 left-0 lg:flex lg:justify-between lg:items-center">

      <div className=" flex justify-between items-center "> 

        <span className="flex items-center gap-4">
          <div className="flex items-center">
              <img className="filter brightness-0 invert w-6 h-auto" src={logo} alt="..." />
              <h1 className="text-xl pl-2 text-white">coffee Shop</h1>
          </div>

          <nav className="text-sm flex gap-4 items-center list-none text-white">
              {
                Page.map(link => 
                  <Link className="hidden lg:block" to={link.link}><a >{link.name}</a></Link>)
              }
          </nav>
    
        </span>

        <div className="cursor-pointer block lg:hidden text-white">    
                   
        </div>

      </div>

      <div onClick={() => setisOpen(!isOpen)}  className="absolute right-8 top-2 cursor-pointer lg:hidden">
        {
          isOpen ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
          </svg>
        }

      </div>

      <nav>
            <ul className={`grid lg:items-center w-full transition-all ease-in duration-500 ${isOpen ? 'hidden' : 'block'} lg:hidden `}>
                {
                  Page.map(link => 
                  <li className="mx-4 my-2 lg:my-0"><a className="block lg:hidden text-white" href={link.link}>
                    {link.name}
                  </a></li>)
                }

                <li className="mx-4 my-2 lg:my-0 text-white"><Link to="/login">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                </Link></li>
                <li className="mx-4 my-2 lg:my-0 text-white"><Link to="/checkout">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                </Link></li>
                <div className="flex gap-5">

                      <Link to="/login"><button  className="navbar-nav sign-in rounded-lg px-6 py-2 border border-white bg-transparent text-white text-sm" >Sign In</button></Link>
                      <Link to="/register"><button className="navbar-nav sign-up rounded-lg px-6 py-2 bg-primary opacity-100 border-none text-sm">Sign Up</button></Link>
                </div>
            </ul>

            <ul className="hidden lg:flex  lg:items-center w-full">
                {
                  Page.map(link => 
                  <li className="mx-4 my-2 lg:my-0"><a className="block lg:hidden text-white" href={link.link}>
                    {link.name}
                  </a></li>)
                }

                <li className="mx-4 my-2 lg:my-0 text-white"><a href="./pages/login.html">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                </a></li>
                <li  className="mx-4 my-2 lg:my-0 text-white"><Link to="/checkout">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                </Link></li>
                <div className="grid lg:flex gap-5">
                  <Link to="/login" ><button  className="navbar-nav sign-in rounded-lg px-6 py-2 border border-white bg-transparent text-white text-sm" >Sign In</button></Link>
                  <Link to="/register" ><button className="navbar-nav sign-up rounded-lg px-6 py-2 bg-primary opacity-100 border-none text-sm">Sign Up</button></Link>
                </div>
            </ul> 
        </nav>
    </header>

  );
}
