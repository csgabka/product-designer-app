import Header from './Header';
import Board from './Board';
import Canvas from './Canvas';
import Sidebar from './Sidebar';
import ViewPicker from './ViewPicker';
import ColorPicker from './ColorPicker';
import { Link } from "react-router-dom";

function ProductPage() {

  return (
      <>
        <Header />
        <Sidebar />
        <ViewPicker />
        <ColorPicker />
        <Canvas />
        <Board />
        <Link to="/"><br></br>Back to the homepage</Link>
      </>
  );
}

 export default ProductPage;