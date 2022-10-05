import {userService} from "../../services";
import {useEffect, useState} from "react";
import {User} from "../user/User";



const Users = () => {

    let [users, setUsers] = useState([])
    console.log(users)
    useEffect(
        ()=>{

            userService.getAll().then(value => {setUsers(value.data)})
        }, []
    )

    return(
        <div>
            {users.map((user, index) =>

                <User user={user} key={index}/>)}
        </div>);
}
export {Users};