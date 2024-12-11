import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Cattle = () => {
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Options for dropdowns
  
    const months = [
        'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
        'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC',
    ];
    const years = Array.from({ length: 21 }, (_, i) => `${new Date().getFullYear() - i}`);

    // Function to fetch data based on filters
    const fetchData = async () => {
        if ( !month || !year) {
            alert('Please select Month and Year');
            return;
        }

       
        const apiUrl = `http://localhost:8081/api/cattle?month=${month}&year=${year}`;

        try {
            setLoading(true);
            setError(null);
            const response = await axios.get(apiUrl);

            setData(response.data);
        } catch (err) {
            console.error(err);
            setError('Failed to fetch data');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section style={{ textAlign: 'center', padding: '1rem' }}>
            <h2>Cattle</h2>

            {/* Dropdowns */}
            <div style={{ marginBottom: '1rem' }}>

                <select value={month} onChange={(e) => setMonth(e.target.value)}>
                    <option value="">Select Month</option>
                    {months.map((m, index) => (
                        <option key={index} value={m.toUpperCase()}>
                            {m}
                        </option>
                    ))}
                </select>

                <select value={year} onChange={(e) => setYear(e.target.value)}>
                    <option value="">Select Year</option>
                    {years.map((y) => (
                        <option key={y} value={y}>
                            {y}
                        </option>
                    ))}
                </select>
            </div>

            {/* Fetch Button */}
            <button onClick={fetchData} disabled={loading}>
                {loading ? 'Loading...' : 'Fetch Data'}
            </button>

            {/* Error Message */}
            {error && <p style={{ color: 'red' }}>{error}</p>}

            {/* Data Table */}
            {data.length > 0 && (
                <table style={{ margin: '1rem auto', borderCollapse: 'collapse', width: '90%' }}>
                    <thead>
                        <tr>
                            <th style={{ border: '1px solid black', padding: '0.5rem' }}>State</th>
                            <th style={{ border: '1px solid black', padding: '0.5rem' }}>Yield</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index}>
                                <td style={{ border: '1px solid black', padding: '0.5rem' }}>
                                    {item.location_desc || 'N/A'}
                                </td>
                                <td style={{ border: '1px solid black', padding: '0.5rem' }}>
                                    {item.Value || 'N/A'} {/* Assuming 'Value' is the yield data */}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </section>
    );
};

export default Cattle;
