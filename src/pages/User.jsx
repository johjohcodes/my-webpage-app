import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function User() {
    const { id } = useParams();
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    async function fetchUserData() {
        try {
            const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
            setUser(data);
        } catch (err) {
            setError("Failed to fetch user data.");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchUserData();
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <Link to="/">Back to Home</Link>
            <h1>ID: {user.id}</h1>
            <h1>Name: {user.name}</h1>
            <h1>Username: {user.username}</h1>
            <h2>Email: {user.email}</h2>
            <h2>Phone: {user.phone}</h2>
            <h2>Website: {user.website}</h2>
        </div>
    );
}

export default User;
// filepath: c:\Users\USER\Desktop\my-webpage-app\src\pages\User.jsx