import React from 'react';
import "../App.css";
import {SidebarAdatok} from "./SidebarAdatok";

function Sidebar(props) {
    return (
        <div className='Sidebar'>
            <ul className='SidebarList'>
            {SidebarAdatok.map((val, key)=>{
                return(
                    <li key={key}
                    className='row'
                    onClick={()=> {
                        window.location.pathname = val.link;
                    }}
                    >
                        <div>
                            {val.title}
                        </div>
                    </li>
                )
            })}
            </ul>
        </div>
    );
}

export default Sidebar;