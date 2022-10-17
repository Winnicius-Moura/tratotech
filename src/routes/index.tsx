import HomePage from '../components/HomePage';
import { BrowserRouter ,Route, Routes} from 'react-router-dom';
import Home from '../pages/Home';



export default function AppRoutes(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage />}>
                    <Route index element={<Home />} />
                </Route>
            </Routes>      
        </BrowserRouter>
    )
}