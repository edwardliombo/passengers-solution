import Link from "next/link";
import logo from "@/public/logo.jpg"
import Image from "next/image";
import * as motion from "motion/react-client"
const Header = ()=>{
    return(
        <section className="">
          <div className="flex max-sm:flex-col min-sm:flex items-center gap-2 p-2 bg-black  min-sm:text-white">
            <div>Phone: </div>
            <h1 >+255 +255 683-977077</h1>
        </div>
          <div className="flex max-sm:flex-col min-sm:flex min-sm:align-middle gap-[1px]">
            <ul className="flex max-sm:flex-col min-sm:flex justify-center items-center gap-8">
                <li className="max-sm:pt-8 p-2"><Image src={logo} width={50} height={50} alt="logo" /></li>
                <marquee direction="right">
                    <motion.div  initial={{opacity:0 }} animate={{opacity:1 }}>
                        <li className="text-green-900">TANZANIA PASSENGERS SOLUTION AND</li>
                        <li className="text-sky-900">GUIDANCE ORGANIZATION</li>
                    </motion.div>
                </marquee>
                   
            </ul>
            <ul className="flex max-sm:flex-col min-sm:flex justify-center gap-[1px]">
                <li className="max-sm:bg-sky-800 p-4  max-sm:text-white"><Link href={`#`}>Home</Link></li>
                <li className="max-sm:bg-sky-800 p-4  max-sm:text-white"><Link href={`#`}>Services</Link></li>
                <li className="max-sm:bg-sky-800 p-4  max-sm:text-white"><Link href={`#`}>About</Link></li>
                <li className="max-sm:bg-sky-800 p-4  max-sm:text-white"><Link href={`#`}>Contact</Link></li>
            </ul>
            <ul className="flex max-sm:flex-col min-sm:flex justify-center max-sm:gap-[1px]">
                <li className="max-sm:bg-sky-800 p-4  max-sm:text-white"><button>Login</button></li>
                <li className="max-sm:bg-sky-800 p-4  max-sm:text-white"><button>Logout</button></li>
            </ul>
          </div>
        </section>
    )
}

export default Header;