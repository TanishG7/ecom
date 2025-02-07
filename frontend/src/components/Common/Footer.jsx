import { Link } from 'react-router-dom'
import { TbBrandMeta } from 'react-icons/tb'
import { IoLogoInstagram } from 'react-icons/io5'
import { RiTwitterXLine } from 'react-icons/ri'
import { FiPhoneCall } from 'react-icons/fi'

const Footer = () => {
  return (
    <footer className="border-t py-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 lg:px-0">
            <div>
                <h3 className="text-lg text-gray-800 mb-4">Newsletter</h3>
                <p className="text-gray-500 mb-4 text-sm">
                    Be the first to know about new arrivals, sales & promos by submitting your email!
                </p>
                <p className="text-[0.9rem] font-medium text-gray-600 mb-6">Sign Up and get 10% off your first order</p>

                <form className="flex">
                    <input type="email" placeholder="Enter Your Email" className="p-3 w-full text-sm border-t border-b border-l border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-red-500 transition-all" required/>
                    <button type="submit" className="bg-black text-white px-6 py-3 text-sm rounded-r-md hover:bg-gray-800 transition-all">Subscribe</button>
                </form>
            </div>
            <div>
                <h3 className="text-lg text-gray-800 mb-4">Shop</h3>
                <ul className="space-y-2 text-gray-600">
                    <li><Link to="#" className="hover:text-gray-600 transition-colors" ></Link>Men's Top Wear</li>
                    <li><Link to="#" className="hover:text-gray-600 transition-colors" ></Link>Women's Top Wear</li>
                    <li><Link to="#" className="hover:text-gray-600 transition-colors" ></Link>Men's Bottom Wear</li>
                    <li><Link to="#" className="hover:text-gray-600 transition-colors" ></Link>Women's Bottom Wear</li>
                </ul>
            </div>
            <div>
                <h3 className="text-lg text-gray-800 mb-4">Support</h3>
                <ul className="space-y-2 text-gray-600">
                    <li><Link to="#" className="hover:text-gray-600 transition-colors" ></Link>Contact Us</li>
                    <li><Link to="#" className="hover:text-gray-600 transition-colors" ></Link>About Us</li>
                    <li><Link to="#" className="hover:text-gray-600 transition-colors" ></Link>FAQs</li>
                    <li><Link to="#" className="hover:text-gray-600 transition-colors" ></Link>Features</li>
                </ul>
            </div>
            <div>
                <h3 className="text-lg text-gray-800 mb-4">Follow Us</h3>
                <div className='flex items-center space-x-4 mb-6'>
                    <a 
                    href="https://www.facebook.com" 
                    target='_blank' 
                    rel='noopener noreferrer' 
                    className='hover:text-gray-500'>
                        <TbBrandMeta className='h-5 w-5'/>
                    </a>
                    <a 
                    href="https://www.instagram.com" 
                    target='_blank' 
                    rel='noopener noreferrer' 
                    className='hover:text-gray-500'>
                        <IoLogoInstagram className='h-5 w-5'/>
                    </a>
                    <a 
                    href="https://www.x.com" 
                    target='_blank' 
                    rel='noopener noreferrer' 
                    className='hover:text-gray-500'>
                        <RiTwitterXLine className='h-5 w-5'/>
                    </a>
                </div>
                <p className="text-gray-500">Call Us</p>
                <p>
                    <FiPhoneCall className='inline-block mr-2'/> +234 123 456 7890
                </p>
            </div>
        </div>
        <div className="container mx-auto mt-12 px-4 lg:px-0 border-t border-gray-200 pt-6">
            <p className='text-gray-500 text-sm tracking-tighter text-center'>© 2025, All Rights Reserved</p>
        </div>
    </footer>
  )
}

export default Footer