import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {userService} from "../../services";
import {User} from "../user/User";
import {UserDetV2} from "./UserDetV2";

const UserDetailsV2 = () => {
    let {id} = useParams();
    let [user, setUser] = useState({});
    useEffect(
        () => {
            (userService.findById(id))
                .then(value => setUser({...value}));
        }, [id]
    )

    return (
        <div>
            {user.map((user, index) =>

                <UserDetV2 user={user} key={index}/>)}
        </div>
    )
}
export {UserDetailsV2}