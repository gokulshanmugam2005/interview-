import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [companies, setCompanies] = useState([]);
  const [showTable, setShowTable] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/companies/', {
        name,
        location
      });
      alert(`Company stored:\nName: ${response.data.data.name}\nLocation: ${response.data.data.location}`);
      setName('');
      setLocation('');
    } catch (error) {
      console.error(error);
      alert("Error storing company data");
    }
  };

  const fetchCompanies = async () => {
    try {
      const response = await axios.get('http://localhost:8000/companies/');
      setCompanies(response.data);
      setShowTable(true);
    } catch (error) {
      console.error(error);
      alert("Error fetching companies");
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Add New Company</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Company Name:</label><br/>
          <input type="text" value={name} onChange={e => setName(e.target.value)} required />
        </div>
        <div>
          <label>Location:</label><br/>
          <input type="text" value={location} onChange={e => setLocation(e.target.value)} required />
        </div>
        <button type="submit" style={{ marginTop: '10px' }}>Submit</button>
      </form>

      <hr />

      <button onClick={fetchCompanies}>Show Table</button>

      {showTable && (
        <div style={{ marginTop: '20px' }}>
          <h3>Companies List</h3>
          <table border="1" cellPadding="8">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              {companies.map(company => (
                <tr key={company.id}>
                  <td>{company.id}</td>
                  <td>{company.name}</td>
                  <td>{company.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default App;
