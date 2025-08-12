import "./NetworkingPage.css";

const NetworkingPage = () => {
  const dummyData = [
    {
      name: "Chad Warner",
      company: "TechCorp",
      contact: "chad.warner@techcorp.com",
      notes: "Follow up next week about internship."
    },
    {
      name: "Bob Smith",
      company: "InnovateX",
      contact: "bob.smith@innovatex.com",
      notes: "Send portfolio by Friday."
    },
    {
      name: "Clara Lee",
      company: "DevSolutions",
      contact: "clara.lee@devsolutions.io",
      notes: "Arrange coffee meeting."
    }
  ];

  return (
    <div className="networking-container">
      <div className="networking-card">

        {/* page title */}
        <h1 className="networking-title">Networking Hub</h1>

        {/* cards grid */}
        <div className="networking-cards-grid">
          <div className="networking-card-item large-card pitch-card">
            <h2 className="section-title">Elevator Pitch</h2>
            <p className="section-text">
              Hi, I’m Alex! I’m a software engineering student passionate about building
              innovative web applications that make life easier. I love collaborating with
              others and tackling challenging problems.
            </p>
          </div>

          <div className="networking-card-item small-card icebreakers-card">
            <h2 className="section-title">Ice Breakers & Questions</h2>
            <ul className="section-list">
              <li>What inspired you to join your current company?</li>
              <li>What’s the most exciting project you’ve worked on?</li>
              <li>Any tips for someone entering this industry?</li>
            </ul>
          </div>

          <div className="networking-card-item medium-card companies-card">
            <h2 className="section-title">Companies & Contacts of Interest</h2>
            <ul className="section-list">
              <li>TechCorp – Chad Warner</li>
              <li>InnovateX – Bob Smith</li>
              <li>DevSolutions – Clara Lee</li>
            </ul>
          </div>

          <div className="networking-card-item small-card events-card">
            <h2 className="section-title">Upcoming Events</h2>
            <ul className="section-list">
              <li>Tech Careers Fair – Sept 18</li>
              <li>Women in Tech Meetup – Sept 25</li>
              <li>Startup Pitch Night – Oct 2</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="networking-card">
        {/* table */}
        <h2 className="networking-subtitle">Networking Contacts</h2>
        <table className="networking-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Company</th>
              <th>Contact Information</th>
              <th>Progress Notes</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {dummyData.map((person, index) => (
              <tr key={index}>
                <td>{person.name}</td>
                <td>{person.company}</td>
                <td>{person.contact}</td>
                <td>{person.notes}</td>
                <td>
                  <a className="edit-link">
                    Edit
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  );
};

export default NetworkingPage;
