import { FaCartPlus } from "react-icons/fa";
import './style.css'
import { useCart } from "../../contexts/Cart";

function Product({props}) {

    const { add } = useCart();

    const addToCart = (el) => {
        add(el);
    }

    return (
        <div className="product-wrapper">
            {props.id}
            <div className="product-content">
                <h3>
                    Nome: {props.name}
                </h3>
                <p> 
                    Descrição: {props.description}
                </p>
            </div>
            <div className="button" onClick={() => addToCart(props) }>
                {props.price}
                <FaCartPlus className="icon"/>
            </div>
        </div>
    )
}


export default Product
