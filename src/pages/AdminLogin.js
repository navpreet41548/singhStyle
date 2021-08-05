import React, { StrictMode, useState, useContext } from 'react'

import { UserContext } from '../App'

const AdminLogin = () => {

    const {state, dispatch} = useContext(UserContext)
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [status, setStatus] = useState("")

    const onSubmit = async (e) => {
        e.preventDefault()
        setStatus("Please wait")
        const res = await fetch("https://singhstyleksndfk3409sdfnsdfk23.herokuapp.com/admin/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, password }),
            credentials: 'include',
            mode: "no-cors"
        })
        const data = await res.json()
        if (res.status == 400) {
            setStatus('Check Your password')
        } else if (res.status == 401) {
            setStatus('Check Your Username')
        }
        else {
            dispatch({type: "USER", payload: true})
            setStatus("Logged In")

            // const maxAge = 3 * 24 * 60 *60
            // cookies.set("jwt", data, {sameSite: 'strict', maxAge: maxAge * 1000})
        }
    }

 

    return (
        <div>
            <form method="POST">
                <input type="name" name="name" placeholder="Enter your username"  onChange={(e)=>{setName(e.target.value)}}  />
                <input type="password" name="password" placeholder="Enter your password" onChange={(e)=>{setPassword(e.target.value)}}  />
                <a onClick={onSubmit}>Login</a>
            </form>
                {status}
        </div>
    )
}

export default AdminLogin
