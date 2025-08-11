import './DashboardPage.css';
import {
  LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip,
  BarChart, Bar, Legend
} from 'recharts';

function DashboardPage() {

  // random data for graphs
  const progressData = [
    { month: 'Jan', value: 30 },
    { month: 'Feb', value: 50 },
    { month: 'Mar', value: 40 },
    { month: 'Apr', value: 80 },
    { month: 'May', value: 65 },
  ];

  const goalsData = [
    { name: 'Networking', completed: 4, pending: 2 },
    { name: 'Competencies', completed: 6, pending: 1 },
    { name: 'Projects', completed: 3, pending: 4 },
  ];

  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        <h1 className="dashboard-title">Dashboard</h1>
        <p className="dashboard-subtitle">Your recent activity and progress overview</p>

        {/* statistics cards */}
        <div className="dashboard-stats">
          <div className="stat-card">
            <h2>12</h2>
            <p>Goals Completed</p>
          </div>
          <div className="stat-card">
            <h2>5</h2>
            <p>Pending Actions</p>
          </div>
          <div className="stat-card">
            <h2>78%</h2>
            <p>Overall Progress</p>
          </div>
        </div>

        {/* graphs */}
        <div className="dashboard-graphs">
          <div className="graph-card">
            <h3>Progress Over Time</h3>
            <LineChart width={400} height={250} data={progressData}>
              <Line type="monotone" dataKey="value" stroke="#8884d8" />
              <CartesianGrid stroke="#ccc" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
            </LineChart>
          </div>

          <div className="graph-card">
            <h3>Goals Overview</h3>
            <BarChart width={400} height={250} data={goalsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="completed" fill="#82ca9d" />
              <Bar dataKey="pending" fill="#8884d8" />
            </BarChart>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage
