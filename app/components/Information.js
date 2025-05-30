import Image from "next/image";
import * as motion from "motion/react-client"
const Information =()=>{
    return (
        <motion.section initial={{scale:0}} whileInView={{scale:1}}  className="grid grid-cols-2 max-sm:grid-cols-1 gap-16 p-14"> 
            <div className="flex flex-col gap-8 p-8 ">
                <h1 className="text-3xl pt-8">WHAT WE DO</h1>
                <article className="text-justify leading-9">
                WHO leads global efforts to expand universal health coverage. We direct and coordinate the world response to health emergencies. And we promote healthier lives  from pregnancy care through old age. Our Triple Billion targets outline an ambitious plan for the world to achieve good health for all using science-based policies and programmes. Our work
                </article>
            </div>
            <div className="relative ">
                <Image className="p-8" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTmRHSaVwJ_EIIqkkUSGidE_tCiw6vw1jAKw&s" fill alt="image" />
            </div>
        </motion.section>
        
    )
}

export default Information;