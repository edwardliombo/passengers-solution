import * as motion from "motion/react-client"
const Map =()=>{
    return (
        <motion.iframe initial={{scale:0}} whileInView={{scale:1}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3220.072902415039!2d45.10634377448102!3d36.18910880191037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40014292f8cf480f%3A0xb04d4e26469b320e!2sKaria%20St%2C%20Qaladiza%2C%20Sulaymaniyah%20Governorate%2C%20Iraq!5e0!3m2!1sen!2stz!4v1745913226388!5m2!1sen!2stz" width={1280}  height={600}allowFullScreen />
    )
}

export default Map;