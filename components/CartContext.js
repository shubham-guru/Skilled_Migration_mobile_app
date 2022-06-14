import React, {createContext, useState} from 'react';
import { getCourse } from './coursesData';
export const CartContext = createContext();
export function CartProvider(props) {
  const [items, setItems] = useState([]);

  const addItemToCart = (id) => {
    const course = getProduct(id);
    setItems((prevItems) => {
      const item = prevItems.find((item) => (item.id == id));
      if(!item) {
          return [...prevItems, {
              id,
              qty: 1,
              course,
              totalPrice: course.price 
          }];
      }
      else { 
          return prevItems.map((item) => {
            if(item.id == id) {
              item.qty++;
              item.totalPrice += product.price;
            }
            return item;
          });
      }
    });
}
const getItemsCount = () => {
      return items.reduce((sum, item) => (sum + item.qty), 0);
  }

  const getTotalPrice = () => {
      return items.reduce((sum, item) => (sum + item.totalPrice), 0);
  }  

  return (
    <CartContext.Provider 
      value={{items, setItems, getItemsCount, addItemToCart, getTotalPrice}}>
      {props.children}
    </CartContext.Provider>
  );
}