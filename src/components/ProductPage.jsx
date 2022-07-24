import { Link } from "react-router-dom";
import { useProducts } from "../context/ProductsContext";

import Header from './Header';
import Board from './Board';
import Canvas from './Canvas';
import Sidebar from './Sidebar';
import ViewPicker from './ViewPicker';
import ColorPicker from './ColorPicker';

import Spinner from 'react-bootstrap/Spinner';

function ProductPage() {
  const { selectedProduct, error, loading } = useProducts();

  return (
      <>
        <Header />
        {loading && <Spinner animation="border" />}
        {error && <div>Couldn't find product!</div>}
        {!loading && (
          <>
          {/* sidebar only affects what is on the canvas and its children*/}
          <Sidebar />
            <Canvas />
          {/* Below will need to search in the selectedProduct object */}
          <ViewPicker />
          <ColorPicker />
          {/* and update the board according to that */}
            <Board selectedProduct={selectedProduct}/>
          <Link to="/"><br></br>Back to the homepage</Link>
          </>
        )}
      </>
  );
}

 export default ProductPage;