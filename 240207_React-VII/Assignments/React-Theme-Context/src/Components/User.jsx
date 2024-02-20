import React from 'react'

export default function User({isDarkTheme, user}) {
    
    return (
        <div data-testid = "user" >
            <img src={user.img} alt="img" style={{width:"40px"}}/>
            <div>{user.name}</div>
            <div>{user.position}</div>
            <br />
            <input data-testid = "level" style={{
                accentColor: isDarkTheme ? "yellow": "blue"
            }} type = "range" />
            <br />
            <span>Professional Level {user.level}</span>
            <br />
            <span>{user.points} Points</span>
        </div>
    )
}
