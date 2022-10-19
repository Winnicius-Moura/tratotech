import styles from './Navbar.module.scss';
import classNames from 'classnames';
import { ShoppingCart } from 'phosphor-react';
import Busca from '../Busca'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Logo from '../Logo';


const iconProps = {
    size: 24,
    fill:'white',
    color:'white',
}

function Navbar(){

    const location = useLocation();
    const navigate = useNavigate();

    return (
        <nav className={styles.nav}>
            <Logo className={styles.logo} onClick={() => {navigate('/')}}/>
            <div className={styles.link}>
                <div>
                    <Link to="/" className={classNames(styles.link,{
                        [styles.selected]: location.pathname === '/'
                    })}>
                        Página Inicial
                    </Link>
                </div>
            </div>

            <div className={styles.busca}>
                <Busca />
            </div>
            
            <div className={styles.icons}>
                <Link to="/cart">
                    {location.pathname === '/cart'
                        ? <ShoppingCart weight='fill' {...iconProps}/> : <ShoppingCart {...iconProps}/>
                    }
                    
                </Link>
            </div>

        </nav>
    )
}

export default Navbar;