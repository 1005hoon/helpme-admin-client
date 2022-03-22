import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/dashboard/Home';

import LoginPage from '../pages/auth/LoginPage';
import { AuthService } from '../services/auth.service';
import IUser from '../utils/interfaces/user.interface';
import { ROUTES } from '../utils/routes';

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
                path='*'
                element={
                    <Home
                        user={user}
                        setUser={setUser}
                        authService={authService}
                    />
                }
            >
                <Route path='test' element={<Hello />} />
            </Route>
        </Routes>
    );
}

export default App;
