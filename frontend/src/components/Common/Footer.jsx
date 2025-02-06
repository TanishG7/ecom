const Footer = () => {
  return (
    <footer className="border-t py-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 lg:px-0">
            <div>
                <h3 className="text-lg text-gray-800 mb-4">Newsletter</h3>
                <p className="text-gray-500 mb-4 text-sm">
                    Be the first to know about new arrivals, sales & promos by submitting your email!
                </p>
                <p className="text-[0.9rem]">Sign Up and get 10% off your first order</p>

                <form className="flex">
                    <input type="email" placeholder="Enter Your Email" className="p-3 w-full text-sm border-t border-b border-l border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-red-500 transition-all" required/>
                    <button type="submit" className="bg-black text-white px-6 py-3 text-sm rounded-r-md hover:bg-gray-800 transition-all">Subscribe</button>
                </form>
            </div>
        </div>
    </footer>
  )
}

export default Footer