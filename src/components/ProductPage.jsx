import { Link, useParams } from "react-router-dom";
import { useProducts } from "../context/ProductsContext";

import Header from './Header';
import Board from './Board';
import Canvas from './Canvas';
import Sidebar from './Sidebar';
import ViewPicker from './ViewPicker';
import ColorPicker from './ColorPicker';

import Spinner from 'react-bootstrap/Spinner';
import { useEffect } from "react";

function ProductPage() {
  const { selectedProduct, error, loading, selectProductHandler } = useProducts();
  const { slug } = useParams();

  useEffect(() => {
    selectProductHandler(slug)
  },[]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Header />
      {loading && <Spinner animation="border" />}
      {error && <div>Something went wrong</div>}
      {!loading && !error && 
      <>
        <Sidebar />
        <Canvas />
        <ViewPicker />
        <ColorPicker />
        <Board selectedProduct={selectedProduct}/>
      </>
      }
      {!selectedProduct && <div>Couldn't find the product</div>}
      {<Link to="/"><br></br>Back to the homepage</Link>}
    </>
  );
}

export default ProductPage;