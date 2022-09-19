export default function User(props) {
    let {user} = props
return(
<div>
    {user.id} - {user.name} <br/>
    {user.status} --  {user.species} <br/>
    {user.gender} <br/>
    <img src={user.image}/>

</div>);
}
