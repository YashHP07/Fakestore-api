// import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
// import { RootState } from '../redux/store';
// import Link from 'next/link';

// const Header = () => {
//   const [search, setSearch] = useState('');
//   const cart = useSelector((state: RootState) => state.cart.products);

//   return (
//     <header className="bg-blue-600 p-4 text-white flex justify-between items-center">
//       <h1 className="text-lg font-bold">My Store</h1>
//       <input
//         type="text"
//         placeholder="Search products"
//         className="p-2 rounded"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />
//       <Link href="/cart">
//           Cart ({cart.reduce((acc, product) => acc + product.quantity, 0)})
//       </Link>
//     </header>
//   );
// };

// export default Header;


import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import Link from 'next/link';
import { FiSearch } from 'react-icons/fi';

const Header = () => {
  const [search, setSearch] = useState('');
  const cart = useSelector((state: RootState) => state.cart.products);

  const handleSearch = () => {
    // Implement the search logic here if needed
    console.log('Searching for:', search);
  };

  return (
    <header className="bg-blue-600 p-4 text-white flex justify-between items-center">
      <h1 className="text-lg font-bold">My Store</h1>
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search products"
          className="p-2 rounded-l-md text-black"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="bg-white text-blue-600 p-2 rounded-r-md"
        >
          <FiSearch />
        </button>
      </div>
      <Link href="/cart">
        Cart ({cart.reduce((acc, product) => acc + product.quantity, 0)})
      </Link>
    </header>
  );
};

export default Header;

