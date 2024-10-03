// "use client"; // Marks this file as a client component

// import { useSelector, useDispatch } from 'react-redux';
// import { RootState } from '../../redux/store';
// import { removeFromCart, decrementQuantity } from '../../redux/cartSlice';
// import Link from 'next/link';

// const Cart = () => {
//   const cart = useSelector((state: RootState) => state.cart.products);
//   const dispatch = useDispatch();

//   return (
//     <div>
//       <Link href="/" className="text-blue-500">
//         Go back to shopping
//       </Link>
//       <h1 className="text-2xl font-bold">Your Cart</h1>
//       <div>
//         {cart.map((product) => (
//           <div key={product.id} className="border p-4 flex justify-between items-center">
//             <div>
//               <h2>{product.title}</h2>
//               <p>${product.price}</p>
//               <p>Quantity: {product.quantity}</p>
//             </div>
//             <div>
//               <button
//                 className="bg-red-500 text-white p-2"
//                 onClick={() => dispatch(removeFromCart(product.id))}
//               >
//                 Remove
//               </button>
//               <button
//                 className="bg-yellow-500 text-white p-2 ml-2"
//                 onClick={() => dispatch(decrementQuantity(product.id))}
//               >
//                 Decrease Quantity
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Cart;

"use client";
// import "./globals.css"
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import { incrementQuantity, decrementQuantity, removeFromCart } from '../../redux/cartSlice';
import { FiPlus, FiMinus, FiTrash } from 'react-icons/fi';
import Header from '../../components/Header';

const CartPage = () => {
  const cart = useSelector((state: RootState) => state.cart.products);
  const dispatch = useDispatch();

  const handleIncrease = (id: number) => dispatch(incrementQuantity(id));
  const handleDecrease = (id: number) => dispatch(decrementQuantity(id));
  const handleRemove = (id: number) => dispatch(removeFromCart(id));

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="p-4 max-w-7xl mx-auto">
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {cart.map((product) => (
              <div key={product.id} className="bg-white shadow-md p-4 rounded-lg flex flex-col items-center">
                <img src={product.image} alt={product.title} className="w-full h-40 object-cover mb-4 rounded" />
                <div className="text-center">
                  <h2 className="font-bold mb-2">{product.title}</h2>
                  <p className="text-gray-600">${product.price}</p>
                </div>
                <div className="flex justify-center items-center space-x-2 my-4">
                  <button onClick={() => handleDecrease(product.id)} className="p-2 bg-gray-300 rounded">
                    <FiMinus />
                  </button>
                  <span>{product.quantity}</span>
                  <button onClick={() => handleIncrease(product.id)} className="p-2 bg-gray-300 rounded">
                    <FiPlus />
                  </button>
                </div>
                <button
                  onClick={() => handleRemove(product.id)}
                  className="w-full p-2 bg-red-500 text-white rounded"
                >
                  <FiTrash />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;





