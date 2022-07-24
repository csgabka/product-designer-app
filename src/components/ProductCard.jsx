import React from 'react';
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useProducts } from "../context/ProductsContext";


function ProductCard(props) {
    const { selectProductHandler } = useProducts();
    const product = props.product;
    return (
    <>   
      <Col sm style={{ marginBottom: '20px' }}>
        <Card style={{ width: '200px'}}>
          <img src={product.image} alt={product.name} />
          <Button variant="outline-secondary">
            <Link to={product.slug} onClick={() => selectProductHandler(product.id)}>{product.name}</Link>
          </Button>
        </Card>
      </Col>
    </>
    );
}

export default ProductCard;