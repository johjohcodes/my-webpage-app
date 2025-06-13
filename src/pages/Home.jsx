import { useEffect, useState } from "react";
import axios from "axios";

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
            <div style={{border: "1px solid black", padding: "10px", margin: "10px", width: "300px"}}>
                {user.length > 0 ? (
                     user.map((u) => (
                        <div key={u.id} style={{borderBottom: "1px solid #ccc", marginBottom: "8px", paddingBottom: "8px"}}>
                            <div>{u.name}</div>
                            <div>{u.username}</div>
                            <div>{u.id}</div>
                        </div>
                    ))
                ) : (
                    <div>Loading...</div>
                )}
            </div>
        </div>
    );
}

export default Home;