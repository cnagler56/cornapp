import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUSDAYield } from './Slices/USDASlice';

const USDA = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUSDAYield()); // Trigger the fetch action
    }, [dispatch]);

    const [selectedDate, setSelectedDate] = useState('');
    const usdaData = useSelector(state => state.usda.data);

    // Filter data based on the selected date
    const filteredData = selectedDate
        ? usdaData.filter(item => item.load_time.startsWith(selectedDate))
        : usdaData;

    return (
        <section style={{ textAlign: 'center', padding: '1rem' }}>
            <h2>USDA Data</h2>

            {/* Dropdown for filtering */}
            <select
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                style={{ marginBottom: '1rem', padding: '0.5rem' }}
            >
                <option value="">All Dates</option>
                {[...new Set(usdaData.map(item => item.load_time.slice(0, 7)))].sort().map(date => (
                    <option key={date} value={date}>
                        {date}
                    </option>
                ))}
            </select>

            {/* Table Container */}
            <div style={{ maxHeight: '400px', overflowY: 'auto', margin: '1rem 0', border: '1px solid #ccc' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                    <thead>
                        <tr style={{ backgroundColor: '#f4f4f4' }}>
                            <th style={{ border: '1px solid #ccc', padding: '0.5rem' }}>State</th>
                            <th style={{ border: '1px solid #ccc', padding: '0.5rem' }}>Yield</th>
                            <th style={{ border: '1px solid #ccc', padding: '0.5rem' }}>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((item, index) => (
                            <tr key={index}>
                                <td style={{ border: '1px solid #ccc', padding: '0.5rem' }}>{item.state_name}</td>
                                <td style={{ border: '1px solid #ccc', padding: '0.5rem' }}>{item.Value}</td>
                                <td style={{ border: '1px solid #ccc', padding: '0.5rem' }}>{item.load_time.slice(0, 7)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default USDA;
