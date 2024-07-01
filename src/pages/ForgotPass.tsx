import logo from "../assets/icons/logo-secondary.png"
import image from "../assets/image/Rectangle 289.png"

export default function ForgotPass() {
  return (
    <main className="h-screen">

        <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-[30%,70%] lg:grid-rows-1">

            <div className="hidden md:block bg-black">
                <img className="w-full h-screen object-cover" src={image} alt="..."/>
            </div>

            <div className="py-2 px-10 md:px-14 lg:px-20 gap-5 grid content-center mt-32 md:mt-0">

                <section className="grid border md:border-none p-4 gap-4">

                    <div className="flex items-center gap-2">
                        <img className="w-8 h-auto" src={logo} alt="..."/>
                        <h2 className="font-normal text-xl text-[#8E6447]">Coffee Shop</h2>
                    </div>

                    <form className="grid gap-3" action="">
    
                        <h1 className="font-semibold text-xl text-[#8E6447]">Fill out the form correctly</h1>
                        <p className="font-normal text-base text-text">We will send new password to your email</p>
    
                        <label className="font-semibold text-base text-[#0B132A]">Email</label>
                        <div className="border rounded-lg flex items-center py-2 px-1 gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 text-text">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                              </svg>
                              
                          <input type="email" placeholder="Enter Your Email" id="email"/>
                        </div>
        
                        <button className="bg-primary font-medium text-base flex items-center justify-center py-2 rounded-lg">Submit</button>
        
                    </form>

                </section>

            </div>

        </div>
        
    </main>
  )
}
