import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function User(){
    const {id} = useParams();
    const {User, setUser} = useState({});
    async function fetchUserData(){
     await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
     setUser(data);
    }

    useEffect(()=>{
        fetchUserData();
    },[])

    return(
      <div>
        <Link to = "/">back to home</Link>
        <h1>{User.id}</h1>
        <h1>{User.name}</h1>
        <h1>{User.username}</h1>

      </div>
    )
}

export default User;