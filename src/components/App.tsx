import { Routes, Route } from 'react-router-dom';

import LoginPage from '../pages/login/LoginPage';
import { ROUTES } from '../utils/routes';

const Hello = () => <h1>한글폰트 english</h1>;

function App() {
    return (
        <Routes>
            <Route path={ROUTES.HOME} element={<Hello />} />
            <Route path={ROUTES.LOGIN} element={<LoginPage />} />
        </Routes>
    );
}

export default App;
