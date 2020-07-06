import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { usersActions } from './redux/users';

function MyComp() {
    let [userId, setUserId] = useState(0);
    const dispatch = useDispatch();
    const usersData = useSelector(state => state.usersReducer.users);
    const err = useSelector(state => state.usersReducer.err);
    const loading = useSelector(state => state.usersReducer.loading);
    let onSomeButtonClicked = _ => {
        dispatch(usersActions.userFetchRequest(userId));
    }
    const handleChange = (e) => {
        setUserId(e.target.value)
    }
    if (loading) {
        return (
            <div>
                <input type="number" onChange={handleChange} value={userId} />
                <input onClick={onSomeButtonClicked} type="submit" value="Submit" />
            </div>
        )
    }
    if (err) {
        return (
            <div>{err}</div>
        )
    }
    const users = usersData.map((item, index) => {
        return (<div key={index}>
            <div>{item.date}</div>
            <div>{item.userId}</div>
        </div>
        )
    })
    return <div>
        <input type="number" onChange={handleChange} value={userId} />
        <input onClick={onSomeButtonClicked} type="submit" value="Submit" />
        {users}
    </div>
}
export default MyComp

