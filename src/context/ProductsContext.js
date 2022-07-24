import { createContext, useContext, useState } from "react";
import api from "../api/contacts";

const productsContext = createContext();

export function ProductsContextProvider({children}) {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

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
    const selectProductHandler = (id) => {
        //does nothing so far
    }

    const value = {
        error,
        loading,
        products,
        retrieveProducts,
        selectProductHandler
    }
    
    return <productsContext.Provider value = { value }>
        {children}
    </productsContext.Provider>
}

export function useProducts() {
    return useContext(productsContext);
}