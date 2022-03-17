import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import LoginPage from '../pages/login/LoginPage';
import { AuthService } from '../services/auth.service';
import IUser from '../utils/interfaces/user.interface';
import { ROUTES } from '../utils/routes';
import PrivateRoute from './utils/PrivateRoute';

const Hello = () => <h1>한글폰트 english</h1>;

function App() {
    const [user, setUser] = useState<IUser | null>(null);

    const authService = new AuthService();

    return (
        <Routes>
            <Route
                path={ROUTES.LOGIN}
                element={
                    <LoginPage
                        authService={authService}
                        user={user}
                        setUser={setUser}
                    />
                }
            />
            <Route
                path={ROUTES.HOME}
                element={<PrivateRoute user={user} component={Hello} />}
            />
        </Routes>
    );
}

export default App;
