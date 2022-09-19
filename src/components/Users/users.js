import {useEffect, useState} from "react";
import User from "../User/user";
import {baseUrl, urls} from "../configs";


const Users = () => {
    let [users, setUsers] = useState([]);


    useEffect(() => {
        fetch(baseUrl + urls.api + urls.character)
            .then(value => value.json())
            .then(value => {
                setUsers(value.results.filter(user => user.id <= 5))
            })

    }, [])


    return (<div>{
        users.map((user, index) => <User user={user} key={index}/>)}
    </div>);

};
export {Users};