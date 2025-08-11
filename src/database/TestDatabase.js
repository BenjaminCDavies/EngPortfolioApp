import { useEffect, useState } from 'react';
import { supabase } from './supabaseClient';

function TestDatabase() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase
      .from('test')
      .select('*');
      if (error) {
        console.error('Error fetching data:', error);
      } else {
        setData(data);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      {data.map((item) => (
        <div key={item.user_name} style={{ marginBottom: '20px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
          <h3>{item.first_name} {item.last_name} ({item.user_name})</h3>
          <p><strong>Course:</strong> {item.course}</p>
          <p><strong>Elevator Pitch:</strong> {item.elevator_pitch}</p>
          <p><strong>Personal Introduction:</strong> {item.personal_introduction}</p>
          <p><strong>Upcoming Actions:</strong> {item.upcoming_actions}</p>
        </div>
      ))}
    </div>
  );
}

export default TestDatabase;
