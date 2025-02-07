import { useRef, useState, useEffect } from "react"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"
import { Link } from "react-router-dom"

const NewArrivals = () => {
    const scrollRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const newArrivals = [
        {
            _id: '1',
            name: 'Nike Air Max 90',
            price: 140,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=1",
                    altText: "Nike Air Max 90",
                },
            ],
        },
        {
            _id: '2',
            name: 'Nike Air Max 90',
            price: 140,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=2",
                    altText: "Nike Air Max 90",
                },
            ],
        },
        {
            _id: '3',
            name: 'Nike Air Max 90',
            price: 140,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=3",
                    altText: "Nike Air Max 90",
                },
            ],
        },
        {
            _id: '4',
            name: 'Nike Air Max 90',
            price: 140,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=1",
                    altText: "Nike Air Max 90",
                },
            ],
        },
        {
            _id: '5',
            name: 'Nike Air Max 90',
            price: 140,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=4",
                    altText: "Nike Air Max 90",
                },
            ],
        },
        {
            _id: '6',
            name: 'Nike Air Max 90',
            price: 140,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=5",
                    altText: "Nike Air Max 90",
                },
            ],
        },
        {
            _id: '7',
            name: 'Nike Air Max 90',
            price: 140,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=6",
                    altText: "Nike Air Max 90",
                },
            ],
        },
        {
            _id: '8',
            name: 'Nike Air Max 90',
            price: 140,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=7",
                    altText: "Nike Air Max 90",
                },
            ],
        },
        {
            _id: '9',
            name: 'Nike Air Max 90',
            price: 140,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=8",
                    altText: "Nike Air Max 90",
                },
            ],
        },
      ]


    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);
    }

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX);
        scrollRef.current.scrollLeft = scrollLeft - walk;
        console.log(scrollRef.current.scrollLeft)
    }

    const handleMouseUporLeave = () => {
        setIsDragging(false);
    }

    const scroll = (direction) => {
        const ScrollAmount = direction === "left" ? -300 : 300;
        scrollRef.current.scrollBy({left: ScrollAmount, behavior: "smooth"});   
    }

    const updateScrollButtons = () => {
        const container = scrollRef.current;
        if (container) {
            const leftScroll = container.scrollLeft;
            setCanScrollRight(container.scrollWidth - container.scrollLeft > container.clientWidth);
            setCanScrollLeft(leftScroll > 0);
    }
}

    useEffect(() => {
        const container = scrollRef.current;
        if (container) {
            container.addEventListener("scroll", updateScrollButtons);
            updateScrollButtons(); // checks initial state on loading
            return() => container.removeEventListener("scroll", updateScrollButtons);
        }
    }, [])

  return (
    <section className="py-16 px-4 lg:px-0">
        <div className="container mx-auto text-center mb-10 relative">
            <h2 className="text-3xl font-bold mb-4">Explore New Arrivals</h2>
            <p className="text-lg text-gray-600 mb-8">
                Discover the latest styles straight off the runway, freshly added to keep your wardrobe on the cutting edge of fashion.
            </p>
            <div className="absolute right-0 bottom-[-30px] flex space-x-2">
                <button 
                    onClick={() => scroll("left") } 
                    disabled={!canScrollLeft}
                    className={`p-2 rounded border ${canScrollLeft ? "bg-white text-black " : "bg-gray-200 text-gray-400 cursor-none"}`}>
                    <FiChevronLeft className="text-2xl"/>
                </button>
                <button
                 onClick={() => scroll("right") } 
                 disabled={!canScrollRight}
                 className={`p-2 rounded border ${canScrollRight ? "bg-white text-black " : "bg-gray-200 text-gray-400 cursor-none"}`}>
                    <FiChevronRight className="text-2xl"/>
                </button>
            </div>
        </div>
        <div 
            ref={scrollRef} 
            className={`container mx-auto overflow-x-scroll flex space-x-6 relative ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUporLeave}
            onMouseLeave={handleMouseUporLeave}
            >
            {newArrivals.map((product) => (
                <div key={product._id} className="min-w-[100%] sm:min-w-[50%] lg:min-w-[30%] relative">
                    <img 
                        src={product.images[0]?.url} 
                        alt={product.images[0]?.altText || product.name} 
                        className="w-full h-[500px] object-cover rounded-lg"
                        draggable={false}
                    />
                    <div className="absolute bottom-0 left-0 right-0 text-white backdrop-blur-md rounded-b-lg bg-opacity-50 p-4">
                        <Link to={`/product/${product._id}`} className="block">
                            <h4 className="font-medium">{product.name}</h4>
                            <p className="mt-1">₹ {product.price}</p>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default NewArrivals