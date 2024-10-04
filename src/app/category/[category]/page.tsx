// src/app/category/[category]/page.tsx

// "use client";
// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import Product from '../../../components/Product';
// import Header from '../../../components/Header';
// import { useRouter } from 'next/router';

// interface Product {
//   id: number;
//   title: string;
//   price: number;
//   image: string;
// }

// const CategoryPage = () => {
//   const router = useRouter();
//   const { category } = router.query; // Get the dynamic category from the URL
//   const [products, setProducts] = useState<Product[]>([]);

//   useEffect(() => {
//     const fetchCategoryProducts = async () => {
//       const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
//       setProducts(response.data);
//     };

//     if (category) fetchCategoryProducts();
//   }, [category]);

//   return (
//     <div className="bg-gray-100 min-h-screen">
//       <Header />
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
//         {products.map((product) => (
//           <Product key={product.id} product={product} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CategoryPage;




"use client";
import { useEffect, useState } from 'react';
import axios from 'axios';
import Product from '../../../components/Product';
import Header from '../../../components/Header';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

// Make sure to pass 'params' as a prop in the page definition
const CategoryPage = ({ params }: { params: { category: string } }) => {
  const { category } = params; // Get the dynamic category from the URL
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      if (category) {
        try {
          const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
          setProducts(response.data);
        } catch (error) {
          console.error('Error fetching category products:', error);
        }
      }
    };

    fetchCategoryProducts();
  }, [category]);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

// Default export for the page
export default CategoryPage;



