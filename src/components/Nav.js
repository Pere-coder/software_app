import Logo from '../assests/Venlogo.jpg'



function Nav() {
    return ( 
        <nav id = "navbar" className="flex  w-full item-center justify-between py-11 px-8 bg-blue-500 pt-2 pb-2  shadow-xl ">
          <div>
            <img src={Logo} className='w-9 h-9 rounded-lg'></img>
          </div>
          <div className='flex md:gap-8 gap-4 md:text-lg text-sm md:font-bold font-medium'>
            <div>
              <a href="#Home" class="text-white text-base">Home</a>
            </div>
            <div>
              <a  href="#about" class="text-white text-base">About</a>
            </div>
            <div>
              <a  href="#services" class="text-white text-base">Services</a>
            </div>
            <div>
              <a  href="#contacts" class="text-white text-base">Contacts</a>
            </div>
          </div>
      </nav>
    );
}

export default Nav;