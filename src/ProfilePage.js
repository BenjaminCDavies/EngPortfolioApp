import { useEffect, useState } from 'react';
import { supabase } from './supabaseClient';
import "./ProfilePage.css";
import "./Navbar.css";
import logo from './logo.svg';

function ProfilePage() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true); /* sometimes the data takes a while to
                                                     come so need to not render elements
                                                     that contain data until it arrives */

    useEffect(() => {
        async function fetchData() {
            const { data, error } = await supabase
            .from('test')
            .select('*')
            .eq('id', '2'); /* grab all data where the id matches */

            if (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
                return;
            }

        setData(data);
        setLoading(false);
        }
        fetchData();
        
    }, []);
    console.log(data);

    /* display loading until data comes */
    if(loading) {
        return <div>Loading...</div>
    }

  return (
    <div>
      {/* navbar */}
      <nav className="navbar">
        <a href="/profile">Profile</a>
        <a href="/dashboard">Dashboard</a>
        <a href="/goals">Goals</a>
        <a href="/networking">Networking</a>
        <a href="/competencies">Competencies</a>
        <a href="/cdl">CDL</a>
      </nav>

      <div className="profile-container">
      <div className="profile-card">
        
        {/* header section */}
        <div className="profile-header">
          <img
            src={logo}
            alt="Profile"
            className="profile-image"
          />
          <div className="profile-info">
            <h1 className="profile-name">{data[0].first_name} {data[0].last_name}</h1>
            <p className="profile-course">{data[0].course}</p>
          </div>
        </div>

        {/* content section */}
        <div className="profile-sections">
          
          {/* elevator pitch */}
          <div className="profile-section pitch">
            <h2 className="section-title">Elevator Pitch</h2>
            <p className="section-text">{data[0].elevator_pitch}</p>
          </div>

          {/* upcoming actions */}
          <div className="profile-section actions">
            <h2 className="section-title">Upcoming Actions</h2>
            <ul className="section-list">
              <li>Bake a cake</li>
              <li>Ride a bike</li>
              <li>Study something important</li>
            </ul>
          </div>

          {/* personal introduction */}
          <div className="profile-section intro">
            <h2 className="section-title">Personal Introduction</h2>
            <p className="section-text">{data[0].personal_introduction}</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default ProfilePage