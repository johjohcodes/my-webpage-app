import { useState, useEffect } from "react";

function PlayWork() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        async function fetchData() {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            if (!response.ok) {
            throw new Error("Network response was not ok");
            }
            const result = await response.json();
            setData(result);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
        }
        fetchData();
    }, []);
    
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    
    return (
        <div>
        <h1>PlayWork Data</h1>
        <ul>
            {data.map(item => (
            <li key={item.id}>{item.title}</li>
            ))}
        </ul>
        </div>
    );
}

export default PlayWork;