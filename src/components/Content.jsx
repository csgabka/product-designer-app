import { useEffect } from 'react';
import ProductCard from './ProductCard';
import { useProducts } from "../context/ProductsContext";
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';

const Content = () => {
    const { loading, error, products, retrieveProducts } = useProducts();
    
    useEffect(() => {
      retrieveProducts();
    }, []) // eslint-disable-line react-hooks/exhaustive-deps
   
    return (
      <Container>
      {loading && <Spinner animation="border" />}
      {error && <div>Couldn't load products!</div>}
      <Row>
        {!loading && (
          products.map((product) => {
            return <ProductCard product={product} key={product.id} />
          })
        )}
      </Row>
      </Container>
    );
}

export default Content;