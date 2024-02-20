import React, { useContext, useState } from 'react'
import data from '../db.json';
import User from './User';
import { ThemeContext } from '../Context/ThemeContextProvider';

export const Dashboard = () => {
    const {currentTheme , setTheme} = useContext(ThemeContext)
    return (
        <div data-testid="dashboard-cont" >
            <select data-testid="select-theme" onChange={(e) => {setTheme(e.target.value === "dark" ? true : false)}}>
                <option value="light">Light Theme</option>
                <option value="dark">Dark Theme</option>
            </select>
            {/* map through the users and render User component */}
            {
                data.map((ele)=>{
                    return <User user={ele} isDarkTheme={currentTheme} key={ele.id}/>
                })
            }
        </div>
    )
}
