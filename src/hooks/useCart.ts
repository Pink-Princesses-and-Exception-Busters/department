import { addToCart, removeFromCart, updateQuantity, clearCart } from '../store/slices/cartSlice';
import { Product } from '../store/slices/productsSlice';
import { useAppDispatch, useAppSelector } from './redux';

export const useCart = () => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart);

  const addItem = (product: Product) => {
    dispatch(addToCart(product));
  };

  const removeItem = (productId: string) => {
    dispatch(removeFromCart(productId));
  };

  const updateItemQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      dispatch(removeFromCart(productId));
    } else {
      dispatch(updateQuantity({ id: productId, quantity }));
    }
  };

  const clear = () => {
    dispatch(clearCart());
  };

  return {
    items: cart.items,
    totalAmount: cart.totalAmount,
    totalQuantity: cart.totalQuantity,
    addItem,
    removeItem,
    updateItemQuantity,
    clear,
  };
};