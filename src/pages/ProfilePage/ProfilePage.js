import { useEffect, useState } from 'react';
import { supabase } from '../../database/supabaseClient';
import "./ProfilePage.css";
import "../../components/Navbar/Navbar.css";
import logo from '../../assets/logo.svg';

function ProfilePage() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true); /* sometimes the data takes a while to
                                                     come so need to not render elements
                                                     that contain data until it arrives */

    useEffect(() => {
      async function fetchData() {
        // get the logged-in user
        const { data: { user }, error: userError } = await supabase.auth.getUser();

        if (userError) {
          console.error("Error fetching user:", userError);
          setLoading(false);
          return;
        }

        if (!user) {
          console.error("No logged-in user");
          setLoading(false);
          return;
        }

        // query test table where user_id matches auth user's id
        const { data: profile, error: profileError } = await supabase
          .from("test")
          .select("*")
          .eq("user_id", user.id) // this is the foreign key
          .single(); // expects one row

        if (profileError) {
          console.error("Error fetching profile:", profileError);
          setLoading(false);
          return;
        }

        setData(profile);
        setLoading(false);
      }

      fetchData();
    }, []);

    /* display loading until data comes */
    if(loading) {
        return <div>Loading...</div>
    }

  return (
    <div>

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
            <h1 className="profile-name">{data.first_name} {data.last_name}</h1>
            <p className="profile-course">{data.course}</p>
          </div>
        </div>

        {/* content section */}
        <div className="profile-sections">
          
          {/* elevator pitch */}
          <div className="profile-section pitch">
            <h2 className="section-title">Elevator Pitch</h2>
            <p className="section-text">{data.elevator_pitch}</p>
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
            <p className="section-text">{data.personal_introduction}</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default ProfilePage