import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function ProtectedRoute({ children }) { // children will contain <Dashboard /> etc
  
  // logged in/out user, loading checks if we're fetching from the database
  const { user, loading } = useAuth();

  // means we dont have do put this code in every component contained
  // inside ProtectedRoute
  if (loading) {
    return <div>Loading...</div>;
  }

  // go back to login - replace means user cannot click 'back' to see the
  // protected page
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // loading is false, user exists, render children
  return children;
}

export default ProtectedRoute
