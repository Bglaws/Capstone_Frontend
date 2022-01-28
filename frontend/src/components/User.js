import React from "react"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"

export default function User(props){
    const user = props.user
    const navigate = useNavigate()
    return(
        <>
            {user.length !==0 && <div className="user">
                <Link to="/user/profile"><button>Profile</button></Link><br></br>
                <Link to="/user/sale"><button>Sale List</button></Link><br></br>
                <Link to="/user/feedback"><button>Feedback List</button></Link><br></br>
            </div>}
            {user.length ===0 && navigate("/")}
        </>
    )
}