import { Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import Analytics from './pages/Analytics';
import Clients from './pages/Clients';
import Invoices from './pages/Invoices';
import Overview from './pages/Overview';

import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Support from './pages/Support';

function App() {
  return (
    <>
      <Routes>
        {/* Auth Routes */}
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />

        {/* Redirect root to login */}
        <Route path="/" element={<Navigate to="/auth/login" />} />

        {/* Protected Dashboard Routes */}
        <Route
          path="/"
          element={<DashboardLayout />}
        >
           <Route index element={<Navigate to="overview" replace />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/invoices" element={<Invoices />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/settings" element={<Settings/>}/>
          <Route path="/support" element={<Support/>}/>


        </Route>
      </Routes>
    </>
  );
}

export default App;
