import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
    const [user, setUser] = useState([]); // user is an array

    async function fetchData() {
        try {
            const { data } = await axios.get("https://jsonplaceholder.typicode.com/users");
            console.log(data); // Log the data to see the structure
            setUser(data);
        } catch (error) { 
            console.error("Error fetching data:", error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            {user.map((u) => (
                <div key={u.id} style={{border: "1px solid #ccc", margin: "10px", padding: "10px"}}>
                    <div>Name: {u.name}</div>
                    <div>Username: {u.username}</div>
                    <div>ID: {u.id}</div>
                </div>
            ))}
        </div>
    );
}

export default Home;