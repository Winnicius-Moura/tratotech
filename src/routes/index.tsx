import HomePage from '../components/HomePage';
import { BrowserRouter ,Route, Routes} from 'react-router-dom';
import Home from '../pages/Home';
import Categoria from '../pages/Categoria';
import Cart from '../pages/Cart';



export default function AppRoutes(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage />}>
                    <Route index element={<Home />} />
                    <Route path='/categoria/:nomeCategoria' element={<Categoria />} />
                    <Route path='/cart' element={<Cart />} />
                </Route>
            </Routes>      
        </BrowserRouter>
    )
}