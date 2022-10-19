import styles from './Header.module.scss';

type HeaderProps = {
    titulo: string,
    descricao:string,
    className?: any,
    image?:any,
}


function Header({titulo, descricao, image, className}: HeaderProps){
    return (
        <header className={`${styles.header}`}>
            <div className={styles['header-texto']}>
                <h1>{titulo}</h1>
                <h2>{descricao}</h2>
            </div>
            <div className={styles['header-image']}>
                <img src={image} alt={titulo} />
            </div>
        </header>
    )
}


export default Header;