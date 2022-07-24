
import React from 'react';

import Header from './Header';
import Board from './Board';
import { Link } from "react-router-dom";


function ProductPage(props) {
  console.log(props);
  return (
      <>
        <Header />
        <Link to="/"><br></br>Home</Link>
        <Board />
      </>
  );
}

 export default ProductPage;