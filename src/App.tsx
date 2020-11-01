import React from 'react';
import './app.css'
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "./store/store";
import {actions} from "./store/users-reducer";

function App() {
    const dispatch = useDispatch();
    const users = useSelector((state: RootStateType) => state.users.users);

    const onDragStart = (ev: any, id: number) => {
        console.log('dragstart:', id);
        ev.dataTransfer.setData("dragId", id);
    };

    const onDragOver = (ev: any) => {
        ev.preventDefault();
    }
    const onDrop = (ev: any, status: boolean) => {
        let dragId = Number(ev.dataTransfer.getData("dragId"));
        dispatch(actions.changeUserStatus(status, dragId))
    }

    const userItem = users.filter(user => !user.mentor).map(user =>
        <span
            onDragStart={(e) => onDragStart(e, user.id)}
            draggable={true}
            key={user.id}
        >
                {user.name}
            </span>
    );
    const mentorItem = users.filter(user => user.mentor).map(user =>
        <span
            onDragStart={(e) => onDragStart(e, user.id)}
            draggable={true}
            key={user.id}
        >
            {user.name}
        </span>
    );

    return (
        <div className="dnd-container">
            <div className="users">
                <h3>USERS</h3>
                <div className="inner"></div>
                <div onDragOver={onDragOver}
                     onDrop={(e) => onDrop(e, false)}
                     className="users-item">
                    {userItem}
                </div>

            </div>
            <div draggable={true} className="mentors">
                <h3>MENTORS</h3>
                <div className="inner"></div>
                <div onDragOver={onDragOver}
                     onDrop={(e) => onDrop(e, true)}
                     className="mentors-items">
                    {mentorItem}
                </div>
            </div>
        </div>
    );
}

export default App;
