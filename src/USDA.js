import React, { useState } from 'react';
import axios from 'axios';

const USDA = () => {
    const [grain, setGrain] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const grains = ['CORN', 'SOYBEANS', 'WHEAT'];
    const months = [
        'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
        'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC',
    ];
    const years = Array.from({ length: 21 }, (_, i) => `${new Date().getFullYear() - i}`);

    const fetchData = async () => {
        if (!grain || !month || !year) {
            alert('Please select Grain, Month, and Year');
            return;
        }

        const apiUrl = `http://localhost:8081/api/nass-yield-data?grain=${grain}&month=${month}&year=${year}`;
        try {
            setLoading(true);
            setError(null);
            const response = await axios.get(apiUrl);
            setData(response.data);
            console.log(response.data)
        } catch (err) {
            console.error(err);
            setError('Failed to fetch data');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section style={{ textAlign: 'center', padding: '1rem' }}>
            <h2>USDA Data</h2>
            <div style={{ marginBottom: '1rem' }}>
                <select value={grain} onChange={(e) => setGrain(e.target.value)}>
                    <option value="">Select Grain</option>
                    {grains.map((g) => (
                        <option key={g} value={g}>
                            {g}
                        </option>
                    ))}
                </select>

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
                            {/* <th style={{ border: '1px solid black', padding: '0.5rem' }}>Acres</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index}>
                                <td style={{ border: '1px solid black', padding: '0.5rem' }}>
                                    {item.state_name || 'N/A'}
                                </td>
                                <td style={{ border: '1px solid black', padding: '0.5rem' }}>
                                    {item.Value || 'N/A'} 
                                </td>
                                {/* <td style={{ border: '1px solid black', padding: '0.5rem' }}>
                                    {item.acresValue || 'N/A'} {/* Assuming 'Value' is the yield data */}
                                {/* </td> */}
                            
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </section>
    );
};

export default USDA;
