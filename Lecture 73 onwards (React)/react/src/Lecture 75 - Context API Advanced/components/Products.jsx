import { useProductContext } from "../context/ProductContext";

function Products() {
  const { products, addToCart, removeFromCart, cart } = useProductContext();
  return (
    <>
      {products?.map((product) => {
        return (
          <div key={product.id}>
            <h2>title: {product.title}</h2>
            <h3>price: {product.price}</h3>
            <p>description: {product.description}</p>
            <button onClick={() => addToCart(product.id)}>Add To Cart</button>

            <br />
            <hr />
          </div>
        );
      })}

      <h1>Cart Items</h1>
      {cart?.map((product) => {
        console.log({ product });

        return (
          <div key={product.id}>
            <h2>title: {product.title}</h2>
            <h3>price: {product.price}</h3>
            <p>description: {product.description}</p>
            <p>quantity: {product.quantity}</p>
            <button onClick={() => removeFromCart(product.id)}>
              Remove From Cart
            </button>
            <br />
            <hr />
          </div>
        );
      })}
    </>
  );
}

export default Products;
