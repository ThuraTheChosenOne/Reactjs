import React from "react";
import { Outlet } from "react-router-dom";


const Language=()=>{
    return(
        <div>
            <h1>Language</h1>
            
            <p>As there are many languages in the World, you can choose from a variety of base texts so you cover not only normal letters but also accents, special characters and other alphabets.
            As there are many languages in the World, you can choose from a variety of base texts so you cover not only normal letters but also accents, special characters and other alphabets.
           
            </p>

            {/* to call nestedt route */}
            <Outlet />

       
        </div>
    )
}
export default Language;