import {useLocation} from "react-router-dom";

const UserDetails = () => {

    let location = useLocation();
    let {state:user} = location;

    return(
        <div>{user.id}- {user.name} - {user.username} <br/>
            {user.email} -- {user.address.city}</div>
    )

}
export {UserDetails}