import avatar from "../assets/image/GaluhWizard.png"

export default function Profile() {
  return (
    <main className="py-2 px-10 md:px-14 lg:px-20 flex flex-col gap-4">

        <h5 className="text-5xl	font-bold pt-10 lg:pt-20">
            Profile
        </h5>
        <section className="grid grid-cols-1 grid-rows-[auto,1fr] lg:grid-cols-[auto,1fr] lg:grid-rows-1s gap-4 ">
            <div className="profile-user flex h-fit	 flex-col basis-1/5 border-2 rounded-lg p-4">
                <div className="flex flex-col items-center gap-4">
                    <div className="flex  basis-1/4 w-full flex-col gap-1 items-center">
                        <div className="font-bold text-2xl">
                            galuh wizard
                        </div>
                        <div className="font-small text-gray-400">
                            gahuls@gmail.com
                        </div>
                    </div>
                    <div className=" w-[113px] h-[113px]">
                        <img className=" h-max w-max" src={avatar} alt=""/>
                    </div>
                    <div className=" basis-1/4 flex flex-col gap-2">
                        <button className="item h-10 w-full rounded-lg bg-primary font-bold">
                            Upload New Photo
                        </button>
                        <div className="flex flex-row items-center justify-center gap-2">
                            <p className="text-gray-400">
                                Sience
                            </p>
                            <p>
                                20 January 2022
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="profile-update-form  basis-4/5 border-2 rounded-lg font-medium">
                <form className="flex flex-col gap-4 w-full p-8" action="">
                    <div className="item-form gap-2 ">
                        <label >Full Name</label>
                        <input className="fullname border-2 w-full rounded-lg h-10" type="text" id="fullname" placeholder="Enter Your Full Name"/>
                    </div>

                    <div className="item-form gap-4">
                        <label >Email</label>
                        <input className="email border-2 w-full rounded-lg h-10" type="email" id="email" placeholder= "Enter Your Email"/>
                    </div>

                    <div className="item-form gap-4">
                        <label >Phone</label>
                        <input className="phone border-2 w-full rounded-lg h-10" type="number" id="phone" placeholder= "Enter Your phone number"/>
                    </div>

                    <div className="item-form gap-4">
                        <label >Password</label>
                        <input className="password border-2 w-full rounded-lg h-10" type="password" id="password" placeholder="Enter Your Password"/>
                    </div>

                    <div className="item-form gap-4">
                        <label >Address</label>
                        <input className="address border-2 w-full rounded-lg h-10" type="text" id="address" placeholder="Enter Your address Again"/>
                    </div>

                    <button  className="item h-10 w-full rounded-lg bg-primary" type="submit">Register</button>

                </form>
            </div>
        </section>
    </main>
  )
}
