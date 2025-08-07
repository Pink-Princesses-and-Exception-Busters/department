import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store/store';
import { addToCart, removeFromCart, updateQuantity } from '@/store/slices/cartSlice';
import { Product } from '@/store/slices/productsSlice';

export const useCart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart);

  const addItem = (product: Product) => {
    dispatch(addToCart(product));
  };

  const removeItem = (productId: string) => {
    dispatch(removeFromCart(productId));
  };

  const updateItemQuantity = (productId: string, quantity: number) => {
    dispatch(updateQuantity({ id: productId, quantity }));
  };

  return {
    ...cart,
    addItem,
    removeItem,
    updateItemQuantity,
  };
};