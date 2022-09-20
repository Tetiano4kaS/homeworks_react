import {userService} from "../../services";
import User from "../User/User";
import {useEffect, useState} from "react";

export default function Users() {

    const [users, setUsers] = useState([]);
    useEffect(() => {
            userService.getAll().then(value =>

                setUsers(value.data.filter(value => value.launch_year !== '2020')))
        }, []
    )
    return (
        <div>

            {users.map((user, index) => <User user={user} key={index}/>)}
        </div>);
}