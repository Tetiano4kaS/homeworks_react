export default function Todo(props) {
    let {user} = props
    return(
        <div>
            {user.id} - {user.title} <br/>
            {user.completed}

        </div>);
}