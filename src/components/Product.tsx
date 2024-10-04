// import { useDispatch } from 'react-redux';
// import { addToCart } from '../redux/cartSlice';

// interface ProductProps {
//   product: {
//     id: number;
//     title: string;
//     price: number;
//     image: string;
//   };
// }

// const Product: React.FC<ProductProps> = ({ product }) => {
//   const dispatch = useDispatch();

//   return (
//     <div className="border p-4">
//       <img src={product.image} alt={product.title} className="w-full h-64 object-cover" />
//       <h2 className="font-bold text-lg">{product.title}</h2>
//       <p>${product.price}</p>
//       <button
//         className="bg-blue-500 text-white p-2 mt-4 rounded"
//         onClick={() => dispatch(addToCart(product))}
//       >
//         Add to Cart
//       </button>
//     </div>
//   );
// };

// export default Product;



import { useDispatch } from 'react-redux';
import { addToCart, decrementQuantity, removeFromCart } from '../redux/cartSlice';
import { FiPlus, FiMinus, FiTrash } from 'react-icons/fi';

interface ProductProps {
  product: {
    id: number;
    title: string;
    price: number;
    image: string;
    quantity:number;
  };
}

const Product: React.FC<ProductProps> = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="border p-2 rounded-lg shadow-md bg-white w-220 h-100">
      <img src={product.image} alt={product.title} className="w-full h-64 object-cover mb-4" />
      <h2 className="font-bold text-lg">{product.title}</h2>
      <p className="text-gray-600">${product.price}</p>
      <div className="mt-4 flex justify-between items-center">
        <button
          className="bg-blue-500 text-white p-2 rounded"
          onClick={() => dispatch(addToCart(product))}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;

