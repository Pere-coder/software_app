import background from '../assests/venbacground.jpg'


function Main() {
    return ( <>

                <div className='flex item-center justify-center gap-x-8 mt-10'>
                    <div className='  shadow-xl bg-blue-300 rounded-lg p-5 overflow-hidden item-center justify-center '><img  className='rounded-lg' src={background} width='500' height='250'></img>
                    <p className="mt-5 text-sm tracking-widest text-white"> <span className="text-blue-800 uppercase font-extrabold">Venworld global</span></p>
                    </div>
                   
                    <div className='bg-blue-300 rounded-lg p-10  shadow-xl'>   
                    <p className="text-sm tracking-widest text-white"> <span className="text-blue-800 uppercase font-extrabold">Venworld global</span> is a renowned software engineering and media
                    solutions company thriving to take your business setups to the next phase of development.</p>   

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
                
                </>);
}

export default Main;