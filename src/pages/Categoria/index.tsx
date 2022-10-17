import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";

type categoriaProps = any;

function Categoria(){
    const {nomeCategoria} = useParams();
    const categoria = useSelector<categoriaProps, any>((state) => state.categorias.find((categoria: { id: string | undefined; }) => categoria.id === nomeCategoria));

    return (
        <div>
            <Header 
                title={categoria.nome}
                descricao={categoria.descricao}
                image={categoria.header}
                className=''
            />
        </div>
    )
}


export default Categoria;