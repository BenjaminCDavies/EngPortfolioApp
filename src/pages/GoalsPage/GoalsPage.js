import "./GoalsPage.css";

const GoalsPage = () => {
  const goals = [
    {
      id: 1,
      smartGoal: "Complete a portfolio website within 3 months",
      actionSteps: [
        "Research modern portfolio designs",
        "Implement homepage layout",
        "Add project showcase section",
      ],
      timeline: "Start: Sept 1, 2025 — End: Dec 1, 2025",
      progressNotes: "Homepage layout completed, working on project section",
      keyLearnings: "Improved React component structure and styling skills",
    },
    {
      id: 2,
      smartGoal: "Increase physical activity to 3 workouts per week",
      actionSteps: [
        "Schedule workouts in calendar",
        "Join a fitness class",
        "Track workouts in an app",
      ],
      timeline: "Start: Aug 15, 2025 — End: Nov 15, 2025",
      progressNotes: "Attended first 2 classes, feeling more energetic",
      keyLearnings: "Consistency matters more than intensity early on",
    },
  ];

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-header">
          <h1 className="profile-name">My Goals</h1>
        </div>

        <div className="goals-sections">
          {goals.map((goal) => (
            <div key={goal.id} className="goal-card">
              <div className="goal-section smart-goal">
                <h2 className="section-title">SMART Goal</h2>
                <p className="section-text">{goal.smartGoal}</p>
              </div>
              <div className="goal-section action-steps">
                <h2 className="section-title">Action Steps</h2>
                <ul className="section-list">
                  {goal.actionSteps.map((step, idx) => (
                    <li key={idx}>{step}</li>
                  ))}
                </ul>
              </div>
              <div className="goal-section timeline">
                <h2 className="section-title">Timeline</h2>
                <p className="section-text">{goal.timeline}</p>
              </div>
              <div className="goal-section progress-notes">
                <h2 className="section-title">Progress Notes</h2>
                <p className="section-text">{goal.progressNotes}</p>
              </div>
              <div className="goal-section key-learnings">
                <h2 className="section-title">Key Learnings</h2>
                <p className="section-text">{goal.keyLearnings}</p>
              </div>

              <div className="goal-actions">
                <a href="#" className="edit-link">Edit</a>
                <a href="#" className="delete-link">Delete</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GoalsPage;
