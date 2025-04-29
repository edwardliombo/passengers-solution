import * as motion from "motion/react-client"
import Image from "next/image";
import Link from "next/link";
const Card = ({author,title, description, image, date})=>{
    return (
        <Link href="#"> 
            <motion.div initial={{scale:0}} whileInView={{scale:1}} transition={{duration:0.3}} className="flex w-full h-full flex-col gap-4 shadow-sm  rounded-md p-4">
                <div className="relative h-52">
                    <Image className="rounded-t-md w-full" src={image} fill alt="passport" />
                </div>
                    
                <div className="flex flex-col gap-3">
                    <div className="flex">
                        <h1 className="text-gray-400 w-24 font-bold text-justify">{author} </h1>
                        <h1 className="text-sky-800 w-20 text-sm font-bold">{date} </h1>
                    </div>
                    
                    <span className="font-bold w-full text-sky-800 text-justify ">{title} </span>
                    <div className="text-justify">{description}</div>
                </div>
            </motion.div>
        </Link> 
    )
}

export default Card;