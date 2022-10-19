import styles from './Item.module.scss'
import { Heart, ShoppingCart } from 'phosphor-react';
import { mudarFavorito } from '../../store/reducers/itens';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store/reducers/cart';


const iconProps = {
    size:24,
    color: '#041833', 
}

function Item(props:string | any){
    const {
        titulo,
        foto,
        preco,
        descricao,
        favorito,
        id,
    } = props;

    const dispatch = useDispatch();
    
    const onAddToCart = useSelector<any>(state => state.cart.some((itemNoCart: { id: number; }) => itemNoCart.id === id));

    function alterarFavorito(){
        dispatch(mudarFavorito(id));
    }

    function alterarCarrinho(){
        dispatch(addToCart(id));
    }

    return(
        <div className={styles.item}>
            <div className={styles['item-imagem']}>
                <img src={foto} alt={titulo} />
            </div>
            <div className={styles['item-descricao']}>
                <div className={styles['item-titulo']}>
                    <h2>{titulo}</h2>
                    <p>{descricao}</p>
                </div>

                <div className={styles['item-info']}>
                    <div className={styles['item-preco']}>
                        R${preco.toFixed(2)}
                    </div>

                    <div className={styles['item-acoes']}>
                        {favorito 
                            ? <Heart weight="fill" {...iconProps} color='#ff0000' className={styles['item-acao']} 
                                onClick={alterarFavorito}
                            /> 
                            : <Heart {...iconProps} className={styles['item-acao']}
                                onClick={alterarFavorito}
                            />
                        }

                        <ShoppingCart 
                            weight="fill"
                            {...iconProps}
                            color={onAddToCart ? '#1875e8' : iconProps.color }
                            className={styles['item-acao']}
                            onClick={alterarCarrinho}
                        />

                    </div>
                </div>
            </div>
        </div>
    )
}



export default Item;