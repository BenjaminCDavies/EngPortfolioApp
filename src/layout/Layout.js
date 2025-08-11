import Navbar from '../components/Navbar/Navbar';
import { useAuth } from '../context/AuthContext';

function Layout({ children }) {
  const { user, loading } = useAuth();

  if (loading) return null;

  return (
    <>
      {user && <Navbar />}  {/* only show navbar if logged in */}
      <main style={{ marginTop: user ? '50px' : '0' }}>
        {children}
      </main>
    </>
  );
}

export default Layout;

