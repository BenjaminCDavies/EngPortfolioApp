import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../../database/supabaseClient';
import './Navbar.css'

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/login');
  }

  return (
    <nav className="navbar">
      <Link to="/profile">Profile</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/goals">Goals</Link>
      <Link to="/networking">Networking</Link>
      <Link to="/competencies">Competencies</Link>
      <Link to="/cdl">CDL</Link>

      {/* logout button */}
      <button onClick={handleLogout} className="logout-button">
        Logout
      </button>
    </nav>
  );
}

export default Navbar
