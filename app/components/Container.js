import * as motion from "motion/react-client"
import Image from "next/image";

const Container =()=>{
    return(
        <motion.section initial={{scale:0}} whileInView={{scale:1}} className="flex max-sm:flex-col justify-between">

            {/* -----new column start here 1----*/}
            <div className="flex p-6 w-60 flex-col">
                <div className="relative h-64">
                    <Image className="rounded-md" src="https://t4.ftcdn.net/jpg/01/24/84/83/360_F_124848388_cjx0VIF3BdR6yveB7ZguDSlEpM91tbrM.jpg" fill alt="passport" />
                </div>
                
                <div className="flex flex-col">
                    <span className="font-bold">Mhe. Mohamed Omary Mchengerwa</span>
                    Waziri wa Nchi Ofisi ya Rais TAMISEMI
                </div>
            </div>

            {/* -----new column start here 2----*/}
            <div className="flex max-sm:flex-col flex-wrap gap-2 p-6">
                <div className="flex w-60 flex-col">
                    <div className="relative h-64 max-sm:h-64">
                        <Image className="rounded-md" src="https://t4.ftcdn.net/jpg/01/24/84/83/360_F_124848388_cjx0VIF3BdR6yveB7ZguDSlEpM91tbrM.jpg" fill objectFit="cover" alt="passport" />
                    </div>
                    
                    <div className="flex flex-col">
                        <span className="font-bold">Mhe. Mohamed Omary Mchengerwa</span>
                        Waziri wa Nchi Ofisi ya Rais TAMISEMI
                    </div>
                </div>

                <div className="flex w-60 flex-col">
                    <div className="relative h-64">
                        <Image className="rounded-md" src="https://t4.ftcdn.net/jpg/01/24/84/83/360_F_124848388_cjx0VIF3BdR6yveB7ZguDSlEpM91tbrM.jpg" fill alt="passport" />
                    </div>
                    
                    <div className="flex flex-col">
                        <span className="font-bold">Mhe. Mohamed Omary Mchengerwa</span>
                        Waziri wa Nchi Ofisi ya Rais TAMISEMI
                    </div>
                </div>

                <div className="flex w-60 flex-col">
                    <div className="relative h-64">
                        <Image className="rounded-md" src="https://t4.ftcdn.net/jpg/01/24/84/83/360_F_124848388_cjx0VIF3BdR6yveB7ZguDSlEpM91tbrM.jpg" fill alt="passport" />
                    </div>
                    
                    <div className="flex flex-col">
                        <span className="font-bold">Mhe. Mohamed Omary Mchengerwa</span>
                        Waziri wa Nchi Ofisi ya Rais TAMISEMI
                    </div>
                </div>

                <div className="flex w-60 flex-col">
                    <div className="relative h-64">
                        <Image className="rounded-md" src="https://t4.ftcdn.net/jpg/01/24/84/83/360_F_124848388_cjx0VIF3BdR6yveB7ZguDSlEpM91tbrM.jpg" fill alt="passport" />
                    </div>
                    
                    <div className="flex flex-col">
                        <span className="font-bold">Mhe. Mohamed Omary Mchengerwa</span>
                        Waziri wa Nchi Ofisi ya Rais TAMISEMI
                    </div>
                </div>

                <div className="flex w-60 flex-col">
                    <div className="relative h-64">
                        <Image className="rounded-md" src="https://t4.ftcdn.net/jpg/01/24/84/83/360_F_124848388_cjx0VIF3BdR6yveB7ZguDSlEpM91tbrM.jpg" fill alt="passport" />
                    </div>
                    
                    <div className="flex flex-col">
                        <span className="font-bold">Mhe. Mohamed Omary Mchengerwa</span>
                        Waziri wa Nchi Ofisi ya Rais TAMISEMI
                    </div>
                </div>

                <div className="flex w-60 flex-col">
                    <div className="relative h-64">
                        <Image className="rounded-md" src="https://t4.ftcdn.net/jpg/01/24/84/83/360_F_124848388_cjx0VIF3BdR6yveB7ZguDSlEpM91tbrM.jpg" fill alt="passport" />
                    </div>
                    
                    <div className="flex flex-col">
                        <span className="font-bold">Mhe. Mohamed Omary Mchengerwa</span>
                        Waziri wa Nchi Ofisi ya Rais TAMISEMI
                    </div>

                </div>
            </div>
             
        </motion.section>
    )
}
export default Container;