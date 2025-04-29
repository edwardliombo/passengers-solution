"use client"
import * as motion from "motion/react-client"
import Image from "next/image";


const Banner = ()=>{

    return(
        <motion.section initial={{scale:0}} whileInView={{scale:1}} className="flex  justify-between">
            <div className="flex flex-col w-auto p-8 gap-3 items-center">
                <h1 className="text-3xl text-center">Tanzania Passengers Solution and Guidance Organization</h1>
                <h1 className="text-5xl items-center pl-24 font-semibold">We are None <span className="text-sky-700">Organization</span></h1>
                <p className="pt-4 text-center text-lg">
                   A community operate in National. Advocate for travels rights and safety through education, support and empowerment.  
                </p>
                <div className="pt-6">
                    <button className="bg-sky-700 p-2 pl-4 pr-4 text-white font-bold cursor-pointer rounded-4xl">Read More</button>
                </div>

            </div>
            <div className="w-full relative max-sm:h-48 p-8">
                <Image id="image" className="p-10" src="https://transport.ec.europa.eu/sites/default/files/styles/embed_large/public/2023-06/4_2.png?itok=t6qEKvFM" fill objectFit="cover" alt="accident"/>
            </div>
        </motion.section>     
    )

}
export default Banner;