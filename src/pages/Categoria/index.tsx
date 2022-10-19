import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import styles from '../../pages/Categoria/Categoria.module.scss';
import Item from "../../components/Item";

function Categoria(){

    const {nomeCategoria} = useParams();
    const { categoria, itens } = useSelector<any, any>((state) => ({
        categoria:state.categorias.find((categoria: { id: string | undefined; }) => categoria.id === nomeCategoria),
        itens:state.itens.filter((item:{categoria:string & any}) => item.categoria.includes(nomeCategoria)),
    }));

    const listaItems = itens.map((item:any) => 
        <Item key={item.id} {...item}/>
    )

    return (
        <div>
            <Header 
                title={categoria.nome}
                descricao={categoria.descricao}
                image={categoria.header}
                className=''
            />
            
            <div className={styles.itens}>
                {listaItems}
            </div>
        </div>
    )
}


export default Categoria;