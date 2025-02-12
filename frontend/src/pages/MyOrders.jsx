import { useEffect, useState } from 'react'
const MyOrders = () => {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            const mockOrders = [
                {
                    _id: "12345",
                    createdAt: new Date(),
                    shippingAddress: {
                        city: "New York",
                        country: "USA"
                    },
                    orderItems: [
                        {
                            name: "Product 1",
                            image: "https://picsum.photos/200?random=1",
                        },
                    ],
                    totalPrice: 150,
                    isPaid: true,
                },
                {
                    _id: "34566",
                    createdAt: new Date(),
                    shippingAddress: {
                        city: "New York",
                        country: "USA"
                    },
                    orderItems: [
                        {
                            name: "Product 2",
                            image: "https://picsum.photos/200?random=2",
                        },
                    ],
                    totalPrice: 150,
                    isPaid: true,
                },
            ];
            setOrders(mockOrders);
        }, 1000)
    }, []);

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6">
        <h2 className="text-xl sm:text-2xl font-bold mb-6">My Orders</h2>
        <div className="relative shadow-md sm:rounded-lg overflow-hidden">
        <table className="min-w-full text-left text-gray-500">
            <thead className="bg-gray-100 text-xs uppercase text-gray-700">
            <tr>
                <th className="py-2 px-4 sm:py-3">Image</th>
                <th className="py-2 px-4 sm:py-3">Order ID</th>
                <th className="py-2 px-4 sm:py-3">Created</th>
                <th className="py-2 px-4 sm:py-3">Shipping Address</th>
                <th className="py-2 px-4 sm:py-3">Items</th>
                <th className="py-2 px-4 sm:py-3">Price</th>
                <th className="py-2 px-4 sm:py-3">Status</th>
            </tr>
            </thead>
            <tbody>
                {orders.length > 0 ? (
                    orders.map((order) => (
                        <tr key={order._id} className="border-b hover:border-gray-50 cursor-pointer">
                            <td className="py-2 px-4 sm:py-4 sm:px-4">
                                <img src={order.orderItems[0].image} alt={order.orderItems[0].name} className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-md" />
                            </td>
                            <td className="py-2 px-2 sm:py-2 sm:px-4 font-medium text-gray-900 whitespace-nowrap">
                                #{order._id}
                            </td>
                            <td className="py-2 px-2 sm:py-2 sm:px-4">
                                {new Date(order.createdAt).toLocaleDateString()} {""}
                                {new Date(order.createdAt).toLocaleTimeString()}
                            </td>
                            <td className="py-2 px-2 sm:py-2 sm:px-4">
                                {order.shippingAddress ? `${order.shippingAddress.city}, ${order.shippingAddress.country}` : "N/A"}
                            </td>
                            <td className="py-2 px-2 sm:py-2 sm:px-4">
                                {order.orderItems.length}
                            </td>
                            <td className="py-2 px-2 sm:py-2 sm:px-4">₹{order.totalPrice}</td>
                            <td className="py-2 px-2 sm:py-2 sm:px-4">
                                <span className={`px-2 py-1 rounded-full text-xs sm:text-sm font-medium ${order.isPaid ? "text-green-700 bg-green-100" : "text-red-500 bg-red-100"}`}>{order.isPaid ? "Paid" : "Pending"}</span>
                            </td>
                        </tr>
                    ))
                ): (
                    <tr>
                        <td colSpan={7} className="py-4 px-4 text:gray-500 text-center">No orders found</td>
                    </tr>
                )}
            </tbody>
        </table>
        </div>
    </div>
  )
}

export default MyOrders
