

// "use client"
// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import Product from '../../components/Product';
// import Header from '../../components/Header';

// interface Product {
//   id: number;
//   title: string;
//   price: number;
//   image: string;
// }

// const Home = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [sortType, setSortType] = useState('default');

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const response = await axios.get('https://fakestoreapi.com/products');
//       setProducts(response.data);
//     };
//     fetchProducts();
//   }, []);

//   const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     const value = e.target.value;
//     setSortType(value);
    
//     const sortedProducts = [...products];
//     if (value === 'price-asc') {
//       sortedProducts.sort((a, b) => a.price - b.price);
//     } else if (value === 'price-desc') {
//       sortedProducts.sort((a, b) => b.price - a.price);
//     }
//     setProducts(sortedProducts);
//   };

//   return (
//     <div className="bg-gray-100 min-h-screen">
//       <Header />
//       <div className="p-4">
//         <label htmlFor="sort" className="block mb-2">Sort by:</label>
//         <select id="sort" className="p-2 border" value={sortType} onChange={handleSortChange}>
//           <option value="default">Default</option>
//           <option value="price-asc">Price: Low to High</option>
//           <option value="price-desc">Price: High to Low</option>
//         </select>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
//         {products.map((product) => (
//           <Product key={product.id} product={product} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;



"use client";
import axios from 'axios';
import { useEffect, useState } from 'react';
import Product from '../../components/Product';
import Header from '../../components/Header';
import { useRouter } from 'next/router';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

const SearchPage = () => {
  const router = useRouter();
  const { query } = router.query; // Get the search query from the URL
  const [products, setProducts] = useState<Product[]>([]);
  const [sortType, setSortType] = useState('default');

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('https://fakestoreapi.com/products');
      setProducts(response.data);
    };

    fetchProducts();
  }, []);

  const filteredProducts = query
    ? products.filter(product =>
        product.title.toLowerCase().includes(query.toLowerCase())
      )
    : products;

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSortType(value);
    
    const sortedProducts = [...filteredProducts];
    if (value === 'price-asc') {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (value === 'price-desc') {
      sortedProducts.sort((a, b) => b.price - a.price);
    }
    setProducts(sortedProducts);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="p-4">
        <label htmlFor="sort" className="block mb-2">Sort by:</label>
        <select id="sort" className="p-2 border" value={sortType} onChange={handleSortChange}>
          <option value="default">Default</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
        {filteredProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;


