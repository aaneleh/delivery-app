import './style.css'
import { Link } from 'react-router'; 
import { FaShoppingCart } from "react-icons/fa";
import Product from '../../components/Product/index.jsx';

function Home() {

    return (
        <main className="home-wrapper">
            <header className="home-header">
                <input type="text" id="pesquisar" placeholder="Pesquisar" className='text-input'/>
                <Link to={'/delivery-app/checkout'} data-testid='shopping-cart'>
                    <div className='button'>
                        <FaShoppingCart className='icon' alt="shopping-cart"/>
                    </div>
                </Link>
            </header>
            <section className="home-content">
                <h1> Produtos </h1>
                <Product props={{ id: 1, name:'Pizza de calabresa', description:'Pizza de calabresa', price:49.99 }}/>
                <Product props={{ id: 2, name:'Pizza margherita', description:'Pizza margherita', price:49.99 }}/>
                <Product props={{ id: 3, name:'Pizza 4 queijos', description:'Pizza 4 queijos', price:49.99 }}/>
                <Product props={{ id: 4, name:'Pizza de frango', description:'Pizza de frango', price:49.99 }}/>
                <Product props={{ id: 5, name:'Pizza de filé', description:'Pizza de filé', price:59.99 }}/>
                <Product props={{ id: 6, name:'Pizza de camarão', description:'Pizza de camarão', price:59.99 }}/>
                <Product props={{ id: 7, name:'Pizza de chocolate', description:'Pizza de chocolate', price:49.99 }}/>
                <Product props={{ id: 8, name:'Pizza de chocolate com morango', description:'Pizza chocolate com morango', price:59.99 }}/>
                <Product props={{ id: 9, name:'Pizza de paçoquinha', description:'Pizza paçoquinha', price:59.99 }}/>
            </section>
        </main>
    )
}

export default Home
