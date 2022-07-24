import { useProducts } from "../context/ProductsContext";
import Spinner from 'react-bootstrap/Spinner';

const Board = () => {
    const { selectedProduct, error, loading } = useProducts();

    return (
    <>
      {loading && <Spinner animation="border" />}
      {error && <div>Couldn't find product!</div>}
      {!loading && (
        <>
          <p>{selectedProduct.name}</p>
          <img src={selectedProduct.image} alt={selectedProduct.name} />
        </>
      )}
    </>
    );
}

export default Board;