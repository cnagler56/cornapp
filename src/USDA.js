
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUSDAYield } from './Slices/USDASlice';

const USDA = () => {
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector(state => state.usda);

    useEffect(() => {
        dispatch(fetchUSDAYield());
    }, [dispatch]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <section style={{ textAlign: 'center' }}>
            <h2>USDA Data</h2>
            <ul>
                {data.map((item, index) => (
                    <li key={index}>
                        <div>
                            State: {item.state_name} | Date: {item.load_time.substring(0, 7)} | Yield: {item.Value}
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default USDA;
