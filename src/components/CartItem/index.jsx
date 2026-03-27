import './style.css'
import { FaRegTrashCan } from "react-icons/fa6";
import { useCart } from '../../contexts/Cart/index.jsx';

function CartItem({props}) {

    const { remove } = useCart();

    const removeFromCart = (id) => {
        remove(id);
    }

    return (
        <div className="cartItem-wrapper">
            {props.id}
            <div className="cartItem-content">
                <h3>
                    Nome: {props.name}
                </h3>
                <p>
                    {props.price}
                </p>
            </div>
            <div onClick={() => removeFromCart(props.id)}>
                <FaRegTrashCan className='icon'/>
            </div>
        </div>
    )
}


export default CartItem
