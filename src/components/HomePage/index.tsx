import Navbar from '../Navbar'
import styles from './HomePage.module.scss';
import { Outlet} from 'react-router-dom'
import { Footer } from '../Footer';


export interface HomePageProps{}

const HomePage:React.FunctionComponent<HomePageProps> = (props) => {
    return(
        <div className={styles.container}>
            <Navbar />
            <div className={styles['container-outlet']}>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default HomePage;