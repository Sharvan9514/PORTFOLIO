import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'

export default function Header(){
    const [toggleMenu,setToggleMenu] = useState(false);
    return <header className="stable flex justify-between px-5 py-7 bg-primary ">
        <a className = "font-bold text-white"href="#">Saravanan Software developer</a>
        <nav className="hidden md:block">
            <ul class className = "flex text-white" >
                <li><a className ='hover:border-b-2 py-1 mb-2 border-white'href="/">Home</a></li>
                <li><a className ='hover:border-b-2 py-1 mb-2 border-white' href="#about">About Me</a></li>
                <li><a className ='hover:border-b-2 py-1 mb-2 border-white'href="#">Project</a></li>
                <li><a className ='hover:border-b-2 py-1 mb-2 border-white'href="#resumesec">Resume</a></li>
                <li><a className ='hover:border-b-2 py-1 mb-2 border-white'href="#">Contact</a></li>


            </ul>
        </nav>
        {toggleMenu && <nav className="block md:hidden mobile-nav px-10 py-8 ">
            <ul class className = "flex flex-col text-white" >
                <li><a href="#">Home</a></li>
                <li><a href="#">About Me</a></li>
                <li><a href="#">Project</a></li>
                <li><a href="#">Resume</a></li>
                <li><a href="#">Contact</a></li>

            </ul>
        </nav>}

       
        <button onClick={()=> setToggleMenu(!toggleMenu)}  className='block md:hidden'><Bars3Icon className='text-white h-7'/></button>
        
        

    
    </header>
}
