import styles from './Navbar.module.scss';
import logoImg from '../../assets/logo.svg';
import classNames from 'classnames';
import { ShoppingCart } from 'phosphor-react';
import Busca from '../Busca'


const iconProps = {
    size: 24,
    fill:'white',
    color:'white',
}

function Navbar(){
    return (
        <nav className={styles.nav}>
            <img src={logoImg} alt="" className={styles.logo} />
            <div className={styles.link}>
                <div>
                    <a href="/" className={classNames(styles.link,{
                        [styles.selected]: window.location.pathname === '/'
                    })}>
                        Página Inicial
                    </a>
                </div>
            </div>

            <div className={styles.busca}>
                <Busca />
            </div>
            
            <div className={styles.icons}>
                <a href="/cart">
                    {window.location.pathname === '/cart'
                        ? <ShoppingCart weight='fill' {...iconProps}/> 
                        : <ShoppingCart {...iconProps}/>
                    }
                    
                </a>
            </div>

        </nav>
    )
}

export default Navbar;