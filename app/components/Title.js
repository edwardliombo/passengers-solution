import { FaInfoCircle } from "react-icons/fa";
import * as motion from "motion/react-client"
const Title =({title})=>{
    return(
        <div className="flex items-center gap-4">
            <h1 className="text-2xl p-2 m-8 font-bold text-sky-800">{title}</h1>
            <motion.h1 initial={{scale:0}} 
            animate={{
                scale:1,
            }}
            transition={{duration:0.8, delay:0.1, repeat:Infinity}}
            >
                <FaInfoCircle className="text-3xl text-red-600" />
            </motion.h1>
        </div>
        
    )
}

export default Title;