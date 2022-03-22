import { Routes, Route } from 'react-router-dom';

import AlertNotifiaction from './alert';
import Home from '../pages/dashboard/Home';
import LoginPage from '../pages/auth/LoginPage';

import { ROUTES } from '../utils/routes';

const Hello = () => <h1>한글폰트 english</h1>;

function App() {
    return (
        <>
            <Routes>
                <Route path={ROUTES.LOGIN} element={<LoginPage />} />

                <Route path='/' element={<Home />}>
                    <Route path='test' element={<Hello />} />
                    <Route path={ROUTES.QUOTATIONS} element={<Hello />} />
                    <Route
                        path={ROUTES.QUOTATIONS_MANAGE}
                        element={<Hello />}
                    />
                </Route>
            </Routes>
            <AlertNotifiaction />
        </>
    );
}

export default App;
