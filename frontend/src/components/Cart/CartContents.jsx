const CartContents = () => {

  const cartProducts = [
    {
        productId: 1,
        name: "T-Shirt",
        size: "M",
        color: "Black",
        quantity: 1,
        price: 100,
        image: "https://picsum.photos/200?random=1"
    },
    {
        productId: 1,
        name: "T-Shirt",
        size: "M",
        color: "Black",
        quantity: 1,
        price: 100,
        image: "https://picsum.photos/200?random=1"
    },
    {
        productId: 2,
        name: "Jeans",
        size: "L",
        color: "Blue",
        quantity: 1,
        price: 150,
        image: "https://picsum.photos/200?random=2"
    },
  ]

  return (
    <div>CartContents</div>
  )
}

export default CartContents