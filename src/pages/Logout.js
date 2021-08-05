import React, {useEffect, useContext} from 'react'
import { useHistory } from 'react-router'
import { UserContext } from '../App'
const Logout = () => {
    
    const {state, dispatch} = useContext(UserContext)
    // promises
    const history = useHistory()
    useEffect(() => {
        fetch("https://singhstyleksndfk3409sdfnsdfk23.herokuapp.com/upload/logout", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type" : "application/json"
            },
            credentials: "include"
        }).then((res) => {
            if (res.status == 200) {
                dispatch({type: "USER", payload: false})
                history.push('/admin', { replace: true })
            }
            if (res.status !== 200) {
                const error = new Error(res.error)
                throw error
            }
        }).catch((err) => {
            console.log(err);
        })
    }, [])

    return (
        <div>
            <h1>Logout ka page</h1>
        </div>
    )
}

export default Logout
