import { Header } from '../../components/Header';
import styles from '../../pages/Cart/Cart.module.scss';

function Cart(){
    return (
        <div>
            <Header 
                title='Carrinho de Compras'
                descricao='Confira produtos que você adicionou ao carrinho.'
            />
            <div className={styles.cart}>

            </div>
        </div>
    )
}


export default Cart;