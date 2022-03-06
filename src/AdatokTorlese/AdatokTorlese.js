import React from 'react';
import "../App.css";
import {AdatokTorleseAdatok} from "./AdatokTorleseAdatok";

function AdatokTorlese(props) {
    return (
        <div className='Sidebar'>
            <ul className='SidebarList'>
            {AdatokTorleseAdatok.map((val, key)=>{
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

export default AdatokTorlese;