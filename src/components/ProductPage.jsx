import Header from './Header';
import Board from './Board';
import { Link } from "react-router-dom";

function ProductPage() {

  return (
      <>
        <Header />
        <Link to="/"><br></br>Home</Link>
        <Board />
      </>
  );
}

 export default ProductPage;