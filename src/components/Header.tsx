



"use client";
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import Link from 'next/link';
import { FiSearch } from 'react-icons/fi';
import { useRouter } from 'next/navigation'; // Import from next/navigation for App Router

const Header = () => {
  const [search, setSearch] = useState('');
  const cart = useSelector((state: RootState) => state.cart.products);
  const router = useRouter(); // No need for useEffect, as this is client-side only

  const handleSearch = () => {
    if (search.trim() !== '') {
      router.push(`/search?query=${encodeURIComponent(search)}`);
    }
  };

  return (
    <header className="bg-blue-600 p-4 text-white flex justify-between items-center">
      <h1 className="text-lg font-bold">E-Commerce</h1>
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search products"
          className="p-2 rounded-l-md text-black"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={handleSearch} className="bg-white text-blue-600 p-2 rounded-r-md">
          <FiSearch />
        </button>
      </div>
      <nav className="flex space-x-4">
        <Link href="/category/men's clothing">Men's Clothing</Link>
        <Link href="/category/jewelery">Jewelry</Link>
        <Link href="/category/electronics">Electronics</Link>
        <Link href="/category/women's clothing">Women's Clothing</Link>
       
      
      </nav>
      <Link href="/cart">
        Cart ({cart.reduce((acc, product) => acc + product.quantity, 0)})
      </Link>
    </header>
  );
};

export default Header;









