import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProductsContextProvider } from "./context/ProductsContext";

import Home from './components/Home';
import ProductPage from './components/ProductPage';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <ProductsContextProvider>
          <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path=":slug" element={<ProductPage />} />
          </Routes>
        </ProductsContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
