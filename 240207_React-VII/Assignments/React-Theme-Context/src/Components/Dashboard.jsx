import React, { useState } from 'react'

export const Dashboard = () => {
    const [theme, setTheme] = useState("light")
    return (
        <div data-testid="dashboard-cont" >
            <select data-testid="select-theme" onChange={(e)=>{setTheme(e.target.value)}}>
                <option >Light Theme</option>
                <option >Dark Theme</option>
            </select>
            {/* map through the users and render User component */}
            {
                
            }
        </div>
    )
}
