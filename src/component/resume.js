import resumepart from '../asset/trancparent image.png';



export default function Resume(){
    return <section className='flex flex-col md:flex-row px-40'id='resumesec'>
        <div className='py-5 md:w-1/2'>
            <img src={resumepart}/>
        </div>
        <div className='md:w-1/2  flex justify-center'>
            <div className='flex flex-col justify-center'>
                <h1 className='text-4xl border-b-4 border-[#000000] mb-2 font-bold'>Resume</h1><br/>
                <p className='text-2xl font-bold'> Here you can watch <a className='btn' href='#'>Download</a></p><br/>
                


            </div>
            
        </div>
    </section>
}