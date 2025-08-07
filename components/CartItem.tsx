import React from 'react';
import Image from 'next/image';
import { FaTrash, FaPlus, FaMinus } from 'react-icons/fa';
import { useCart } from '@/hooks/useCart';

interface CartItemProps {
  item: {
    id: string;
    name: string;
    price: number;
    image: string;
    quantity: number;
  };
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { removeItem, updateItemQuantity } = useCart();

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(item.id);
    } else {
      updateItemQuantity(item.id, newQuantity);
    }
  };

  return (
    <div className="flex items-center space-x-4 p-4 border-b">
      <div className="relative w-16 h-16">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover rounded"
          sizes="64px"
          priority={false}
        />
      </div>
      
      <div className="flex-1">
        <h3 className="font-semibold">{item.name}</h3>
        <p className="text-gray-600">₩{item.price.toLocaleString()}</p>
      </div>
      
      <div className="flex items-center space-x-2">
        <button
          onClick={() => handleQuantityChange(item.quantity - 1)}
          className="p-1 rounded bg-gray-200 hover:bg-gray-300"
        >
          <FaMinus className="text-xs" />
        </button>
        <span className="w-8 text-center">{item.quantity}</span>
        <button
          onClick={() => handleQuantityChange(item.quantity + 1)}
          className="p-1 rounded bg-gray-200 hover:bg-gray-300"
        >
          <FaPlus className="text-xs" />
        </button>
      </div>
      
      <div className="text-right">
        <p className="font-semibold">
          ₩{(item.price * item.quantity).toLocaleString()}
        </p>
        <button
          onClick={() => removeItem(item.id)}
          className="text-red-500 hover:text-red-700 mt-1"
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default CartItem;