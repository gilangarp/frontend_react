import imgMountains from "../assets/image/image_product.jpeg";
import imgMsg from "../assets/image/blackMessage.png"

export default function HistoryOrder() {
  return (
    <main className="px-5 md:px-10 lg:px-14 grid gap-5 ">

      <section className="h-[20vh] grid grid-cols-[auto,1fr] gap-7 items-center pt-10 lg:pt-20">
        <p className="text-header  text-wrap text-3xl font-medium">
          History Order
        </p>
        <div className=" ">
          <p className="bg-gray-200 px-4 py-2 items-center w-fit">2</p>
        </div>
      </section>

      <section className="w-full grid grid-cols-1 grid-rows-[1fr,auto] lg:grid-cols-[70%,30%] lg:grid-rows-1 gap-5 ">

        <div className="grid grid-cols-1 gap-9 ">

          <div className="grid grid-rows-1 grid-cols-[1fr,auto] gap-4 lg:gap-40 ">

            <div className="hidden md:flex flex-row bg-gray-100 items-center p-2 bg-[#E8E8E899]">
              <button className="py-2 px-4 items-center hover:bg-white">
                On Progress
              </button>
              <button className="py-2 px-4 items-center hover:bg-white">
                Sending Goods
              </button>
              <button className="py-2 px-4 items-center hover:bg-white">
                Finish Order
              </button>
            </div>

            <button className="flex gap-2 lg:hidden bg-gray-100 items-center justify-center p-2 bg-[#E8E8E899]">
              Setatus
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-3">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>

            <div className="flex flex-row gap-2 items-center bg-[#E8E8E899] px-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-5">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                />
              </svg>

              <p>January 2023</p>
            </div>

          </div>

          <div className="grid grid-cols-1 gap-4">

            <div className="grid grid-cols-[1fr,1fr,] md:grid-cols-[auto,1fr,1fr,1fr,1fr] gap-5 p-3 items-start border">

              <div className=" w-full h-full grid items-center ">
                <img
                  className="w-full h-full md:w-[100px] md:h-[100px]"
                  src={imgMountains}
                  alt="Sunset in the mountains"
                />
              </div>

              <div className="px-2 grid md:justify-center">
                <div className=" text-lg text-gray-400 grid grid-cols-[auto,1fr] gap-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                    />
                  </svg>

                  <p>No Order</p>
                </div>

                <div>
                  <p className="font-bold text-lg">#12354-09893</p>
                  <a className="underline hidden md:block lg:hidden text-oren text-base">
                    Views Order
                  </a>
                  <a className="underline block md:hidden lg:block text-oren text-base">
                    Views Order Details
                  </a>
                </div>
              </div>

              <div className="  grid md:justify-center">
                <div className=" text-lg text-gray-400 grid grid-cols-[auto,1fr] gap-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                    />
                  </svg>
                  <p>Date</p>
                </div>

                <h1 className="font-bold text-lg ">23 January</h1>
              </div>

              <div className="  grid md:justify-center">
                <div className=" text-lg text-gray-400 grid grid-cols-[auto,1fr] gap-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
                    />
                  </svg>

                  <p>Total</p>
                </div>

                <div className="font-bold text-lg ">Idr 40.0000</div>
              </div>

              <div className="  grid md:justify-center">
                <div className=" text-lg text-gray-400 grid grid-cols-[auto,1fr] gap-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 9V4.5M9 9H4.5M9 9 3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5 5.25 5.25"
                    />
                  </svg>

                  <p>Status</p>
                </div>

                <button className="font-semibold bg-orange-300 rounded-3xl text-base px-3 py-1 ">
                  On Progress
                </button>
              </div>
            </div>

            <div className="grid grid-cols-[1fr,1fr,] md:grid-cols-[auto,1fr,1fr,1fr,1fr] gap-5 p-3 items-start border">
                
              <div className=" w-full h-full grid items-center ">
                <img
                  className="w-full h-full md:w-[100px] md:h-[100px]"
                  src={imgMountains}
                  alt="Sunset in the mountains"
                />
              </div>

              <div className="px-2 grid md:justify-center">
                <div className=" text-lg text-gray-400 grid grid-cols-[auto,1fr] gap-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                    />
                  </svg>

                  <p>No Order</p>
                </div>

                <div>
                  <p className="font-bold text-lg">#12354-09893</p>
                  <a className="underline hidden md:block lg:hidden text-oren text-base">
                    Views Order
                  </a>
                  <a className="underline block md:hidden lg:block text-oren text-base">
                    Views Order Details
                  </a>
                </div>
              </div>

              <div className="  grid md:justify-center">
                <div className=" text-lg text-gray-400 grid grid-cols-[auto,1fr] gap-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                    />
                  </svg>
                  <p>Date</p>
                </div>

                <h1 className="font-bold text-lg ">23 January</h1>
              </div>

              <div className="  grid md:justify-center">
                <div className=" text-lg text-gray-400 grid grid-cols-[auto,1fr] gap-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
                    />
                  </svg>

                  <p>Total</p>
                </div>

                <div className="font-bold text-lg ">Idr 40.0000</div>
              </div>

              <div className="  grid md:justify-center">
                <div className=" text-lg text-gray-400 grid grid-cols-[auto,1fr] gap-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 9V4.5M9 9H4.5M9 9 3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5 5.25 5.25"
                    />
                  </svg>

                  <p>Status</p>
                </div>

                <button className="font-semibold bg-orange-300 rounded-3xl text-base px-3 py-1 ">
                  On Progress
                </button>
              </div>
            </div>

            <div className="grid grid-cols-[1fr,1fr,] md:grid-cols-[auto,1fr,1fr,1fr,1fr] gap-5 p-3 items-start border">
                
              <div className=" w-full h-full grid items-center ">
                <img
                  className="w-full h-full md:w-[100px] md:h-[100px]"
                  src={imgMountains}
                  alt="Sunset in the mountains"
                />
              </div>

              <div className="px-2 grid md:justify-center">
                <div className=" text-lg text-gray-400 grid grid-cols-[auto,1fr] gap-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                    />
                  </svg>

                  <p>No Order</p>
                </div>

                <div>
                  <p className="font-bold text-lg">#12354-09893</p>
                  <a className="underline hidden md:block lg:hidden text-oren text-base">
                    Views Order
                  </a>
                  <a className="underline block md:hidden lg:block text-oren text-base">
                    Views Order Details
                  </a>
                </div>
              </div>

              <div className="  grid md:justify-center">
                <div className=" text-lg text-gray-400 grid grid-cols-[auto,1fr] gap-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                    />
                  </svg>
                  <p>Date</p>
                </div>

                <h1 className="font-bold text-lg ">23 January</h1>
              </div>

              <div className="  grid md:justify-center">
                <div className=" text-lg text-gray-400 grid grid-cols-[auto,1fr] gap-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
                    />
                  </svg>

                  <p>Total</p>
                </div>

                <div className="font-bold text-lg ">Idr 40.0000</div>
              </div>

              <div className="  grid md:justify-center">
                <div className=" text-lg text-gray-400 grid grid-cols-[auto,1fr] gap-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 9V4.5M9 9H4.5M9 9 3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5 5.25 5.25"
                    />
                  </svg>

                  <p>Status</p>
                </div>

                <button className="font-semibold bg-orange-300 rounded-3xl text-base px-3 py-1 ">
                  On Progress
                </button>
              </div>
            </div>

            <div className="grid grid-cols-[1fr,1fr,] md:grid-cols-[auto,1fr,1fr,1fr,1fr] gap-5 p-3 items-start border">
                
              <div className=" w-full h-full grid items-center ">
                <img
                  className="w-full h-full md:w-[100px] md:h-[100px]"
                  src={imgMountains}
                  alt="Sunset in the mountains"
                />
              </div>

              <div className="px-2 grid md:justify-center">
                <div className=" text-lg text-gray-400 grid grid-cols-[auto,1fr] gap-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                    />
                  </svg>

                  <p>No Order</p>
                </div>

                <div>
                  <p className="font-bold text-lg">#12354-09893</p>
                  <a className="underline hidden md:block lg:hidden text-oren text-base">
                    Views Order
                  </a>
                  <a className="underline block md:hidden lg:block text-oren text-base">
                    Views Order Details
                  </a>
                </div>
              </div>

              <div className="  grid md:justify-center">
                <div className=" text-lg text-gray-400 grid grid-cols-[auto,1fr] gap-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                    />
                  </svg>
                  <p>Date</p>
                </div>

                <h1 className="font-bold text-lg ">23 January</h1>
              </div>

              <div className="  grid md:justify-center">
                <div className=" text-lg text-gray-400 grid grid-cols-[auto,1fr] gap-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
                    />
                  </svg>

                  <p>Total</p>
                </div>

                <div className="font-bold text-lg ">Idr 40.0000</div>
              </div>

              <div className="  grid md:justify-center">
                <div className=" text-lg text-gray-400 grid grid-cols-[auto,1fr] gap-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 9V4.5M9 9H4.5M9 9 3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5 5.25 5.25"
                    />
                  </svg>

                  <p>Status</p>
                </div>

                <button className="font-semibold bg-orange-300 rounded-3xl text-base px-3 py-1 ">
                  On Progress
                </button>
              </div>
            </div>

          </div>

          <div className="flex flex-row gap-4 items-center justify-center ">
            <div className=" bg-gray-200 rounded-3xl p-2 px-4 items-center justify-center hover:bg-oren active:bg-oren">
              1
            </div>
            <div className=" bg-gray-200 rounded-3xl p-2 px-4 items-center justify-center hover:bg-oren active:bg-oren">
              2
            </div>
            <div className=" bg-gray-200 rounded-3xl p-2 px-4 items-center justify-center hover:bg-oren active:bg-oren">
              3
            </div>
            <div className=" bg-gray-200 rounded-3xl p-2 px-4 items-center justify-center hover:bg-oren active:bg-oren">
              4
            </div>
            <div className=" bg-gray-200 rounded-3xl p-2 px-4 items-center justify-center hover:bg-oren active:bg-oren">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </div>
          </div>

        </div>

        <div className="">
          <div className="border grid grid-cols-1 gap-2 p-5">
            <img
              className="h-12 w-fit"
              src={imgMsg}
              alt=""
            />
            <h1 className="text-lg text-text font-semibold ">
              {" "}
              Send Us message
            </h1>
            <p className="text-text" id="">
              {" "}
              if your unable to find answer or find your product quickly, please
              describe your problem and tell us. we will give you solution.
            </p>
            <button className="w-full py-2 class text-md bg-primary rounded-xl">
              Send Message
            </button>
          </div>
        </div>

      </section>
    </main>
  );
}
