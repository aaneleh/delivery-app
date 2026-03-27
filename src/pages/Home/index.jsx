import './style.css'
import { Link } from 'react-router'; 
import { FaShoppingCart } from "react-icons/fa";
import Product from '../../components/Product/index.jsx';

function Home() {

    return (
        <main className="home-wrapper">
            <header className="home-header">
                <input type="text" id="pesquisar" placeholder="Pesquisar" className='text-input'/>
                <Link to={'/checkout'}>
                    <div className='button'>
                        <FaShoppingCart className='icon'/>
                    </div>
                </Link>
            </header>
            <section className="home-content">
                <h1> Produtos </h1>
                <Product props={{ id: 1, name:'Pizza', description:'Pizza', price:49.99 }}/>
                <Product props={{ id: 2, name:'Pizza', description:'Pizza', price:49.99 }}/>
                <Product props={{ id: 3, name:'Pizza', description:'Pizza', price:49.99 }}/>
                <Product props={{ id: 4, name:'Pizza', description:'Pizza', price:49.99 }}/>
                <Product props={{ id: 5, name:'Pizza', description:'Pizza', price:49.99 }}/>
                <Product props={{ id: 6, name:'Pizza', description:'Pizza', price:49.99 }}/>
                <Product props={{ id: 7, name:'Pizza', description:'Pizza', price:49.99 }}/>
                <Product props={{ id: 8, name:'Pizza', description:'Pizza', price:49.99 }}/>
                <Product props={{ id: 9, name:'Pizza', description:'Pizza', price:49.99 }}/>
                <Product props={{ id: 10, name:'Pizza', description:'Pizza', price:49.99 }}/>
                <Product props={{ id: 11, name:'Pizza', description:'Pizza', price:49.99 }}/>
            </section>
        </main>
    )
}

export default Home
