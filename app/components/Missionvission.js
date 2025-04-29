import * as motion from "motion/react-client"

const Missionvission = ({ head, icon, desc })=>{
    return(
        <motion.section initial={{
            scale:0
        }} whileInView={{
            scale:1,
        }} transition={{duration:0.3, delay:0.3}} className="flex flex-col w-96 p-14  text-white  gap-4">
            <div  className="flex justify-center text-6xl text-center">
                {icon}
            </div> 
            <h1 className="flex justify-center text-3xl">
                {head.toUpperCase()}</h1>
            <article className="flex justify-center text-justify text-lg">
                {desc}
            </article>
        </motion.section>
    )
}

export default Missionvission;