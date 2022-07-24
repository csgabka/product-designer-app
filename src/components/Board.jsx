import { useProducts } from "../context/ProductsContext";

const Board = () => {
    const { selectProductHandler } = useProducts();

    const selectProduct = (id) => {
        selectProductHandler(id); 
    }    
    
    return (
     <div>
        {selectProduct()}
     </div>
    );
}

export default Board;