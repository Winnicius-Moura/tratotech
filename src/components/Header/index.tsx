import styles from './Header.module.scss';

type HeaderProps = {
    title: string,
    descricao:string,
    className?: any,
    image?:any,
}

export const Header = ( {title: titulo, descricao, image, className }: HeaderProps ) => {
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