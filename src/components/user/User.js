import {Link} from "react-router-dom";

const User = (props) => {
    let {user} = props;
    return (
        <div>
            <h2> {user.id}--{user.name}</h2>
            <div><Link to={'/users/' + user.id} state={{...user}}>details</Link></div>
            <div> <Link to={'/users/v2/'+ user.id}>userDetailsV2</Link></div>
        </div>);
}
export {User};