


"use client";
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

  // Calculate the total price
  const totalPrice = cart.reduce((total, product) => total + product.price * product.quantity, 0);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="p-4 max-w-7xl mx-auto">
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {/* Product Listing */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
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
                    className="p-2 bg-red-500 text-white rounded w-30 h-30"
                  >
                    <FiTrash />
                  </button>
                </div>
              ))}
            </div>

            {/* Checkout Section */}
            <div className="bg-white p-6 shadow-md rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Checkout</h2>
              <div className="flex justify-between items-center">
                <p className="text-lg">Total Price:</p>
                <p className="text-2xl font-bold">${totalPrice.toFixed(2)}</p>
              </div>
              <button className="mt-4 w-full bg-green-500 text-white p-3 rounded-lg text-center">
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartPage;



