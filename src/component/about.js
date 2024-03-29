import AboutImage from '../asset/ab.png';


export default function About(){
    return <section className='flex flex-col md:flex-row px-40'id='about'>
        <div className='py-5 md:w-1/2'>
            <img src={AboutImage}/>
        </div>
        <div className='md:w-1/2  flex justify-center'>
            <div className='flex flex-col justify-center'>
                <h1 className='text-4xl border-b-4 border-[#000000] mb-2 font-bold'>About me</h1><br/>
                <p className='text-2xl font-bold'> I'm Software Engineer </p><br/>
                <i>
                <p>
                    Hello! 👋 I'm Saravanan, a passionate software engineer specializing in both frontend and backend development. With expertise in Spring Boot, Java, and a strong foundation in data structures and algorithms, I build robust web applications that deliver exceptional user experiences.
                </p><br/>
                
                <p>
                    My skills include frontend technologies like HTML, CSS, JavaScript, and React, as well as backend frameworks like Spring Boot and microservices architecture. I'm proficient in MySQL for database management and offer payment gateway integration services for secure transactions.
                </p><br/>
                <p>
                    As a freelancer, I offer custom web development services tailored to your needs. From simple portfolios to complex e-commerce platforms, I'm here to bring your ideas to life. Let's collaborate and create something extraordinary together!
                </p><br/>
                </i>


            </div>
            
        </div>
    </section>
}