import axios from "axios"
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import OrderCard from "./OrderCard"

export default function Orders(props){
    const [order,setOrder] = useState([])
    const user = props.user
    const navigate = useNavigate()

    async function fetchOrder(){
        const orders = await axios.get("https://ttpsellit.herokuapp.com/orders")
        if(orders){
            setOrder(orders.data.filter( order => order.username === user.username))
        }
    }

    useEffect(()=>{
        fetchOrder()
        console.log(result)
    },[order])

    const result = order.length!==0? 
    order.map( order => <OrderCard key ={order.order_id} order={order} fetchOrder={fetchOrder}/>) :
    <h1>There is currently no order</h1>

    return(
        <>
            {user.length !==0 && <div className="Order">
            <h1>Your Order</h1>
            {result}
            </div>}
            {user.length ===0 && navigate("/")}
        </>
    )
}