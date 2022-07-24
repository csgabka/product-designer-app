import { createContext, useContext, useState } from "react";
import api from "../api/contacts";

const productsContext = createContext();

export function ProductsContextProvider({children}) {

    //Error handling
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState([]);

    //RetrieveProducts
    const retrieveProducts = async () => {
      try {
        const response = await api.get('./products');
        setProducts(response.data);
        setError(false);
      } catch (error) {
        setError(true);
        setProducts([]);
      }
      setLoading(false);
    };

    //SelectProduct
    const selectProductHandler = async (id) => {
      try {
        const response = await api.get('./products');
        let item = response.data.find(item => item.id === id);
        setSelectedProduct(item);
        setError(false);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    }

    const value = {
        error,
        loading,
        products,
        retrieveProducts,
        selectProductHandler,
        selectedProduct
    }
    
    return <productsContext.Provider value = { value }>
        {children}
    </productsContext.Provider>
}

export function useProducts() {
    return useContext(productsContext);
}