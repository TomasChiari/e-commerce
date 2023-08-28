import Cart from "../../assets/images/shopping-cart.png"

const CartWidget = () => {
    return (
        <>
            <img src={Cart} alt="cart logo"/>
            <span>10</span>
        </>
    );
}

export default CartWidget;