import {useEffect, useState} from "react";


import {userService} from "../../services";
import User from "../User/User";


const Users = () => {

    let [users, setUsers] = useState([]);
    let [user, setUser] = useState(null)

    const lift = (obj) => {
        setUser(obj)
    }

    useEffect(
        () => {

            userService.getAll().then(value => {
                setUsers(value.data)
            })
        }
    )

    return (<div>
        <div>{user ? <div>{user.name}--{user.username}</div> : <div>User are not found</div>}</div>
        <div>
            {users.map((user, index) =>
                <User user={user} key={index} lift={lift}/>)}
        </div>
    </div>);
}
export {
    Users
}


