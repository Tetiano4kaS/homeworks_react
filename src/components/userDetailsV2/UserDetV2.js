const UserDetV2 = (props) => {
    let {user} = props;
    return (
        <div>
            <h2> {user.id}--{user.name}- {user.username} <br/>
                {user.email} -- {user.address.city}</h2>
        </div>);
}
export {UserDetV2};