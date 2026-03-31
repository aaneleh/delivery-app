import './style.css'
import { Link } from 'react-router'; 
import { FaArrowLeft } from "react-icons/fa6";
import CartItem from '../../components/CartItem/index.jsx';
import { useCart } from '../../contexts/Cart/index.jsx';
import { useEffect } from 'react';

function Checkout() {

    const { ItensCart } = useCart()

    return (
        <main className="checkout-wrapper">
            <header className='checkout-header'>
                <Link to='/delivery-app/' className='checkout-header-link' data-testId="button-to-home">
                    <FaArrowLeft alt="arrow-back"/>
                    <p>Voltar</p>
                </Link>
            </header>
            <section className="checkout-content">
                <h1> Checkout </h1>

                <div className="checkout-items">
                    {
                        ItensCart ?
                            ItensCart.map((el) => {
                                return (
                                    <CartItem key={el.product.id} props={{ id: el.product.id, name: el.product.name, price: el.product.price }}/>
                                )
                            })
                        :
                        <p>Nenhum item adicionado ainda</p>
                    }
                </div>

                <h3>
                    Total: R$
                    { 
                        ItensCart.reduce((total, el) => {
                            return total + el.product.price
                        }, 0)
                    }
                </h3>

                <h1>Dados para entrega</h1>

                <form className="checkout-form">
                    <div className='form-item'>
                        <label htmlFor="CEP">CEP</label>
                        <input type="text" id="CEP" placeholder='CEP' className='text-input'/>
                    </div>

                    <div className='form-item'>
                        <label htmlFor="Rua">Rua</label>
                        <input type="text" id="Rua" placeholder='Rua' className='text-input'/>
                    </div>

                    <div className='form-item'>
                        <label htmlFor="numero">Número</label>
                        <input type="text" id="numero" placeholder='Número' className='text-input'/>
                    </div>

                    <div className='form-item'>
                        <label htmlFor="complemento">Complemento</label>
                        <input type="text" id="complemento" placeholder='Complemento' className='text-input'/>
                    </div>

                    <div className='form-item'>
                        <label htmlFor="pagamento">Forma de pagamento</label>
                        <input type="text" id="pagamento" placeholder='Forma de pagamento' className='text-input'/>
                    </div>

                    <input type="submit" value="Confirmar" className='button' />
                </form>
            </section>

        </main>
    )
}

export default Checkout
