import imageLogin from "../assets/image/Rectangle 289.png";
import logo from "../assets/icons/logo-secondary.png";
import googleIcon from "../assets/image/flat-color-icons_google.png";
import facebookIcon from "../assets/image/bx_bxl-facebook-circle.png"
import { Link } from "react-router-dom";

export default function Login() {
  return (
   <main>
    <div className="h-screen">

        <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-[30%,70%] lg:grid-rows-1">

            <div className="hidden md:block bg-black relative">
                <img className="w-full h-full object-cover" src={imageLogin} alt=""/>
            </div>

            <div className="py-2 px-10 md:px-14 lg:px-20 gap-5 grid content-center mt-32 md:mt-0">

                <section className="grid border md:border-none p-4 gap-12">

                    <div className="flex items-center gap-2">
                        <img className="w-8 h-auto " src={logo} alt="..."/>
                        <h2 className="font-normal text-xl text-[#8E6447]">Coffee Shop</h2>
                    </div>

                    <form className="grid gap-6" action="">
    
                        <h1 className="font-semibold text-xl text-[#8E6447]">Login</h1>
                        <p className="font-normal text-base text-text">Fill out the form correctly</p>
    
                        <div className="grid gap-3">
                            <label className="font-semibold text-base text-[#0B132A]" >Email</label>
                            <div className="border rounded-lg flex items-center py-2 px-1 gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 text-text">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                  </svg>

                              <input type="email" placeholder="Enter Your Email" id="email"/>
                            </div>
                        </div>
        
                        <div className="grid gap-3">
                            <label className="font-semibold text-base text-[#0B132A]" >Password</label>
                            <div className="border rounded-lg flex justify-between items-center py-2 px-1">
                                <div className="flex gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 text-text">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z" />
                                      </svg>

                                  <input type="password" placeholder="Enter Your Password" id="password"/>
                                </div>

                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 text-text">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                              </svg>

                            </div>
                        </div>
        
                        <button className="bg-primary font-medium text-base flex items-center justify-center py-2 rounded-lg">Login</button>
        
                    </form>

                </section>

                <div className="grid grid-cols-1 items-center w-full justify-center gap-1 p-4">

                    <div className="flex justify-center items-center gap-2">
                        <p className="font-medium text-xs text-nowrap">Not Have An Account?</p>
                        <Link to="/register" ><a className="font-medium text-xs text-primary">Register</a></Link>
                    </div>

                    <div className="flex items-center justify-center">
                        <p className="">OR</p>
                    </div>
                    <div className="flex w-full gap-1">

                        <button className="shadow-md flex gap-5 items-center justify-center w-full bg-transparent cursor-pointer text-lg font-medium bg-white">
                            <img className="w-5 h-5" src={facebookIcon} alt="..."/>
                            Facebook
                        </button>

                        <button className="shadow-md flex gap-5 items-center justify-center w-full bg-transparent cursor-pointer text-lg font-medium bg-white">
                            <img className="w-5 h-5" src={googleIcon} alt="..."/>
                            Google
                        </button>

                    </div>
                </div>
                
            </div>

        </div>
        
    </div>
   </main> 
  )
}
