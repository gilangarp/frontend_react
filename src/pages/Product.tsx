
export default function Product() {
  return (
    <main className="bg-blue-500 h-screen">
      <section className="bg-retengle299 w-full h-[40vh] bg-cover bg-center flex items-center justify-center">
            <p className="text-center text-heading_mobile lg:text-heading_desktop w-full font-medium text-white lg:w-[880px]">We Provide Good Coffee and Healthy Meals</p>
        </section>

        <section className="pl-10 pr-10 lg:pl-20 lg:pr-20">

            <section className="py-2 flex justify-between ">

                <h1 className="text-heading_mobile lg:text-heading_desktop text-black text-plus-jakarta ml-0">Today's <span className="text-[#8E6447]">Promos</span></h1>

                <div className="hidden lg:block">
                    <button id="btn-scroll-left" type="button" className="py-2 px-2 rounded-[50%] bg-[#E8E8E8] "><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                      </svg>
                    </button>
                    <button id="btn-scroll-right" type="button" className="py-2 px-2 rounded-[50%] bg-primary"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                      </svg>
                    </button>
                </div>
            </section>

            <section className="py-2">

                <div id="scroll" className="min-w-full grid gap-3 grid-cols-[1fr,1fr,1fr,1fr,1fr,1fr,1fr,1fr,1fr,1fr,1fr,1fr,1fr,1fr,] promo-container overflow-x-auto snap-mandatory snap-x lg:snap-none ">

                    <div className="w-[335px] h-fit bg-[#88B788] overflow-hidden rounded-3xl grid grid-cols-[auto,1fr] snap-center grid-rows-1">
                        
                        <div className="w-24 h-[80px] pl-[1%] rounded-3xl">
                            <img src="../assets/images/image 46.png" alt="" className="object-cover"/>
                        </div>
                        
                        <div className="w-48 h-[85px] flex flex-col justify-between">
                            <div>
                                <h1 className="text-sm font-bold">HAPPY MOTHER’S DAY!</h1>
                            <h2 className="text-sm">Get one of our favorite menu for free!</h2>
                            </div>
                            <li className="text-sm text-white font-normal">
                                <a href="">Klaim Kupon</a>
                            </li>
                        </div>
                    </div>

                    <div className="w-[335px] h-fit bg-[#88B788] overflow-hidden rounded-3xl grid grid-cols-[auto,1fr] snap-center grid-rows-1">
                        
                        <div className="w-24 h-[80px] pl-[1%] rounded-3xl">
                            <img src="../assets/images/image 46.png" alt="" className="object-cover"/>
                        </div>
                        
                        <div className="w-48 h-[85px] flex flex-col justify-between">
                            <div>
                                <h1 className="text-sm font-bold">HAPPY MOTHER’S DAY!</h1>
                            <h2 className="text-sm">Get one of our favorite menu for free!</h2>
                            </div>
                            <li className="text-sm text-white font-normal">
                                <a href="">Klaim Kupon</a>
                            </li>
                        </div>
                    </div>

                </div>

            </section>

        </section>

        <section className="pl-10 pr-10 lg:pl-20 lg:pr-20 grid gap-3" >

            <h1 className="text-heading_mobile lg:text-heading_desktop text-black text-plus-jakarta ml-0">Our <span className="text-[#8E6447]">Product</span></h1>

            <div className="grid grid-cols-1 grid-rows-[auto,1fr] lg:grid-cols-[30%,70%] lg:grid-rows-1">

                <div className="grid gap-3 lg:hidden">

                    <div className="flex justify-between p-1 rounded-lg text-black border border-primary">
                        <input className="bg-transparent border-none outline-none focus:ring-0 focus:border-transparent" type="text" name="searchFilter" placeholder="Search Your Product"/>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="size-6 text-slate-400">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </div>
    
                    <div className=" grid grid-cols-[1fr,1fr,auto] gap-2">
    
                        <div>
                            <div className="">
        
                                <button id="categoryBtn" type="button" className="flex items-center justify-center gap-2 py-2 w-full px-3 bg-primary rounded-md">
                                    Category
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                      </svg>
                                                                   
                                </button>
        
                                <div id="categoryDropdown" className="absolute dropdown-menu w-fit py-3 px-10 rounded-lg bg-slate-300 text-sm">
                                    <option value="">All Products</option>
                                    <option value="">Favorite Coffee</option>
                                    <option value="">Favorite Non-Coffee</option>
                                    <option value="">Favorite Foods</option>
                                    <option value="">Add-Ons</option>
                                </div>
                            </div>
                        </div>
        
                        <div>
                            <div className="">
        
                                <button id="categoryBtn" type="button" className="flex items-center justify-center gap-2 py-2 w-full px-3 bg-primary rounded-md">
                                    Category
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                      </svg>
                                                                   
                                </button>
        
                                <div id="categoryDropdown" className="absolute dropdown-menu w-fit p-2 rounded-lg bg-slate-300 text-sm">
                                    <option value="">All Products</option>
                                    <option value="">Favorite Coffee</option>
                                    <option value="">Favorite Non-Coffee</option>
                                    <option value="">Favorite Foods</option>
                                    <option value="">Add-Ons</option>
                                </div>
                            </div>
    
                        </div>
        
                        <button className="justify-center gap-2 py-2 w-full px-3 bg-primary rounded-md">
                            Reset
                        </button>
        
                    </div>
    
                </div>
    
                <div className="hidden lg:block">
                    <div className="filter-menu basis-1/3 bg-black rounded-lg flex flex-col p-8 gap-4 h-max	">
            
                        <section className="filter flex flex-row justify-between text-white w-full ">
                            <div>
                                <h4 className="text-2xl	">Filter</h4>
                            </div>
                            <button>
                                <h5>Reset Filter</h5>
                            </button>
                        </section>
        
                        <section className="InputSearch text-white  flex flex-col gap-2">
                            <label className="text-xl " >search</label>
                            <input className="rounded-lg h-8" type="text" name="searchFilter" placeholder="Search Your Product"/>
                        </section>
        
                        <section className="category text-white flex flex-col gap-4">
                            <div className="flex flex-col gap-2">
                                <p className="text-xl text-white">Category</p>
                                <form className=" flex flex-col gap-4 ">
                                    <div className="gap-4 flex flex-row ">
                                        <input className="w-6 h-6 rounded-2 bg-black" type="checkbox" id="Favorite Product"
                                            name="Favorite Product" value="Favorite Product"/>
                                        <label> Favorite Product</label>
                                    </div>
                                    <div className="gap-4 flex flex-row ">
                                        <input className="w-6 h-6 rounded-2" type="checkbox" id="coffee" name="coffee"
                                            value="coffee"/>
                                        <label> Coffee</label>
                                    </div>
                                    <div className="gap-4 flex flex-row ">
                                        <input className="w-6 h-6 rounded-3xl" type="checkbox" id="foods" name="foods"
                                            value="foods"/>
                                        <label> Foods</label>
                                    </div>
                                    <div className="gap-4 flex flex-row ">
                                        <input className="w-6 h-6 rounded-3xl" type="checkbox" id="add-on" name="add-on"
                                            value="add-on"/>
                                        <label> Add-on</label>
                                    </div>
                                </form>
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="text-xl text-white">Sort By</p>
                                <form className=" flex flex-col gap-4 ">
                                    <div className="gap-4 flex flex-row ">
                                        <input className="w-6 h-6 rounded-2 bg-black" type="checkbox" id="Buy 1 get 1"
                                            name="Buy 1 get 1" value="Buy 1 get 1"/>
                                        <label>Buy 1 get 1</label>
                                    </div>
                                    <div className="gap-4 flex flex-row ">
                                        <input className="w-6 h-6 rounded-2" type="checkbox" id="Flash sale" name="Flash sale"
                                            value="Flash sale"/>
                                        <label>Flash sale</label>
                                    </div>
                                    <div className="gap-4 flex flex-row ">
                                        <input className="w-6 h-6 rounded-3xl" type="checkbox" id="Birthday Package"
                                            name="Birthday Package" value="Birthday Package"/>
                                        <label>Birthday Package</label>
                                    </div>
                                    <div className="gap-4 flex flex-row ">
                                        <input className="w-6 h-6 rounded-3xl bg-black" type="checkbox" id="Cheap" name="Cheap"
                                            value="Cheap"/>
                                        <label>Cheap</label>
                                    </div>
                                </form>
                            </div>
                        </section>
        
                        <section className="flex flex-col gap-4">
                            <div>
                                <p className="text-xl text-white">
                                    Range Price
                                </p>
                            </div>
                            <div>
                                <div className="slidecontainer w-full">
                                    <input type="range" min="1" max="100" value="25" className="slider w-full" id="myRange1"/>
                                </div>
                            </div>
                        </section>
        
                        <section>
                            <button className="bg-[#FF8906] w-full h-8 rounded-lg">
                                Apply Filter
                            </button>
        
                        </section>
        
                    </div>
                </div>

                <div className="slide-content grid justify-items-center items-center grid-cols-1 lg:grid-cols-[1fr,1fr]  gap-9 h-fit bg-white p-5">

                    <div className="w-[230px] h-[411px] lg:w-[250px] lg:h-[431px] flex flex-col items-center shadow-md border-neutral-400 snap-center hover:box-s">
                        <div className="w-full h-[268px] overflow-hidden">
                            <img src="../assets/images/a63f096d3edcb57b0bc937039acae071.png" alt="..." className="h-full w-full object-cover transition-transform duration-300 ease-out transform hover:scale-[1.01]"/>        
                        </div>
                        <div className="border -translate-y-1/4 bg-white p-3 box-border border-neutral-400 w-[220px] h-fit flex flex-col place-items-center">
                            <h1 className="font-medium text-xl text-[#0B132A] mb-3">Hazelnut Latte</h1>
                            <p className="font-normal text-text text-sm mb-3">You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
                            <p className="font-medium text-xl mb-3 text-primary">IDR 20.000</p>
                            <div className="flex w-full">
                                <button className="py-1 w-full mr-2 bg-primary text-[#0B132A]border-transparent rounded-lg">buy</button>
                                <button className="py-1 px-3 rounded-md border border-primary bg-transparent text-primary items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                </svg></button>
                            </div>
    
                        </div>
                    </div>
    
                    <div className="w-[230px] h-[411px] lg:w-[250px] lg:h-[431px] flex flex-col items-center shadow-md border-neutral-400 snap-center hover:box-s">
                        <div className="w-full h-[268px] overflow-hidden">
                            <img src="../assets/images/a63f096d3edcb57b0bc937039acae071.png" alt="..." className="h-full w-full object-cover transition-transform duration-300 ease-out transform hover:scale-[1.01]"/>        
                        </div>
                        <div className="border -translate-y-1/4 bg-white p-3 box-border border-neutral-400 w-[220px] h-fit flex flex-col place-items-center">
                            <h1 className="font-medium text-xl text-[#0B132A] mb-3">Hazelnut Latte</h1>
                            <p className="font-normal text-text text-sm mb-3">You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
                            <p className="font-medium text-xl mb-3 text-primary">IDR 20.000</p>
                            <div className="flex w-full">
                                <button className="py-1 w-full mr-2 bg-primary text-[#0B132A]border-transparent rounded-lg">buy</button>
                                <button className="py-1 px-3 rounded-md border border-primary bg-transparent text-primary items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                </svg></button>
                            </div>
    
                        </div>
                    </div>
    
                    <div className="w-[230px] h-[411px] lg:w-[250px] lg:h-[431px] flex flex-col items-center shadow-md border-neutral-400 snap-center hover:box-s">
                        <div className="w-full h-[268px] overflow-hidden">
                            <img src="../assets/images/a63f096d3edcb57b0bc937039acae071.png" alt="..." className="h-full w-full object-cover transition-transform duration-300 ease-out transform hover:scale-[1.01]"/>        
                        </div>
                        <div className="border -translate-y-1/4 bg-white p-3 box-border border-neutral-400 w-[220px] h-fit flex flex-col place-items-center">
                            <h1 className="font-medium text-xl text-[#0B132A] mb-3">Hazelnut Latte</h1>
                            <p className="font-normal text-text text-sm mb-3">You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
                            <p className="font-medium text-xl mb-3 text-primary">IDR 20.000</p>
                            <div className="flex w-full">
                                <button className="py-1 w-full mr-2 bg-primary text-[#0B132A]border-transparent rounded-lg">buy</button>
                                <button className="py-1 px-3 rounded-md border border-primary bg-transparent text-primary items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                </svg></button>
                            </div>
    
                        </div>
                    </div>
    
                    <div className="w-[230px] h-[411px] lg:w-[250px] lg:h-[431px] flex flex-col items-center shadow-md border-neutral-400 snap-center hover:box-s">
                        <div className="w-full h-[268px] overflow-hidden">
                            <img src="../assets/images/a63f096d3edcb57b0bc937039acae071.png" alt="..." className="h-full w-full object-cover transition-transform duration-300 ease-out transform hover:scale-[1.01]"/>        
                        </div>
                        <div className="border -translate-y-1/4 bg-white p-3 box-border border-neutral-400 w-[220px] h-fit flex flex-col place-items-center">
                            <h1 className="font-medium text-xl text-[#0B132A] mb-3">Hazelnut Latte</h1>
                            <p className="font-normal text-text text-sm mb-3">You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
                            <p className="font-medium text-xl mb-3 text-primary">IDR 20.000</p>
                            <div className="flex w-full">
                                <button className="py-1 w-full mr-2 bg-primary text-[#0B132A]border-transparent rounded-lg">buy</button>
                                <button className="py-1 px-3 rounded-md border border-primary bg-transparent text-primary items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                </svg></button>
                            </div>
    
                        </div>
                    </div>
    
                </div>

            </div>
            

        </section>
    </main>
  )
}
