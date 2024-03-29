
import HeroImg from '../asset/tsar.png';
import { FaTwitter,FaFacebook, FaWhatsapp,FaInstagram,FaLinkedin } from "react-icons/fa6";

export default function Hero(){
    return <section className='flex flex-col md:flex-row px-5 py-60 bg-secondary text-white justify-center' >
        <div className='md:w-1/2 flex-col'>
            <h1 className=' text-6xl font-hero-font '>Hi, <br/>I'm <span className='text-black '>Saravanan</span>
            <p className='text-2xl text-black py-3 ' ><i>I'm a Software Engineer</i></p>
            
            

            </h1>
            <div className='flex py-6'>
                <a href='#' className='pr-3 hover:text-black' ><FaTwitter size={20}/></a>
                <a href='#' className='pr-3 hover:text-black'><FaFacebook size={20}/></a>
                <a href='#' className='pr-3 hover:text-black'><FaWhatsapp size={20}/></a>
                <a href='www.linkedin.com/in/saravanan-s-b95784205' className='pr-3 hover:text-black'><FaLinkedin size={20}/></a>
                <a href='#' className='pr-3 hover:text-black'><FaInstagram size={20}/></a>
            </div>
            <nav className='btn-nav'>
                <ul class className='flex text-1xl'>
                    <li><a href="#" className='border-2 border-white px-5 py-2 rounded-lg hover:text-black border-5px font-bold hover:text-black'>I need website</a></li>
                    <li><a href="#" className='border-2 border-white px-5 py-2 rounded-lg hover:text-black border-5px font-bold ' >Looking for Hire</a></li>


                </ul>
            </nav>


        </div>
        
        <img className='md:w-1/4'src ={HeroImg}/>
    </section>
}