import ProductGrid from "./ProductGrid"

const placeholderProducts = [
  {
      _id: "1",
      name: "Product 1",
      price: 120,
      images: [{url: "https://picsum.photos/500/500?random=3",altText: "Stylish Jacket 1"}],
  },
  {
      _id: "2",
      name: "Product 2",
      price: 120,
      images: [{url: "https://picsum.photos/500/500?random=4",altText: "Stylish Jacket 1"}],
  },
  {
      _id: "3",
      name: "Product 3",
      price: 120,
      images: [{url: "https://picsum.photos/500/500?random=5",altText: "Stylish Jacket 1"}],
  },
  {
      _id: "4",
      name: "Product 4",
      price: 120,
      images: [{url: "https://picsum.photos/500/500?random=6",altText: "Stylish Jacket 1"}],
  },
  {
    _id: "5",
    name: "Product 4",
    price: 120,
    images: [{url: "https://picsum.photos/500/500?random=7",altText: "Stylish Jacket 1"}],
  },
  {
    _id: "6",
    name: "Product 4",
    price: 120,
    images: [{url: "https://picsum.photos/500/500?random=8",altText: "Stylish Jacket 1"}],
  },
  {
    _id: "7",
    name: "Product 4",
    price: 120,
    images: [{url: "https://picsum.photos/500/500?random=9",altText: "Stylish Jacket 1"}],
  },
  {
    _id: "8",
    name: "Product 4",
    price: 120,
    images: [{url: "https://picsum.photos/500/500?random=10",altText: "Stylish Jacket 1"}],
  },
]
const TopProducts = () => {
  return (
    <section>
        <div className="container mx-auto">
          <h2 className="text-3xl text-center font-bold mb-4">
            Top Wears for Women
          </h2>
          <ProductGrid products={placeholderProducts}/>
        </div>
    </section>
  )
}

export default TopProducts