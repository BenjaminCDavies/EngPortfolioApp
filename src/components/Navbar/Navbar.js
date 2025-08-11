import './Navbar.css'

function Navbar() {
    return (
      <nav className="navbar">
        <a href="/profile">Profile</a>
        <a href="/dashboard">Dashboard</a>
        <a href="/goals">Goals</a>
        <a href="/networking">Networking</a>
        <a href="/competencies">Competencies</a>
        <a href="/cdl">CDL</a>
      </nav>
    );
}

export default Navbar
