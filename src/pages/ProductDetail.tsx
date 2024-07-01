import imgProduct from "../assets/image/image_product.png"
import productImage from "../assets/image/a63f096d3edcb57b0bc937039acae071.png";


export default function ProductDetail() {
  return (
    <main className="">

    <section className="grid grid-cols-1 grid-rows-[auto,1fr] lg:grid-cols-2 lg:grid-rows-1 pt-10 lg:pt-20 pb-2
    ">

        <div className=" px-5 md:px-10 lg:px-14 grid grid-cols-1 grid-rows-[auto,20%] lg:grid-rows-[auto,1fr] lg:grid-cols-1 lg:grid-rows-auto gap-1 ">
            {/* grid-cols-1 grid-rows-[auto,20%] lg:grid-rows-[auto,1fr] lg:grid-cols-1 lg:grid-rows-auto gap-2 */}
            

            <div className="w-full h-fit bg-black">
                    <img className=" h-[300px] bg-black md:h-full w-full object-cover" src={imgProduct} alt="..."/>
            </div>

            <div className="grid grid-cols-3 gap-3" >

                <div className=" h-[80px] lg:h-[162px]">
                   <img className="w-full h-[80px] lg:h-[162px] object-cover" src={imgProduct} alt="..."/> 
                </div>

                <div className=" h-[80px] lg:h-[162px]">
                   <img className="w-full h-[80px] lg:h-[162px] object-cover" src={imgProduct} alt="..."/> 
                </div>

                <div className=" h-[80px] lg:h-[162px]">
                    <img className="w-full h-[80px] lg:h-[162px]  object-cover" src={imgProduct} alt="..."/>
                </div>
                
            </div>

        </div>

        <div className=" py-5 pr-10 pl-10 md:pr-14 md:pl-14 lg:pl-5 lg:pr-20 gap-3 flex flex-col justify-center">

            <h2 className="text-lg font-bold text-white p-3 bg-[#D00000] w-fit rounded-3xl">FLASH SALE!
            </h2>

            <h1 className="font-bold text-5xl">Hazelnut Latte</h1>

            <div className="grid grid-cols-[auto,1fr] items-center">
                <p className="text-xs line-through text-red-800	pr-2">IDR 20.000</p>
                <p className="text-xl text-[#FF8906]">IDR 10.000</p>
            </div>
            <div className="grid grid-cols-[auto,1fr]">
                <div className=" text-[#FF8906]">
                    <span className="star">★</span>
                    <span className="star">★</span>
                    <span className="star">★</span>
                    <span className="star">★</span>
                    <span className="star">★</span>
                </div>
                <div className=" pl-1">
                    5/5
                </div>
            </div>
            <p className="text-gray-700 text-base">
                Cold brewing is a method of brewing that combines ground coffee and cool water and uses time
                instead of heat to extract the flavor. It is brewed in small batches and steeped for as long as
                48 hours.
            </p>

            <div className="flex items-center border w-fit rounded-md">
                <button className="text-lg text-black border w-8 h-8 grid place-content-center border-primary rounded-md">
                    -
                </button>
                <span className=" text-lg text-black px-5 ">
                    3
                </span>
                <button className="text-lg text-black border w-8 h-8 grid place-content-center border-primary rounded-md">
                    +
                </button>
            </div>

            <h1 className="text-lg font-bold">Choose Size</h1>
            <div className="flex flex-row justify-between ">
                <button className=" py-2 w-full text-base text-black border-2 border-primary">Regular</button>
                <button className=" py-2 w-full text-base text-black border-2 ">Large</button>
                <button className=" py-2 w-full text-base text-black border-2 ">Medium</button>
            </div>

            <h1 className="text-lg font-bold">Hot/Ice?</h1>
            <div className="flex flex-row justify-between ">
                <button className=" py-2 w-full text-base text-black border-2 border-primary">Ice</button>
                <button className=" py-2 w-full text-base text-black border-2 ">Hot</button>
            </div>  

            <div className="pt-14 flex flex-row gap-2 justify-between">
                <button className=" bg-orange-400 rounded-xl py-2 w-full text-black text-sm">
                    Buy
                </button>
                <button className="rounded-xl py-2 border-2 w-full border-primary bg-transparent text-sm flex justify-center items-center gap-3 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                    Add to chart</button>
            </div>

        </div>

    </section>

    <section className="pl-10 pr-10 lg:pl-20 lg:pr-20 grid gap-3">

        <h1 className="text-heading_mobile lg:text-heading_desktop text-black text-plus-jakarta ml-0">Recommendation <span className="text-[#8E6447]">For You</span></h1>

        <div className="slide-content grid justify-items-center items-center grid-cols-[1fr,1fr,1fr,1fr]  gap-9 h-fit bg-white overflow-x-scroll snap-mandatory snap-x">
          <div className="w-[230px] h-[411px] lg:w-[250px] lg:h-[431px] flex flex-col items-center snap-center hover:box-s">
            <div className="w-full h-[268px] overflow-hidden">
              <img
                src={productImage}
                alt="..."
                className="h-full w-full object-cover transition-transform duration-300 ease-out transform hover:scale-[1.01]"
              />
            </div>
            <div className="border -translate-y-1/4 bg-white p-3 box-border border-neutral-400 w-[220px] h-fit flex flex-col place-items-center">
              <h1 className="font-medium text-xl text-[#0B132A] mb-3">
                Hazelnut Latte
              </h1>
              <p className="font-normal text-text text-sm mb-3">
                You can explore the menu that we provide with fun and have their
                own taste and make your day better.
              </p>
              <p className="font-medium text-xl mb-3 text-primary">
                IDR 20.000
              </p>
              <div className="flex w-full">
                <button className="py-1 w-full mr-2 bg-primary text-[#0B132A]border-transparent rounded-lg">
                  buy
                </button>
                <button className="py-1 px-3 rounded-md border border-primary bg-transparent text-primary items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="w-[230px] h-[411px] lg:w-[250px] lg:h-[431px] flex flex-col items-center snap-center hover:box-s">
            <div className="w-full h-[268px] overflow-hidden">
              <img
                src={productImage}
                alt="..."
                className="h-full w-full object-cover transition-transform duration-300 ease-out transform hover:scale-[1.01]"
              />
            </div>
            <div className="border -translate-y-1/4 bg-white p-3 box-border border-neutral-400 w-[220px] h-fit flex flex-col place-items-center">
              <h1 className="font-medium text-xl text-[#0B132A] mb-3">
                Hazelnut Latte
              </h1>
              <p className="font-normal text-text text-sm mb-3">
                You can explore the menu that we provide with fun and have their
                own taste and make your day better.
              </p>
              <p className="font-medium text-xl mb-3 text-primary">
                IDR 20.000
              </p>
              <div className="flex w-full">
                <button className="py-1 w-full mr-2 bg-primary text-[#0B132A]border-transparent rounded-lg">
                  buy
                </button>
                <button className="py-1 px-3 rounded-md border border-primary bg-transparent text-primary items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="w-[230px] h-[411px] lg:w-[250px] lg:h-[431px] flex flex-col items-center snap-center hover:box-s">
            <div className="w-full h-[268px] overflow-hidden">
              <img
                src={productImage}
                alt="..."
                className="h-full w-full object-cover transition-transform duration-300 ease-out transform hover:scale-[1.01]"
              />
            </div>
            <div className="border -translate-y-1/4 bg-white p-3 box-border border-neutral-400 w-[220px] h-fit flex flex-col place-items-center">
              <h1 className="font-medium text-xl text-[#0B132A] mb-3">
                Hazelnut Latte
              </h1>
              <p className="font-normal text-text text-sm mb-3">
                You can explore the menu that we provide with fun and have their
                own taste and make your day better.
              </p>
              <p className="font-medium text-xl mb-3 text-primary">
                IDR 20.000
              </p>
              <div className="flex w-full">
                <button className="py-1 w-full mr-2 bg-primary text-[#0B132A]border-transparent rounded-lg">
                  buy
                </button>
                <button className="py-1 px-3 rounded-md border border-primary bg-transparent text-primary items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="w-[230px] h-[411px] lg:w-[250px] lg:h-[431px] flex flex-col items-center snap-center hover:box-s">
            <div className="w-full h-[268px] overflow-hidden">
              <img
                src={productImage}
                alt="..."
                className="h-full w-full object-cover transition-transform duration-300 ease-out transform hover:scale-[1.01]"
              />
            </div>
            <div className="border -translate-y-1/4 bg-white p-3 box-border border-neutral-400 w-[220px] h-fit flex flex-col place-items-center">
              <h1 className="font-medium text-xl text-[#0B132A] mb-3">
                Hazelnut Latte
              </h1>
              <p className="font-normal text-text text-sm mb-3">
                You can explore the menu that we provide with fun and have their
                own taste and make your day better.
              </p>
              <p className="font-medium text-xl mb-3 text-primary">
                IDR 20.000
              </p>
              <div className="flex w-full">
                <button className="py-1 w-full mr-2 bg-primary text-[#0B132A]border-transparent rounded-lg">
                  buy
                </button>
                <button className="py-1 px-3 rounded-md border border-primary bg-transparent text-primary items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

    </section>
    
</main>
  )
}
