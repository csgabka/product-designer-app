import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProductsContextProvider } from "./context/ProductsContext";

import Home from './components/Home';
import ProductPage from './components/ProductPage';
import Error from './components/Error';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <ProductsContextProvider>
          <Routes>
            <Route path="/" exact element={<Home />} /> 
              <Route path="product/:slug" element={<ProductPage />} />
              <Route path="*" element={<Error />} />
          </Routes>
        </ProductsContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
