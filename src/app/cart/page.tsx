
"use client";
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import { incrementQuantity, decrementQuantity, removeFromCart } from '../../redux/cartSlice';
import { FiPlus, FiMinus, FiTrash } from 'react-icons/fi';
import Header from '../../components/Header';

const CartPage = () => {
  const cart = useSelector((state: RootState) => state.cart.products);
  const dispatch = useDispatch();
  
  // Modal state
  const [isCheckoutOpen, setCheckoutOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    paymentMethod: 'Credit Card',
  });

  const handleIncrease = (id: number) => dispatch(incrementQuantity(id));
  const handleDecrease = (id: number) => dispatch(decrementQuantity(id));
  const handleRemove = (id: number) => dispatch(removeFromCart(id));

  const totalPrice = cart.reduce((total, product) => total + product.price * product.quantity, 0);

  // Open/Close Checkout Modal
  const openCheckout = () => setCheckoutOpen(true);
  const closeCheckout = () => setCheckoutOpen(false);

  // Handle Form Submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      closeCheckout();
      setIsSubmitted(false); // Reset after closing modal
    }, 2000);
  };

  // Handle Form Input Change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
              <button
                className="mt-4 w-full bg-green-500 text-white p-3 rounded-lg text-center"
                onClick={openCheckout}
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>

      {/* Checkout Modal */}
      {isCheckoutOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <button className="text-right text-gray-500" onClick={closeCheckout}>
              &times;
            </button>

            {isSubmitted ? (
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4 text-green-600">Successfully Submitted!</h2>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h2 className="text-2xl font-bold mb-4">Enter Your Details</h2>

                <div className="mb-4">
                  <label className="block mb-2 text-gray-700">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block mb-2 text-gray-700">Address</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block mb-2 text-gray-700">Payment Method</label>
                  <select
                    name="paymentMethod"
                    value={formData.paymentMethod}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  >
                    <option value="Credit Card">Credit Card</option>
                    <option value="Debit Card">Debit Card</option>
                    <option value="PayPal">PayPal</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white p-2 rounded-lg"
                >
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;




