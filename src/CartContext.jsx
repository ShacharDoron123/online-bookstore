import { useState, createContext, useEffect } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    let courent = localStorage.getItem("items");
    if (courent) {
      return JSON.parse(courent);
    } else {
      return [];
    }
  });

  const addToCart = (newBook, q = 1) => {
    setItems((prevItems) => {
      const existingIndex = prevItems.findIndex(
        (item) => item.name === newBook.name,
      );

      if (existingIndex !== -1) {
        return prevItems.map((item, index) =>
          index === existingIndex
            ? { ...item, quantity: item.quantity + q }
            : item,
        );
      } else {
        return [...prevItems, { ...newBook, quantity: q }];
      }
    });
  };

  useEffect(() => {
    let string = JSON.stringify(items);
    localStorage.setItem("items", string);
  }, [items]);

  return (
    <CartContext.Provider value={{ items, setItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}
