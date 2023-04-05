import background from '../assests/venbacground.jpg'


function Main() {
    return ( 
            <div className='flex items-center justify-center gap-x-8 gap-y-14 mt-10 mb-8 w-full flex-wrap px-6'>
                <div className='shadow-xl bg-blue-300 rounded-lg p-5 overflow-hidden max-w-[500px] w-full'>
                    <img  className='rounded-lg' src={background} width='500' height='250'></img>
                    <p className="mt-5 text-sm tracking-widest text-white"> <span className="text-blue-800 uppercase font-extrabold">Venworld global</span></p>
                    <div className='flex items-center justify-center gap-4 text-white mt-4 text-lg'>
                        <a href='https://instagram.com/@venworldglobal' className='hover:text-blue-800'><i className='fab fa-instagram'></i></a>
                        <a href='ttps://facebook.com/venworldglobal' className='hover:text-blue-800'><i className='fab fa-facebook'></i></a>
                        <a href='https://twitter.com/@venworldglobal' className='hover:text-blue-800'><i className='fab fa-twitter'></i></a>
                        <a href='https://linkedin.com/in/venworldglobal' className='hover:text-blue-800'><i className='fab fa-linkedin'></i></a>
                    </div>
                </div>
                
                <div className='bg-blue-300 rounded-lg p-10 shadow-xl w-[800px]'>   
                    <p className="text-sm tracking-widest text-white"> 
                        <span className="text-blue-800 uppercase font-extrabold">Venworld global</span> 
                        is a renowned software engineering and media solutions company thriving to take 
                        your business setups to the next phase of development.
                    </p>   

                    <h1 className="py-4 text-blue-500 p-5 bg-white  rounded-lg mt-5 uppercase font-extrabold shadow-2xl ">Our Services</h1>       
                    <ul className="py-2 text-white shadow-2xl mt-5">
                        <li> Software Development</li>
                        <li> Web and Mobile Development</li>
                        <li> User Experience Designs</li>
                        <li> Search Engine optimization</li>
                        <li> Content Management System</li>
                        <li> Social Media & Online Marketing</li>
                        <li> Video Production and Mastering</li>
                        <li> Graphics Design</li>
                        <li> Non Fugitive Token (NFT)</li>
                    </ul>
                </div>  
            </div>
    );
}

export default Main;