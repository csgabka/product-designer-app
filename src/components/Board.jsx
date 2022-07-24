const Board = (props) => {
    const { selectedProduct } = props;   

    return (
    <>
        <p>{selectedProduct.name}</p>
        <img src={selectedProduct.image} alt={selectedProduct.name} />
    </>
    );
}

export default Board;