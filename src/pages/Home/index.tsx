import { Header } from '../../components/Header';
import styles from './Home.module.scss';
import relogio from '../../assets/inicial.png';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useCategorias } from '../../store/reducers/categorias';



export const Home = () => {

    const categorias = useSelector(useCategorias);
    const navigate = useNavigate();

    return(
        <div>
            <Header
             title='Classificados Tech'
             descricao='COMPRE diversos tipos de produtos no melhor site do Brasil'
             className={styles.header}
             image={relogio}
            />
            <div className={styles.categorias}>
                <div className={styles['categorias-title']}>
                    <h1>
                        Categorias
                    </h1>
                </div>
                <div className={styles['categorias-container']}>
                    {categorias.map((categoria,index) => (
                        <div key={index} onClick={() => navigate(`/categoria/${categoria.id}`)}>
                            <img src={categoria.thumbnail} alt={categoria.nome} />
                            <h1>{categoria.nome}</h1>
                        </div>
                    ))}
                </div>
            </div>

        </div>
        
    )
}