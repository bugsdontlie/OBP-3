import { useEffect, useState, useContext, createContext } from "react";
import axios from "axios";

const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  function addToCart(productId) {
    //check if this product is already in cart
    const cartProductIdx = cart.findIndex((product) => product.id == productId);
    const productIdx = products.findIndex((product) => product.id == productId);
    console.log({ productIdx: productIdx });

    if (cartProductIdx != -1) {
      const prevQuantity = cart[cartProductIdx].quantity;
      setCart((cart) =>
        cart.map((item) => {
          if (item.id === productId) item.quantity = prevQuantity + 1;
          return item;
        }),
      );
    } else
      setCart((cart) => [...cart, { ...products[productIdx], quantity: 1 }]);
    console.log([...cart, { ...products[productIdx], quantity: 1 }]);
  }

  //[product1, product1]
  //product1

  function removeFromCart(productId) {
    //check if this product is already in cart
    const productIdx = cart.findIndex((product) => product.id == productId);
  }

  useEffect(() => {
    async function fetchProducts() {
      const response = await axios.get("https://dummyjson.com/products");
      console.log({ response, data: response.data.products });
      setProducts(response.data.products);
    }

    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, addToCart, cart }}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProductContext() {
  return useContext(ProductContext);
}
