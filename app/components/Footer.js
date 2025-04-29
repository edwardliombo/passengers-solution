import { FaFacebook } from "react-icons/fa";
import { FaWhatsappSquare  } from "react-icons/fa";
import { FaSquareXTwitter  } from "react-icons/fa6";
import { FaInstagramSquare  } from "react-icons/fa";
import * as motion from "motion/react-client"
import Link from "next/link";

const Footer =()=>{
    return(
        <section className="grid grid-cols-3 max-sm:grid-cols-1 bg-sky-800 text-white p-8 ">
            <motion.div initial={{scale:0}} 
            whileInView={{
                scale:1,
                duration: 5,
                delay: 5

            }} transition={{duration:0.3, delay:0.2}}>
                <h1 className="font-bold">Address:</h1>
                <article>
                    <h1>Head Office </h1>
                    <h1>Karia Street</h1>
                    <h1>Makuburi - Ubungo</h1>
                    <h1>S.L.P 6338</h1>
                    <h1>Dar-es-Salaam</h1>

                </article>

            </motion.div>
            <motion.div initial={{scale:0}} 
            whileInView={{
                scale:1
            }}  transition={{duration:0.3, delay:0.5}}>
                <h1 className="font-bold text-yellow-300">Mawasiliano:</h1>
                <article>
                    <h1>+255 683-977077 </h1>
                    <h1>+255 758-990790</h1>
                    <h1>+255 765-336633</h1>
                    <h1>+255 754-027644</h1>
                    <h1>+255 768-583333</h1>
                </article>
            </motion.div>
            <motion.div initial={{scale:0}} 
            whileInView={{
                scale:1,
            }} 
            transition={{duration:0.3, delay:0.8}}
            className="flex max-sm:flex-col gap-4 justify-center text-lg self-end">
                <Link href="#"><FaFacebook className="text-4xl" /></Link>
                <Link href="#"><FaWhatsappSquare className="text-4xl" /></Link>
                <Link href="#"><FaSquareXTwitter className="text-4xl" /></Link>
                <Link href="#"><FaInstagramSquare className="text-4xl" /></Link>
            </motion.div>
        </section>
    )
}

export default Footer;