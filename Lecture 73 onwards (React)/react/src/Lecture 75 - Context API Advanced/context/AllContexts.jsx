import { AuthProvider } from "./AuthContext";
import { ProductProvider } from "./ProductContext";

function AllContexts({ children }) {
  return (
    <>
      <ProductProvider>
        <AuthProvider>{children}</AuthProvider>
      </ProductProvider>
    </>
  );
}

export default AllContexts;
