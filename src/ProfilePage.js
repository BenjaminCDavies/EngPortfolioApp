import "./ProfilePage.css";
import logo from './logo.svg';

function ProfilePage() {
  return (
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
            <h1 className="profile-name">John Smith</h1>
            <p className="profile-course">Software Engineering</p>
          </div>
        </div>

        {/* content section */}
        <div className="profile-sections">
          
          {/* elevator pitch */}
          <div className="profile-section pitch">
            <h2 className="section-title">Elevator Pitch</h2>
            <p className="section-text">
                I’m a software engineer who doesn’t just write code—I bend 
                reality with it. I’ve single-handedly built systems that 
                could, in theory, run the stock market, pilot a Mars rover, 
                and recommend the perfect pizza topping combination… 
                simultaneously. I think in algorithms the way others think 
                in words, and my debugging skills have been compared to 
                surgical precision performed at the speed of light. I don’t 
                just solve problems—I erase them from existence before they 
                realize they’re problems. My mission? To architect a future 
                so advanced, people will think it’s science fiction.
            </p>
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
            <p className="section-text">
                Hi, I’m John — amateur storm chaser, full-time adventure 
                architect, and occasional collector of completely useless 
                yet fascinating facts. I’ve hiked mountains I couldn’t 
                pronounce, cooked meals that may or may not have broken 
                local health codes, and once convinced a group of strangers 
                to join me in building a blanket fort the size of a small 
                apartment. I measure life in stories, not minutes, and I’m 
                on a lifelong quest to turn even the most ordinary Tuesday 
                into something legendary.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage